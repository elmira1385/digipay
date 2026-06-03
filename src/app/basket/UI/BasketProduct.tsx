"use client";
import { clearAll, setQty } from "@/redux/features/addToBasket";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const BasketProduct = () => {
  const token=()=>localStorage.getItem("token")
  const product = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();
  const { t } = useTranslation();
 
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {token() && product.map((item) => (
        <div className="flex justify-between items-center" key={item.id}>
          <img width={100} src={item.img} alt="" />
          <select
            value={item.qty}
            onChange={(e) =>
              dispatch(setQty({ id: item.id, qty: Number(e.target.value) }))
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default BasketProduct;
