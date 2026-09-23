import { Link } from "react-router-dom";
import { brands } from "../data/brands";

export default function RelatedBrands({ currentBrand }) {
  const related = brands.filter((item) => item.slug !== currentBrand);

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-black mb-8">Ремонт АКПП других марок</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {related.map((brand) => (
          <Link
            key={brand.slug}
            to={`/remont-akpp/${brand.slug}`}
            className="rounded-2xl border p-5 hover:border-orange-500 hover:bg-orange-50 transition"
          >
            <h3 className="font-bold">Ремонт АКПП {brand.brand}</h3>

            <p className="mt-2 text-slate-600">{brand.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
