import { useAuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router";
import axios from "axios";
import { Header } from "client/components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export function RegistrPage() {
  const schema = yup.object({
    login: yup.string().required("Логин обязателен"),
    password: yup.string().required("Пароль обязателен"),
  });
  type FormData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const auth = useAuthStore();
  const onSubmit = async (data: FormData) => {
    try {
      const responce = await axios.post("http://127.0.0.1:8000/register", {
        login: data.login,
        password: data.password,
      });
      auth.setAuth({
        login: responce.data.login,
      });
      reset();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={"bg-[#F9F9FB] min-h-screen"}>
      <Header />
      <div className="flex justify-center mt-45 animate-fadeIn">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-xl text-2xl p-15 shadow-xl"
        >
          <p className="text-3xl text-center font-semibold">Регистрация</p>
          <input
            type="text"
            placeholder="Логин"
            className={
              "hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl"
            }
            {...register("login")}
          />
          {errors.login && (
            <p className="text-red-500 text-sm mt-1">{errors.login.message}</p>
          )}
          <input
            type="password"
            placeholder="Пароль"
            className={
              "hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl"
            }
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <button
            type="submit"
            className={
              "text-xl w-full mt-5 p-2 border rounded-2xl bg-green-400 hover:bg-green-500 transition ease-in"
            }
          >
            Зарегистрироваться
          </button>
          <p
            className={
              "text-center text-lg mt-5 hover:text-green-600 transition ease-in"
            }
          >
            <a href="/login">Уже есть аккаунт? Войти</a>
          </p>
        </form>
      </div>
    </div>
  );
}
