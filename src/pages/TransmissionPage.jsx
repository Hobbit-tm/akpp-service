import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Seo from "../components/Seo";

import { transmissions } from "../data/transmissionSpecs";

export default function TransmissionsPage() {
  const groups = transmissions.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <>
      <Seo
        title="Каталог коробок передач"
        description="Каталог АКПП, DSG, CVT и вариаторов. Ремонт всех популярных коробок передач."
      />

      <Header />

      <main className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-5xl font-black">Каталог коробок передач</h1>

        {Object.entries(groups).map(([type, list]) => (
          <section key={type} className="mt-14">
            <h2 className="text-3xl font-bold mb-6">{type}</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((item) => (
                <Link
                  key={item.slug}
                  to={`/transmission/${item.slug}`}
                  className="rounded-3xl border p-6 hover:border-red-500 transition"
                >
                  <h3 className="text-2xl font-bold">{item.name}</h3>

                  <p className="mt-2 text-slate-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
