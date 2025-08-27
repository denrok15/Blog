import { Header, CreatePost } from "client/components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/AuthStore.ts";

interface Post {
  title: string;
  content: string;
  user: string;
  likes: number;
}

export function PostsPage() {
  const { isAuthenticated } = useAuthStore();
  const [posts, setPosts] = useState<Post[]>([]);
  const [islike, setIsLike] = useState(false);
  const savelike = async (post: Post) => {
    try {
      const responce = await axios.put("http://127.0.0.1:8000/like", {
        title: post.title,
        content: post.content,
        user: post.user,
        likes: post.likes,
        islike: islike,
      });
      console.log(responce);
      setIsLike(!islike);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="animate-fadeIn min-h-screen bg-gray-100">
      <Header />
      {isAuthenticated ? (
        <div className="container mx-auto px-4 py-8">
          <CreatePost />
          <div className="mt-8 space-y-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    <span>{post.user}</span> {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.content}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <button onClick={() => savelike(post)}>
                      <span>
                        {" "}
                        <img src="/icons/heart.svg" alt="" />
                        {post.likes}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Авторизируйся чтобы видеть посты других пользователей</div>
      )}
    </div>
  );
}
