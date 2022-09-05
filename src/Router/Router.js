import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import PostsPage from "../pages/PostPage/PostsPage";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage/>} />
        <Route path="/posts" element={<PostsPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
