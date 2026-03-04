import { BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import NewBlog from "./pages/NewBlog";
import { PostProvider } from "./components/context/PostProvider";
import SingleBlogPage from "./pages/SingleBlogPage";
import TodoPage from "./pages/TodoPage";
import SignInPage from "./pages/SignInPage";

const App = () => {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-in" element={<SignInPage/>}></Route>
          <Route path="/blogs" element={<BlogPage/>}/>
          <Route path="/blogs/:slug" element={<SingleBlogPage/>}></Route>
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/quotes" element={<TodoPage/>}/>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;