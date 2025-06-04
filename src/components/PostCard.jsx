import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="card h-100 shadow-sm rounded overflow-hidden">
      <img
        className="card-img-top object-fit-cover"
        src={`http://localhost:3000${post.image}`}
        alt={post.title}
      />
      <div className="card-header">
        <h2>{post.title}</h2>
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <p>{post.tags}</p>
      </div>
      <p>
        <Link className="btn btn-primary mt-auto" to={`/post/${post.id}`}>
          Mostra di più
        </Link>
      </p>
    </div>
  );
}
