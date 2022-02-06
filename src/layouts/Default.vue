<template>
  <slot />
</template>

<script>
/* ============
 * Default Layout
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
  name: "DefaultLayout",

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      menuCollapsed: false,
    };
  },

  /**
   * The methods that the layout can use.
   */
  methods: {
    /**
     * Will log the user out.
     */
    logout() {
      //this.$store.dispatch("auth/logout");
    },

    /**
     * Will toggle the menu.
     */
    toggleMenu() {
      //this.menuCollapsed = !this.menuCollapsed;
    },
  },
};
</script>
