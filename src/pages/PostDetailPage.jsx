import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      console.log("Post ricevuto:", res.data);
      setPost(res.data.post);
    });
  }, []);

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <img
        className="img-fluid mb-3"
        src={`http://localhost:3000${post.image}`}
        alt={post.title}
      />
      <p>
        <em>{post.content}</em>
      </p>
      <p>{post.tags}</p>
    </div>
  );
}
