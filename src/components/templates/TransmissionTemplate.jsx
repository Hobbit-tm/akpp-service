import Seo from "../Seo";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ContactSection from "../contacts/ContactSection";
import { transmissionSpecs } from "../../data/transmissionSpecs";

const { description, problems, advantages } = transmissionSpecs[slug];

export default function TransmissionTemplate({
  name,
  type,
  manufacturers,
  description,
  problems,
  advantages,
}) {
  return (
    <>
      <Seo
        title={`Ремонт ${name} в Алматы`}
        description={`Профессиональный ремонт коробки передач ${name}.`}
      />

      <Header />

      <main className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-5xl font-black">Ремонт {name}</h1>

        <p className="mt-6 text-xl text-slate-600">Тип коробки: {type}</p>

        <div className="mt-10 rounded-3xl border p-8">
          <h2 className="mt-10 text-3xl font-black">
            Устанавливается на автомобили
          </h2>
          <h2>Описание</h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">{description}</p>

          <h2>Типичные неисправности</h2>

          <ul className="mt-4 space-y-3 list-disc pl-6 text-slate-700">
            {problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>

          <h2>Почему выбирают нас</h2>

          <ul className="mt-4 space-y-3 list-disc pl-6 text-slate-700">
            {advantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            {manufacturers.map((brand) => (
              <span key={brand} className="rounded-full bg-slate-100 px-4 py-2">
                {brand}
              </span>
            ))}
          </div>
        </div>
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-10">
          <h2 className="text-3xl font-black">Признаки неисправности {name}</h2>

          <ul className="mt-6 space-y-4 text-lg text-slate-700">
            {problems.map((problem) => (
              <li key={problem}>✓ {problem}</li>
            ))}
          </ul>
        </section>
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-10">
          <h2 className="text-3xl font-black">
            Почему выходит из строя {name}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Основными причинами поломки являются перегрев трансмиссии,
            несвоевременная замена масла, износ фрикционов, загрязнение
            гидроблока и естественный износ деталей. Своевременная диагностика
            позволяет избежать дорогостоящего капитального ремонта.
          </p>
        </section>
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-10">
          <h2 className="text-3xl font-black">Как проходит ремонт</h2>

          <ol className="mt-6 space-y-4 text-lg text-slate-700 list-decimal pl-6">
            <li>Компьютерная диагностика.</li>
            <li>Проверка давления масла.</li>
            <li>Демонтаж коробки передач.</li>
            <li>Полная разборка и дефектовка.</li>
            <li>Замена изношенных деталей.</li>
            <li>Сборка, адаптация и проверка.</li>
          </ol>
        </section>
      </main>

      <ContactSection />

      <Footer />
    </>
  );
}
