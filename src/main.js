import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */
import i18n from "./plugins/vue-i18n";
import axios from "./plugins/axios";

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 * Sass is used for this boilerplate.
 *
 * If you don't want to use Sass, that's fine!
 * Replace the sass directory with the CSS preprocessor you want.
 * Import the entry point here & install the webpack loader.
 *
 * It's that easy...
 *
 * http://sass-lang.com/
 */

import ElementPlus from "element-plus";
import "./assets/styles/element-variables.scss";
import "./assets/styles/element-custom.scss";
import "./assets/styles/font-awesome.scss";
import "./assets/styles/inuitcss/main.scss";

/* ============
 * Locales
 * ============
 *
 * Import the supported locales.
 */
import ElementPlusEn from "element-plus/es/locale/lang/en";
import ElementPlusEs from "element-plus/es/locale/lang/es";

store.dispatch("auth/check");

const app = createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(axios)
  .use(ElementPlus, {
    locale: i18n.global.locale === "es" ? ElementPlusEs : ElementPlusEn,
  })
  .mount("#app");

export default app;
