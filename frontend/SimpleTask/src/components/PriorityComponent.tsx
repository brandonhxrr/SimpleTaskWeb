interface PriorityProperties {
  priority: string;
}

const priorityText: Map<string, string> = new Map([
    ["HIGH", "High"],
    ["MEDIUM", "Medium"],
    ["LOW", "Low"]
]);

const priorityColors: Map<string, string> = new Map([
    ["HIGH", "bg-red-100"],
    ["MEDIUM", "bg-yellow-100"],
    ["LOW", "bg-green-100"]
]);

const Priority: React.FC<PriorityProperties> = ({ priority }) => {
  return (
    <div >
      <p className={`${priorityColors.get(priority)}` + " rounded-md p-1 max-w-min text-gray-900 capitalize"}>{priorityText.get(priority)}</p>
    </div>
  );
};

export { Priority };
