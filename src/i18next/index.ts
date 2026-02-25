// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    fa: {
      translation: {
        Loans_and_credits: "  وام و اعتبار ",
       loan_purchase:"وام خرید کالا",
       shop_pay_later:"الان بخر بعدا پرداخت کن",
       Installment_purchase:"خرید اقساطی از دیجی‌کالا",
       
      }
    },
    en: {
      translation: {
        hello: "Hello World",
        welcome: "Welcome to my website"
      }
    }
  },
  lng: "fa",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;