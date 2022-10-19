import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATION_ENGLISH, TRANSLATION_FRENCH } from "./locales";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translation: TRANSLATION_ENGLISH,
      },
      fr: {
        translation: TRANSLATION_FRENCH,
      },
    },
    fallbackLng: "en",
    lng: "en",
    debug: true,

    // have a common namespace used around tapp
    ns: ["translation"],
    defaultNS: "translation",

    // keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ",",
    },

    react: {
      bindI18n: "languageChanged",
      useSuspense: false,
    },
  });

export default i18n;
