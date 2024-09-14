import { Task } from "./Task";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { TableHeader } from "./TableHeader";
import { TaskProps } from "./TaskProps";
import { Pagination } from "./Pagination";
import { Filter } from "./Filter";

const priorityOptions = [
  { name: "None", href: "#", current: true },
  { name: "High", href: "#", current: false },
  { name: "Medium", href: "#", current: false },
  { name: "Low", href: "#", current: false },
];

const doneOptions = [
  { name: "None", href: "#", current: true },
  { name: "Done", href: "#", current: false },
  { name: "Not done", href: "#", current: false },
];

export default function Example() {}

const headers = [
  { Icon: CheckCircleIcon, title: "Done" },
  { Icon: Bars3Icon, title: "Name" },
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
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          To-Do's
        </h1>

        <div className="flex items-center">
          <Filter options={doneOptions} title="Done status"/>
          <Filter options={priorityOptions} title="Priority"/>
        </div>
      </div>

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

      <Pagination currentPage={1} totalTasks={tasks.length} />
    </div>
  );
}

export { Dashboard };
