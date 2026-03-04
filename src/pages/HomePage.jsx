import TheHeader from "../components/TheHeader";
import { PostContext } from "../components/context/PostContext";

const HomePage = () => {
  return (
    <>
      <TheHeader/>
      <div className="flex justify-center items-center w-full h-[80vh]">Home Page</div>
    </>
  );
};

export default HomePage;