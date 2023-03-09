<template>
  <div
    v-for="tip in hoveredCellDataTrim"
    :key="tip.key"
    :style="`top:${hoveredCellData.y + 30 * tip.key}px; left:${
      hoveredCellData.x + 50
    }px; background-color: ${tip.color}; color: ${tip.contrast}`"
    :class="`tooltip ${hoveredCellDataTrim.length > 1 ? 'group' : ''}`"
  >
    {{ tip.data }}
  </div>
</template>

<script>
export default {
  props: {
    hoveredCellData: {
      type: Object,
    },
  },
  computed: {
    hoveredCellDataTrim() {
      return this.hoveredCellData.text
        ?.filter((item) => item.data)
        .map((item, i) => {
          item.key = i + 1;
          return item;
        });
    },
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tooltip",
};
</script>

<style scoped lang="scss">
@keyframes showHint {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(40px);
  }
}

.tooltip {
  white-space: nowrap;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  padding: 4px;
  margin-left: 15px;
  transition: top 50ms linear, left 50ms linear;
  opacity: 1;
  transform: translateY(40px);
  animation-delay: 0ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-duration: 100ms;
  pointer-events: none;
  will-change: top, left;
  & + .tooltip {
    animation-delay: 50ms;
    transition: top 80ms linear, left 80ms linear;
    & + .tooltip {
      animation-delay: 100ms;
      transition: top 110ms linear, left 110ms linear;
      & + .tooltip {
        animation-delay: 150ms;
        transition: top 140ms linear, left 140ms linear;
      }
    }
  }
  &.group {
    opacity: 0;
    transform: translateY(20px);
    animation-name: showHint;
  }
}
</style>
