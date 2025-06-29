// RegistrPage.tsx
import { useAuthStore } from "../store/AuthStore";
import { useState } from "react";

export default function RegistrPage() {
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const { setLogin, setPassword } = useAuthStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLogin(loginInput);
        setPassword(passwordInput);
        setLoginInput('');
        setPasswordInput('');
        alert('Данные сохранены!');
    };

    return (
        <div className="flex justify-center mt-60">
            <form onSubmit={handleSubmit} className="bg-amber-50/60 rounded-xl text-2xl p-15 shadow-xl">
                <p className="text-3xl text-center font-semibold">Регистрация</p>
                <input
                    type="text"
                    placeholder="Логин"
                    value={loginInput}
                    onChange={(e) => setLoginInput(e.target.value)}
                    className="block border rounded-xl mt-5 p-2"
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="block border rounded-xl mt-5 p-2"
                    required
                />
                <button type="submit" className="w-full mt-7 p-2 border rounded-2xl bg-green-400">
                    Зарегистрироваться
                </button>
                <p className="text-center text-lg mt-5">
                    <a href="/login">Уже есть аккаунт? Войти</a>
                </p>
            </form>
        </div>
    );
}