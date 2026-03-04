import CategoryBatch from "./CategoryBatch";
import { Link} from "react-router";

const Card = ({...post}) => {    
  return (
    <div className="w-full border-b border-gray-700">
      <div className="xl:max-w-7xl min-h-60 grid grid-cols-12 mx-auto py-5 content-center hover:scale-105 transition-all duration-300">
        {/* left */}
        <div className="col-span-9 space-y-2">
          <p className="dark:text-white/50 text-sm text-black/50">{post.date}</p>
          <h2 className="text-xl font-semibold capitalize">{post.title}</h2>
          <p className="line-clamp-2 dark:text-white/80 text-black/70">{post.desc}</p>
          {/* category */}
          <div className="my-3 flex space-x-2">
            {post.categories.map((category, index) => (
              <CategoryBatch name={category} key={index} />
            ))}
          </div>
        </div>
        {/* right */}
        <div className="col-span-3 justify-items-center content-center">
          <Link to={`/blogs/${post.slug}`}>
            <button
              type="button"
              className="flex py-2 px-4 rounded-lg border border-gray-700 cursor-pointer hover:brightness-105 hover:scale-110 transition-all duration-300 space-x-2 items-center">
              <p>View Article</p>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"
                  />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
