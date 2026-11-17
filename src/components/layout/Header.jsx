import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";

const menu = [
  { title: "Главная", href: "/" },

  {
    title: "Услуги",
    submenu: [
      { title: "Ремонт АКПП", href: "/remont-akpp" },
      { title: "Ремонт DSG", href: "/remont-dsg" },
      { title: "Ремонт вариатора", href: "/remont-cvt" },
      { title: "Диагностика АКПП", href: "/diagnostika-akpp" },
      { title: "Замена масла", href: "/zamena-masla-akpp" },
    ],
  },

  { title: "Цены", section: "prices" },
  { title: "О нас", section: "about" },
  { title: "Отзывы", section: "reviews" },


  { title: "Контакты", section: "contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }

        window.history.replaceState({}, "");
      }, 150);
    }
  }, [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div
          className={`
            overflow-hidden
            rounded-2xl
            border
            shadow-xl
            transition-all
            duration-500
            ${
              scrolled
                ? "border-white/10 bg-slate-950/95 backdrop-blur-2xl shadow-black/40"
                : "border-white/5 bg-slate-950/55 backdrop-blur-2xl"
            }
          `}
        >
          <div className="flex h-[72px] items-center justify-between px-6 lg:grid lg:h-[82px] lg:grid-cols-[300px_1fr_430px] lg:px-8 ">
            {/* Logo */}
            {/* Logo */}
            <Link
              to="/"
              className="flex h-full flex-col justify-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="text-3xl font-black leading-none tracking-tight lg:text-4xl">
                <span className="text-white">REMONT</span>
                <span className="text-red-500">AKPP</span>
              </span>

              <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-400 lg:text-[11px]">
                Ремонт АКПП
              </span>
            </Link>

            {/* Desktop menu */}
            <nav className="hidden items-center justify-center gap-6 whitespace-nowrap lg:flex 2xl:gap-12">
              {menu.map((item) =>
                item.submenu ? (
                  <div key={item.title} className="group relative">
                    <button className="flex items-center gap-1 font-medium text-slate-200 transition hover:text-red-400">
                      {item.title}

                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </button>

                    <div className="invisible absolute left-0 top-full mt-5 w-64 translate-y-3 rounded-2xl border border-white/10 bg-slate-950/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.submenu.map((sub) => (
                        <NavLink
                          key={sub.title}
                          to={sub.href}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-3 text-sm transition ${
                              isActive
                                ? "bg-red-600 text-white"
                                : "text-slate-200 hover:bg-white/5 hover:text-red-400"
                            }`
                          }
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : item.section ? (
                  <button
                    key={item.title}
                    onClick={() => scrollToSection(item.section)}
                    className="group relative font-medium text-slate-200 transition hover:text-red-400"
                  >
                    {item.title}

                    <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <NavLink
                    key={item.title}
                    to={item.href}
                    className={({ isActive }) =>
                      `group relative font-medium transition ${
                        isActive
                          ? "text-red-500"
                          : "text-slate-200 hover:text-red-400"
                      }`
                    }
                  >
                    {item.title}

                    <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
                  </NavLink>
                ),
              )}
            </nav>

            {/* Right */}
            <div className="hidden items-center justify-end gap-6 lg:flex">
              <a
                href="tel:+77718721040"
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white transition duration-300 hover:scale-110">
                  <PhoneCall size={18} />
                </div>

                <div>
                  <div>
                    <div className="whitespace-nowrap text-lg font-bold leading-none text-white">
                      +7 (771) 872-10-40
                    </div>

                    <div className="mt-1.5 text-center text-slate-400">
                      Пн - пт 10:00–18:00
                    </div>
                  </div>

                  {/* <div className="mt-1 text-xs leading-tight text-slate-400">
                    Ежедневно
                    <br />
                    10:00–18:00
                  </div> */}
                </div>
              </a>

              <button
                onClick={() => scrollToSection("contacts")}
                className="rounded-2xl bg-red-600 px-10 py-1 font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-red-700 hover:shadow-red-500/40"
              >
                Запись на диагностику
              </button>
            </div>

            {/* Burger */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-white/5 lg:hidden"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
            open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="rounded-2xl border border-white/10 bg-slate-950/95 p-3 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-2">
                {menu.map((item) => {
                  const tile =
                    "flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10";

                  if (item.submenu) {
                    return (
                      <button
                        key={item.title}
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`${tile} col-span-2`}
                        aria-expanded={servicesOpen}
                      >
                        {item.title}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    );
                  }

                  if (item.section) {
                    return (
                      <button
                        key={item.title}
                        onClick={() => {
                          scrollToSection(item.section);
                          setOpen(false);
                        }}
                        className={tile}
                      >
                        {item.title}
                      </button>
                    );
                  }

                  return (
                    <NavLink
                      key={item.title}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `${tile} ${isActive ? "bg-red-600 hover:bg-red-600" : ""}`
                      }
                    >
                      {item.title}
                    </NavLink>
                  );
                })}

                {servicesOpen && (
                  <div className="col-span-2 grid grid-cols-1 gap-1 rounded-xl bg-white/5 p-2">
                    {menu
                      .find((item) => item.submenu)
                      .submenu.map((sub) => (
                        <NavLink
                          key={sub.title}
                          to={sub.href}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `rounded-lg px-3 py-2.5 text-sm transition ${
                              isActive
                                ? "bg-red-600 text-white"
                                : "text-slate-200 hover:bg-white/10"
                            }`
                          }
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-stretch gap-2 border-t border-white/10 pt-3">
                <a
                  href="tel:+77718721040"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-3 py-3 text-sm font-semibold text-white"
                >
                  <PhoneCall size={16} className="text-red-500" />
                  Позвонить
                </a>

                <button
                  onClick={() => {
                    scrollToSection("contacts");
                    setOpen(false);
                  }}
                  className="flex-1 rounded-xl bg-red-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Записаться
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
