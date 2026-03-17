export default function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border border-gray-100 min-w-0">
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4">
        {title}
      </h3>
      <div className="h-32 sm:h-40 min-h-0">{children}</div>
    </div>
  );
}
