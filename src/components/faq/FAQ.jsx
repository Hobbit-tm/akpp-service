import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Сколько стоит диагностика АКПП?",
    answer:
      "Стоимость зависит от модели автомобиля и типа диагностики. Свяжитесь с нами для уточнения цены.",
  },
  {
    question: "Сколько занимает ремонт АКПП?",
    answer:
      "В среднем ремонт занимает от 1 до 5 дней в зависимости от сложности неисправности.",
  },
  {
    question: "Предоставляете ли вы гарантию?",
    answer:
      "Да, на все выполненные работы предоставляется официальная гарантия.",
  },
  {
    question: "Можно ли приехать без записи?",
    answer:
      "Да, можно. Но для быстрого обслуживания рекомендуем предварительно записаться.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-slate-950 py-28">
      {/* Красное свечение */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {/* <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
            Вопросы и ответы
          </span> */}

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Часто задаваемые вопросы
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Ответы на самые популярные вопросы по ремонту автоматических коробок
            передач.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-5">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 hover:border-red-500/40"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-8 py-7 text-left"
              >
                <span className="text-xl font-bold text-white">
                  {item.question}
                </span>

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-red-600 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-5 w-5 text-white" />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-8 py-6 text-lg leading-8 text-slate-400">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
