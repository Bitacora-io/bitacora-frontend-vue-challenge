<template>
  <el-collapse v-model="$options.activeNames" class="c-quick-links">
    <el-collapse-item :title="$t('quickLinks.title')" name="1">
      <div class="tw-flex tw-flex-wrap">
        <div class="tw-w-80">
          <b>{{ $t("quickLinks.regards.hello") }} </b><br />
          <p>{{ $t("quickLinks.regards.instruction") }}</p>
        </div>

        <ul
          v-for="section in $options.sections"
          :key="section.title"
          class="tw-flex-auto"
        >
          <li>
            <span
              :class="section.icon"
              class="c-quick-links--subtitle__icon"
            ></span>
            <span class="c-quick-links--subtitle__text">
              {{ section.title }}
            </span>
          </li>
          <li v-for="sub in section.subsection" :key="sub.title">
            <router-link :to="sub.link" class="c-quick-links--link">
              {{ sub.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  name: "QuickLinks",
  activeNames: null,
  sections: null,
  created() {
    this.$options.activeNames = ["1"];
    this.$options.sections = [
      {
        title: this.$i18n.t("quickLinks.information.title"),
        icon: "el-icon-caret-right",
        subsection: [
          {
            title: this.$i18n.t("quickLinks.information.createLog"),
            link: "/newlog",
          },
          {
            title: this.$i18n.t("quickLinks.information.viewInfo"),
            link: "/logs/activity",
          },
          {
            title: this.$i18n.t("quickLinks.information.historicalBackup"),
            link: this.$i18n.t("quickLinks.information.historicalBackupLink"),
          },
        ],
      },
      {
        title: this.$i18n.t("quickLinks.createReports.title"),
        icon: "el-icon-data-line",
        subsection: [
          {
            title: this.$i18n.t("quickLinks.createReports.exportToExcel"),
            link: "/logs/activity",
          },
          {
            title: this.$i18n.t("quickLinks.createReports.setNameAndLogo"),
            link: "/organizations",
          },
          {
            title: this.$i18n.t("quickLinks.createReports.createPdfWithPhotos"),
            link: this.$i18n.t(
              "quickLinks.createReports.createPdfWithPhotosLink"
            ),
          },
        ],
      },
      {
        title: this.$i18n.t("quickLinks.addUsers.title"),
        icon: "el-icon-user-solid",
        subsection: [
          {
            title: this.$i18n.t("quickLinks.addUsers.addCollaborators"),
            link: "/staff",
          },
          {
            title: this.$i18n.t("quickLinks.addUsers.setRoles"),
            link: this.$i18n.t("quickLinks.addUsers.setRolesLink"),
          },
        ],
      },
      {
        title: this.$i18n.t("quickLinks.superviseAndMonitoring.title"),
        icon: "el-icon-view",
        subsection: [
          {
            title: this.$i18n.t(
              "quickLinks.superviseAndMonitoring.viewActivityMap"
            ),
            link: "/logs/map",
          },
          {
            title: this.$i18n.t(
              "quickLinks.superviseAndMonitoring.advancedSearch"
            ),
            link: "/logs/activity",
          },
          {
            title: this.$i18n.t(
              "quickLinks.superviseAndMonitoring.createNotifications"
            ),
            link: "notifications",
          },
        ],
      },
    ];
  },
};
</script>
