import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="card h-100">
      <div className="card-header">
        <h2>{post.title}</h2>
      </div>
      <img
        className="img-fluid"
        src={`http://localhost:3000${post.image}`}
        alt={post.title}
      />
      <div className="card-body mt-2">
        <p>{post.tags}</p>
      </div>
      <p>
        <Link to={`/post/${post.id}`}>Mostra di più</Link>
      </p>
    </div>
  );
}
