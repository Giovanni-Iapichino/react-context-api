import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostListPage from "./pages/PostListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts";
import PostDetailPage from "./pages/PostDetailPage";
import { PostsProvider } from "./contexts/PostsContext";

export default function App() {
  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayouts />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />

              <Route path="/post">
                <Route path="" element={<PostListPage />} />
                <Route path=":id" element={<PostDetailPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  );
}
