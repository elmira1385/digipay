"use client";

import { IOpenState, toggleBox } from "@/redux/features/boxSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
interface RootState {
  boxes: IOpenState;
}
const Header = () => {
  const { t } = useTranslation();
  const route=useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const allBoxStates = useSelector((state: RootState) => state.boxes);
  const dispatch = useDispatch();
  const handleBox1Click = () => {
    dispatch(toggleBox("box1"));
  };
  const handleBox2Click = () => {
    dispatch(toggleBox("box2"));
  };
  const handleBox3Click = () => {
    dispatch(toggleBox("box3"));
  };
  const handleBox4Click = () => {
    dispatch(toggleBox("box4"));
  };
  return (
    <div>
      <section className="flex flex-row transition-all justify-between p-4 relative z-10">
        <img className="w-16" src="/logo.svg" alt="logo" />
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
          <div className="flex gap-2 justify-center items-center">
            <Link href="/basket">
              <div className="relative cursor-pointer">
                <img src="./basket.svg" alt="" />
                <button className="absolute -top-2 -right-3  text-xs text-white bg-primary w-4.5 h-4.5 rounded-full"></button>
              </div>
            </Link>
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
          </div>
        )}
      </section>
      {sidebarOpen && (
        <div className="flex flex-col  text-[12px] absolute  right-0  w-full  z-30 bg-[#f2f3f6]">
          <section className="flex flex-col">
            <div
              onClick={handleBox1Click}
              className="flex flex-row justify-between p-4   cursor-pointer "
            >
              <h3 className="text-gray-500 text-[16px] font-semibold ">
                {t("Loans_and_credits")}
              </h3>
              <svg
                className={`transition-transform duration-300 ${allBoxStates.boxes["box1"] && "rotate-180"}`}
                fill="#000000"
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
              className={`text-right  flex flex-col gap-2 pr-8 overflow-hidden transition-all duration-300 ${
                allBoxStates.boxes["box1"]
                  ? "max-h-40 opacity-100 p-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("loan_purchase")}
              </h3>
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("shop_pay_later")}
              </h3>
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("Installment_purchase")}
              </h3>
            </div>
          </section>
          <hr className="w-94 mx-2 text-gray-300" />
          <section className="flex flex-col ">
            <div
              onClick={handleBox2Click}
              className="flex flex-row justify-between p-4   cursor-pointer "
            >
              <h3 className="text-gray-500 text-[16px] font-semibold ">
                {t("Inshorence")}
              </h3>
              <svg
                className={`transition-transform duration-300 ${allBoxStates.boxes["box2"] && "rotate-180"}`}
                fill="#000000"
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
              className={`text-right  flex flex-col gap-2 pr-8 overflow-hidden transition-all duration-300 ${
                allBoxStates.boxes["box2"]
                  ? "max-h-40 opacity-100 p-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("Car_Inshorence")}
              </h3>
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("Equentment_Inshorence")}
              </h3>
            </div>
          </section>
          <hr className="w-94 mx-2 text-gray-300" />
          <section className="flex flex-col ">
            <div
              onClick={handleBox3Click}
              className="flex flex-row justify-between p-4   cursor-pointer "
            >
              <h3 className="text-gray-500 text-[16px] font-semibold ">
                {t("khadamat_kasb_kar")}
              </h3>
              <svg
                className={`transition-transform duration-300 ${allBoxStates.boxes["box3"] && "rotate-180"}`}
                fill="#000000"
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
              className={`text-right  flex flex-col gap-2 pr-8 overflow-hidden transition-all duration-300 ${
                allBoxStates.boxes["box3"]
                  ? "max-h-40 opacity-100 p-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("darqahPardakht_Etebari")}
              </h3>
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("Customer_Loan")}
              </h3>
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("darqahPardakht_jameh")}
              </h3>
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("Pay_soon")}
              </h3>
            </div>
          </section>
          <hr className="w-94 mx-2 text-gray-300" />
          <section className="flex flex-col ">
            <div
              onClick={handleBox4Click}
              className="flex flex-row justify-between p-4   cursor-pointer "
            >
              <h3 className="text-gray-500 text-[16px] font-semibold ">
                {t("khadamat_sazmani")}
              </h3>
              <svg
                className={`transition-transform duration-300 ${allBoxStates.boxes["box4"] && "rotate-180"}`}
                fill="#000000"
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
              className={`text-right  flex flex-col gap-2 pr-8 overflow-hidden transition-all duration-300 ${
                allBoxStates.boxes["box4"]
                  ? "max-h-40 opacity-100 p-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("Installment_purchase")}
              </h3>
              <h3 className="text-gray-500 text-[15px] font-semibold">
                {t("shop_pay_later")}
              </h3>
            </div>
          </section>
          <hr className="w-94 mx-2 text-gray-300" />
          <div className="flex items-start p-4">
            <button onClick={()=>{
              route.push("/loginandregester")
              setSidebarOpen(false)
            }} className="flex p-2 text-[16px] font-semibold bg-blue-500 text-white rounded-xl">
              {t("loginOrregister")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
