import {useAuthStore} from "../store/AuthStore.ts";
import {useUserStore} from "../store/UserStore.ts";

export default function ProfilePage() {
    const {login, email} = useAuthStore()
    const {bio,name,birthday,location,phone,gender} = useUserStore()
    return (
        <>
            <div className={'flex justify-center bg-amber-50/60 mr-40 ml-40 '}>
                <div>
                    <div className={'bg-blue-100 h-3/4 w-full'}>
                        <a href="/change">Редактировать профиль</a>

                    </div>
                    <h2>{login}</h2>

                </div>

            </div>

            <h4>{email}</h4>
            <div className={'flex justify-start mt-25 ml-10 gap-15'}>
                <div className={'bg-amber-50/60 p-5 w-1/8 rounded lg'}>
                    <h4 className={'text-2xl font-semibold text-start'}>About</h4>
                    <p className={'mt-5'}>{bio?bio:'Не указано'}</p>
                    <p className={'mt-5'}>{name?name:'Не указано'}</p>
                    <p className={'mt-5'}>{birthday?birthday:'Не указано'}</p>
                    <p className={'mt-5'}>{location?location:'Не указано'}</p>
                    <p className={'mt-5'}>{gender?gender:'Не указано'}</p>
                    <p className={'mt-5'}>{phone?phone:'Не указано'}</p>
                </div>
                <div className={'bg-amber-50/60 p-5 w-1/4 rounded lg'}>
                    <button className={'ml-3 text-xl'}>Подписчики</button>
                    <button className={'ml-3 text-xl'}>Подписки</button>
                    <button className={'ml-3 text-xl'}>Посты</button>
                </div>

            </div>

        </>
    )
}