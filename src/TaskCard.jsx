/* eslint-disable react/prop-types */
import { useState } from "react";
import useTaskModel from "./store";

const TaskCard = ({ item }) => {
  const [editedTask, setEditedTask] = useState(item);
  const { updateTask, deleteTask } = useTaskModel();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleUpdate = () => {
    updateTask(editedTask, item); // Pass both the new value and the old value to correctly update
    setIsEditing(!isEditing);
  };

  return (
    <li className="py-5 flex items-start justify-between">
      <div className="flex gap-3">
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={handleEditChange}
            className="block text-sm text-gray-700 font-semibold border rounded-md px-2 py-1 outline-none"
          />
        ) : (
          <div>
            <span className="block text-sm text-gray-700 font-semibold">
              {item}
            </span>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="px-3 py-1 text-sm text-white bg-green-600 rounded-lg hover:bg-green-500 active:bg-green-700"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => deleteTask(item)}
            className="px-3 py-1 text-sm text-white bg-red-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700"
          >
            Delete
          </button>
        )}
        <button
          onClick={() => setIsEditing(!isEditing)} // Toggle editing state
          className="px-3 py-1 text-sm text-gray-700 border rounded-lg hover:bg-gray-100"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
    </li>
  );
};

export default TaskCard;
