import { useParams } from "react-router";
import { useContext } from "react";
import { PostContext } from "../components/PostContext";
import CategoryBatch from "../components/CategoryBatch";

const SingleBlogPage = () => {
  const { slug} = useParams();
  const { postArr } = useContext(PostContext);
  const currentPost = postArr.find((post) => post.slug == slug);

  return (
    <div className="w-full h-full">
      <div className="xl:max-w-7xl mt-20 min-h-60 grid grid-cols-12 mx-auto py-5 content-center hover:scale-105 transition-all duration-300">
        {/* left */}
        <div className="col-span-2"></div>
        {/* content */}
        <div className="col-span-8 space-y-2 p-5 border border-gray-700 rounded-2xl">
          <p className="text-white/50 text-sm">{currentPost.date}</p>
          <h2 className="text-xl font-semibold">{currentPost.title}</h2>
          <p className="text-white/80">{currentPost.desc}</p>
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
