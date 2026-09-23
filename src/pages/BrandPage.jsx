import { useParams } from "react-router-dom";

import BrandPageTemplate from "../components/templates/BrandPageTemplate";
import { brands } from "../data/brands.js";

export default function BrandPage() {
  const { brand } = useParams();

  const brandData = brands.find((item) => item.slug === brand);

  if (!brandData) {
    return <h1>Страница не найдена</h1>;
  }

  return <BrandPageTemplate {...brandData} />;
}
