import { DateTime } from "luxon";

const Utils = {
  methods: {
    getMonthYear: function (i, j) {
      const firstWeek = i === 0;

      return `${DateTime.fromFormat(
        `${firstWeek ? "Sun" : "Mon"} ${i + 1} ${this.yearsArray[j]}`,
        "ccc W kkkk"
      ).toFormat("LLLL yyyy")}`;
    },
  },
};

export default Utils;
