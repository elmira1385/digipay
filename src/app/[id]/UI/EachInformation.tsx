"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axios";
import { TSlider } from "@/app/UI/MainTamplateForProducts";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import {
  deleteOne,
  setProduct,
  TCartProduct,
} from "@/redux/features/addToBasket";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const EachInformation = ({ postId }: { postId: string }) => {
  const { t } = useTranslation();
  const route = useRouter();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.cart.products);
  const { data } = useQuery({
    queryKey: ["Work"],
    queryFn: async () => {
      const { data } = await axios.get<TCartProduct[]>(
        "InneirApi/sliderForSale",
      );
      return data;
    },
  });
  const item = data?.find((item) => item.id === postId);
  if (!item) return <p>Loading...</p>;
  const each = product.find((i) => i.id === item?.id);
  const qty = each?.qty || 0;
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="  text-t-slate-700 text-sm flex">
        <p
          onClick={() => {
            route.push("/");
          }}
        >
          {t("home")}/
        </p>
        <p> {t(`${item.brand}`)}</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className=" p-10 bg-slate-100 rounded-lg ">
            <img className="rounded-lg" src={item?.img} alt="" />
          </div>
        </div>
        <div className="flex flex-col p-4 gap-6 items-start justify-start">
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="text-3xl font-semibold text-slate-800">
              {t(`${item.brand}`)}
            </h1>
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#00C950"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#00C950"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#00C950"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#00C950"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#D1D5DB"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>
          </div>
          <p className="text-2xl font-semibold text-t-slate-800">
            {t(`${item.mainPayment}`)}
            <span> {t(`${item.toman}`)}</span>
          </p>
          <>
            {qty === 0 ? (
              <button
                onClick={() => {
                  dispatch(setProduct(item));
                }}
                className="bg-slate-800 text-white px-10 py-3 text-sm font-medium rounded hover:bg-slate-900 active:scale-95 transition"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-end gap-5 ">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-slate-800 font-semibold">
                    {t("count")}
                  </p>
                  <div className=" flex items-center justify-between gap-2 p-2  rounded border border-slate-200 text-sm text-slate-600">
                    <button
                      onClick={() => {
                        dispatch(deleteOne(item?.id));
                      }}
                      className=" select-none"
                    >
                      -
                    </button>
                    <p>{qty}</p>
                    <button
                      onClick={() => {
                        dispatch(setProduct(item));
                      }}
                      className=" select-none"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    route.push("/basket");
                  }}
                  className="bg-slate-800 text-white px-10 py-3 text-sm font-medium rounded hover:bg-slate-900 active:scale-95 transition"
                >
                  {t("seeBasket")}
                </button>
              </div>
            )}
          </>

          <div className="flex flex-col gap-4 text-slate-500">
            <p className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-earth text-slate-400"
                aria-hidden="true"
              >
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              {t("FreeShippingWorldwide")}
            </p>
            <p className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card text-slate-400"
                aria-hidden="true"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
              {t("SecuredPayment")}
            </p>
            <p className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user text-slate-400"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              {t("TrustedByTopBrands")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachInformation;
