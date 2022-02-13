<template>
  <el-button type="primary" @click="dialogFormVisible = true">
    {{ $t("advancedSearch.title") }}
    <el-icon class="tw-ml-1"><search /> </el-icon>
  </el-button>
  <el-dialog
    v-model="dialogFormVisible"
    width="40%"
    top="5vh"
    :append-to-body="true"
    :title="$t('advancedSearch.title')"
  >
    <el-form
      :model="advancedFiltersForm"
      ref="advancedFilters"
      label-width="150px"
    >
      <el-form-item prop="dates" :label="$t('advancedSearch.dates')">
        <el-date-picker
          class="tw-rounded tw-w-full"
          v-model="advancedFiltersForm.dates"
          type="daterange"
          :range-separator="$t('advancedSearch.rangeSeparator')"
          start-placeholder="Start date"
          end-placeholder="End date"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item prop="title" :label="$t('advancedSearch.t')">
        <el-input
          class="tw-rounded tw-w-full"
          v-model="advancedFiltersForm.title"
          :placeholder="$t('advancedSearch.placeholder')"
        />
      </el-form-item>
      <el-form-item prop="comments" :label="$t('advancedSearch.comments')">
        <el-input
          class="tw-rounded tw-w-full"
          v-model="advancedFiltersForm.comments"
          :placeholder="$t('advancedSearch.placeholder')"
        />
      </el-form-item>
      <el-form-item prop="projects" :label="$t('advancedSearch.project')">
        <el-select
          v-model="advancedFiltersForm.projects"
          multiple
          clearable
          collapse-tags
          :placeholder="$t('advancedSearch.select')"
          class="tw-w-full"
        >
          <el-option
            v-for="item in projects"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="subloc" :label="$t('advancedSearch.subloc')">
        <el-select
          v-model="advancedFiltersForm.subloc"
          multiple
          clearable
          collapse-tags
          :placeholder="$t('advancedSearch.select')"
          class="tw-w-full"
        >
          <el-option
            v-for="item in sublocations"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="provider" :label="$t('advancedSearch.provider')">
        <el-select
          v-model="advancedFiltersForm.provider"
          multiple
          clearable
          collapse-tags
          :placeholder="$t('advancedSearch.select')"
          class="tw-w-full"
        >
          <el-option
            v-for="item in providers"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="assignee" :label="$t('advancedSearch.assignee')">
        <el-select
          v-model="advancedFiltersForm.assignee"
          multiple
          clearable
          collapse-tags
          :placeholder="$t('advancedSearch.select')"
          class="tw-w-full"
        >
          <el-option
            v-for="item in assignees"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="signed" :label="$t('advancedSearch.signed')">
        <el-select
          v-model="advancedFiltersForm.signee"
          multiple
          clearable
          collapse-tags
          :placeholder="$t('advancedSearch.select')"
          class="tw-w-full"
        >
          <el-option
            v-for="item in signees"
            :key="item.id"
            :label="`${item.name} [${item.id}]`"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="signature" :label="$t('advancedSearch.signature')">
        <el-checkbox-group v-model="advancedFiltersForm.signatures">
          <el-checkbox :label="$t('advancedSearch.signatureT1')" />
          <el-checkbox :label="$t('advancedSearch.signatureT2')" />
          <el-checkbox :label="$t('advancedSearch.signatureT3')" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item prop="creator" :label="$t('advancedSearch.creator')">
        <el-select
          v-model="advancedFiltersForm.creator"
          multiple
          clearable
          collapse-tags
          :placeholder="$t('advancedSearch.select')"
          class="tw-w-full"
        >
          <el-option
            v-for="item in authors"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="tag" :label="$t('advancedSearch.tag')">
        <el-select
          v-model="advancedFiltersForm.tag"
          multiple
          clearable
          collapse-tags
          :placeholder="$t('advancedSearch.options')"
          class="tw-w-full"
        >
          <el-option
            v-for="item in tags"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="removeFilters">{{
          $t("advancedSearch.removeFilter")
        }}</el-button>
        <el-button @click="dialogFormVisible = false">{{
          $t("advancedSearch.cancel")
        }}</el-button>
        <el-button type="primary" @click="applyFilters('advancedFilters')">
          {{ $t("advancedSearch.apply") }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import { mapState, mapActions } from "vuex";

const now = new Date();
const end = now.getTime();

now.setDate(now.getDate() - 7);

const start = now.getTime();

export default {
  name: "AdvancedSearchDialog",
  components: { Search },
  emits: ["filtersApplied", "removeFilters"],
  computed: {
    ...mapState("project", {
      projects: "projects",
    }),
    ...mapState("worklog", {
      assignees: "assignee",
      authors: "author",
      providers: "provider",
      signees: "signees",
      sublocations: "sublocation",
      titles: "title",
    }),
    ...mapState("tag", {
      tags: "tags",
    }),
  },
  data() {
    return {
      ...mapActions("project", ["all"]),
      ...mapActions("worklog", ["suggestions"]),
      ...mapActions("tag", {
        allTags: "all",
      }),
      dialogFormVisible: false,
      advancedFiltersForm: {
        dates: [start, end],
        title: "",
        comments: "",
        projects: [],
        subloc: [],
        provider: [],
        assignee: [],
        signee: [],
        signatures: [],
        creator: [],
        tag: [],
      },
    };
  },
  methods: {
    applyFilters(form) {
      this.$refs[form].validate(async (valid) => {
        if (!valid) {
          return false;
        }
        let advancedFiltersForm = { ...this.advancedFiltersForm };
        const dates = [...advancedFiltersForm.dates];
        const title = advancedFiltersForm.title;
        const comments = advancedFiltersForm.comments;
        const projects = [...advancedFiltersForm.projects];
        const subloc = [...advancedFiltersForm.subloc];
        const provider = [...advancedFiltersForm.provider];
        const assignee = [...advancedFiltersForm.assignee];
        const signee = [...advancedFiltersForm.signee];
        const signatures = [...advancedFiltersForm.signatures];
        const creator = [...advancedFiltersForm.creator];
        const tag = [...advancedFiltersForm.tag];
        advancedFiltersForm = {
          dates,
          title,
          comments,
          projects,
          subloc,
          provider,
          assignee,
          signee,
          signatures,
          creator,
          tag,
        };
        this.dialogFormVisible = false;

        this.$emit("filtersApplied", advancedFiltersForm);
      });
    },
    removeFilters() {
      this.dialogFormVisible = false;

      this.$emit("removeFilters");
    },
  },

  created() {
    this.all();
    this.allTags();
    this.suggestions();
  },
};
</script>
