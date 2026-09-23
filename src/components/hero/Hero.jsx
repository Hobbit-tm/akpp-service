import React from "react";
import heroImage from "../../assets/hero/hero.jpg";
import { BadgeCheck } from "lucide-react";

import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-right"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Основное затемнение */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 via-40% to-slate-900/25" />

      {/* Красное свечение */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(239,68,68,.20),transparent_45%)]" />

      {/* Затемнение снизу */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 pt-28 pb-16 sm:px-6 md:pt-36 lg:px-8 xl:pt-44">
        <div className="flex flex-col justify-center gap-16 xl:flex-row xl:items-center xl:justify-between">
          {/* Левая колонка */}
          <div className="w-full max-w-3xl text-center xl:text-left">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-300 backdrop-blur sm:px-5 sm:text-sm">
              <BadgeCheck className="h-4 w-4" />
              Специализированный сервис АКПП в Алматы
            </div> */}

            <h1 className="mt-6 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl xl:mt-8 xl:text-[88px] xl:leading-[0.95]">
              Ремонт АКПП
              <br />
              в Алматы
              <br />
              <span className="text-red-500">
                с гарантией
                <br />
                до{" "}
                <span className="relative -top-[2px] inline-block text-[0.78em] font-black leading-none">
                  1
                </span>{" "}
                года
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl xl:mx-0 xl:mt-8">
              Профессиональный ремонт автоматических коробок передач любой
              сложности. Современное оборудование, опытные мастера, оригинальные
              запчасти и официальная гарантия на выполненные работы.
            </p>

            <HeroButtons />
          </div>

          {/* Правая колонка (только на XL и больше) */}
          <HeroImage />
        </div>

        <HeroStats />
      </div>
    </section>
  );
}
