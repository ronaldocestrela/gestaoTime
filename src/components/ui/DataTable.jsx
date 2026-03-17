export default function DataTable({ title, columns, data }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-4 sm:px-5 py-4 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          {title}
        </h3>
      </div>
      {/* Layout em cards no mobile */}
      <div className="md:hidden divide-y divide-gray-100">
        {data.map((row, i) => (
          <div
            key={row.id ?? i}
            className="p-4 space-y-2 hover:bg-gray-50/50 transition-colors"
          >
            {columns.map((col) => (
              <div key={col.key} className="flex justify-between gap-3 text-sm">
                <span className="text-gray-500 font-medium shrink-0">
                  {col.label}
                </span>
                <span className="text-gray-900 text-right min-w-0 truncate">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Tabela no desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.id ?? i}
                className="border-t border-gray-100 hover:bg-gray-50/50"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-5 py-3 text-sm text-gray-700">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
