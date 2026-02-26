"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axios";

interface Type {
  id: string;
  img: string;
}
const Slider = () => {
  const { data } = useQuery({
    queryKey: ["slider"],
    queryFn: async () => {
      const { data } = await axios.get<Type[]>("InneirApi/slider");
      return data;
    },
  });
  return (
    <div className="p-4 flex flex-col gap-4">
      <Swiper 
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el:".custom-pagination"
      }}
      
      modules={[Autoplay, Pagination]}
      className="mySwiper "
    >
      {data?.map((item) => (
        <SwiperSlide className="rounded-4xl"  key={item.id}><img  className="bg-cover " src={item.img} alt="" /></SwiperSlide>
      ))}
    </Swiper>
    <div className="custom-pagination flex justify-center "></div>
    </div>
  );
};

export default Slider;
