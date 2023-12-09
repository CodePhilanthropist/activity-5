import { create } from "zustand";

const useTaskModel = create((set) => ({
  tasks: [],
  addTask: (newTask) =>
    set((state) => ({
      tasks: [...state.tasks, newTask],
    })),
  updateTask: (updatedValue, oldValue) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task === oldValue ? updatedValue : task
      ),
    }));
  },
  deleteTask: (currentTask) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task !== currentTask),
    })),
}));

export default useTaskModel;
