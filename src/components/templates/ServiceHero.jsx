import { ArrowRight, Phone, ShieldCheck, Wrench, Clock3 } from "lucide-react";

export default function ServiceHero({ title, description, image }) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* фон */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.18),transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold tracking-wider text-red-300">
            РЕМОНТ АКПП
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            {description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="inline-flex items-center rounded-full bg-red-600 px-8 py-5 font-bold text-white transition hover:scale-105"
            >
              Записаться
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>

            <a
              href="tel:+77718721040"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-8 py-5 font-bold text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              <Phone className="mr-3 h-5 w-5" />
              Позвонить
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">
              <ShieldCheck className="mb-4 h-8 w-8 text-red-500" />

              <div className="text-3xl font-black text-white">1 год</div>

              <div className="text-slate-400">гарантия</div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">
              <Wrench className="mb-4 h-8 w-8 text-red-500" />

              <div className="text-3xl font-black text-white">1500+</div>

              <div className="text-slate-400">ремонтов</div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">
              <Clock3 className="mb-4 h-8 w-8 text-red-500" />

              <div className="text-3xl font-black text-white">15+</div>

              <div className="text-slate-400">лет опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
