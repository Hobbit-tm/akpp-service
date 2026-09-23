import React from "react";

export default function AdvantageCard({ icon, title, description }) {
  const Icon = icon;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-red-500/40
        hover:bg-white/[0.08]
        hover:shadow-2xl
        hover:shadow-red-500/10
      "
    >
      {/* Красное свечение */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />
      </div>

      {/* Иконка */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/15 transition group-hover:bg-red-500">
        <Icon className="h-8 w-8 text-red-500 transition group-hover:text-white" />
      </div>

      {/* Заголовок */}
      <h3 className="relative mt-6 text-xl font-bold text-white">{title}</h3>

      {/* Описание */}
      <p className="relative mt-3 leading-7 text-slate-400">{description}</p>
    </div>
  );
}
