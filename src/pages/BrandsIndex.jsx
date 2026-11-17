import Seo from "../components/Seo";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/contacts/ContactSection";
import { brands } from "../data/brands";
import BrandCard from "../components/brands/BrandCard";

export default function BrandsIndex() {
  return (
    <>
      <Seo
        title="Ремонт АКПП по маркам автомобилей в Алматы"
        description="Ремонт автоматических коробок передач Toyota, BMW, Lexus, Kia, Hyundai, Audi, Skoda, Volkswagen и Mercedes в Алматы."
      />

      <Header />

      <main className="mx-auto max-w-7xl px-4 pt-32 pb-20">
        <h1 className="text-center md:text-left text-4xl font-black text-white md:text-6xl">
          Ремонт АКПП по маркам
        </h1>
        <p className="text-center md:text-left mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Выберите свою марку, чтобы узнать о типичных неисправностях и
          стоимости диагностики.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
