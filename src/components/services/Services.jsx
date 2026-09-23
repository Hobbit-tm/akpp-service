import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/siteData";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 pt-20pb-24"
    >
      {/* Красное свечение */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(239,68,68,.10),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Верхняя часть */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            {/* <span className="inline-flex rounded-full border border-red-500/20 bg-slate-950/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
              Наши услуги
            </span> */}

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Ремонтируем АКПП всех типов
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Выполняем диагностику, обслуживание и капитальный ремонт
              автоматических коробок передач любых производителей с гарантией.
            </p>
          </div>

          <a
            href="/services"
            className="group inline-flex items-center gap-2 font-semibold text-red-400 transition-all hover:gap-3"
          >
            Смотреть все услуги
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Карточки */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="
                group
                relative
                flex
                min-h-[290px]
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-slate-900/70
                backdrop-blur-xl
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-red-500/40
                hover:bg-slate-900
                "
            >
              {/* Красная линия */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Иконка */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 transition-all duration-300 group-hover:bg-red-600">
                <Icon className="h-6 w-6 text-red-500 transition-all duration-300 group-hover:text-white" />
              </div>

              {/* Заголовок */}
              <h3 className="mt-6 font-bold leading-7 font-bold leading-tight text-white">
                {title}
              </h3>

              {/* Текст */}
              <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-400">
                {text}
              </p>

              {/* Кнопка */}
              <a
                href="/services"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-red-600 transition-all hover:gap-3"
              >
                Подробнее
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
