interface PriorityProperties {
  priority: string;
}

const priorityColors: Map<string, string> = new Map([
    ["High", "bg-red-100"],
    ["Medium", "bg-yellow-100"],
    ["Low", "bg-green-100"]
]);

const Priority: React.FC<PriorityProperties> = ({ priority }) => {
  return (
    <div >
      <p className={`${priorityColors.get(priority)}` + " rounded-md p-1 max-w-min text-gray-900 capitalize"}>{priority}</p>
    </div>
  );
};

export { Priority };
