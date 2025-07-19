import {useAuthStore} from "../store/AuthStore";
import {useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import Header from "../items/Header.tsx";
export default function RegistrPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuthStore();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const responce = await axios.post('http://127.0.0.1:8000/register', {login, password});
            auth.setAuth(
                {
                    login: responce.data.login
                }

            )
            navigate('/')

        } catch(err) {
            console.log(err);

        }
    }
    return (
        <div className={'bg-[#F9F9FB] min-h-screen'}>
            <Header/>
            <div className="flex justify-center mt-45 animate-fadeIn">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl text-2xl p-15 shadow-xl">
                <p className="text-3xl text-center font-semibold">Регистрация</p>
                <input
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className={'hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl'}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={'hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl'}
                    required
                />
                <button type="submit"
                        className={'text-xl w-full mt-5 p-2 border rounded-2xl bg-green-400 hover:bg-green-500 transition ease-in'}>
                    Зарегистрироваться
                </button>
                <p className={'text-center text-lg mt-5 hover:text-green-600 transition ease-in'}>
                    <a href="/login">Уже есть аккаунт? Войти</a>
                </p>
            </form>
        </div>

        </div>

    );
}