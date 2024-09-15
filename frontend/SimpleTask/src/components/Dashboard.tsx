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
import { useEffect, useState } from "react";
import { TaskModal } from "./TaskModal";
import { TodoRequest } from "./TodoRequest";

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

function Dashboard() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<TaskProps | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTasks, setTotalTasks] = useState(0);
  const [filterByTaskName, setFilterByTaskName] = useState("");
  const [filterByTaskPriority, setFilterByTaskPriority] = useState("");
  const [filterByTaskStatus, setFilterByTaskStatus] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [todoRequest, setRequest] = useState<TodoRequest>({
    page: 1,
    taskName: "",
    taskPriority: "",
    taskStatus: "",
    sortBy: "",
  });

  const updateRequest = () => {
    setRequest({
      page: currentPage,
      taskName: filterByTaskName,
      taskPriority: filterByTaskPriority,
      taskStatus: filterByTaskStatus,
      sortBy: sortBy,
    });
  };

  const openEditTaskModal = (task: TaskProps) => {
    setIsModalOpen(true);
    setCurrentTask(task);
  };

  const openAddTaskModal = () => {
    setCurrentTask(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchTasks = async () => {
    const url = new URL("http://localhost:9090/todos/");
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(todoRequest)) {
      if (value) {
        searchParams.append(key, value);
      }
    }

    url.search = searchParams.toString();
    try {
      const response = await fetch(url.toString(), { method: "GET" });
      console.log(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setTasks(data.tasks);
      setTotalTasks(data.totalTasks);
      setLoading(false);
    } catch (error) {
      console.log("Error while loading tasks", error);
      setLoading(false);
    }
  };

  const onPageChanged = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchTasks();
  }, [todoRequest]);

  useEffect(() => {
    console.log(currentPage);
    
    updateRequest();
    console.log(todoRequest);
    fetchTasks();
  }, [currentPage]);

  if (loading) {
    return <h1>Loading tasks</h1>;
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
              onClick={openAddTaskModal}
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Add task
            </button>
          </div>
        </div>

        {isModalOpen && <TaskModal onClose={closeModal} task={currentTask} />}

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
                <Task
                  key={index}
                  task={task}
                  onEdit={() => openEditTaskModal(task)}
                />
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalTasks={totalTasks}
          onPageChanged={onPageChanged}
        />
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
