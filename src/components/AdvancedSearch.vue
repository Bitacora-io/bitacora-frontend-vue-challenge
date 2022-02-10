<template>
  <div class="tw-flex tw-justify-between tw-items-center tw-px-10">
    <div>
      <div class="example-block">
        <span class="o-label tw-mr-1">{{ $t("advancedSearch.project") }}</span>
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
      </div>
    </div>
    <div class="tw-flex tw-items-center">
      <span class="o-label tw-mr-1">{{ $t("advancedSearch.dates") }}</span>
      <el-date-picker
        v-model="value2"
        type="daterange"
        :range-separator="$t('advancedSearch.rangeSeparator')"
        start-placeholder="Start date"
        end-placeholder="End date"
        :default-value="[startDate, finishDate]"
      >
      </el-date-picker>
    </div>
    <div>
      <el-button type="primary" @click="dialogFormVisible = true">
        {{ $t("advancedSearch.title") }}
        <el-icon class="tw-ml-1"><search /> </el-icon>
      </el-button>

      <el-dialog
        v-model="dialogFormVisible"
        :title="$t('advancedSearch.title')"
      >
        <el-form
          :model="advancedFiltersForm"
          ref="advancedFilters"
          label-width="140px"
        >
          <el-form-item prop="dates" label="Dates:">
            <el-date-picker
              class="tw-rounded tw-w-full"
              v-model="advancedFiltersForm.dates"
              type="daterange"
              :range-separator="$t('advancedSearch.rangeSeparator')"
              start-placeholder="Start date"
              end-placeholder="End date"
              :default-value="[startDate, finishDate]"
            >
            </el-date-picker>
          </el-form-item>

          <el-form-item prop="title" label="Title:">
            <el-input
              class="tw-rounded tw-w-full"
              v-model="advancedFiltersForm.title"
              placeholder="Enter exact keyword or phrase to search"
            />
          </el-form-item>
          <el-form-item prop="title" label="Comments:">
            <el-input
              class="tw-rounded tw-w-full"
              v-model="advancedFiltersForm.comments"
              placeholder="Enter exact keyword or phrase to search"
            />
          </el-form-item>
          <el-form-item prop="title" :label="$t('advancedSearch.project')">
            <el-input
              class="tw-rounded tw-w-full"
              v-model="advancedFiltersForm.comments"
              placeholder="Enter exact keyword or phrase to search"
            />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">{{
              $t("advancedSearch.removeFilter")
            }}</el-button>
            <el-button @click="dialogFormVisible = false">{{
              $t("advancedSearch.cancel")
            }}</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">
              {{ $t("advancedSearch.apply") }}
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { mapState, mapActions } from "vuex";

const now = new Date();
const end = now.getTime();

now.setDate(now.getDate() - 7);

const start = now.getTime();

export default {
  components: {
    Search,
  },
  computed: {
    ...mapState("project", {
      options: "projects",
    }),
  },
  data() {
    return {
      ...mapActions("project", ["all"]),
      value1: ref([]),
      value2: ref(""),
      startDate: start,
      finishDate: end,
      dialogFormVisible: ref(false),
      advancedFiltersForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  created() {
    this.all();
  },
};
</script>
