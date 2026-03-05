import { useParams, Link } from "react-router";
import { useContext } from "react";
import { PostContext } from "../../components/context/PostContext";
import CategoryBatch from "../components/CategoryBatch";
import TogglerBtn from "../../components/TogglerBtn";

const SingleBlogPage = () => {
  const { slug} = useParams();
  const { postArr } = useContext(PostContext);
  const currentPost = postArr.find((post) => post.slug == slug);

  return (
    <div className="w-full h-full">
      <header className="dark:bg-zinc-900 bg-zinc-100 border-b border-gray-800 py-2">
        <title>Writers</title>
        <nav className="flex justify-end items-center container xl:max-w-7xl mx-auto">
          {/* right */}
          <div className="space-x-4 flex items-center">
            <Link
              to={"/"}
              className={
                "font-semibold dark:text-white hover:underline cursor-pointer transition-all duration-300 flex space-x-1 items-center px-3 py-2"
              }>
              <p>&lt;&lt; back</p>
            </Link>
            <TogglerBtn />
          </div>
        </nav>
      </header>
      {/* post */}
      <div className="xl:max-w-7xl mt-20 min-h-60 grid grid-cols-12 mx-auto py-5 content-center hover:scale-105 transition-all duration-300">
        {/* left */}
        <div className="col-span-2"></div>
        {/* content */}
        <div className="col-span-8 space-y-2 p-5 border border-gray-700 rounded-2xl">
          <p className="dark:text-white/50 text-black/50 text-sm">
            {currentPost.date}
          </p>
          <h2 className="text-xl font-semibold">{currentPost.title}</h2>
          <p className="dark:text-white/80 text-black/60">{currentPost.desc}</p>
          {/* category */}
          <div className="my-3 flex space-x-2">
            {currentPost.categories.map((category, index) => (
              <CategoryBatch name={category} key={index} />
            ))}
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default SingleBlogPage;