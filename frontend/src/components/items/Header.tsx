import {useNavigate} from "react-router";
import {useState} from "react";

export default function Header() {
    const [select, setSelect] = useState(0)
    const navigate = useNavigate();
    const login = () => {
        navigate("/login");
    }


    return (
        <header className="w-full bg-[#F5F5FF] p-2">
            <div className="flex items-center justify-between">

                <img className={'ml-2'} src="/icons/Logo.svg" alt="Логотип"/>


                <div className="flex justify-center gap-15 mr-8 bg-white px-10 py-2 rounded-lg">

                    <button onClick={() => setSelect(1)}>
                            <div className={`cursor-pointer  ${select === 1?'border-[#3328BF] border-b-2 ':null} hover:text-[#3328BF]`}>Домой</div>
                    </button>
                    <button onClick={() => setSelect(2)}>
                            <div className={`cursor-pointer ${select === 2? 'border-[#3328BF] border-b-2 ':null }  hover:text-[#3328BF] transition`}>Документация</div>
                    </button>
                    <button onClick={() => setSelect(3)}>

                            <div className={`cursor-pointer ${select === 3? 'border-b-2 border-[#3328BF]':null}   hover:text-[#3328BF] transition`}>Настройки</div>

                    </button>

                </div>

                <button onClick={login}
                        className="py-2 mr-6 px-7 border rounded-xl bg-[#3328BF] text-xl text-white font-semibold hover:bg-[#251D8F] transition">
                    Вход
                </button>
            </div>
        </header>
    );
}