<template>
  <el-date-picker
    v-model="value2"
    type="daterange"
    :range-separator="$t('advancedSearch.rangeSeparator')"
    start-placeholder="Start date"
    end-placeholder="End date"
    :default-value="[startDate, finishDate]"
  >
  </el-date-picker>
</template>

<script>
export default {
  name: "DateRangePicker",
};
</script>
