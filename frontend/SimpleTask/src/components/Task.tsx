import { Priority } from "./PriorityComponent";
import { TaskProps } from "./TaskProps";

const Task: React.FC<{task: TaskProps}> = ({ task }) => {
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
        {task.name}
      </th>
      <td className="px-6 py-4">
        <Priority priority={task.priority}/>
      </td>
      <td className="px-6 py-4">{task.dueDate}</td>
    </tr>
  );
};

export { Task };
