import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="mb-4 text-center">
            <h1 className="mb-3">{post.title}</h1>
            <img
              className="img-fluid rounded shadow-sm"
              src={`http://localhost:3000${post.image}`}
              alt={post.title}
            />
            <div className="mt-4">
              <p>
                <em>{post.content}</em>
              </p>
            </div>

            <div>
              <span className="badge bg-light text-dark me-2">{post.tags}</span>
            </div>

            <div className="text-end">
              <Link to="/post" className="btn btn-outline-primary">
                Torna ai post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
