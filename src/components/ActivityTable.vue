<template>
  <el-table
    :data="records"
    class="c-datatable"
    stripe
    @sort-change="sortChange"
    v-loading="recordsLoading"
  >
    <el-table-column type="expand">
      <template #default="{ row: activity }">
        <component :is="summary" :activity="activity" />

        <!-- <dl class="c-summary tw-max-w-xl">
          <div class="c-summary__block">
            <dt class="c-summary__title">Comments:</dt>
            <dd class="c-summary__content">
              {{ row.comment }}
            </dd>
          </div>
          <div class="c-summary__block">
            <dt class="c-summary__title">Progress comments:</dt>
            <dd class="c-summary__content">
              {{ row.progressEntryComments }}
            </dd>
          </div>
          <div class="c-summary__block">
            <dt class="c-summary__title">Expenses:</dt>
            <dd class="c-summary__content">
              {{ row.cost }}
            </dd>
          </div>
          <div class="c-summary__block">
            <dt class="c-summary__title">Income:</dt>
            <dd class="c-summary__content">
              {{ row.value }}
            </dd>
          </div>
          <div class="c-summary__block">
            <dt class="c-summary__title">Status:</dt>
            <dd class="c-summary__content">
              {{ row.status }}
            </dd>
          </div>
          <div class="c-summary__block">
            <dt class="c-summary__title">Start date:</dt>
            <dd class="c-summary__content">
              {{ row.startDate }}
            </dd>
          </div>
          <div class="c-summary__block">
            <dt class="c-summary__title">End date:</dt>
            <dd class="c-summary__content">
              {{ row.endDate }}
            </dd>
          </div>
          <div class="c-summary__block">
            <dt class="c-summary__title">Creation Date:</dt>
            <dd class="c-summary__content">
              {{ row.createdAt }}
            </dd>
          </div>
        </dl> -->
      </template>
    </el-table-column>
    <el-table-column
      :label="label"
      :key="name"
      :sortable="sortable && 'custom'"
      :prop="name"
      :width="width"
      v-for="{ label, width, name, sortable } in columns"
    />
    <el-table-column width="50">
      <template #default="scope">
        <div class="tw-flex tw-justify-end">
          <div class="tw-flex tw-space-x-2 tw-items-center">
            <button v-if="scope.row.is_versioned">
              <el-icon color="#409EFC"><clock /></el-icon>
            </button>
            <button>
              <el-icon><check /></el-icon>
            </button>
            <button>
              <el-icon class="tw-text-green-500"><edit /></el-icon>
            </button>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <div class="c-datatable__footer">
    <el-pagination
      :page-size="10"
      :pager-count="8"
      layout="prev, pager, next"
      :total="recordsCount"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { Edit, Clock, Check } from "@element-plus/icons-vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "ActivityTable",
  components: {
    Edit,
    Clock,
    Check,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    summary: {
      type: [String, Object],
      default: "div",
    },
    extensionType: {
      type: String,
      required: true,
      validator(value) {
        return ["Worklogs"].includes(value);
      },
    },
  },
  data: () => ({
    order: "",
  }),
  computed: {
    ...mapState("worklog", {
      records: "worklogs",
      recordsCount: "worklogsCount",
      recordsLoading: "loading",
    }),
  },
  mounted() {
    this.getWorklogs();
  },
  watch: {
    order(newValue) {
      this.getWorklogs({ order: newValue });
    },
  },
  methods: {
    sortChange({ order: direction, prop }) {
      if (!direction) {
        this.order = "";
        return;
      }
      const orderBy = { ascending: "asc", descending: "desc" }[direction];
      const order = `${prop}-${orderBy}`;
      this.order = order;
    },
    ...mapActions("worklog", { getWorklogs: "all" }),
    handleCurrentChange(page_num) {
      this.getWorklogs({ page_num, order: this.order });
    },
  },
};
</script>
