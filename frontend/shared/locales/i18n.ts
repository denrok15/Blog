import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { HomePageTranslations } from "./HomePage";

i18next.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "en",
  resources: {
    ru: {
      HomePage: HomePageTranslations.ru,
    },
    en: {
      HomePage: HomePageTranslations.en,
    },
  },
  debug: true, // чтобы увидеть лог переводов в консоли
  interpolation: { escapeValue: false },
});
