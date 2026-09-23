import { PhoneCall, MapPin, Clock3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Красное свечение */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Логотип */}
          <div>
            <h3 className="text-4xl font-black leading-none">
              <span className="text-white">REMONT</span>
              <span className="text-red-500">AKPP</span>
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              Профессиональный ремонт АКПП, DSG и вариаторов в Алматы.
              Современное оборудование, опытные специалисты и официальная
              гарантия.
            </p>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Услуги</h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="/remont-akpp"
                  className="transition hover:text-red-400"
                >
                  Ремонт АКПП
                </a>
              </li>

              <li>
                <a href="/remont-dsg" className="transition hover:text-red-400">
                  Ремонт DSG
                </a>
              </li>

              <li>
                <a href="/remont-cvt" className="transition hover:text-red-400">
                  Ремонт вариатора
                </a>
              </li>

              <li>
                <a
                  href="/diagnostika-akpp"
                  className="transition hover:text-red-400"
                >
                  Диагностика
                </a>
              </li>

              <li>
                <a
                  href="/zamena-masla-akpp"
                  className="transition hover:text-red-400"
                >
                  Замена масла
                </a>
              </li>
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Навигация</h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#advantages" className="transition hover:text-red-400">
                  Преимущества
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-red-400">
                  Услуги
                </a>
              </li>

              <li>
                <a href="#prices" className="transition hover:text-red-400">
                  Цены
                </a>
              </li>

              <li>
                <a href="#reviews" className="transition hover:text-red-400">
                  Отзывы
                </a>
              </li>

              <li>
                <a href="#contacts" className="transition hover:text-red-400">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Контакты</h4>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <PhoneCall className="mt-1 h-5 w-5 text-red-500" />

                <div>
                  <div className="font-semibold text-white">
                    <a
                      href="tel:+77718721040"
                      className="ml-2 text-white -500 hover:text-red-400 transition"
                    >
                      +7 (771) 872-10-40
                    </a>
                  </div>

                  <div className="text-sm text-slate-400">
                    Телефон для записи
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-red-500" />

                <div className="text-slate-400">
                  г. Алматы
                  <br />
                  ул. Садовый бульвар 1ж
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-red-500" />

                <div className="text-slate-400">
                  Понедельник — Пятница
                  <br />
                  10:00 – 18:00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Низ футера */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <div>© 2026 REMONTAKPP. Все права защищены.</div>

          <div>Разработка и продвижение сайта</div>
        </div>
      </div>
    </footer>
  );
}
