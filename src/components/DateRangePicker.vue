<template>
  <el-date-picker
    v-model="dates"
    type="daterange"
    :range-separator="$t('advancedSearch.rangeSeparator')"
    start-placeholder="Start date"
    end-placeholder="End date"
    :default-value="[startDate, finishDate]"
    @change="changeDates"
  >
  </el-date-picker>
</template>

<script>
const now = new Date();
const end = now.getTime();

now.setDate(now.getDate() - 7);

const start = now.getTime();

export default {
  name: "DateRangePicker",
  data() {
    return {
      dates: [start, end],
      startDate: start,
      finishDate: end,
    };
  },
  methods: {
    changeDates() {
      const dates = { ...this.dates };

      console.log(dates);
    },
  },
};
</script>
