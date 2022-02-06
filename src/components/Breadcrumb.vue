<template>
  <div class="o-breadcrumb">
    <div
      class="tw-flex tw-flex-col tw-space-y-4 sm:tw-flex-row sm:tw-items-end"
    >
      <div class="tw-flex-auto">
        <h3 class="o-breadcrumb__head">{{ title }}</h3>
        <div class="o-breadcrumb__body">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="link in links"
              :key="link"
              :to="{ name: link.routeName }"
            >
              {{ link.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    title: {
      type: String,
      default: "",
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
