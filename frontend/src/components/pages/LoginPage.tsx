import {useAuthStore} from "../store/AuthStore.ts";
import {useState} from "react";
import {useNavigate} from "react-router";


export default function LoginPage() {
    console.log('dsfdsfdsfsdfd')
    const navigate = useNavigate();

    const [llogin, setLlogin] = useState<string>('');
    const [lpassword, setLpassword] = useState<string>('');
    const {login, password} = useAuthStore();
    console.log(login, password)
    const handesubmit =(e:React.FormEvent) => {
        e.preventDefault();
        console.log('los')

        if (login === llogin && password === lpassword) {
            navigate('/')
            console.log('login');

        } else {
            console.log('неверный логин или пароль');
        }
    }


    return (
        <div className={'flex justify-center mt-60  animate-fadeIn'}>
            <form onSubmit={handesubmit} className={'bg-amber-50/60 shadow-xl rounded-2xl text-2xl p-15 '}>
                <p className={'text-3xl text-center font-semibold'}>Вход</p>
                <div className={'flex justify-center'}>
                    <input type="text"
                           placeholder="login"
                           value={llogin}
                           onChange={(e) => setLlogin(e.target.value)}
                            className={'hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl'}
                    />
                </div>
                <div className={'flex justify-center'}>
                    <input type="password"
                           placeholder="password"
                           value={lpassword}
                           onChange={(e) => setLpassword(e.target.value)}
                           className={'hover:border-green-600 transition ease block border rounded-xl mt-5 p-2 placeholder:text-xl'}
                    />
                </div>
                <div className={'flex justify-center'}>
                    <button type={'submit'} className={'text-xl w-full mt-5 p-2 border rounded-2xl bg-green-400 hover:bg-green-500 transition ease-in'}>Войти в аккаунт</button>
                </div>


                <p className={'text-center text-lg mt-5 hover:text-green-600 transition ease-in'}><a  href="/registr">Нет аккаунта? Зарегестрируйся!</a></p>

            </form>
        </div>
    )
}