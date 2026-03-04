import { Link, useNavigate } from "react-router";
import Card from "../components/Card";
import { useContext, useEffect } from "react";
import NewBlog from "./NewBlog";
import { PostContext } from "../components/context/PostContext";
import TogglerBth from "../components/TogglerBtn";

const BlogPage = () => {
  const { postArr , passwordVal } = useContext(PostContext);
  const navigate = useNavigate()

  useEffect(() => {
      if (passwordVal === null) {
        alert("You are not a valid user...")
        navigate("/");
      }      
  },[passwordVal,navigate])
  return (
    <>
      <header className="dark:bg-zinc-900 bg-zinc-100 border-b border-gray-800 py-2">
        <title>Writers</title>
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
              <p className="text-2xl text-yellow-brand font-bold">Writers</p>
            </div>
          </div>
          {/* right */}
          <div className="space-x-4 flex items-center">
            <Link
              to={"/new-blog"}
              className={
                "font-semibold text-black hover:text-white cursor-pointer transition-all duration-300 flex space-x-1 items-center px-3 py-2 bg-yellow-brand rounded"
              }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18.68 5.32a4.49 4.49 0 0 0-6.36 0c-1.23 1.22-2.87 8-3.06 8.81a.49.49 0 0 0 .14.47a.5.5 0 0 0 .47.14c.77-.19 7.58-1.83 8.81-3.06a4.49 4.49 0 0 0 0-6.36M15.5 10A1.5 1.5 0 1 1 17 8.5a1.5 1.5 0 0 1-1.5 1.5m8.35-5.85l-4-4a.49.49 0 0 0-.41-.15a.52.52 0 0 0-.37.24l-1.5 2.5a.49.49 0 0 0 .08.61l3 3a.47.47 0 0 0 .35.15a.5.5 0 0 0 .26-.07l2.5-1.5a.52.52 0 0 0 .24-.37a.49.49 0 0 0-.15-.41M17 18H5a.91.91 0 0 1-1-1a.91.91 0 0 1 1-1h2a1 1 0 0 0 0-2H5a2.91 2.91 0 0 0-3 3a2.91 2.91 0 0 0 3 3h12a1 1 0 1 1 0 2H1a1 1 0 0 0 0 2h16a3 3 0 0 0 0-6"
                />
              </svg>
              <p>Write Post</p>
            </Link>
            <TogglerBth />
          </div>
        </nav>
      </header>
      {/* cards */}
      {postArr.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </>
  );
};

export default BlogPage;
