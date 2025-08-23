import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuthStore } from "../store/AuthStore.ts";
import { IconLogo } from "../icons/IconLogo.tsx";
export function Header() {
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const { isAuthenticated, login, clearAuth } = useAuthStore();
  const loginer = () => {
    navigate("/login");
  };
  const logout = () => {
    clearAuth();
    navigate("/login");
  };
  return (
    <header className="w-full bg-[#F5F5FF] p-2">
      <div className="flex items-center justify-between">
        <a href="/" className={"ml-2"}>
          <IconLogo />
        </a>

        <div className="flex justify-center gap-15 bg-white px-10 py-2 rounded-lg">
          <button
            onClick={() => {
              setSelect(1);
              navigate("/");
            }}
          >
            <div
              className={`cursor-pointer  ${
                select === 1 ? "border-[#3328BF] border-b-2 " : null
              } hover:text-[#3328BF]`}
            >
              Домой
            </div>
          </button>
          <button
            onClick={() => {
              setSelect(2);
              navigate("/posts");
            }}
          >
            <div
              className={`cursor-pointer ${
                select === 2 ? "border-[#3328BF] border-b-2 " : null
              }  hover:text-[#3328BF] transition`}
            >
              Документация
            </div>
          </button>
          <button
            onClick={() => {
              setSelect(3);
              navigate("/settings");
            }}
          >
            <div
              className={`cursor-pointer ${
                select === 3 ? "border-b-2 border-[#3328BF]" : null
              }   hover:text-[#3328BF] transition`}
            >
              Настройки
            </div>
          </button>
        </div>
        <div className={"flex justify-end gap-10"}>
          {" "}
          {isAuthenticated ? (
            <>
              <button
                className="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                onClick={logout}
              >
                Выход
              </button>
              <a className={"mt-1"} href="/profile">
                {login}
              </a>
            </>
          ) : (
            <button
              onClick={loginer}
              className="py-1.5 mr-6 px-6 border rounded-xl bg-[#3328BF] text-white font-semibold hover:bg-[#251D8F] transition"
            >
              Вход
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
