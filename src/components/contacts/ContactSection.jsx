import React, { useState } from "react";
import { ArrowRight, MapPin, PhoneCall, Clock3 } from "lucide-react";

const WHATSAPP_NUMBER = "77718721040";

const initialForm = {
  name: "",
  phone: "",
  car: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      "Здравствуйте! Хочу оставить заявку на ремонт АКПП.",
      `Имя: ${form.name}`,
      `Телефон: ${form.phone}`,
      `Автомобиль: ${form.car}`,
      `Сообщение: ${form.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setForm(initialForm);
  };

  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.10),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Левая часть */}
          <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 backdrop-blur-xl">
            {/* <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
              Контакты
            </span> */}

            <h2 className="mt-6 text-5xl font-black leading-tight text-white">
              Запишитесь
              <br />
              на
              <span className="text-red-500"> диагностику</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Проведём диагностику коробки передач, определим причину
              неисправности и предложим оптимальное решение.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+77718721040"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5 transition hover:border-red-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                  <PhoneCall className="h-5 w-5 text-white" />
                </div>

                <div>
                  <div className="font-bold text-white">+7 (771) 872-10-40</div>
                  <div className="text-sm text-slate-400">Позвонить сейчас</div>
                </div>
              </a>

              <a
                href="https://2gis.kz/almaty/search/Садовый%20бульвар%201ж"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5 transition hover:border-red-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                  <MapPin className="h-5 w-5 text-white" />
                </div>

                <div>
                  <div className="font-bold text-white">г. Алматы</div>
                  <div className="text-sm text-slate-400">
                    ул. Садовый бульвар 1ж
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                  <Clock3 className="h-5 w-5 text-white" />
                </div>

                <div>
                  <div className="font-bold text-white">
                    {" "}
                    Понедельник — Пятница
                  </div>
                  <div className="text-sm text-slate-400">10:00 — 18:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть */}
          <div
            id="contacts-form"
            className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-black text-white">Оставить заявку</h3>

            <p className="mt-3 text-slate-400">
              Мы свяжемся с вами в ближайшее время.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Телефон"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
              />

              <input
                name="car"
                value={form.car}
                onChange={handleChange}
                placeholder="Марка и модель автомобиля"
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Опишите проблему..."
                className="min-h-[170px] w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
              >
                Отправить заявку
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
