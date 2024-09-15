import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface NewTaskProps {
  onClose: () => void;
}

const NewTaskModal: React.FC<NewTaskProps> = ({ onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleBackgroundClick = (e: any) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({
      taskName,
      dueDate,
      priority,
    });
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
              Add New Task
            </h3>

            <XMarkIcon className="w-10 h-4" onClick={onClose} />
          </div>

          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="taskName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
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

            <button
              type="submit"
              className="w-full px-5 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { NewTaskModal };
