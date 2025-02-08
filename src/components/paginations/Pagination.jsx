const Pagination = ({ recordsTotal = 0, limit, page, setPage }) => {
  const totalPages = Math.ceil(recordsTotal / limit);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page < 4) {
        pages.push(1, 2, 3);
      } else {
        pages.push(1);
      }

      if (page > 3) {
        pages.push("...");
      }

      if (page > 3 && page < totalPages - 2) {
        pages.push(page - 1, page, page + 1);
      } else if (page >= totalPages - 2) {
        pages.push(totalPages - 2, totalPages - 1);
      }

      if (page < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <>
      {totalPages > 1 && (
        <nav
          className="flex items-center justify-center"
          aria-label="Pagination"
        >
          <button
            onClick={handlePrev}
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Previous"
            disabled={page === 1}
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>

          {getPageNumbers().map((pageNumber, index) => (
            <button
              key={index}
              onClick={() => pageNumber !== "..." && setPage(pageNumber)}
              type="button"
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center text-sm border border-gray-200 py-2 px-3 ${
                pageNumber === page
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
              disabled={pageNumber === "..."}
            >
              {pageNumber}
            </button>
          ))}

          <button
            onClick={handleNext}
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Next"
            disabled={page === totalPages}
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </nav>
      )}
    </>
  );
};

export default Pagination;
