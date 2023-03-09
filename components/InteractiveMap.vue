<script setup>
import Renderer from "../components/Renderer.vue";
import Tooltip from "../components/Tooltip.vue";
import CellDetails from "../components/CellDetails.vue";
import Toggles from "../components/Toggles.vue";
</script>

<template>
  <Toggles
    :selectedPeriods="selectedPeriods"
    @update:selectedPeriods="updatePeriods"
  />

  <client-only>
    <div class="interactive-map">
      <Renderer
        ref="renderer"
        class="cells-map"
        :selectedPeriods="selectedPeriods"
        @set:selectedPeriods="setPeriods"
        @initDetails="setClickedCell"
        @cellClick="setClickedCell"
        @cellHover="setHoveredCell"
        @cellLeave="setHoveredCell"
      />
      <CellDetails :cellData="clickedCell" class="details-view" />
      <Tooltip :hoveredCellData="hoveredCell" v-if="hoveredCell" />
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      selectedPeriods: [],
      hoveredCell: {},
      clickedCell: {},
    };
  },
  methods: {
    updatePeriods({ toggledNumber, checked }) {
      this.selectedPeriods[toggledNumber].enabled = checked;
    },
    setPeriods(data) {
      this.selectedPeriods = data;
    },
    setHoveredCell(data) {
      this.hoveredCell = data;
    },
    setClickedCell(cell) {
      this.clickedCell = cell;
    },
  },
};
</script>

<style lang="scss">
.interactive-map {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  .details-view {
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
    width: 350px;
    min-width: 350px;
    max-width: 350px;
    padding: 0 0 0 20px;
    .n-card-header__main {
      font-size: 24px;
    }
    @media (max-width: 1024px) {
      width: 250px;
      min-width: 250px;
      max-width: 250px;
      .n-card-header__main {
        font-size: 16px;
      }
    }
  }
}
</style>
