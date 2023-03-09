<template>
  <n-card class="map-legends" v-if="selectedPeriods">
    <n-text type="info">Life periods</n-text>
    <n-grid :y-gap="8" :cols="4" item-responsive>
      <n-gi
        v-for="period in selectedPeriodsSorted"
        :key="period.key"
        span="600:2 1024:1"
      >
        <n-checkbox
          :style="`--n-color-checked: ${period.color}`"
          :value="period.key"
          :label="`${period.val}`"
          :default-checked="true"
          :data-key="period.key"
          @update:checked="handleCheckedChange"
        />
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script>
import { NCard, NText, NCheckbox, NGrid, NGi } from "naive-ui";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Toggles",
  props: {
    selectedPeriods: {
      type: Object,
    },
  },
  components: {
    NCard,
    NText,
    NCheckbox,
    NGrid,
    NGi,
  },
  computed: {
    selectedPeriodsSorted() {
      const selectedPeriodsArray = this.selectedPeriods.concat();

      return selectedPeriodsArray.sort((a, b) => {
        return a.year < b.year ? -1 : 1;
      });
    },
  },
  methods: {
    handleCheckedChange(checked, e) {
      const toggledNumber = e.target
        .closest(".n-checkbox")
        .getAttribute("data-key");

      this.$emit("update:selectedPeriods", { toggledNumber, checked });
    },
  },
};
</script>

<style lang="scss">
.map-legends {
  display: block;
  width: 100%;
  min-width: 100%;
  margin-bottom: 20px;
  .n-text {
    display: block;
    margin-bottom: 15px;
  }
  .n-checkbox__label {
    text-transform: capitalize;
  }
  @media (max-width: 1024px) {
    width: 100%;
    min-width: 850px;
  }
}
</style>
