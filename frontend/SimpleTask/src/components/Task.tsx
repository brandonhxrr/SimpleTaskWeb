import {
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  EllipsisVerticalIcon,
} from "@heroicons/react/20/solid";
import { Priority } from "./PriorityComponent";
import { TaskProps } from "./TaskProps";

const Task: React.FC<{ task: TaskProps, onEdit: () => void, getAllTasks: () => void}> = ({ task, onEdit, getAllTasks }) => {

  const deleteTask = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:9090/todos/${id}/delete/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error while deleting task");
      }
      getAllTasks();
    } catch (error) {
      console.error("Error while deleting old task");
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <input type="checkbox" checked={task.done} />
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {task.text}
      </th>
      <td className="px-6 py-4">
        <Priority priority={task.priority} />
      </td>
      <td className="px-6 py-4">{task.dueDate}</td>
      <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <Menu
          as="div"
          className="relative inline-block text-left pl-5 group-focus:border-transparent focus:border-transparent"
        >
          <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent group-hover:border-transparent hover:border-transparent group-focus:border-transparent focus:border-transparent">
            <EllipsisVerticalIcon
              aria-hidden="true"
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            />
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="">
              <MenuItem
              >
                <button
                  className="font-medium text-gray-900 flex px-4 py-2 text-sm hover:bg-green-600 hover:text-white items-center rounded-md w-full"
                  onClick={onEdit}
                >
                  <PencilIcon className="w-5 h-5 pr-2" />
                  <p>Edit</p>
                </button>
              </MenuItem>

              <MenuItem>
                <button
                  className="font-medium text-gray-900 flex px-4 py-2 text-sm hover:bg-red-600 hover:text-white items-center rounded-md w-full"
                  onClick={() => deleteTask(task.id!)}
                >
                  <TrashIcon className="w-5 h-5 pr-2" />
                  <p>Delete</p>
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </td>
    </tr>
  );
};

export { Task };
