import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Единая карточка бренда: используется в списке марок и в блоке "других марок".
export default function BrandCard({ brand }) {
  return (
    <Link
      to={`/remont-akpp/${brand.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/50"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-center md:text-left text-2xl font-black text-white">{brand.brand}</h3>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
        </span>
      </div>

      <p className="text-center md:text-left mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
        Ремонт АКПП {brand.brand} в Алматы
      </p>

      {brand.models?.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
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
    </Link>
  );
}
