"use client";
import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<
    "home" | "service" | "store" | "pay" | "login"
  >("home");
  return (
    <div className="sticky bottom-20 left-0 p-6 z-50">
      <div className="flex  bg-white  p-4 justify-around rounded-full">
        <div
          onClick={() => {
            setActive("home");
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <svg
            className={clsx({
              "fill-blue-600": active === "home",
            })}
            fill="#000000"
            width="18px"
            height="18px"
            viewBox="0 -0.18 15.72 15.72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>up</title>
            <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
          </svg>
          <p
            className={clsx({
              "text-blue-600": active === "home",
            })}
          >
            {t("home")}
          </p>
        </div>
        <div
          onClick={() => {
            setActive("service");
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <svg
            className={clsx({
              "fill-blue-600": active === "service",
            })}
            fill="#000000"
            width="18px"
            height="18px"
            viewBox="0 -0.18 15.72 15.72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>up</title>
            <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
          </svg>
          <p
            className={clsx({
              "text-blue-600": active === "service",
            })}
          >
            {t("servies")}
          </p>
        </div>
        <div
          onClick={() => {
            setActive("store");
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <svg
            className={clsx({
              "fill-blue-600": active === "store",
            })}
            fill="#000000"
            width="18px"
            height="18px"
            viewBox="0 -0.18 15.72 15.72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>up</title>
            <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
          </svg>
          <p
            className={clsx({
              "text-blue-600": active === "store",
            })}
          >
            {t("stores")}
          </p>
        </div>
        <div
          onClick={() => {
            setActive("pay");
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <svg
            className={clsx({
              "fill-blue-600": active === "pay",
            })}
            fill="#000000"
            width="18px"
            height="18px"
            viewBox="0 -0.18 15.72 15.72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>up</title>
            <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
          </svg>
          <p
            className={clsx({
              "text-blue-600": active === "pay",
            })}
          >
            {t("pay")}
          </p>
        </div>
        <div
          onClick={() => {
            setActive("login");
          }}
          className="flex flex-col justify-center items-center gap-2"
        >
          <svg
            className={clsx({
              "fill-blue-600": active === "login",
            })}
            fill="#000000"
            width="18px"
            height="18px"
            viewBox="0 -0.18 15.72 15.72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>up</title>
            <path d="m13.8 9.63 -1.02 1.02 -4.92 -4.89L2.94 10.65l-1.02 -1.02 5.94 -5.88z" />
          </svg>
          <p
            className={clsx({
              "text-blue-600": active === "login",
            })}
          >
            {t("login")}
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Menu;
