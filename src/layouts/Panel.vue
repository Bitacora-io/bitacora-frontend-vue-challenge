<template>
  <div
    class="c-page-viewport c-page-viewport--sidenav c-page-viewport--topnav c-page-viewport--footer"
  >
    <div class="c-page-viewport__topnav">
      <top-nav />
    </div>

    <div class="c-page-viewport__sidenav">
      <side-nav />
    </div>

    <main class="c-page-viewport__container">
      <div class="c-page-viewport__content">
        <slot />
      </div>
    </main>

    <div class="c-page-viewport__footer">
      <div class="c-page-footer">
        <strong class="u-weight-500">Eolus IDeA</strong>&copy;
        {{ new Date().getFullYear() }}
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import SideNav from "@/components/SideNav.vue";

/* ============
 * Panel Layout
 * ============
 *
 * Used for the home and account pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

export default {
  /**
   * The name of the layout.
   */
  name: "PanelLayout",
  components: {
    TopNav,
    SideNav,
  },
};
</script>
