"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "@/api/index";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setIsLogin } from "@/redux/features/isLogin";
import { toast } from "react-toastify";
interface userType {
  name?: string;
  email: string;
  password: string;
}
const Loginorregister = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const dispatch = useDispatch();
  useSelector((state: RootState) => state.login.isLogin);
  const route = useRouter();
  const { mutate: mutateRegister, isSuccess: isSuccessRegister } = useMutation({
    mutationFn: async (userRegister: userType) => {
      const { data } = await axios.post("/api/users/register", {
        name: userRegister.name,
        email: userRegister.email,
        password: userRegister.password,
      });
      return data;
    },
  });

  useEffect(() => {
    if (isSuccessRegister) {
      setIsLoginOpen(true);
      toast.success("you are rejestered please login", {
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
  }, [isSuccessRegister]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    mutate: mutateLogin,
    data: dataLogin,
    isSuccess: isSuccessLogin,
    isPending: isPendingLogin,
  } = useMutation({
    mutationFn: async (userLogin: userType) => {
      const { data } = await axios.post("/api/users/login", {
        email: userLogin.email,
        password: userLogin.password,
      });
      return data;
    },
  });

  const { register: registerLogin, handleSubmit: handelSubmitLogin } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    if (isSuccessLogin) {
      localStorage.setItem("token", dataLogin.token);
      dispatch(setIsLogin(true));
      route.push("/");
      toast.success("you are logined", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (localStorage.getItem("token") !== null) {
      route.push("/");
    }
  }, [isSuccessLogin]);
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center fixed top-1/2 left-1/2 -translate-1/2">
      {isLoginOpen ? (
        <div className="flex flex-col  p-10 shadow-lg shadow-black/10 rounded-2xl justify-center items-center gap-4">
          <p className="text-2xl">
            {t("loginOrRegister.login")}
            <span className="text-blue-600">{t("loginOrRegister.user")}</span>
          </p>
          <form
            onSubmit={handelSubmitLogin(({ email, password }) => {
              mutateLogin({ email: email, password: password });
            })}
            className="flex flex-col gap-4"
            action=""
          >
            <div className="flex flex-col gap-2">
              <label className="text-lg">{t("loginOrRegister.email")}</label>
              <input
                {...registerLogin("email", {
                  required: true,
                })}
                className="outline-none border border-gray-300 p-2 rounded-2xl"
                placeholder={t("loginOrRegister.typeHere")}
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg">{t("loginOrRegister.password")}</label>
              <input
                {...registerLogin("password", {
                  required: true,
                })}
                className="outline-none border border-gray-300 p-2 rounded-2xl"
                placeholder={t("loginOrRegister.typeHere")}
                type="password"
              />
            </div>
            <p className="text-sm">
              {t("loginOrRegister.createANewAccount")}{" "}
              <span
                onClick={() => {
                  setIsLoginOpen(false);
                }}
                className="text-blue-600 "
              >
                {t("loginOrRegister.clickHere")}
              </span>
            </p>
            <button
              type="submit"
              className="bg-blue-600 rounded-2xl text-white text-lg flex items-center justify-center"
            >
              {isPendingLogin ? <div className="loader"></div> : t("loginOrRegister.submit")}
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col p-6 shadow-lg shadow-black/10 rounded-2xl justify-center items-center gap-4">
          <p className="text-2xl">
            {t("loginOrRegister.register")}
            <span className="text-blue-600">{t("loginOrRegister.user")}</span>
          </p>
          <form
            onSubmit={handleSubmit(({ name, email, password }) => {
              mutateRegister({ name: name, email: email, password: password });
            })}
            className="flex flex-col gap-4"
            action=""
          >
            <div className="flex flex-col gap-2">
              <label className="text-lg">{t("loginOrRegister.name")}</label>
              <input
                {...register("name", {
                  required: true,
                })}
                className="outline-none border border-gray-300 p-2 rounded-2xl"
                placeholder={t("loginOrRegister.typeHere")}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg">{t("loginOrRegister.email")}</label>
              <input
                {...register("email", {
                  required: true,
                })}
                className="outline-none border border-gray-300 p-2 rounded-2xl"
                placeholder={t("loginOrRegister.typeHere")}
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg">{t("loginOrRegister.password")}</label>
              <input
                {...register("password", {
                  required: true,
                })}
                className="outline-none border border-gray-300 p-2 rounded-2xl"
                placeholder={t("loginOrRegister.typeHere")}
                type="password"
              />
            </div>
            <p className="text-sm">
              {t("loginOrRegister.alreadyHaveAccount")}{" "}
              <span
                onClick={() => {
                  setIsLoginOpen(true);
                }}
                className="text-blue-600"
              >
                {t("loginOrRegister.clickHere")}
              </span>
            </p>
            <button
              type="submit"
              className="bg-blue-600 rounded-2xl text-white text-lg "
            >
              {t("loginOrRegister.createAccount")}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Loginorregister;
