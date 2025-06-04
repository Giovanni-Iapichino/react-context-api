import PostCard from "./PostCard";
import { usePosts } from "../contexts/PostsContext";

export default function PostList() {
  const { posts } = usePosts();

  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-md-4 mb-4">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
