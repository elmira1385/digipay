"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Loginorregister = () => {
 const[isLoginOpen,setIsLoginOpen]= useState(true)
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center fixed top-1/2 left-1/2 -translate-1/2">
      {isLoginOpen?<div className="flex flex-col  p-10 shadow-lg shadow-black/10 rounded-2xl justify-center items-center gap-4">
        <p className="text-2xl">
          {t("loginOrRegister.login")} <span className="text-blue-600">{t("loginOrRegister.user")}</span>
        </p>
        <form className="flex flex-col gap-4" action="">
          <div className="flex flex-col gap-2">
            <label className="text-lg">{t("loginOrRegister.email")}</label>
            <input className="outline-none border border-gray-300 p-2 rounded-2xl" placeholder={t("loginOrRegister.typeHere")} type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">{t("loginOrRegister.password")}</label>
            <input className="outline-none border border-gray-300 p-2 rounded-2xl" placeholder={t("loginOrRegister.typeHere")} type="text" />
          </div>
          <p className="text-sm">{t("loginOrRegister.createANewAccount")} <span onClick={()=>{
            setIsLoginOpen(false)
          }} className="text-blue-600 ">{t("loginOrRegister.clickHere")}</span></p>
          <button className="bg-blue-600 rounded-2xl text-white text-lg ">{t("loginOrRegister.submit")}</button>
        </form>
      </div>:<div className="flex flex-col p-6 shadow-lg shadow-black/10 rounded-2xl justify-center items-center gap-4">
        <p className="text-2xl">
          {t("loginOrRegister.register")} <span className="text-blue-600">{t("loginOrRegister.user")}</span>
        </p>
        <form className="flex flex-col gap-4" action="">
          <div className="flex flex-col gap-2">
            <label className="text-lg">{t("loginOrRegister.name")}</label>
            <input className="outline-none border border-gray-300 p-2 rounded-2xl" placeholder={t("loginOrRegister.typeHere")} type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">{t("loginOrRegister.email")}</label>
            <input className="outline-none border border-gray-300 p-2 rounded-2xl" placeholder={t("loginOrRegister.typeHere")} type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">{t("loginOrRegister.password")}</label>
            <input className="outline-none border border-gray-300 p-2 rounded-2xl" placeholder={t("loginOrRegister.typeHere")} type="text" />
          </div>
          <p className="text-sm">{t("loginOrRegister.alreadyHaveAccount")} <span onClick={()=>{
            setIsLoginOpen(true)
          }} className="text-blue-600">{t("loginOrRegister.clickHere")}</span></p>
          <button className="bg-blue-600 rounded-2xl text-white text-lg ">{t("loginOrRegister.createAccount")}</button>
        </form>
      </div>}
    </div>
  );
};

export default Loginorregister;
