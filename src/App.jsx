import { BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage";
import { PostProvider } from "./components/context/PostProvider";
import MovieLookHomePage from "./1-Task-MovieLooks/pages/MovieLookHomePage";
import ArticlesHomePage from "./2-Task-360-Articles/pages/360ArticlesHomePage";
import ComponentsHomePage from "./3-Task-Components/pages/ComponentsHomePage";
import MovieBufferApp from "./4-Task-Movie-Buffer/pages/MovieBufferApp";
import BlogPage from "./5-Task-Blogs/pages/BlogPage";
import NewBlog from "./5-Task-Blogs/pages/NewBlog";
import SingleBlogPage from "./5-Task-Blogs/pages/SingleBlogPage";
import SignInPage from "./5-Task-Blogs/pages/SignInPage";
import TodoPage from "./6-Task-Quotes/pages/TodoPage";

const App = () => {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* movie look (movie card component) */}
          <Route path="/movie-looks" element={<MovieLookHomePage/>}/>
          {/* 360 Articles */}
          <Route path="/360-articles" element={<ArticlesHomePage/>}/>
          {/* components */}
          <Route path="/components" element={<ComponentsHomePage/>}/>
          {/* movie buffer */}
          <Route path="/movies-buffer" element={<MovieBufferApp/>}/>
          {/* blog page */}
          <Route path="/sign-in" element={<SignInPage/>}></Route>
          <Route path="/blogs" element={<BlogPage/>}/>
          <Route path="/blogs/:slug" element={<SingleBlogPage/>}></Route>
          <Route path="/new-blog" element={<NewBlog />} />
          {/* quotes */}
          <Route path="/tasks" element={<TodoPage/>}/>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;