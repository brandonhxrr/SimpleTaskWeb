import { Task } from "./Task";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { TableHeader } from "./TableHeader";
import { TaskProps } from "./TaskProps";

const headers = [
  { Icon: CheckCircleIcon, title: "Done"},
  { Icon: Bars3Icon, title: "Name"},
  { Icon: BellAlertIcon, title: "Priority", sorteable: true },
  { Icon: CalendarDaysIcon, title: "Due date", sorteable: true },
];

const tasks: TaskProps[] = [
  {
    id: 1,
    name: "Lavar ropa",
    done: false,
    dueDate: "27/11/2024",
    priority: "HIGH",
    doneDate: "",
    creationDate: "11/09/2024",
    lastUpdatedDate: "11/09/2024",
  },
  {
    id: 2,
    name: "Lavar ropa",
    done: true,
    dueDate: "27/11/2024",
    priority: "MEDIUM",
    doneDate: "",
    creationDate: "11/09/2024",
    lastUpdatedDate: "11/09/2024",
  },
  {
    id: 3,
    name: "Lavar ropa",
    done: true,
    dueDate: "27/11/2024",
    priority: "LOW",
    doneDate: "",
    creationDate: "11/09/2024",
    lastUpdatedDate: "11/09/2024",
  },
];

function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col text-left bg-slate-200 rounded-xl p-20 mt-10">
      <h2 className="text-xl text-black font-black mb-10">To-Do's</h2>

      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, index) => (
                <TableHeader
                  key={index}
                  title={header.title}
                  Icon={header.Icon}
                  sorteable={header.sorteable ? header.sorteable : false}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { Dashboard };
