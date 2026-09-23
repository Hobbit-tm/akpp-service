import React from "react";
import {
  ShieldCheck,
  Wrench,
  Cpu,
  BadgeCheck,
  Banknote,
  Users,
} from "lucide-react";

import AdvantageCard from "./AdvantageCard";

const cards = [
  {
    icon: ShieldCheck,
    title: "Гарантия до 2 лет",
    description:
      "Предоставляем официальную гарантию на ремонт и используемые комплектующие.",
  },
  {
    icon: Wrench,
    title: "Опыт более 15 лет",
    description:
      "Ремонтируем автоматические коробки передач любых производителей.",
  },
  {
    icon: Cpu,
    title: "Современная диагностика",
    description:
      "Используем профессиональное оборудование для точного определения неисправности.",
  },
  {
    icon: BadgeCheck,
    title: "Оригинальные запчасти",
    description:
      "Используем оригинальные детали и проверенные качественные аналоги.",
  },
  {
    icon: Banknote,
    title: "Честные цены",
    description:
      "Стоимость ремонта согласовывается заранее без скрытых платежей.",
  },
  {
    icon: Users,
    title: "Опытные специалисты",
    description:
      "Каждый мастер имеет большой опыт ремонта АКПП различных производителей.",
  },
];

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Красное свечение */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(239,68,68,.10),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mx-auto max-w-3xl text-center">
          {/* <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
            Наши преимущества
          </span> */}

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Почему нам доверяют
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Более 15 лет мы профессионально ремонтируем автоматические коробки
            передач. Работаем честно, используем современное оборудование и
            предоставляем официальную гарантию.
          </p>
        </div>

        {/* Карточки */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((item) => (
            <AdvantageCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
