import {useAuthStore} from "../store/AuthStore.ts";
import {useUserStore} from "../store/UserStore.ts";
import {useNavigate} from "react-router";
import Header from "../items/Header.tsx";

export default function ProfilePage() {
    const {login} = useAuthStore()
    const {
        bio,
        name,
        birthday,
        location,
        phone,
        gender,
        setBio,
        setName,
        setGender,
        setBirthday,
        setPhone,
        setLocation
    } = useUserStore()
    const navigate = useNavigate();

    const logout = () => {
        setBio('')
        setLocation('')
        setName('')
        setBirthday('')
        setGender('')
        setPhone('')
        navigate('/')
    }

    return (
        <div className="animate-fadeIn min-h-screen bg-gray-50">
            <Header/>


            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="bg-blue-100 p-6 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-800">{login}</h1>
                        <div className="flex space-x-4">
                            <a
                                href="/change"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Редактировать профиль
                            </a>
                            <button
                                onClick={logout}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Выйти из аккаунта
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row gap-6">

                    <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                        <h4 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Обо мне</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Биография</p>
                                <p className="text-gray-700 mt-1">{bio || 'Не указано'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Имя</p>
                                <p className="text-gray-700 mt-1">{name || 'Не указано'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Дата рождения</p>
                                <p className="text-gray-700 mt-1">{birthday || 'Не указано'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Местоположение</p>
                                <p className="text-gray-700 mt-1">{location || 'Не указано'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Пол</p>
                                <p className="text-gray-700 mt-1">{gender || 'Не указано'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Телефон</p>
                                <p className="text-gray-700 mt-1">{phone || 'Не указано'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3">
                        <div className="flex flex-col space-y-4">
                            <button
                                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 text-left transition-colors">
                                <span className="text-xl">Подписчики</span>
                            </button>
                            <button
                                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 text-left transition-colors">
                                <span className="text-xl">Подписки</span>
                            </button>
                            <button
                                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 text-left transition-colors">
                                <span className="text-xl">Посты</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}