import { Task } from "./Task";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { TableHeader } from "./TableHeader";
import { TaskProps } from "./TaskProps";
import { Pagination } from "./Pagination";
import { Filter } from "./Filter";
import { useState } from "react";
import { NewTaskModal } from "./NewTaskModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="flex">
      <div className="w-full h-full flex flex-col text-left bg-slate-200 rounded-xl p-20 mt-10">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            To-Do's
          </h1>

          <div className="flex items-center">
            <Filter options={doneOptions} title="Done status" />
            <Filter options={priorityOptions} title="Priority" />

            <button
              type="button"
              className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 justify-center font-medium rounded-lg text-sm ml-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={openModal}
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Add task
            </button>
          </div>
        </div>

        {isModalOpen && <NewTaskModal onClose={closeModal} /> }

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
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Actions</span>
                </th>
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
      <div className="w-1/4 mt-10 m-5">
        <div className="rounded-xl bg-slate-200 items-center justify-center max-h-min p-10">
          <p className="text-3xl font-bold tracking-tight text-gray-900">
            Metrics
          </p>
          <p className="text-6xl font-bold tracking-tight mt-4 text-gray-900">
            22:15
          </p>
          <p className="mt-3">minutes to finish tasks</p>
        </div>

        <div className="rounded-xl bg-slate-200 items-center justify-center max-h-min p-10 mt-5">
          <p className="text-md font-bold tracking-tight text-gray-900">
            Estimated time by priority
          </p>
          <div className="text-left mt-5">
            <p className="flex items-center">
              <span className="text-red-600 text-3xl mr-2">•</span>
              <p>High: 30 minutes</p>
            </p>

            <p className="flex items-center">
              <span className="text-amber-500 text-3xl mr-2">•</span>
              <p>Medium: 20 minutes</p>
            </p>

            <p className="flex items-center">
              <span className="text-green-600 text-3xl mr-2">•</span>
              <p>Low: 10 minutes</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
