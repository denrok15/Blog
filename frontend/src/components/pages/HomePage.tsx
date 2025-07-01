import Header from "../items/Header.tsx";
import {useNavigate} from "react-router";

export default function HomePage() {
    const navigate = useNavigate();
    const lets_start = () => {
        navigate('/login')
    }
    return (
        <div className={'animate-fadeIn bg-[#F9F9FB] '}>
            <Header/>
            <div className={'mt-0 h-full'}>
                <div className={'flex justify-center mt-5'}>
                    <span
                        className={'px-5 py-1 mt-2 rounded-4xl border border-gray-300 text-center text-l'}>BlogSprout</span>
                </div>

                <h4 className={'mt-3 text-center text-5xl font-semibold'}>Узнавай интересные новости <br/> самым первым!
                </h4>
                <span className={'flex justify-center text-center mt-5 font-semibold'}>
                    <img className={'mr-1'} src="/icons/user-circle.svg" alt=""/>
                    От Данила Жилина
                    <img className={'ml-1 mr-1'} src="/icons/calendar.svg" alt=""/>
                    23 июля, 15 секунд назад
                </span>
                <div className={'flex justify-center'}>
                    <img className={'mt-10'} src="/icons/Novost.png" alt=""/>

                </div>
                <div className={'flex justify-start font-semibold text-xl ml-58 mt-3'}>
                    <img className={'mr-3'} src="/icons/user-circle.svg" alt=""/>
                    Смотрите кого встретил под водой) <br/> А вы любите подводных обитателей?
                    <div className={'flex'}>
                        0  <img src="/icons/heart.svg" alt=""/> 0 <img src="/icons/message-square.svg" alt=""/>
                    </div>

                </div>


                <h4 className={'mt-10 text-center text-5xl font-semibold'}>Оставляй комментарии и лайки<br/> тем кто
                    понравится
                </h4>
                <div className={'flex justify-center'}>
                    <button onClick={lets_start}
                        className="py-2 mr-6 mt-10 px-5 border rounded-xl bg-[#3328BF] text-xl text-white font-semibold hover:bg-[#251D8F] transition">Давай
                        начнем!
                    </button>
                </div>


            </div>


        </div>
    )
}