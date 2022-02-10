<template>
  <el-dialog
    v-model="dialogFormVisible"
    width="40%"
    :append-to-body="true"
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
</template>

<script>
export default {
  name: "AdvancedSearchDialog",
  data() {
    return {
      dialogFormVisible: false,
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
};
</script>
