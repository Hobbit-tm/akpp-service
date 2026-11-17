import React from "react";

export default function InfoCard({ children, className = "" }) {
  return (
    <div className={`rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
