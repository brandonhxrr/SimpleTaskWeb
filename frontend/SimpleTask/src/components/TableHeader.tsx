import React from "react";

interface TableHeaderProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  sorteable: boolean;
  sortByOption: number;
  onSortColumn: (sortBy: string) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  Icon,
  title,
  sorteable,
  sortByOption,
  onSortColumn,
}) => {
  return (
    <th scope="col" className="px-6 py-3">
      <div className="flex flex-row items-center gap-2">
        <Icon className="h-4 w-4 text-gray-500" />
        <p className="font-semibold">{title}</p>
        {sorteable && (
          <button
            className="focus:outline-none min-w-max max-w-max focus:ring-0 focus:border-transparent hover:bg-transparent hover:outline-none hover:ring-0 group-hover:border-transparent hover:border-transparent group-focus:border-transparent"
            onClick={() => onSortColumn(title)}
          >
            {sortByOption % 3 === 0 ? (
              <svg
                className="w-3 h-3 ms-1.5 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
              </svg>
            ) : sortByOption % 3 === 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3.5"
                stroke="currentColor"
                className="w-3 h-3 ms-1.5 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3.5"
                stroke="currentColor"
                className="w-3 h-3 ms-1.5 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </th>
  );
};

export { TableHeader };
