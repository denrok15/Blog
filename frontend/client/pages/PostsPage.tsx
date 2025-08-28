import { Header, CreatePost, Post } from "client/components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/AuthStore.ts";

export interface Post {
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
          <Post posts={posts} saveLike={savelike} />
        </div>
      ) : (
        <div>Авторизируйся чтобы видеть посты других пользователей</div>
      )}
    </div>
  );
}
