import {useAuthStore} from "../store/AuthStore.ts";
import {useState} from "react";
import {useNavigate} from "react-router";
import Header from "../items/Header.tsx";
import axios from "axios";


export default function LoginPage() {
    const navigate = useNavigate();
    const [login, setlogin] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const auth = useAuthStore();

    const handesubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            const responce = await axios.post('http://127.0.0.1:8000/login', {login: login, password: password});
            navigate('/')
            auth.setAuth(
                {
                    login: responce.data.login
                }
            )

        } catch(err) {

            console.log(err)

        }

    }


    return (
        <div className={'bg-[#F9F9FB] min-h-screen'}>
            <Header />
            <div className={'flex justify-center mt-45  animate-fadeIn'}>
                <form onSubmit={handesubmit} className={'bg-white shadow-xl rounded-2xl text-2xl p-15 '}>
                    <p className={'text-3xl text-center font-semibold'}>Вход</p>
                    <div className={'flex justify-center'}>
                        <input type="text"
                               placeholder="login"
                               value={login}
                               onChange={(e) => setlogin(e.target.value)}
                               className={'hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl'}
                        />
                    </div>
                    <div className={'flex justify-center'}>
                        <input type="password"
                               placeholder="password"
                               value={password}
                               onChange={(e) => setpassword(e.target.value)}
                               className={'hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl'}
                        />
                    </div>
                    <div className={'flex justify-center'}>
                        <button type={'submit'}
                                className={'text-xl w-full mt-5 p-2 border rounded-2xl bg-green-400 hover:bg-green-500 transition ease-in'}>Войти
                            в аккаунт
                        </button>
                    </div>


                    <p className={'text-center text-lg mt-5 hover:text-green-600 transition ease-in'}><a
                        href="/registr">Нет аккаунта? Зарегестрируйся!</a></p>

                </form>
            </div>
        </div>

    )
}