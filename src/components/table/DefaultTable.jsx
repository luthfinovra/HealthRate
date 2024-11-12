export default function DefaultTable({ rowMenu, children }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr className="border-b">
            {rowMenu.map((item, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {item.menu}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
