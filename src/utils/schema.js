export function createAutoRepairSchema({
  title,
  description,
  url,
  serviceType,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",

    name: "AKPP Service",

    description,

    image: "https://akpp-service.kz/logo.png",

    url,

    telephone: "+77718721040",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Алматы",
      addressCountry: "KZ",
    },

    areaServed: "Алматы",

    serviceType,
  };
}
