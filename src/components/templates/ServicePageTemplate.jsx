import { Helmet } from "react-helmet-async";
import SeoContent from "../SeoContent";

import Header from "../layout/Header";
import ContactSection from "../contacts/ContactSection";
import Footer from "../layout/Footer";

export default function ServicePageTemplate({ data, children }) {
  if (!data) {
    return null;
  }

  const {
    seo = {},
    hero = {},
    symptoms = [],
    brands = [],
    consultation = {},
  } = data;

  return (
    <>
      {/* SEO */}
      <Helmet prioritizeSeoTags>
        <html lang="ru" />

        <title>{seo.title}</title>

        <meta name="description" content={seo.description} />

        {seo.keywords && <meta name="keywords" content={seo.keywords} />}

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />

        {seo.canonical && (
          <>
            <link rel="canonical" href={seo.canonical} />
            <meta property="og:url" content={seo.canonical} />
          </>
        )}
      </Helmet>

      <main className="bg-slate-950">
        {/* HERO */}
        <section className="relative overflow-hidden py-24">
          {/* Фоновое свечение */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.08),transparent_45%)]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h1 className="text-5xl font-black text-white md:text-6xl">
                {hero.h1}
              </h1>

              {hero.intro && (
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                  {hero.intro}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* КОГДА НУЖНА УСЛУГА */}
        {symptoms.length > 0 && (
          <section className="mx-auto max-w-7xl px-4">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 shadow-2xl backdrop-blur-xl">
              <h2 className="text-3xl font-bold text-white">
                {data.symptomsTitle || "Когда нужна услуга"}
              </h2>

              <ul className="mt-6 space-y-3 text-lg text-slate-400">
                {symptoms.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-red-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* АВТОМОБИЛИ */}
        {brands.length > 0 && (
          <section className="mx-auto mt-10 max-w-7xl px-4">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 shadow-2xl backdrop-blur-xl">
              <h2 className="text-3xl font-bold text-white">
                {data.brandsTitle || "Какие автомобили обслуживаем"}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                {data.brandsText}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-white/10 bg-slate-800 px-5 py-2 text-sm font-semibold text-slate-200"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ДОПОЛНИТЕЛЬНЫЕ СЕКЦИИ */}
        {children && (
          <section className="mx-auto mt-10 max-w-7xl px-4">{children}</section>
        )}

        {/* CTA */}
        <section className="mx-auto mt-10 max-w-7xl px-4">
          <div className="rounded-[32px] border border-red-500/20 bg-gradient-to-r from-red-600 to-red-500 p-10 text-center">
            <h2 className="text-3xl font-black text-white">
              {consultation.title || "Нужна консультация?"}
            </h2>

            {consultation.text && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                {consultation.text}
              </p>
            )}

            <a
              href={`tel:${consultation.phone || "+77718721040"}`}
              className="mt-6 inline-flex items-center rounded-full bg-white px-8 py-4 font-bold text-red-600 transition hover:scale-105"
            >
              {consultation.button || "Позвонить мастеру"}
            </a>
          </div>
        </section>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
