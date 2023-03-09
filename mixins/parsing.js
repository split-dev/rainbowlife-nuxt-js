import { DateTime, Interval } from "luxon";
import Color from "color";
const NOT_FINISHED_DATE = "now";
const STRING_DATE_FORMAT = "dd.LL.yyyy";
const BIRTHDAY_LABEL = "birthdate";
const PERIODS_LABEL = "timespans";
const EVENTS_LABEL = "events";
const CONFIG_LABEL = "config";
const WEEKS = 52;
const YEARS = 100;

const Parsing = {
  methods: {
    parseTime(str) {
      if (str === NOT_FINISHED_DATE) {
        return DateTime.fromMillis(Date.now());
      }

      return DateTime.fromFormat(str, STRING_DATE_FORMAT);
    },
    getWeekNum(date) {
      if (!date.isLuxonDateTime) {
        date = DateTime.fromSeconds(date);
      }
      return date.toFormat("W");
    },
    getYearNum(date) {
      if (!date.isLuxonDateTime) {
        date = DateTime.fromSeconds(date);
      }
      return date.toFormat("yyyy");
    },
    getPureDate(date) {
      if (!date.isLuxonDateTime) {
        date = DateTime.fromSeconds(date);
      }
      return date.toFormat("dd LLLL yyyy");
    },
    getDataEvents(data) {
      return data.filter((val) => val.type === EVENTS_LABEL);
    },
    getDataSettings(data) {
      const [settingsArray] = data.filter((val) => val.type === CONFIG_LABEL);
      let settings = {};

      settingsArray.data?.forEach((val) => {
        Object.keys(val).forEach((key) => {
          settings[key] = val[key];
        });
      });

      return settings;
    },
    getDataPeriods(data) {
      return data.filter((val) => val.type === PERIODS_LABEL);
    },
    getZeroDate(data) {
      const [eventsData] = this.getDataEvents(data);

      if (!eventsData) return null;

      const [birthDate] = eventsData.data.filter(
        (val) => val.group === BIRTHDAY_LABEL
      );

      if (!birthDate) return null;

      return birthDate.timestamp;
    },
    getAge(i, j) {
      const years = j - (this.birthdayWeek <= i ? 0 : 1);
      const weeks = WEEKS * j + (i - this.birthdayWeek);

      if (years > 0) {
        return `${years} years old`;
      } else if (weeks > 0) {
        return `${weeks} weeks old`;
      } else {
        return null;
      }
    },
    parseEvents(events) {
      events = events[0].data;

      return events.map((ev) => {
        return {
          x: this.getWeekNum(ev.timestamp),
          y: this.getYearNum(ev.timestamp),
          date: this.getPureDate(ev.timestamp),
          text: ev.text,
          color: ev["base-color"],
          data: {
            label: ev.text,
            data: ev,
          },
        };
      });
    },
    parsePeriodGroups(periods) {
      periods = periods[0].data;

      const periodsData = [];

      periods.map((group) => {
        group.data.map((timesh) => {
          periodsData.push({
            x1: +this.getWeekNum(this.parseTime(timesh.from)),
            y1: +this.getYearNum(this.parseTime(timesh.from)),
            x2: +this.getWeekNum(this.parseTime(timesh.to)),
            y2: +this.getYearNum(this.parseTime(timesh.to)),
            interval: Interval.fromDateTimes(
              this.parseTime(timesh.from),
              this.parseTime(timesh.to)
            ),
            text: `${group.group.replace(/-/gm, " ")} - ${timesh.text}`,
            color: group["base-color"],
            key: periodsData.length,
            data: {
              label: group.group,
              data: timesh,
            },
          });
        });
      });

      return periodsData;
    },
    parseAllData(data) {
      this.birthdayYear = +this.getYearNum(this.getZeroDate(data));
      this.birthdayWeek = +this.getWeekNum(this.getZeroDate(data));
      this.settings = this.getDataSettings(data);
      this.maxYears = this.settings["max-years"] + 1;
      this.width = WEEKS * this.cellWidth;
      this.height = (this.maxYears || YEARS) * this.cellHeight;
      this.boundsWidth = this.width - this.margin.right - this.margin.left;
      this.boundsHeight = this.height - this.margin.top - this.margin.bottom;
      this.yearsArray = new Array(this.maxYears || YEARS).fill(0);
      this.yearsAgeArray = new Array(this.maxYears || YEARS)
        .fill(0)
        .map((v, i) => i);
      this.sampleDataFilledEvents = this.parseEvents(this.getDataEvents(data));
      this.sampleDataFilledPeriods = this.parsePeriodGroups(
        this.getDataPeriods(data)
      );
      this.yearsArray = this.yearsArray.map((v, i) => {
        return this.birthdayYear + i;
      });

      this.makeSample();
    },
    makeSample() {
      this.sampleData = [];

      const filledEvents = this.sampleDataFilledEvents.reduce((prev, curr) => {
        prev[`${curr.x}.${curr.y}`] = curr;

        return prev;
      }, {});

      for (let j = 0; j < (this.maxYears || YEARS); j++) {
        for (let i = 0; i < WEEKS; i++) {
          const filledCellIndex = filledEvents[`${i}.${this.yearsArray[j]}`];
          const age = this.getAge(i, j);

          this.sampleData.push({
            x: i,
            y: j,
            age: age,
            isEvent: filledCellIndex ? true : false,
            text: filledCellIndex
              ? [
                  {
                    key: 1,
                    data: age,
                  },
                  {
                    key: 2,
                    data: `${filledCellIndex.date} - ${filledCellIndex.text}`,
                    color: filledCellIndex.color,
                    contrast: Color(filledCellIndex.color).isDark()
                      ? "#fff"
                      : "#000",
                  },
                ]
              : [
                  {
                    key: 1,
                    data: age,
                  },
                  {
                    key: 2,
                    data: this.getMonthYear(i, j),
                  },
                ],
            value: 1,
            data: filledCellIndex ? [filledCellIndex.data] : [],
            color: filledCellIndex ? filledCellIndex.color : null,
          });
        }
      }

      this.sampleDataFilledPeriods.forEach((item) => {
        const firstIndex = (item.y1 - this.birthdayYear) * WEEKS + item.x1;
        const lastIndex = (item.y2 - this.birthdayYear) * WEEKS + item.x2;

        this.selectedDataPeriods.push({
          enabled: true,
          year: item.y1,
          key: item.key,
          val: item.text,
          color: item.color,
        });

        for (let i = firstIndex; i <= lastIndex; i++) {
          this.sampleData[i].text.push({
            key: this.sampleData[i].text.length + 1,
            data: item.text,
            color: item.color || this.sampleData[i].color,
            contrast: Color(item.color || this.sampleData[i].color).isDark()
              ? "#fff"
              : "#000",
          });
          this.sampleData[i].data = this.sampleData[i].data || [];
          this.sampleData[i].data.push(item.data);
        }
      });
    },
  },
};

export default Parsing;
