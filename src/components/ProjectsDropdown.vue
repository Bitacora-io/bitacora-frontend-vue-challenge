<template>
  <el-select
    v-model="value1"
    multiple
    clearable
    :placeholder="$t('advancedSearch.select')"
  >
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    >
    </el-option>
  </el-select>
</template>

<script>
import { mapState, mapActions } from "vuex";

const now = new Date();
const end = now.getTime();

now.setDate(now.getDate() - 7);

const start = now.getTime();

export default {
  name: "ProjectsDropdown",
  computed: {
    ...mapState("project", {
      options: "projects",
    }),
  },
  data() {
    return {
      ...mapActions("project", ["all"]),
      value1: [],
      value2: "",
      startDate: start,
      finishDate: end,
    };
  },
  created() {
    this.all();
  },
};
</script>
