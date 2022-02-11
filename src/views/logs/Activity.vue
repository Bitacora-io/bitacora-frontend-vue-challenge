<template>
  <panel-layout>
    <breadcrumb :title="$t('worklogs.title')" :links="breadcrumbLinks">
      <!-- <export-actions></export-actions> -->
    </breadcrumb>

    <div class="o-main-content">
      <div class="tw-mb-4">
        <div class="c-filters-section">
          <div class="c-filters-section__item">
            <label class="o-label tw-mr-1">
              {{ $t("advancedSearch.project") }}
            </label>
            <projects-dropdown />
          </div>
          <div class="c-filters-section__item">
            <label class="o-label tw-mr-1">
              {{ $t("advancedSearch.dates") }}
            </label>
            <date-range-picker />
          </div>
          <div class="c-filters-section__item">
            <el-button type="primary" @click="dialogFormVisible = true">
              {{ $t("advancedSearch.title") }}
              <el-icon class="tw-ml-1"><search /> </el-icon>
            </el-button>
          </div>
        </div>
      </div>
      <activity-table
        :columns="columns"
        extension-type="Worklogs"
      ></activity-table>
    </div>
  </panel-layout>
</template>

<script>
import PanelLayout from "@/layouts/Panel.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import ProjectsDropdown from "@/components/ProjectsDropdown.vue";
import DateRangePicker from "@/components/DateRangePicker.vue";
import ActivityTable from "@/components/ActivityTable.vue";

export default {
  name: "Activity",
  components: {
    PanelLayout,
    Breadcrumb,
    ProjectsDropdown,
    DateRangePicker,
    ActivityTable,
  },
  data() {
    return {
      breadcrumbLinks: [
        {
          name: this.$i18n.t("general.nav.panel"),
          routeName: "dashboard",
        },
        {
          name: this.$i18n.t("general.nav.logs.menu"),
          routeName: "",
        },
        {
          name: this.$i18n.t("general.nav.logs.activity"),
          routeName: "logs.activity",
        },
      ],
      columns: [
        { label: "Date", width: 120, sortable: true, name: "date" },
        { label: "Progress", width: 120, sortable: true, name: "progress" },
        { label: "Progress", width: 120, sortable: true, name: "progress" },
        { label: "Quantity", width: 100, sortable: true, name: "quantity" },
        { label: "Title", name: "theme", sortable: true },
        { label: "Project", name: "projectName", sortable: true },
        {
          label: "Sub-Loc",
          width: 120,
          name: "subLocationName",
          sortable: true,
        },
        { label: "Cost", width: 120, name: "cost", sortable: true },
        { label: "Provider", width: 120, name: "provider", sortable: true },
        { label: "Assignee", width: 120, name: "assigneeName", sortable: true },
        { label: "Creator", width: 120, name: "creatorName", sortable: true },
      ],
    };
  },
};
</script>
