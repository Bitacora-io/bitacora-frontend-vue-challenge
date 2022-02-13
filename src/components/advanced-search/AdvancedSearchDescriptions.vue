<template>
  <div class="tw-flex tw-items-center">
    <el-icon @click="removeFilters" class="tw-mr-5 tw-cursor-pointer"
      ><close-bold
    /></el-icon>
    <div
      class="tw-flex tw-w-full tw-items-center tw-border-2 tw-border-green-400"
    >
      <span
        class="tw-flex tw-px-3 tw-bg-green-400 tw-text-white tw-self-stretch tw-items-center"
        >Busqueda por</span
      >
      <div class="tw-self-stretch tw-p-1">
        <ul class="tw-flex tw-flex-wrap tw-m-0">
          <li class="tw-mr-1 tw-font-bold">{{ $t("advancedSearch.dates") }}</li>
          <li>{{ start }} to {{ end }}</li>
          <li v-if="advancedFilters.title" class="tw-ml-3 tw-mr-1 tw-font-bold">
            {{ $t("advancedSearch.t") }}
          </li>
          <li v-if="advancedFilters.title">
            {{ advancedFilters.title }}
          </li>
          <li
            v-if="advancedFilters.comments"
            class="tw-ml-3 tw-mr-1 tw-font-bold"
          >
            {{ $t("advancedSearch.comments") }}
          </li>
          <li v-if="advancedFilters.comments">
            {{ advancedFilters.comments }}
          </li>
          <li
            v-if="advancedFilters.projects.length > 0"
            class="tw-ml-3 tw-mr-1 tw-font-bold"
          >
            {{ $t("advancedSearch.project") }}
          </li>
          <li v-for="project in advancedFilters.projects" :key="project">
            {{ project }},
          </li>

          <li
            v-if="advancedFilters.subloc.length > 0"
            class="tw-ml-3 tw-mr-1 tw-font-bold"
          >
            {{ $t("advancedSearch.subloc") }}
          </li>
          <li v-for="subloc in advancedFilters.subloc" :key="subloc">
            {{ subloc }},
          </li>

          <li
            v-if="advancedFilters.provider.length > 0"
            class="tw-ml-3 tw-mr-1 tw-font-bold"
          >
            {{ $t("advancedSearch.provider") }}
          </li>
          <li v-for="provider in advancedFilters.provider" :key="provider">
            {{ provider }},
          </li>

          <li
            v-if="advancedFilters.signee.length > 0"
            class="tw-ml-3 tw-mr-1 tw-font-bold"
          >
            {{ $t("advancedSearch.signed") }}
          </li>
          <li v-for="signee in advancedFilters.signee" :key="signee">
            {{ signee }},
          </li>

          <li
            v-if="advancedFilters.signatures.length > 0"
            class="tw-ml-3 tw-mr-1 tw-font-bold"
          >
            {{ $t("advancedSearch.signature") }}
          </li>
          <li v-for="signature in advancedFilters.signatures" :key="signature">
            {{ signature }},
          </li>

          <li
            v-if="advancedFilters.creator.length > 0"
            class="tw-ml-3 tw-mr-1 tw-font-bold"
          >
            {{ $t("advancedSearch.creator") }}
          </li>
          <li v-for="creator in advancedFilters.creator" :key="creator">
            {{ creator }},
          </li>

          <li
            v-if="advancedFilters.assignee.length > 0"
            class="tw-ml-3 tw-mr-1 tw-font-bold"
          >
            {{ $t("advancedSearch.assignee") }}
          </li>
          <li v-for="assignee in advancedFilters.assignee" :key="assignee">
            {{ assignee }},
          </li>

          <li
            v-if="advancedFilters.tag.length > 0"
            class="tw-ml-3 tw-mr-1 tw-font-bold"
          >
            {{ $t("advancedSearch.tag") }}
          </li>
          <li v-for="tag in advancedFilters.tag" :key="tag">{{ tag }},</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { CloseBold } from "@element-plus/icons-vue";

export default {
  name: "AdvancedSearchDescriptions",
  components: { CloseBold },
  props: {
    advancedFilters: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["removeFilters"],
  data() {
    return {
      start: null,
      end: null,
    };
  },
  methods: {
    removeFilters() {
      this.$emit("removeFilters");
    },
    getDates() {
      const start = new Date(this.advancedFilters.dates[0]);
      this.start = `${start.getFullYear()}/${
        start.getMonth() + 1 < 10
          ? "0" + (start.getMonth() + 1)
          : start.getMonth() + 1
      }/${start.getDate() < 10 ? "0" + start.getDate() : start.getDate()}`;
      const end = new Date(this.advancedFilters.dates[1]);
      this.end = `${end.getFullYear()}/${
        end.getMonth() + 1 < 10
          ? "0" + (end.getMonth() + 1)
          : end.getMonth() + 1
      }/${end.getDate() < 10 ? "0" + end.getDate() : end.getDate()}`;
    },
  },
  created() {
    console.log(this.advancedFilters);
    this.getDates();
  },
};
</script>
