// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATION_ENGLISH, TRANSLATION_FRENCH } from "locales";

// i18n initialize for testing purposes
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  ns: ["translation"],
  defaultNS: "translation",
  debug: true,
  resources: {
    en: {
      translation: TRANSLATION_ENGLISH,
    },
    fr: {
      translation: TRANSLATION_FRENCH,
    },
  },
});
