"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axios";
import MainTamplateForProducts, { TSlider } from "./MainTamplateForProducts";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { hydrateCArd } from "@/redux/features/addToBasket";

const SaleSlider = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useSelector((state: RootState) => state.cart.products);
  const { t } = useTranslation();
  const initialTime = 6 * 60 * 60;
  const [Time, setTime] = useState(initialTime);
  useEffect(() => {
    const Timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          return initialTime;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(Timer);
  }, []);

  useEffect(() => {
    const basket = localStorage.getItem("basket");
    if (basket) {
      dispatch(hydrateCArd(JSON.parse(basket)));
    }
  }, [dispatch]);
  const format = (num: number) => String(num).padStart(2, "0");
  const hours = format(Math.floor(Time / 3600));
  const minutes = format(Math.floor((Time % 3600) / 60));
  const seconds = format(Time % 60);
  const { data } = useQuery({
    queryKey: ["Work"],
    queryFn: async () => {
      const { data } = await axios.get("InneirApi/sliderForSale", {
        headers: {
          Authorization: token,
        },
      });
      return data;
    },
  });
  return (
    <div className=" flex flex-col pr-6 pb-6 gap-4 bg-linear-to-b from-[#8643F3] to-[#431F7E] ">
      <div className="pt-6 pl-6 flex justify-between items-center">
        <p className="text-md font-bold text-white">{t("sale.amazingsale")}</p>
        <div className="flex gap-1 justify-center items-center">
          <p className="p-1 bg-gray-400 text-white text-md font-bold rounded-xl">
            {seconds}
          </p>
          <p className="text-white text-xl">:</p>
          <p className="p-1 bg-gray-400 text-white text-md font-bold rounded-xl">
            {minutes}
          </p>
          <p className="text-white text-xl">:</p>
          <p className="p-1 bg-gray-400 text-white text-md font-bold rounded-xl">
            {hours}
          </p>
        </div>
      </div>
      <MainTamplateForProducts Sliders={data} />
    </div>
  );
};

export default SaleSlider;
