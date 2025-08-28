import { IconHeart } from "client/icons";
import type { Post } from "client/pages/PostsPage";
interface PostProps {
  posts: Post[];
  saveLike: (post: Post) => void;
}
export function Post({ posts, saveLike }: PostProps) {
  return (
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
              <button onClick={() => saveLike(post)}>
                <span>
                  <IconHeart />
                  {post.likes}
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
