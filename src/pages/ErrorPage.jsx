import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-5xl font-semibold text-red-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="my-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page...
        </p>
          <Link
            to="/"
            className="text-black hover:text-blue-500 hover:underline active:scale-105  transition-all duration-300">
            Go back home
          </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
