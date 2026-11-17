import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

import Seo from "../components/Seo";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/contacts/ContactSection";

export default function ServicePage({ service }) {
  const { seo, h1, lead, includes, signs, timing } = service;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />

      <Header />

      <main className="mx-auto max-w-7xl px-4 pt-32 pb-20">
        <nav className="mb-8 text-sm text-slate-400">
          <Link to="/" className="hover:text-red-400">
            Главная
          </Link>
          {" / "}
          <span>{h1}</span>
        </nav>

        <h1 className="text-4xl font-black text-white md:text-6xl">{h1}</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {lead}
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-black text-white">Что входит</h2>
            <ul className="mt-6 space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-black text-white">
              Признаки, что нужна помощь
            </h2>
            <ul className="mt-6 space-y-4">
              {signs.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-400">
          {timing}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/#prices"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:border-red-500"
          >
            Смотреть цены
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/remont-akpp"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:border-red-500"
          >
            Ремонт по маркам
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
