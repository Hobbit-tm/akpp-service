import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import Advantages from "../components/advantages/Advantages";
import Services from "../components/services/Services";
import Steps from "../components/steps/Steps";
import Prices from "../components/prices/Prices";
import Reviews from "../components/reviews/Reviews";
import ContactSection from "../components/contacts/ContactSection";
import FloatingButtons from "../components/layout/FloatingButtons";
import Map2GIS from "../components/contacts/Map2GIS";
import Footer from "../components/layout/Footer";
import FAQ from "../components/faq/FAQ";
import SeoContent from "../components/SeoContent";

export default function PublicSite() {
  return (
    <>
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
      <Map2GIS />

      <FloatingButtons />
      <Footer />
    </>
  );
}
