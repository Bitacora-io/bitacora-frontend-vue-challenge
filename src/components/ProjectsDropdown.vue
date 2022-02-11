<template>
  <el-select
    v-model="projects"
    multiple
    clearable
    collapse-tags
    :placeholder="$t('advancedSearch.select')"
    @change="selectedProject"
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
      projects: [],
    };
  },
  methods: {
    selectedProject() {
      const projects = { ...this.projects };

      console.log(projects);
    },
  },
  created() {
    this.all();
  },
};
</script>
