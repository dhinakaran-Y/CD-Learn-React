import TheHeader from "../components/TheHeader";
import Anchor2 from "../components/Anchor2"

const HomePage = () => {
  return (
    <>
      <TheHeader />
      <div className="flex flex-col space-y-3 justify-center items-center w-full h-[80vh]">
        Home Page
        <Anchor2 path={"/movie-looks"} link={"Movie Looks"} />
        <Anchor2 path={"/360-articles"} link={"360 Articles"} />
        <Anchor2 path={"/components"} link={"Components"} />
        <Anchor2 path={"/movies-buffer"} link={"Movie Buffer"} />
        <Anchor2 path={"/sign-in"} link={"Blogs"} />
        <Anchor2 path={"/tasks"} link={"Tasks"} />
      </div>
    </>
  );
};

export default HomePage;