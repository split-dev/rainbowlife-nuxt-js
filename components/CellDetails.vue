<template>
  <div :style="{ opacity: cellDataParsed.length ? 1 : 0 }">
    <n-card size="small" class="info-card" :title="cellData.label">
      <span>{{ cellData.age }}</span>
      <div v-for="group in cellDataParsed" :key="group.key">
        <div class="map-container" v-show="geoSearchPeriods[group.key]">
          <div :id="`map-period-${group.key}`"></div>
        </div>
        <div class="map-container" v-show="geoSearchEvents[group.key]">
          <div :id="`map-event-${group.key}`"></div>
        </div>
        <n-descriptions :column="1" :bordered="true" :title="group.label">
          <n-descriptions-item
            v-for="data in group.data"
            :key="data.key"
            :label="data.label"
          >
            <i v-html="data.info"></i>
          </n-descriptions-item>
        </n-descriptions>
      </div>
    </n-card>
  </div>
</template>

<script>
import tt from "@tomtom-international/web-sdk-maps/dist/maps.min.js";
import tts from "@tomtom-international/web-sdk-services/dist/services.min.js";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

import { NCard, NDescriptions, NDescriptionsItem } from "naive-ui";
const TEXT_LABEL = "text";
const MEDIA_LABEL = "media";
const ADDRESS_LABEL = "address";
const PLACE_LABEL = "place-of-living";
const EDUCATION_LABEL = "education";
const IMG_LABEL = "image";
const VID_LABEL = "video";
const EXCLUDE_LABELS = ["base-color"];
const GEO_API_KEY = "wpKKzW18jkoXZ6HIwZSBvFetE4QAyYBj";
const GEO_STYLE =
  "https://api.tomtom.com/style/1/style/21.1.0-*?map=basic_night&poi=poi_main";

export default {
  props: {
    cellData: {
      type: Object,
    },
  },
  data() {
    return {
      geoSearchEvents: [],
      geoSearchPeriods: [],
    };
  },
  computed: {
    cellDataParsed() {
      const data = [];

      this.cellData?.data?.forEach((group, index) => {
        const cellInfo = {};

        cellInfo.key = index;
        cellInfo.label = group.label;
        cellInfo.data = [];

        if (typeof group.data === "object") {
          Object.keys(group.data).forEach((groupKey, i) => {
            if (
              !group.data[groupKey] ||
              group.data[groupKey] === "" ||
              EXCLUDE_LABELS.includes(groupKey)
            )
              return false;

            const cellInfoData = {
              key: i,
              label: groupKey === TEXT_LABEL ? "Info" : groupKey,
              info: [],
            };

            if (typeof group.data[groupKey] === "object") {
              cellInfoData.info = Object.keys(group.data[groupKey]).reduce(
                (prev, curr) => {
                  if (typeof group.data[groupKey][curr] === "string") {
                    return (
                      prev +
                      `<strong>${curr}:</strong> ${group.data[groupKey][curr]}\n`
                    );
                  } else {
                    return prev;
                  }
                },
                ""
              );
              if (groupKey === MEDIA_LABEL) {
                cellInfoData.info = Object.values(group.data[groupKey]).reduce(
                  (prev, curr) => {
                    return (
                      prev +
                      curr.values
                        .map((src) => {
                          if (curr.type === IMG_LABEL) {
                            return `<img src="${src}" alt="${src}"/>`;
                          } else if (curr.type === VID_LABEL) {
                            return `<video autoplay muted loop playsinline>
                                      <source src="${src}" type="video/mp4">
                                    </video>`;
                          }
                        })
                        .join("")
                    );
                  },
                  ""
                );
              }
              if (groupKey === ADDRESS_LABEL) {
                if ([EDUCATION_LABEL, PLACE_LABEL].includes(group.label)) {
                  this.geoSearchPeriods[index] = Object.values(
                    group.data[groupKey]
                  ).join(" ");
                } else {
                  this.geoSearchEvents[index] = Object.values(
                    group.data[groupKey]
                  ).join(" ");
                }
              }
            } else {
              cellInfoData.info = group.data[groupKey];
            }

            cellInfo.data.push(cellInfoData);
          });
        } else {
          cellInfo.data = group.data;
        }

        data.push(cellInfo);
      });

      return data;
    },
  },
  watch: {
    geoSearchEvents(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          newValue.forEach((val, i) => {
            const mapEvent = tt.map({
              key: GEO_API_KEY,
              container: `map-event-${i}`,
              style: GEO_STYLE,
              dragPan: true,
            });
            tts.services.geocode({
                key: GEO_API_KEY,
                query: val,
                limit: 1,
              })
              .then((res) => {
                mapEvent
                  .jumpTo({
                    center: res.results[0].position,
                    zoom: 12,
                  })
                  .resize();
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      }
    },
    geoSearchPeriods(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          newValue.forEach((val, i) => {
            const mapEvent = tt.map({
              key: GEO_API_KEY,
              container: `map-period-${i}`,
              style: GEO_STYLE,
              dragPan: true,
            });
            tts.services.geocode({
                key: GEO_API_KEY,
                query: val,
                limit: 1,
              })
              .then((res) => {
                mapEvent
                  .jumpTo({
                    center: res.results[0].position,
                    zoom: 12,
                  })
                  .resize();
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      }
    },
  },
  components: {
    NCard,
    NDescriptions,
    NDescriptionsItem,
  },
  mounted() {},
  beforeUpdate() {
    this.geoSearchPeriods = [];
    this.geoSearchEvents = [];
  },
};
</script>

<style scoped lang="scss">
.n-descriptions {
  padding-bottom: 20px;
  ::v-deep .n-descriptions-table-wrapper .n-descriptions-table {
    table-layout: fixed !important;
  }
}

.n-card ::v-deep .n-card__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  img,
  video {
    display: block;
    margin-bottom: 15px;
    object-fit: contain;
    width: 261px;
    height: auto;
    min-height: 100px;
    border-radius: 4px;
    border: 1px solid rgba(45, 45, 48, 1);
  }
  @media (max-width: 1024px) {
    width: 230px;
    img,
    video {
      width: 165px;
    }
  }
}
.map-container {
  width: 276px;
  height: 144px;
  max-width: 276px;
  max-height: 144px;
  position: relative;
  margin-bottom: 15px;
  ::v-deep .mapboxgl-map {
    height: 100%;
  }
  @media (max-width: 1024px) {
    width: 196px;
    max-width: 196px;
  }
}

.info-card * {
  text-transform: capitalize;
}
.map ::v-deep {
  .tomtomAttribution {
    display: none;
  }
}
</style>
