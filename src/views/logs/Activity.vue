<template>
  <panel-layout>
    <breadcrumb :title="$t('worklogs.title')" :links="breadcrumbLinks">
      <!-- <export-actions></export-actions> -->
    </breadcrumb>

    <!-- <activity-table :columns="" extension-type="Worklogs"></activity-table> -->
    <section class="tw-p-4 tw-bg-gray-100">
      <div class="tw-bg-white">
        <el-table :data="records" style="width: 100%" stripe>
          <el-table-column type="expand">
            <template #default="props">
              <div class="tw-max-w-sm">
                <dl class="tw-px-4">
                  <div class="tw-py-1 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4">
                    <dt class="tw-text-sm tw-font-bold tw-text-gray-500">
                      Comments:
                    </dt>
                    <dd
                      class="
                        tw-mt-1 tw-text-sm tw-text-gray-900
                        sm:tw-mt-0 sm:tw-col-span-2
                      "
                    >
                      {{ props.row.comment }}
                    </dd>
                  </div>
                  <p class="tw-mb-0">
                    Progress comments: {{ props.row.progressEntryComments }}
                  </p>
                  <p class="tw-mb-0">Expenses: {{ props.row.cost }}</p>
                  <p class="tw-mb-0">Income: {{ props.row.value }}</p>
                  <p class="tw-mb-0">Status: {{ props.row.status }}</p>
                  <p class="tw-mb-0">Start date: {{ props.row.startDate }}</p>
                  <p class="tw-mb-0">End date: {{ props.row.endDate }}</p>
                  <p class="tw-mb-0">
                    Creation Date: {{ props.row.createdAt }}
                  </p>
                </dl>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Date" prop="date" />
          <el-table-column label="Progress" prop="progress" />
          <el-table-column label="Progress" prop="progress" />
          <el-table-column label="Quantity" prop="quantity" />
          <el-table-column label="Title" prop="theme" />
          <el-table-column label="Project" prop="projectName" />
          <el-table-column label="Sub-Loc" prop="subLocationName" />
          <el-table-column label="Cost" prop="cost" />
          <el-table-column label="Provider" prop="provider" />
          <el-table-column label="Assignee" prop="assigneeName" />
          <el-table-column label="Creator" prop="creatorName" />
        </el-table>
        <div class="tw-flex tw-justify-end tw-py-3 tw-px-4">
          <el-pagination
            v-model:currentPage="currentPage"
            :page-size="10"
            :pager-count="8"
            layout="prev, pager, next"
            :total="recordsCount"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </section>
  </panel-layout>
</template>

<script>
import PanelLayout from "@/layouts/Panel.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Activity",
  components: {
    PanelLayout,
    Breadcrumb,
  },
  data() {
    return {
      currentPage: 1,
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
  computed: {
    ...mapState("worklogs", {
      records: "worklogs",
      recordsCount: "worklogsCount",
      recordsLoading: "loading",
    }),
  },
  mounted() {
    this.getWorklogs();
  },
  methods: {
    ...mapActions("worklogs", { getWorklogs: "all" }),
    handleCurrentChange(page_num) {
      this.getWorklogs({ page_num });
    },
  },
};
</script>
