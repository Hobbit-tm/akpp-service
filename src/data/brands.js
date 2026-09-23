import {
  commonProblems,
  commonDiagnostics,
  commonAdvantages,
  commonCtaButton,
  commonHeroDescription,
  commonDescription,
  commonCtaTitle,
} from "./common";

const createBrand = (brand, slug, models) => ({
  slug,
  brand,

  title: `Ремонт АКПП ${brand} в Алматы`,
  description: commonDescription(brand),
  heroDescription: commonHeroDescription(brand),

  models,

  problems: commonProblems,
  diagnostics: commonDiagnostics,
  advantages: commonAdvantages,

  ctaTitle: commonCtaTitle(brand),
  ctaButton: commonCtaButton,
});

export const brands = [
  createBrand("Toyota", "toyota", [
    "Camry",
    "Corolla",
    "RAV4",
    "Highlander",
    "Land Cruiser",
    "Prado",
  ]),

  createBrand("Lexus", "lexus", ["RX", "NX", "GX", "LX", "ES", "IS"]),

  createBrand("Hyundai", "hyundai", [
    "Sonata",
    "Elantra",
    "Santa Fe",
    "Tucson",
    "Creta",
  ]),

  createBrand("Kia", "kia", ["Rio", "Cerato", "K5", "Sportage", "Sorento"]),

  createBrand("Audi", "audi", ["A3", "A4", "A6", "A8", "Q5", "Q7"]),

  createBrand("BMW", "bmw", [
    "3 Series",
    "5 Series",
    "7 Series",
    "X3",
    "X5",
    "X7",
  ]),

  createBrand("Mercedes-Benz", "mercedes", [
    "C-Class",
    "E-Class",
    "S-Class",
    "GLC",
    "GLE",
    "GLS",
  ]),

  createBrand("Volkswagen", "volkswagen", [
    "Polo",
    "Passat",
    "Golf",
    "Tiguan",
    "Touareg",
  ]),

  createBrand("Skoda", "skoda", [
    "Rapid",
    "Octavia",
    "Superb",
    "Kodiaq",
    "Karoq",
  ]),

  createBrand("Mazda", "mazda", ["Mazda 3", "Mazda 6", "CX-5", "CX-9"]),
];
