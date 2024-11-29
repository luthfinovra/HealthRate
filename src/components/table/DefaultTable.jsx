export default function DefaultTable({ rowMenu, children }) {
  return (
    <div
      className="relative overflow-auto  pr-3 [&::-webkit-scrollbar]:w-2 
  [&::-webkit-scrollbar]:h-2 
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
"
    >
      <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-900 uppercase sticky top-0 bg-white">
          <tr className="border-b">
            {rowMenu.map((item, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3  ${item.className || ""}`}
                style={item.style || {}}
              >
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
