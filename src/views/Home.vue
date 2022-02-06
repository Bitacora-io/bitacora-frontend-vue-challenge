<template>
  <panel-layout>
    <ads-legend />
    <quick-links />
  </panel-layout>
</template>

<script>
import { defineComponent } from "vue";
import PanelLayout from "@/layouts/Panel.vue";
import QuickLinks from "@/components/QuickLinks.vue";
import AdsLegend from "@/components/AdsLegend.vue";

export default defineComponent({
  name: "Home",
  components: {
    PanelLayout,
    QuickLinks,
    AdsLegend,
  },
});
</script>
