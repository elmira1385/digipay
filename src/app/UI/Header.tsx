"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div>
      <section className="flex flex-row justify-between p-4 relative z-50">
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

        <img className="w-15" src="/logo.svg" alt="logo" />
      </section>
      {sidebarOpen && (
        <section className="flex flex-col gap-4 text-[12px]">
          <div
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="flex flex-row justify-between p-4 cursor-pointer"
          >
            <svg
              className={`transition-transform duration-300 ${accordionOpen ? "rotate-180" : ""}`}
              fill="#000000"
              width="18px"
              height="18px"
              viewBox="0 -0.18 15.72 15.72"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>up</title>
              <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
            </svg>
            <h3 className="text-gray-600">{t("Loans_and_credits")}</h3>
          </div>

          <div
            className={`text-right flex flex-col gap-2 pr-8 overflow-hidden transition-all duration-300 ${
              accordionOpen ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0"
            }`}
          >
            <h3 className="text-gray-600">{t("loan_purchase")}</h3>
            <h3 className="text-gray-600">{t("shop_pay_later")}</h3>
            <h3 className="text-gray-600">{t("Installment_purchase")}</h3>
          </div>
        </section>
      )}
    </div>
  );
};

export default Header;
