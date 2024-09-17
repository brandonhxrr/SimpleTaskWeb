interface PageProps {
  currentPage: number;
  totalTasks: number;
  onPageChanged: (page: number) => void;
}
const Pagination: React.FC<PageProps> = ({ currentPage, totalTasks, onPageChanged }) => {
  const maxPages = 5;
  const totalPages = Math.ceil(totalTasks / 10);

  const startIndex = currentPage * 10 - 9;
  const endIndex =
    currentPage * 10 < totalTasks ? currentPage * 10 : totalTasks;

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(totalPages, startPage + maxPages - 1);

    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex justify-center">
      <div>
        <div className="text-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {startIndex}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {endIndex}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {totalTasks}
            </span>{" "}
            Entries
          </span>
        </div>
        <nav
          className="flex items-center gap-x-1 mt-10 max-w-min"
          aria-label="Pagination"
        >
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            aria-label="Previous"
            onClick={() => onPageChanged(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span aria-hidden="true" className="hidden sm:block">
              Previous
            </span>
          </button>
          <div className="flex items-center gap-x-1">
            {pages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => onPageChanged(page)}
                className={
                  `${currentPage === page ? "bg-blue-500 text-white" : ""}` + " " +
                  " min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white "
                }
                aria-current="page"
              >
                {page}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={() => onPageChanged(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span aria-hidden="true" className="hidden sm:block">
              Next
            </span>
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export { Pagination };
