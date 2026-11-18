import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Единая карточка бренда: список марок и блок "других марок".
// На телефоне всё по центру, с md и выше выравнивание слева.
export default function BrandCard({ brand }) {
  return (
    <Link
      to={`/remont-akpp/${brand.slug}`}
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_20px_50px_-20px_rgba(239,68,68,0.35)] md:items-start md:text-left"
    >
      {/* Красное свечение в углу */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-600/10 blur-2xl transition duration-500 group-hover:bg-red-600/25" />

      {/* Монограмма марки */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-2xl font-black text-white shadow-lg shadow-red-600/25 transition duration-300 group-hover:scale-105">
        {brand.brand.charAt(0)}
      </div>

      <h3 className="mt-5 text-2xl font-black text-white">{brand.brand}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        Ремонт АКПП в Алматы
      </p>

      {brand.models?.length > 0 && (
        <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
          {brand.models.slice(0, 3).map((model) => (
            <span
              key={model}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {model}
            </span>
          ))}
        </div>
      )}

      <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-red-500 transition group-hover:text-red-400">
        Смотреть ремонт
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
