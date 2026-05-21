"use client";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col  gap-4 p-4">
      <div className="flex justify-between items-center">
        <p className="font-bold"> {t("digipay_service")}</p>
        <p className="font-bold text-blue-600">{t("all")}</p>
      </div>
      <div className="bg-white p-6 flex gap-2 justify-around rounded-3xl">
         <div className="flex flex-col gap-2 justify-center items-center">
          <div className="p-4 rounded-xl bg-linear-to-b from-[#8643F3] to-[#C7AAF7] ">
             <svg
                className="transition-transform duration-300"
                fill="#ffffff"
                width="18px"
                height="18px"
                viewBox="0 -0.18 15.72 15.72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>up</title>
                <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
              </svg>
          </div>
          <span className="text-sm">{t("loan_money")}</span>
         </div>
         <div className="flex flex-col gap-2 justify-center items-center">
          <div className="p-4 rounded-xl bg-linear-to-b from-[#1159FC] to-[#8EB1FE] ">
             <svg
                className="transition-transform duration-300"
                fill="#ffffff"
                width="18px"
                height="18px"
                viewBox="0 -0.18 15.72 15.72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>up</title>
                <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
              </svg>
          </div>
          <span className="text-sm">{t("payment_servies")}</span>
         </div>
         <div className="flex flex-col gap-2 justify-center items-center">
          <div className="p-4 rounded-xl bg-linear-to-b from-[#14A654] to-[#79FAB2] ">
             <svg
                className="transition-transform duration-300"
                fill="#ffffff"
                width="18px"
                height="18px"
                viewBox="0 -0.18 15.72 15.72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>up</title>
                <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
              </svg>
          </div>
          <span className="text-sm">{t("investment")}</span>
         </div>
         <div className="flex flex-col gap-2 justify-center items-center">
          <div className="p-4 rounded-xl bg-linear-to-br from-[#0E0C7C] to-[#89A7EC] ">
             <svg
                className="transition-transform duration-300"
                fill="#ffffff"
                width="18px"
                height="18px"
                viewBox="0 -0.18 15.72 15.72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>up</title>
                <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
              </svg>
          </div>
          <span className="text-sm">{t("Car_Inshorence")}</span>
         </div>
      </div> 
    </div>
  );
};

export default Services;
