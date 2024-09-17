import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { TaskProps } from "./TaskProps";

interface NewTaskProps {
  task: TaskProps | null;
  getAllTasks: () => void;
  onClose: () => void;
}

const TaskModal: React.FC<NewTaskProps> = ({ task, onClose, getAllTasks }) => {
  const [taskName, setTaskName] = useState(task ? task.text : "");
  const [dueDate, setDueDate] = useState(task ? task.dueDate : "");
  const [priority, setPriority] = useState(task ? task.priority : "Medium");
  const [done, setIsDone] = useState(task ? task.done : false);

  const handleBackgroundClick = (e: any) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  const addTask = async (task: TaskProps) => {
    try {
      const response = await fetch("http://localhost:9090/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Error while adding task");
      }

      const data = await response.json();
      console.log("Task added", data);
      getAllTasks();
    } catch (error) {
      console.error("Error while adding new task");
    }
  };

  const updateTask = async (updatedTask: TaskProps) => {
    try {
      const response = await fetch(`http://localhost:9090/todos/${task!.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) {
        throw new Error("Error while updating task");
      }

      const data = await response.json();
      console.log("Task updated", data);
      getAllTasks();
    } catch (error) {
      console.error("Error while updating old task");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const taskToSubmit: TaskProps = {
      id: task ? task.id : undefined,
      text: taskName,
      dueDate: dueDate,
      done: done,
      priority: priority,
    };

    if (task) {
      updateTask(taskToSubmit);
    } else {
      addTask(taskToSubmit);
    }

    onClose();
  };

  return (
    <div
      id="modal-background"
      onClick={handleBackgroundClick}
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {task ? "Update task" : "Add new task"}
            </h3>

            <XMarkIcon className="w-10 h-4" onClick={onClose} />
          </div>

          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Task Name
              </label>
              <input
                type="text"
                id="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Enter task name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Due Date
              </label>
              <input
                type="datetime-local"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="priority"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Priority
              </label>
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label
                htmlFor="isDone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Done
              </label>
              <input
                type="checkbox"
                id="isDone"
                checked={done}
                onChange={(e) => setIsDone(e.target.checked)}
                className="w-4 h-4"
              />
            </div>

            <button
              type="submit"
              className="w-full px-5 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              {task ? "Update task" : "Add task"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { TaskModal };
