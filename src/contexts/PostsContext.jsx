import { createContext, useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const PostsContext = createContext();

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error("Errore nel recupero dei post", error));
  }, []);

  const postsData = { posts, setPosts };
  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
}

function usePosts() {
  return useContext(PostsContext);
}

export { PostsProvider, usePosts };
