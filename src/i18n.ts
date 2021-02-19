import { createI18n } from "vue-i18n";
const en = require("@/locales/en.json") as any;
const zh = require("@/locales/zh.json") as any;

export const i18n = createI18n({
  legacy: false,
  locale: "zh",
  fallbackLocale: ["en"],
  messages: {
    en,
    zh,
  },
});
