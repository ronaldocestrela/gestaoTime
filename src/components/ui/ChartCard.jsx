export default function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
        {title}
      </h3>
      <div className="h-40">{children}</div>
    </div>
  );
}
