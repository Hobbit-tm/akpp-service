import React from "react";
import { ArrowRight } from "lucide-react";
import { processSteps } from "../../data/siteData";

export default function Steps() {
  return (
    <section id="steps" className="relative overflow-hidden bg-slate-950 py-28">
      {/* Красное свечение */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.10),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Как проходит ремонт АКПП
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Весь процесс ремонта полностью прозрачен. Каждый этап
            согласовывается с владельцем автомобиля до начала работ.
          </p>
        </div>

        {/* Карточки */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="
                group
                flex
                min-h-[360px]
                flex-col
                rounded-[30px]
                border
                border-white/10
                bg-slate-900/70
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-red-500/40
                hover:bg-slate-900
              "
            >
              {/* Номер */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-black text-white">
                {index + 1}
              </div>

              {/* Заголовок */}
              <h3 className="mt-8 text-2xl font-bold text-white">
                {step.title}
              </h3>

              {/* Текст */}
              <p className="mt-5 text-lg leading-8 text-slate-400">
                {step.text}
              </p>

              {/* Стрелка */}
              <div className="mt-auto pt-10">
                <ArrowRight className="h-6 w-6 text-red-500 transition-all duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
