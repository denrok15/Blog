import Header from "../items/Header.tsx";
import CreatePost from "../items/CreatePost.tsx";
import axios from 'axios'
import {useEffect, useState} from "react";

interface Post {
    title: string;
    content: string;
    user: string;
    likes: number;
}

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="animate-fadeIn min-h-screen bg-gray-100">
            <Header/>
            <div className="container mx-auto px-4 py-8">
                <CreatePost/>
                <div className="mt-8 space-y-6">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    <span>{post.user}</span> {post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.content}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span> <img src="/icons/heart.svg" alt=""/>{post.likes}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}