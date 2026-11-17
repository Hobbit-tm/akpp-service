import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Seo from "../components/Seo";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/contacts/ContactSection";
import { brands } from "../data/brands";

export default function BrandsIndex() {
  return (
    <>
      <Seo
        title="Ремонт АКПП по маркам автомобилей в Алматы"
        description="Ремонт автоматических коробок передач Toyota, BMW, Lexus, Kia, Hyundai, Audi, Skoda, Volkswagen и Mercedes в Алматы."
      />

      <Header />

      <main className="mx-auto max-w-7xl px-4 pt-32 pb-20">
        <h1 className="text-4xl font-black text-white md:text-6xl">
          Ремонт АКПП по маркам
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Выберите свою марку, чтобы узнать о типичных неисправностях и
          стоимости диагностики.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              to={`/remont-akpp/${brand.slug}`}
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-red-500"
            >
              <span className="text-2xl font-black text-white">
                {brand.brand}
              </span>
              <ArrowRight className="h-5 w-5 text-red-500 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
