"use client"
import { useQuery } from '@tanstack/react-query';
import axios from '@/api/axios';
import {  TSlider } from '@/app/UI/MainTamplateForProducts';
import { useTranslation } from 'react-i18next';

const EachInformation = ({postId}:{postId:string}) => {
    const{t}=useTranslation()
    const { data } = useQuery({
    queryKey: ["Work"],
    queryFn: async () => {
      const { data } = await axios.get<TSlider[]>("InneirApi/sliderForSale");
      return data;
    },
});
const filters=data?.filter((item)=>(item.id===postId));

  return (
    <div>
        {filters?.map((item)=>(
            <p key={item.id}>{t(`${item.brand}`)}</p>
        ))}
    </div>
  )
}

export default EachInformation