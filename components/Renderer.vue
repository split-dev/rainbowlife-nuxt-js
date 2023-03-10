<template>
  <n-card class="renderContainer">
    <span class="xAxis"
      ><span>Week of the year</span
      ><n-icon :component="ArrowForwardRound" size="18"></n-icon
    ></span>
    <span class="yAxis"
      ><span>Age</span
      ><n-icon :component="ArrowDownwardRound" size="18"></n-icon
    ></span>
    <div
      @mouseleave.self="$emit('cellLeave', null)"
      ref="renderer"
      class="renderer"
    >
      <svg
        @mouseout.self="$emit('cellLeave', null)"
        ref="svg"
        :width="width"
        :height="height"
        id="dataViz"
        :viewBox="`0 0 ${width} ${height}`"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          :width="boundsWidth"
          :height="boundsHeight"
          fill="white"
          @click="cellClick"
          v-on="!touchDevice ? { mousemove: cellHover } : {}"
        >
          <rect
            class="outer-rect"
            v-for="cell in vizualData"
            :key="cell.i"
            :data-key="cell.i"
            :x="cell.x + margin.left"
            :y="cell.y + margin.top"
            :width="cell.width"
            :height="cell.height"
            :rx="1"
            opacity="1"
            stroke-width="0"
            :fill="cell.fill || `rgba(255, 255, 255, 0.02)`"
            stroke="0"
          />
          <rect
            class="inner-rect"
            v-for="cell in vizualData"
            :key="cell.i"
            :data-key="cell.i"
            :x="cell.x + margin.left + 2.6"
            :y="cell.y + margin.top + 2.6"
            :width="cell.width - 6"
            :height="cell.height - 6"
            :rx="cell.isEvent ? 6 : 1"
            :stroke="
              cell.isEvent ? `rgba(0, 0, 0, 0.3)` : `rgba(0, 0, 0, 0.12)`
            "
            :stroke-width="cell.isEvent ? 3 : 1"
            opacity="1"
            :fill="cell.fill || `rgba(255, 255, 255, 0.02)`"
            :class="{
              active: activeCell === cell.i,
            }"
          />
          <text
            class="year-txt"
            v-for="y in yearsArray"
            :key="y"
            :x="7"
            :dy="22"
            :y="(y + 1 - birthdayYear) * 17.2"
            fill="#fff"
            :style="{
              fontSize: '9px',
              lineHeight: '15px',
            }"
            :data-age="yearsAgeArray[y - birthdayYear]"
          >
            {{ yearsAgeArray[y - birthdayYear] }} yrs/{{ y }}
          </text>
          <text
            v-for="w in decimalWeeks"
            :key="w.key"
            :x="w.val * 17.1 + 30"
            :y="20"
            fill="#fff"
            :fontSize="10"
          >
            {{ w.val }}
          </text>
        </g>
      </svg>
    </div>
  </n-card>
</template>

<script>
import * as d3 from "d3";
import Color from "color";

import { ArrowForwardRound, ArrowDownwardRound } from "@vicons/material";
import { NCard, NIcon } from "naive-ui";
import Utils from "../mixins/utils";
import Parsing from "../mixins/parsing";
import * as oldLifeData from "../public/data/data_v1.json"; /** @TODO: remove json files, use Mongo DB only. Maybe put temporary universal data to DB. */

const WEEKS = 52;

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Renderer",
  mixins: [Utils, Parsing],
  components: {
    NIcon,
    NCard,
  },
  props: {
    selectedPeriods: {
      type: Object,
    },
  },
  setup() {
    return {
      ArrowDownwardRound,
      ArrowForwardRound,
    };
  },
  data: () => {
    return {
      margin: { top: 30, right: 0, bottom: 0, left: 70 },
      cellHeight: 17.5,
      cellWidth: 18,
      width: 0,
      height: 0,
      settings: [],
      maxYears: 0,
      birthdayYear: 0,
      weeksArray: new Array(WEEKS).fill(0).map((v, i) => {
        return {
          key: v,
          val: i,
        };
      }),
      yearsArray: [],
      yearsAgeArray: [],
      boundsWidth: 0,
      boundsHeight: 0,
      sampleDataFilledEvents: [],
      sampleDataFilledPeriods: [],
      selectedDataPeriods: [],
      sampleData: [],
      vizualData: [],
      activeCell: null,
      svgClientRect: {},
      touchDevice: "ontouchstart" in window,
    };
  },
  computed: {
    allYGroups() {
      return [...new Set(this.sampleData.map((d) => d.y))];
    },
    allXGroups() {
      return [...new Set(this.sampleData.map((d) => d.x))];
    },
    xScale() {
      return d3
        .scaleBand()
        .range([0, this.boundsWidth])
        .domain(this.allXGroups);
    },
    yScale() {
      return d3
        .scaleBand()
        .range([0, this.boundsHeight])
        .domain(this.allYGroups);
    },
    decimalWeeks() {
      return this.weeksArray.filter((w) => w.val !== 0 && w.val % 10 === 0);
    },
  },
  methods: {
    handleScroll() {
      this.svgClientRect = this.$refs.svg.getBoundingClientRect();
    },
    cellClick(e) {
      if (e.target.classList.contains("inner-rect")) {
        const clickedCell = this.vizualData[e.target.getAttribute("data-key")];

        this.activeCell = parseInt(e.target.getAttribute("data-key"), 10);

        this.$emit("cellClick", {
          data: clickedCell.data,
          age: clickedCell.age,
          label: clickedCell.monthYear,
        });
      }
      if (this.touchDevice) {
        this.cellHover(e);
      }
    },
    cellHover(e) {
      const clickedCell = this.vizualData[e.target.getAttribute("data-key")];
      const cellPos = e.target.getBoundingClientRect();
      let text = clickedCell ? clickedCell.text : [];

      if (e.target.classList.contains("year-txt")) {
        text = [
          {
            key: 1,
            data: `${e.target.getAttribute("data-age")} years old`,
          },
        ];
      }

      requestAnimationFrame(() => {
        this.$emit("cellHover", {
          x: cellPos.x - this.svgClientRect.x,
          y: cellPos.y - this.svgClientRect.y,
          text: text,
        });
      });
    },
    visualizeData() {
      const [min, max] = d3.extent(
        this.sampleData.map((d) => {
          return d.value;
        })
      );

      if (!min || !max) return null;

      this.vizualData = this.sampleData.map((d, i) => {
        return {
          i,
          x: this.xScale(d.x),
          y: this.yScale(d.y),
          age: d.age,
          text: d.text,
          isEvent: !!d.isEvent,
          monthYear: this.getMonthYear(d.x, d.y),
          data: d.data,
          width: 18,
          height: 18,
        };
      });

      this.$nextTick(() => {
        this.svgClientRect = this.$refs.svg.getBoundingClientRect();
      });
    },
  },
  watch: {
    selectedPeriods: {
      handler(newSelectedPeriods) {
        this.selectedDataPeriods = newSelectedPeriods;
        /* clear the old fills */
        this.sampleDataFilledPeriods.forEach((item) => {
          const firstIndex = (item.y1 - this.birthdayYear) * WEEKS + item.x1;
          const lastIndex = (item.y2 - this.birthdayYear) * WEEKS + item.x2;

          for (let i = firstIndex; i <= lastIndex; i++) {
            this.vizualData[i].fill = null;
          }
        });

        /* math enabled fills */
        this.sampleDataFilledPeriods.forEach((item) => {
          const firstIndex = (item.y1 - this.birthdayYear) * WEEKS + item.x1;
          const lastIndex = (item.y2 - this.birthdayYear) * WEEKS + item.x2;

          if (
            this.selectedDataPeriods.some((sdp) => {
              return sdp.key === item.key && !sdp.enabled;
            })
          ) {
            return false;
          }

          for (let i = firstIndex; i <= lastIndex; i++) {
            const col = Color(
              this.vizualData[i].fill || "rgba(255, 255, 255, 0.5)"
            );

            this.vizualData[i].fill = item.color
              ? col.mix(Color(item.color), 0.5).hex()
              : this.vizualData[i].fill;
          }
        });
      },
      deep: true,
    },
  },
  mounted() {
    let uniqueId = window.localStorage.getItem("uniqueDataId");

    uniqueId = uniqueId || Math.random().toString(36).substring(2);
    window.localStorage.setItem("uniqueDataId", uniqueId);

    fetch(`/api/data?id=${uniqueId}`, { method: 'GET' }).then(response => response.json()).then((data) => {
      if (!Object.keys(data).length) {
        this.lifeData = oldLifeData;

        fetch(`/api/data`, { method: 'POST', body: JSON.stringify({
          id: uniqueId,
          data: oldLifeData
        })});
      } else {
        this.lifeData = data.data;
      }

      this.parseAllData(this.lifeData.data);
      this.visualizeData();

      this.$emit("set:selectedPeriods", this.selectedDataPeriods);
      this.$emit(
        "initDetails",
        this.vizualData.find((el) => el.data.length)
      );

      requestAnimationFrame(() => {
        this.$refs.renderer.classList.add("active");
      });
      window.addEventListener("scroll", this.handleScroll);
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="scss">
.renderContainer {
  transition: visibility 0.2s ease;
  padding: 16px 0 0 16px;
  @media (max-width: 1358px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: calc(100% - 250px);
    min-width: 600px;
  }
}
.renderer {
  position: relative;
  opacity: 0;
  overflow: hidden;
  transition: all 1s ease 200ms;

  &:after {
    content: "";
    position: absolute;
    width: 102%;
    height: 102%;
    background: rgb(16, 16, 20);
    top: 0;
    left: 0;
    box-shadow: 0px -200px 30px 300px rgb(16, 16, 20);
    transition: all 4s ease 200ms;
    z-index: 10;
  }
  &.active {
    opacity: 1;
    &:after {
      transform: translateY(200%);
      z-index: -5;
    }
  }
  @media (max-width: 1358px) {
    width: 100%;
  }
  svg {
    width: 100%;
    height: 100%;
  }
}
.inner-rect {
  cursor: pointer;
  &:hover,
  &.active {
    opacity: 1;
    fill: rgba(0, 0, 0, 0.4);
  }
}
.yAxis,
.xAxis {
  position: absolute;
  font-size: 18px;
  line-height: 18px;
  i {
    vertical-align: middle;
  }
}
.xAxis {
  top: 0;
  left: 90px;
}
.yAxis {
  left: 0;
  top: 50px;
  text-orientation: mixed;
  span {
    transform: scale(-1);
    display: block;
    writing-mode: vertical-lr;
  }
}
</style>
