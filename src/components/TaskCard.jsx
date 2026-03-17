// TaskCard.jsx (Updated)

import { Link } from "react-router";

const TaskCard = ({
  imgPath = "/images/default.png",
  title = "Project",
  link,
}) => {
  return (
    <Link to={link} className="group block h-full">
      <div
        className="
        h-full
        bg-white dark:bg-[#23272f] 
        rounded-xl 
        overflow-hidden
        border border-slate-200 dark:border-gray-800
        shadow-sm hover:shadow-xl
        transition-all duration-300 ease-in-out
        group-hover:-translate-y-1.5
      ">
        {/* image */}
        <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-gray-800">
          <img
            src={imgPath}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* title */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-react-brand capitalize truncate">
            {title}
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Click to view this React task.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TaskCard;