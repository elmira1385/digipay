"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { deleteOne, setProduct } from "@/redux/features/addToBasket";
import { toast } from "react-toastify";

export type TSlider = {
  id: string;
  img: string;
  ghest: string;
  toman: string;
  ghestPayment: string;
  brand: string;
  information: string;
  mainPayment: string;
  darsad: string;
  salePayment: string;
};
export interface IProps {
  Sliders: TSlider[];
}

const MainTamplateForProducts = ({ Sliders }: IProps) => {
  const token = () => localStorage.getItem("token");
  const { t } = useTranslation();
  const product = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <Swiper
      className=" w-full pr-2"
      spaceBetween={16}
      slidesPerView="auto"
      grabCursor={false}
      breakpoints={{
        320: { slidesPerView: 2.2 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3.2 },
      }}
    >
      {Sliders?.map((item) => {
        const cartId = product.find((p) => p.id === item.id);
        const qty = cartId?.qty || 0;
        return (
          <SwiperSlide
            key={item.id}
            className="bg-white p-1 rounded-2xl  flex flex-col "
          >
            <Link href={`/${item.id}`}>
              <div className="  relative">
                <img
                  className="rounded-2xl aspect-square object-cover"
                  src={item.img}
                  alt="image"
                />

                <div className="flex justify-between mx-1 items-center rounded-full absolute bottom-0 left-0 right-0 p-1 bg-gray-200/50">
                  <div className="flex flex-col rounded-full p-1 bg-blue-500 text-sm text-white justify-center items-center">
                    <span className="font-bold  h-2.5 ">4</span>
                    <span>{t(`${item.ghest}`)}</span>
                  </div>
                  <div className="flex gap-1 text-sm justify-center items-center">
                    <p>{t(`${item.ghestPayment}`)}</p>
                    <p className="text-[0.75rem] text-gray-800 font-bold">
                      {t(`${item.toman}`)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex flex-col justify-between gap-2 p-2 h-50">
              <div className="flex flex-col  items-start ">
                <span className="text-[0.75rem] text-gray-500">
                  {t(`${item.brand}`)}
                </span>
                <span className="text-start  text-[1rem]">
                  {t(`${item.information}`)}
                </span>
              </div>
              <div className="flex flex-col items-end ">
                <div className="flex justify-center items-center gap-2">
                  {item.darsad && (
                    <p className="py-0.5 px-2.5 text-[12px] font-bold text-white bg-red-500 rounded-full">
                      {t(`${item.darsad}`)}
                    </p>
                  )}
                  {item.mainPayment && (
                    <p className="text-sm text-gray-500 line-through">
                      {t(`${item.mainPayment}`)}
                    </p>
                  )}
                </div>

                <div className="flex justify-center items-center gap-0.5 ">
                  <p className=" text-[16px]">{t(`${item.salePayment}`)}</p>
                  <p className="text-sm text-gray-500 ">{t(`${item.toman}`)}</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                {qty === 0 ? (
                  <button
                    onClick={() => {
                      if (token()) {
                        dispatch(setProduct(item));
                      } else {
                        toast.info(`${t("pleaseLoginFirst")}`, {
                          position: "top-left",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        
                        });
                      }
                    }}
                    className="p-2 text-[12px] font-semibold text-white bg-blue-500 rounded-xl "
                  >
                    {t("addToBasket")}
                  </button>
                ) : (
                  <div className="flex justify-between  px-4 py-2 text-[12px] font-bold text-white bg-blue-500 rounded-xl ">
                    <p className="px-1"
                      onClick={() => {
                        dispatch(setProduct(item));
                      }}
                    >
                      +
                    </p>
                    <p className="px-1">{qty}</p>
                    <p className="px-1"
                      onClick={() => {
                        dispatch(deleteOne(item.id));
                      }}
                    >
                      -
                    </p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainTamplateForProducts;
