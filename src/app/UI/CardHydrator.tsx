"use client";

import { clearAll, hydrateCArd } from "@/redux/features/addToBasket";
import { setIsLogin } from "@/redux/features/isLogin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CardHydrator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setIsLogin(true));
    } else {
      dispatch(setIsLogin(false));
     
      
    }
  }, []);
  useEffect(() => {
    dispatch(hydrateCArd());
  }, []);
  return null;
};

export default CardHydrator;
