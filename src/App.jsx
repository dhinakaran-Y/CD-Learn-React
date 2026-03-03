import { BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import NewBlog from "./pages/NewBlog";
import { PostProvider } from "./components/PostContext";
import SingleBlogPage from "./pages/SingleBlogPage";

const App = () => {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blogs" element={<BlogPage />}></Route>
          <Route path="/blogs/:id" element={<SingleBlogPage/>}></Route>
          <Route path="/new-blog" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;