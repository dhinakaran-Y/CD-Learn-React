// HomePage.jsx (Updated)

import TheHeader from "../components/TheHeader";
import TaskCard from "../components/TaskCard";

const HomePage = () => {
  const tasks = [
    { imgPath: "/images/1.png", title: "movie looks", link: "/movie-looks" },
    { imgPath: "/images/2.png", title: "360 Articles", link: "/360-articles" },
    { imgPath: "/images/3.png", title: "Components", link: "/components" },
    { imgPath: "/images/4.png", title: "Movie Buffer", link: "/movies-buffer" },
    { imgPath: "/images/5.png", title: "Blogs", link: "/sign-in" },
    { imgPath: "/images/6.png", title: "Tasks", link: "/tasks" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#1a1c22]">
      <TheHeader />
      <main className="container mx-auto my-12 px-4 md:px-8 xl:px-16">
        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map((task, index) => (
            <TaskCard key={index} {...task} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
