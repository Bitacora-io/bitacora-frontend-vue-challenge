<template>
  <panel-layout>
    <breadcrumb :title="$t('worklogs.title')" :links="breadcrumbLinks">
      <!-- <export-actions></export-actions> -->
    </breadcrumb>

    <!-- <activity-table :columns="" extension-type="Worklogs"></activity-table> -->
  </panel-layout>
</template>

<script>
import PanelLayout from "@/layouts/Panel.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "Activity",
  components: {
    PanelLayout,
    Breadcrumb,
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
      columns: [],
    };
  },
};
</script>
