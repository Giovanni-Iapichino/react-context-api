import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function PostList() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error("Errore nel recupero dei post", error));
  }, []);

  return (
    <div className="row">
      {post.map((post) => (
        <div key={post.id} className="col-md-4 mb-4">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
