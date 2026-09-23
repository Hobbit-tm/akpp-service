import { Star, Shield, Wrench, Clock3 } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.9",
    label: "Рейтинг сервиса",
  },
  {
    icon: Wrench,
    value: "1500+",
    label: "Успешных ремонтов",
  },
  {
    icon: Shield,
    value: "1 год",
    label: "Гарантия на работу",
  },
  {
    icon: Clock3,
    value: "15+",
    label: "Лет опыта",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-20 rounded-[28px] border border-white/10 bg-slate-950/75 p-4 shadow-2xl backdrop-blur-xl md:mt-24 md:p-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 transition-all duration-300 group-hover:bg-red-500/10">
                <Icon className="h-6 w-6 text-red-500 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div>
                <div className="text-2xl font-black text-white md:text-3xl">
                  {item.value}
                </div>

                <div className="mt-1 text-xs text-slate-400 md:text-sm">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
