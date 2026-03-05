import TaskCard from "../components/TaskCard";
import { useState } from "react";
import { Link } from "react-router";
import useFetchData from "../../components/UseFetch";
import TogglerBtn from "../../components/TogglerBtn";

const TodoPage = () => {
  const [page, setPage] = useState(1);

  const [data, isLoading] = useFetchData(
    `https://mimic-server-api.vercel.app/todos?_page=${page}`,
  );

  function pageNavigate(symbol) {
    if (symbol === "+") {
      setPage((pre) => {
        return pre < 11 ? pre + 1 : pre;
      });
    } else {
      setPage((pre) => {
        return pre > 1 ? pre - 1 : pre;
      });
    }
  }

  return (
    <div className="w-screen">
      <header className="dark:bg-zinc-900 bg-zinc-100 border-b border-gray-800 py-2">
        <title>Quotes-page</title>
        <nav className="flex justify-between items-center container xl:max-w-7xl mx-auto">
          {/* left */}
          <div className="">
            <h2 className="text-2xl text-green-600 dark:text-green-400/50 font-semibold font-mono">
              Quotes
            </h2>
          </div>
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
      <section className="w-[90vw] mx-auto mt-10 gap-10 grid lg:grid-cols-3">
        {isLoading ??
          data.map((task, index) => (
            <TaskCard
              userId={task.userId}
              task={task.task}
              status={task.completed}
              key={`${task.userId}${index}`}></TaskCard>
          ))}
        {/* page btn */}
        <div className="col-span-full flex justify-between items-center mb-10">
          <button
            onClick={() => pageNavigate("-")}
            className="w-10 h-10 rounded-full bg-green-400/50 cursor-pointer hover:bg-green-500/50 active:-translate-x-2 transition-all duration-300"
            type="button">
            &lt;
          </button>
          <p>page : {page}</p>
          <button
            onClick={() => pageNavigate("+")}
            className="w-10 h-10 rounded-full bg-green-400/50 cursor-pointer hover:bg-green-500/50 active:translate-x-2 transition-all duration-300"
            type="button">
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default TodoPage;
