const TaskCard = ({ userId, task, status }) => {
  return (
    <div className={`relative p-10 border rounded-xl ${status=== true ? "bg-green-200 dark:bg-green-300/50" : "bg-red-200 dark:bg-red-500/50"}`}>
      <p className="absolute top-2 right-3 dark:text-white/70 text-black/50">
        UserId: {userId}
      </p>
      <p className="text-2xl w-80 font-semibold text-center">{task}</p>
      <p className="absolute bottom-2 right-3 dark:text-white/80 text-black/70">
        {status == true ? "completed" : "NotYet"}
      </p>
    </div>
  );
};

export default TaskCard;
