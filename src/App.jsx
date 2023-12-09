import { useState } from "react";
import TaskList from "./TaskList";
import useTaskModel from "./store";
import * as Avatar from "@radix-ui/react-avatar";

function App() {
  const { addTask } = useTaskModel();
  const [todoInput, setTodoInput] = useState("");

  const handleAddTask = () => {
    if (todoInput.trim() !== "") {
      addTask(todoInput);
      setTodoInput("");
    }
  };

  return (
    <div className="h-full w-screen flex flex-col items-center gap-1">
      <div className="w-full lg:w-[600px] px-4 mx-auto mt-12">
        <Avatar.Root className="flex items-center space-x-3 mb-4">
          <Avatar.Image
            src="https://www.rianbarriga.com/static/48f80e012180e03a4139667472641ae4/1ee78/me.webp"
            className="w-12 h-12 rounded-full object-cover"
          />
          <Avatar.Fallback
            delayMs={600}
            className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center"
          >
            CT
          </Avatar.Fallback>
          <div>
            <span className="text-gray-700 text-sm font-medium">
              Activity 5 (Semi Final)
            </span>
            <span className="block text-gray-700 text-xs">
              Submitted by Rian Rey Barriga!
            </span>
          </div>
        </Avatar.Root>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="New Todo"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleAddTask();
            }}
            className="w-full py-3 pl-4 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
          <button
            onClick={handleAddTask}
            className="flex items-center justify-center gap-1 py-2 px-5 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Add
          </button>
        </div>
      </div>

      <TaskList />
    </div>
  );
}

export default App;
