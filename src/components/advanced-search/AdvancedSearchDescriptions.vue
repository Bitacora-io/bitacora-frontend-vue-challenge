<template>
  <p>AdvancedSearchDescription</p>
</template>

<script>
const now = new Date();
const end = now.getTime();

now.setDate(now.getDate() - 7);
const start = now.getTime();

export default {
  name: "AdvancedSearchDescriptions",
  data() {
    return {
      dialogFormVisible: false,
      advancedFiltersForm: {
        dates: [start, end],
        title: "",
        comments: "",
        project: [],
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
};
</script>
