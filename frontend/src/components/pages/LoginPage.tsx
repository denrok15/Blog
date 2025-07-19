import {useAuthStore} from "../store/AuthStore.ts";
import {useState} from "react";
import {useNavigate} from "react-router";
import Header from "../items/Header.tsx";
import axios from "axios";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm} from "react-hook-form";

export default function LoginPage() {
    const navigate = useNavigate();
    const auth = useAuthStore();

    const schema = yup.object({
        login: yup.string().required("Логин обязателен"),
        password: yup.string().required('Пароль обязателен')
    });

    type FormData = yup.InferType<typeof schema>;

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const [serverError, setServerError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        setServerError(null);

        try {
            const response = await axios.post('http://127.0.0.1:8000/login', {
                login: data.login,
                password: data.password
            });

            reset();
            auth.setAuth({
                login: response.data.login
            });
            navigate('/');
        } catch (err) {
            console.error(err);
            setServerError("Неверный логин или пароль");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={'bg-[#F9F9FB] min-h-screen'}>
            <Header/>
            <div className={'flex justify-center mt-45 animate-fadeIn'}>
                <form onSubmit={handleSubmit(onSubmit)} className={'bg-white shadow-xl rounded-2xl text-2xl p-15'}>
                    <p className={'text-3xl text-center font-semibold'}>Вход</p>

                    {serverError && (
                        <div className="text-red-500 text-center mb-4">
                            {serverError}
                        </div>
                    )}

                    <div className={'flex justify-center flex-col items-center'}>
                        <input
                            type="text"
                            placeholder="login"
                            {...register('login')}
                            className={'hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl w-full max-w-xs'}
                        />
                        {errors.login && (
                            <p className="text-red-500 text-sm mt-1">{errors.login.message}</p>
                        )}
                    </div>

                    <div className={'flex justify-center flex-col items-center'}>
                        <input
                            type="password"
                            placeholder="password"
                            {...register('password')}
                            className={'hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl w-full max-w-xs'}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <div className={'flex justify-center mt-5'}>
                        <button
                            type={'submit'}
                            disabled={isLoading}
                            className={'text-xl w-full max-w-xs p-2 border rounded-2xl bg-green-400 hover:bg-green-500 transition ease-in disabled:bg-gray-400'}
                        >
                            {isLoading ? 'Загрузка...' : 'Войти в аккаунт'}
                        </button>
                    </div>

                    <p className={'text-center text-lg mt-5 hover:text-green-600 transition ease-in'}>
                        <a href="/registr">Нет аккаунта? Зарегистрируйся!</a>
                    </p>
                </form>
            </div>
        </div>
    )
}