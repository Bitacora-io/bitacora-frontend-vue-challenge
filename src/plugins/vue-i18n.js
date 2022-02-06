/* ============
 * Vue i18n
 * ============
 *
 * Internationalization plugin of Vue.js.
 *
 * https://kazupon.github.io/vue-i18n/
 */

import { createI18n } from "vue-i18n";
import messages from "@/locale";

export default createI18n({
  locale: localStorage.getItem("default_locale") || "en",
  fallbackLocale: "en",
  messages,
  datetimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      },
    },
    es: {
      short: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      },
    },
  },
});
