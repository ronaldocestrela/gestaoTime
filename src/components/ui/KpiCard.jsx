export default function KpiCard({ label, value }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
      <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">
        {label}
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
}
