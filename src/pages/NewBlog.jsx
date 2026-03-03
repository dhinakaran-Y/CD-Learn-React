import { NavLink } from "react-router";
import { useContext } from "react";
import { useNavigate } from "react-router";
import InputDiv from "../components/InputDiv";
import { PostContext } from "../components/PostContext";

const NewBlog = () => {
  const LOCAL_KEY = "Posts";
  const { postArr, setPostArr } = useContext(PostContext);
  const navigate = useNavigate();

  function addPost(e) {
    e.preventDefault();
    const { title, desc, categories } = e.target;

    const categoryArr = categories.value.split(",");
    const trimmedCategoryArr = categoryArr.map((category) => category.trim());

    // title
     const slugArr = title.value.split(" ");
     const trimmedSlugArr = slugArr.filter((slug) => {
       if (slug !== " " && slug !== " ") {
         return slug.trim().toLowerCase();
       }
     });
     const slug = trimmedSlugArr.join("-");

    // get date values
    const currentDate = new Date();
    // get month in string
    const monthString = currentDate.toLocaleString("default", {
      month: "long",
    });
    // get year
    const year = currentDate.getFullYear();
    // get date
    const date = currentDate.getDate();
    // Combine them
    const formattedDate = `${date}-${monthString}, ${year}`;
    
    const newPost = {
      id: postArr.length + 1,
      title: title.value,
      desc: desc.value,
      categories: trimmedCategoryArr,
      date: formattedDate,
      slug
    };

    setPostArr([newPost, ...postArr]);
    alert("✅ new blog posted successfully.")
    navigate("/blogs");
    e.target.reset();
  }
  return (
    <>
      <header className="bg-zinc-900 border-b border-gray-800 py-2">
        <title>New Blog</title>
        <nav className="flex justify-between items-center container xl:max-w-7xl mx-auto">
          {/* left */}
          <div className="">
            {/* logo */}
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="mt-3">
                <g fill="none">
                  <path
                    fill="#e3e3e3"
                    d="M19.174 8.653a3.82 3.82 0 0 1-1.12 2.707c-1.061 1.052-5.451 2.381-7.632 2.946a.58.58 0 0 1-.574-.153a.56.56 0 0 1-.153-.565c.564-2.19 1.894-6.59 2.946-7.642a3.83 3.83 0 0 1 2.707-1.12a3.75 3.75 0 0 1 1.894.508c.6.331 1.093.825 1.425 1.425a3.75 3.75 0 0 1 .507 1.894"
                  />
                  <path
                    fill="#fff"
                    d="M17.241 5.333a3.826 3.826 0 0 0-4.6.613c-1.053 1.052-2.382 5.452-2.947 7.642a.56.56 0 0 0 .112.496l8.19-8.189a3.5 3.5 0 0 0-.755-.562"
                  />
                  <path
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.174 8.653a3.82 3.82 0 0 1-1.12 2.707c-1.061 1.052-5.451 2.381-7.632 2.946a.58.58 0 0 1-.574-.153a.56.56 0 0 1-.153-.565c.564-2.19 1.894-6.59 2.946-7.642a3.83 3.83 0 0 1 2.707-1.12a3.75 3.75 0 0 1 1.894.508c.6.331 1.093.825 1.425 1.425a3.75 3.75 0 0 1 .507 1.894"
                  />
                  <path
                    fill="gray"
                    d="M15.347 9.61a.956.956 0 1 0 0-1.914a.956.956 0 0 0 0 1.913"
                  />
                  <path
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.678 9.322l-4.83 4.83"
                  />
                  <path
                    fill="#ffef5e"
                    d="M23 4.826L20.607 6.26l-2.87-2.87L19.175 1z"
                  />
                  <path
                    fill="gray"
                    d="m20.13 5.783l-1.464.976a3.65 3.65 0 0 0-1.425-1.425l.976-1.464z"
                  />
                  <path
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.174 15.348H4.826a1.913 1.913 0 1 0 0 3.826h11.478a1.913 1.913 0 1 1 0 3.826H1M15.347 9.61a.956.956 0 1 0 0-1.914a.956.956 0 0 0 0 1.913M23 4.826L20.607 6.26l-2.87-2.87L19.175 1zm-2.87.957l-1.464.976a3.65 3.65 0 0 0-1.425-1.425l.976-1.464z"
                  />
                </g>
              </svg>
              <p className="text-2xl text-yellow-brand font-bold">
                Write new blog
              </p>
            </div>
          </div>
          {/* right */}
          <div className="space-x-4">
            <NavLink
              to={"/blogs"}
              className={
                "font-semibold text-black hover:text-white cursor-pointer transition-all duration-300 flex space-x-1 items-center px-3 py-2 bg-yellow-brand rounded"
              }>
              back
            </NavLink>
          </div>
        </nav>
      </header>
      <div className="w-full">
        <form
          action=""
          className="w-xl mt-20 sm:2xl md:3xl xl:w-4xl mx-auto p-8 border space-y-5 border-white/10 rounded-2xl"
          onSubmit={(e) => addPost(e)}>
          <div className="mb-5">
            <h2
              className="text-xl text-orange-600 text-center font-semibold"
              id="dialog-title"></h2>
          </div>
          {/* title */}
          <div className="flex flex-col space-y-1">
            <input
              id={"title"}
              name={"title"}
              type={"text"}
              className="px-3 py-1 focus:outline-none border-b border-white/10"
              placeholder={"Title"}
              required
            />
          </div>
          {/* desc */}
          <div className="flex flex-col space-y-1">
            <textarea
              id="desc"
              name="desc"
              className="px-3 py-1 focus:outline-none border-b border-white/10"
              placeholder="Type your Article..."
              rows={6}
              required
            />
          </div>
          {/* category */}
          <div className="flex flex-col space-y-1">
            <input
              id={"categories"}
              name={"categories"}
              type={"text"}
              className="px-3 py-1 focus:outline-none"
              placeholder={"categories"}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-brand text-black px-3 py-1 text-center hover:brightness-90 active:scale-95 transition-all duration-300 cursor-pointer rounded-lg mt-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewBlog;