import { Link } from "react-router-dom";
import { PhoneCall, MapPin, Clock3, ArrowRight } from "lucide-react";

const services = [
  { title: "Ремонт АКПП", href: "/remont-akpp" },
  { title: "Ремонт DSG", href: "/remont-dsg" },
  { title: "Ремонт вариатора", href: "/remont-cvt" },
  { title: "Диагностика", href: "/diagnostika-akpp" },
  { title: "Замена масла", href: "/zamena-masla-akpp" },
];

const sections = [
  { title: "Цены", href: "/#prices" },
  { title: "Отзывы", href: "/#reviews" },
  { title: "Преимущества", href: "/#advantages" },
  { title: "Контакты", href: "/#contacts" },
];

const linkClass =
  "inline-block py-1.5 text-slate-400 transition hover:text-red-400";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Красное свечение и тонкая красная линия сверху */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,.10),transparent_40%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Верхний блок: призыв и кнопки */}
        <div className="flex flex-col items-center gap-6 rounded-[28px] border border-white/10 bg-slate-900/70 p-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <div className="text-2xl font-black text-white md:text-3xl">
              Нужна диагностика коробки?
            </div>
            <p className="mt-2 text-slate-400">
              Запишитесь, и мы скажем причину поломки и стоимость ремонта.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="tel:+77718721040"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-red-500"
            >
              <PhoneCall className="h-4 w-4 text-red-500" />
              Позвонить
            </a>
            <a
              href="/#contacts"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
            >
              Записаться
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Колонки */}
        <div className="mt-14 grid gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          {/* Логотип и описание */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xl font-black leading-none">
              <span className="text-white">REMONT</span>
              <span className="text-red-500">AKPP</span>
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-slate-500">
              Ремонт АКПП
            </div>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Ремонт АКПП, DSG и вариаторов в Алматы. Современное оборудование,
              опытные специалисты и официальная гарантия до 1 года.
            </p>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Услуги
            </h4>
            <ul className="flex flex-col items-center md:items-start">
              {services.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Разделы */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Разделы
            </h4>
            <ul className="flex flex-col items-center md:items-start">
              {sections.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Контакты
            </h4>

            <ul className="flex flex-col items-center gap-5 md:items-start">
              <li className="flex flex-col items-center gap-1 md:flex-row md:items-start md:gap-3">
                <PhoneCall className="h-5 w-5 shrink-0 text-red-500 md:mt-1" />
                <div>
                  <a
                    href="tel:+77718721040"
                    className="font-semibold text-white transition hover:text-red-400"
                  >
                    +7 (771) 872-10-40
                  </a>
                  <div className="text-sm text-slate-500">Телефон для записи</div>
                </div>
              </li>

              <li className="flex flex-col items-center gap-1 md:flex-row md:items-start md:gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-red-500 md:mt-1" />
                <div className="text-slate-400">
                  г. Алматы
                  <br />
                  ул. Садовый бульвар 1ж
                </div>
              </li>

              <li className="flex flex-col items-center gap-1 md:flex-row md:items-start md:gap-3">
                <Clock3 className="h-5 w-5 shrink-0 text-red-500 md:mt-1" />
                <div className="text-slate-400">
                  Пн — пт, 10:00 – 18:00
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Низ футера */}
        <div className="mt-14 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-sm text-slate-500 md:flex-row md:justify-between md:pr-20 md:text-left">
          <div>© 2026 REMONTAKPP. Все права защищены.</div>
          <div>Разработка и продвижение сайта</div>
        </div>
      </div>
    </footer>
  );
}
