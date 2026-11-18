import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import Advantages from "../components/advantages/Advantages";
import Services from "../components/services/Services";
import Steps from "../components/steps/Steps";
import Prices from "../components/prices/Prices";
import Reviews from "../components/reviews/Reviews";
import ContactSection from "../components/contacts/ContactSection";
import FloatingButtons from "../components/layout/FloatingButtons";
import MapClient from "../components/contacts/MapClient";
import Footer from "../components/layout/Footer";
import FAQ from "../components/faq/FAQ";
import SeoContent from "../components/SeoContent";
import Seo from "../components/Seo";

export default function PublicSite() {
  return (
    <>
      <Seo
        title="Ремонт АКПП в Алматы — гарантия до 1 года"
        description="Ремонт АКПП, DSG и вариаторов в Алматы: диагностика, замена масла, капитальный ремонт. Официальная гарантия до 1 года. Звоните: +7 (771) 872-10-40."
        keywords="ремонт АКПП Алматы, ремонт DSG, ремонт вариатора, диагностика АКПП, замена масла в АКПП"
        url="https://remont-akpp.kz/"
        schema={{
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "REMONTAKPP",
          url: "https://remont-akpp.kz/",
          telephone: "+77718721040",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Алматы",
            streetAddress: "Садовый бульвар 1ж",
          },
        }}
      />
      <Header />
      <Hero />
      <Advantages />
      <Services />
      <Steps />
      <Prices />
      <Reviews />

      <FAQ />

      <SeoContent />

      <ContactSection />
      <MapClient />

      <FloatingButtons />
      <Footer />
    </>
  );
}
