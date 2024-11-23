export default function DefaultTable({ rowMenu, children, loading = false }) {
  return (
    <div className="relative overflow-auto max-h-[400px]">
      <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase sticky top-0 dark:text-gray-400">
          <tr className="border-b">
            {rowMenu.map((item, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3 w-[150px] ${item.className || ''}`}
                style={item.style || {}}
              >
                {item.menu}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={rowMenu.length} className="text-center py-5">
                <div className="flex justify-center items-center">
                  <svg
                    className="w-6 h-6 text-gray-500 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.97 7.97 0 014 12H0c0 2.21.895 4.21 2.344 5.656l1.656-1.365z"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-600">Loading...</span>
                </div>
              </td>
            </tr>
          ) : (
            children
          )}
        </tbody>
      </table>
    </div>
  );
}
