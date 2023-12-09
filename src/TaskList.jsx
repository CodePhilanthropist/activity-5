/* eslint-disable react/prop-types */
import TaskCard from "./TaskCard";
import useTaskModel from "./store";

const TaskList = () => {
  const { tasks: todoList } = useTaskModel();
  return (
    <div className="w-full lg:w-[600px] mx-auto px-4">
      <ul className="mt-4 divide-y">
        {todoList.map((item, idx) => (
          <TaskCard key={idx} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
