import { ShieldCheck, Award } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative hidden xl:flex w-full max-w-xl items-center justify-center">
      {/* Красное свечение */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-red-600/20 blur-[140px]" />

      {/* Верхняя карточка */}
      {/* <div className="absolute left-0 top-16 rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 text-red-500" />
          <div>
            <div className="text-xl font-bold text-white">1 год</div>
            <div className="text-sm text-slate-400">Гарантия</div>
          </div>
        </div>
      </div> */}

      {/* Нижняя карточка */}
      {/* <div className="absolute right-0 bottom-16 rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-3">
          <Award className="h-8 w-8 text-red-500" />
          <div>
            <div className="text-xl font-bold text-white">15+</div>
            <div className="text-sm text-slate-400">Лет опыта</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
