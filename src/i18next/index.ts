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
       insurance: "بیمه",
       third_insurance: "بیمه شخص ثالث",
       electronic_insurance: "بیمه تجهیزات الکترونیک",
       Capital_management: "مدیریت سرمایه",
       business_services:"خدمات کسب و کارها",
       credit_payment:"درگاه پرداخت اعتباری",
       Loan_sellers:"   وام فروشندگان",
       Comprehensive_payment:"   درگاه پرداخت جامع",
       Early_settlement:" تسویه زودهنگام",
       Organizational_services:"  خدمات سازمانی",
       purchase_Digikala:" خرید اقساطی از دیجی‌کالا. ",
       search:"جست‌وجو در خدمات، فروشگاه‌ها، محصولات"
       


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