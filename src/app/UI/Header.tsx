"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
 const [openAccordion, setOpenAccordion] = useState<string[]>([]);

const toggleAccordion = (key: string) => {
  setOpenAccordion(prev =>
    prev.includes(key)
      ? prev.filter(item => item !== key)
      : [...prev, key]
  );
};

  return (
    <div>
      <section className="flex flex-row justify-between p-4 relative z-50">
        <img className="w-15" src="/logo.svg" alt="logo" />
        {sidebarOpen ? (
          <svg
            onClick={() => setSidebarOpen(false)}
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <title>close</title>
            <path
              d="M18 6L6 18"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setSidebarOpen(true)}
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 1.08 1.08"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <title>menu-line</title>
            <path d="M0.96 0.87H0.12a0.03 0.03 0 0 1 0 -0.06h0.84a0.03 0.03 0 0 1 0 0.06" />
            <path d="M0.96 0.57H0.12a0.03 0.03 0 0 1 0 -0.06h0.84a0.03 0.03 0 0 1 0 0.06" />
            <path d="M0.96 0.27H0.12a0.03 0.03 0 0 1 0 -0.06h0.84a0.03 0.03 0 0 1 0 0.06" />
            <path
              x="0"
              y="0"
              width="36"
              height="36"
              fillOpacity="0"
              d="M0 0H1.08V1.08H0V0z"
            />
          </svg>
        )}
      </section>
      {sidebarOpen && (
  <section className="flex flex-col gap-4 text-[12px] h-screen">
    {/* Loans */}
    <div className="p-2">
      <div
        onClick={() => toggleAccordion("loans")}
        className="flex flex-row justify-between p-4 cursor-pointer"
      >
        <h3 className="text-gray-600">{t("Loans_and_credits")}</h3>
        <svg
          className={`transition-transform duration-300 ${openAccordion.includes("loans") ? "rotate-180" : ""}`}
          fill="#757575"
          width="18px"
          height="18px"
          viewBox="0 -0.18 15.72 15.72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>up</title>
          <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
        </svg>
      </div>

      <div
        className={`flex flex-col gap-2 pr-8 overflow-hidden transition-all duration-300 ${
          openAccordion.includes("loans") ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0"
        }`}
      >
        <h3 className="text-gray-600">{t("loan_purchase")}</h3>
        <h3 className="text-gray-600">{t("shop_pay_later")}</h3>
        <h3 className="text-gray-600">{t("Installment_purchase")}</h3>
      </div>
    </div>
    <div className="bg-gray-200 h-0.5 rounded-2xl mx-4"></div>

    {/* Insurance */}
    <div className="p-2">
      <div
        onClick={() => toggleAccordion("insurance")}
        className="flex flex-row justify-between px-4 cursor-pointer"
      >
        <h3 className="text-gray-600">{t("insurance")}</h3>
        <svg
          className={`transition-transform duration-300 ${openAccordion.includes("insurance") ? "rotate-180" : ""}`}
          fill="#757575"
          width="18px"
          height="18px"
          viewBox="0 -0.18 15.72 15.72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>up</title>
          <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
        </svg>
      </div>

      <div
        className={`flex flex-col gap-2 pr-8 overflow-hidden transition-all duration-300 ${
          openAccordion.includes("insurance") ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0"
        }`}
      >
        <h3 className="text-gray-600">{t("third_insurance")}</h3>
        <h3 className="text-gray-600">{t("electronic_insurance")}</h3>
      </div>
    </div>
    <div className="bg-gray-200 h-0.5 rounded-2xl mx-4"></div>

    {/* Capital management */}
    <h3 className="text-gray-600 px-4 p-2">{t("Capital_management")}</h3>
    <div className="bg-gray-200 h-0.5 rounded-2xl mx-4"></div>

    {/* Business */}
    <div className="p-2">
      <div
        onClick={() => toggleAccordion("business")}
        className="flex flex-row justify-between px-4 cursor-pointer"
      >
        <h3 className="text-gray-600">{t("business_services")}</h3>
        <svg
          className={`transition-transform duration-300 ${openAccordion.includes("business") ? "rotate-180" : ""}`}
          fill="#757575"
          width="18px"
          height="18px"
          viewBox="0 -0.18 15.72 15.72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>up</title>
          <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
        </svg>
      </div>

      <div
        className={`flex flex-col gap-2 pr-8 overflow-hidden transition-all duration-300 ${
          openAccordion.includes("business") ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0"
        }`}
      >
        <h3 className="text-gray-600">{t("credit_payment")}</h3>
        <h3 className="text-gray-600">{t("Loan_sellers")}</h3>
        <h3 className="text-gray-600">{t("Comprehensive_payment")}</h3>
        <h3 className="text-gray-600">{t("Early_settlement")}</h3>
      </div>
    </div>
    <div className="bg-gray-200 h-0.5 rounded-2xl mx-4"></div>

    {/* Services */}
    <div className="p-2">
      <div
        onClick={() => toggleAccordion("services")}
        className="flex flex-row justify-between px-4 cursor-pointer"
      >
        <h3 className="text-gray-600">{t("Organizational_services")}</h3>
        <svg
          className={`transition-transform duration-300 ${openAccordion.includes("services") ? "rotate-180" : ""}`}
          fill="#757575"
          width="18px"
          height="18px"
          viewBox="0 -0.18 15.72 15.72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>up</title>
          <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
        </svg>
      </div>

      <div
        className={`flex flex-col gap-2 pr-8 overflow-hidden transition-all duration-300 ${
          openAccordion.includes("services") ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0"
        }`}
      >
        <h3 className="text-gray-600">{t("purchase_Digikala")}</h3>
        <h3 className="text-gray-600">{t("shop_pay_later")}</h3>
      </div>
    </div>
  </section>
)}
    </div>
  );
};

export default Header;
