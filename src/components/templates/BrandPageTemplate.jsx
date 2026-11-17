import { Link } from "react-router-dom";
import Seo from "../Seo";
import RelatedBrands from "../RelatedBrands";
import { createAutoRepairSchema } from "../../utils/schema";

import Header from "../layout/Header";
import ContactSection from "../contacts/ContactSection";
import Footer from "../layout/Footer";
export default function BrandPageTemplate({
  brand,
  title,
  description,
  heroDescription,
  models,
  problems,
  diagnostics,
  advantages,
  ctaTitle,
  ctaButton,
  slug,
}) {
  const schema = createAutoRepairSchema({
    title,
    description,
    url: `https://remont-akpp.kz/remont-akpp/${slug}`,
    serviceType: `Ремонт АКПП ${brand}`,
  });

  return (
    <>
      <Seo title={title} description={description} schema={schema} />

      <Header />

      <main className="mx-auto max-w-7xl px-4 pt-32 pb-20">
        <nav className="mb-8 text-sm text-slate-400">
          <Link to="/">Главная</Link>
          {" / "}
          <span>Ремонт АКПП {brand}</span>
        </nav>

        <div className="text-center">
          <h1 className="text-5xl font-black text-white">
            Ремонт АКПП {brand} в Алматы
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            {heroDescription}
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-slate-900/70 p-10">
          <h2 className="text-3xl font-black">
            Какие модели {brand} обслуживаем
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {models.map((model) => (
              <span key={model} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
                {model}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-10">
          <h2 className="text-3xl font-black">
            Частые неисправности АКПП {brand}
          </h2>

          <ul className="mt-6 space-y-4 text-lg text-slate-300">
            {problems.map((problem) => (
              <li key={problem}>✓ {problem}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-10">
          <h2 className="text-3xl font-black">Диагностика АКПП {brand}</h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">{diagnostics}</p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-10">
          <h2 className="text-3xl font-black">Почему выбирают наш сервис</h2>

          <ul className="mt-6 space-y-4 text-lg text-slate-300">
            {advantages.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-10">
          <h2 className="text-3xl font-black">Часто задаваемые вопросы</h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-bold text-xl">
                Сколько стоит ремонт АКПП {brand}?
              </h3>

              <p className="mt-2 text-slate-300">
                Стоимость зависит от результатов диагностики и характера
                неисправности.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Сколько длится ремонт?</h3>

              <p className="mt-2 text-slate-300">
                Обычно от одного до пяти рабочих дней.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Есть ли гарантия?</h3>

              <p className="mt-2 text-slate-300">
                Да. На все выполненные работы предоставляется гарантия.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-10">
          <h2 className="text-3xl font-black">Другие услуги</h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/diagnostika-akpp"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200"
            >
              Диагностика АКПП
            </Link>

            <Link
              to="/remont-dsg"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200"
            >
              Ремонт DSG
            </Link>

            <Link
              to="/remont-cvt"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200"
            >
              Ремонт CVT.
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-orange-500 p-10 text-center text-white">
          <h2 className="text-4xl font-black">{ctaTitle}</h2>

          <a
            href="tel:+77718721040"
            className="mt-6 inline-block rounded-full bg-red-600 px-8 py-4 font-bold text-white hover:bg-red-700"
          >
            {ctaButton}
          </a>
        </div>
      </main>
      <RelatedBrands currentBrand={brand} />
      <RelatedBrands currentBrand={slug} />
      <ContactSection />
      <Footer />
    </>
  );
}
