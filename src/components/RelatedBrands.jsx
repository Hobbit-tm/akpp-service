import { brands } from "../data/brands";
import BrandCard from "./brands/BrandCard";

export default function RelatedBrands({ currentBrand }) {
  const related = brands.filter((item) => item.slug !== currentBrand);

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-black text-white">
        Ремонт АКПП других марок
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {related.map((brand) => (
          <BrandCard key={brand.slug} brand={brand} />
        ))}
      </div>
    </section>
  );
}
