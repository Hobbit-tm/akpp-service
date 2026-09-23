export default function InfoCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 ${className}`}
    >
      {children}
    </div>
  );
}
