import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { prices } from "../../data/siteData";

export default function Prices() {
  return (
    <section
      id="prices"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Красное свечение */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mx-auto max-w-3xl text-center">
          {/* <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
            Прозрачные цены
          </span> */}

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Стоимость популярных услуг
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Финальная стоимость зависит от модели автомобиля и состояния коробки
            передач. После диагностики цена не меняется.
          </p>
        </div>

        {/* Карточки */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {prices.map((item) => (
            <article
              key={item.name}
              className="
                group
                relative
                flex
                min-h-[340px]
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
                <CheckCircle2 className="h-6 w-6 text-red-500 transition-all duration-300 group-hover:text-white" />
              </div>

              {/* Название */}
              <h3 className="mt-7 text-2xl font-bold text-white">
                {item.name}
              </h3>

              {/* Цена */}
              <div className="mt-6 text-4xl font-black text-red-500">
                {item.price}
              </div>

              {/* Разделитель */}
              <div className="my-6 h-px bg-white/10" />

              {/* Описание */}
              <p className="flex-1 leading-8 text-slate-400">
                Стоимость включает консультацию специалиста и рекомендации по
                дальнейшему обслуживанию.
              </p>

              {/* Кнопка */}
              <a
                href="#contacts"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-red-500 transition-all hover:gap-3"
              >
                Записаться
                <ArrowRight
                  size={18}
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
