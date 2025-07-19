import {useState} from 'react'
import axios from 'axios'
import {useAuthStore} from "../store/AuthStore.ts";

export default function CreatePost() {
    const [title, setTitle] = useState<string>('')
    const {login} = useAuthStore()
    const [content, setContent] = useState<string>('')

    const createPost = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/post',
                {title, content, user: login, likes: 0})
            console.log(response)
            setContent('')
            setTitle('')
        } catch {
            console.log('Error creating post')
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Создать новый пост</h2>
            <form onSubmit={createPost} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Заголовок
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите заголовок"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                        Содержание
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Напишите содержание поста"
                        rows={4}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Создать пост
                </button>
            </form>
        </div>
    )
}