import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import StrategicConsulting from "@/components/StrategicConsulting";
import WasteReduction from "@/components/WasteReduction";
import ESGMetrics from "@/components/ESGMetrics";
import SupplyChainEthics from "@/components/SupplyChainEthics";
import Consultants from "@/components/Consultants";
import NatureImage from "@/components/NatureImage";
import WasteCounters from "@/components/WasteCounters";
import Journal from "@/components/Journal";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <ClientLogos />
      <StrategicConsulting />
      <WasteReduction />
      <ESGMetrics />
      <SupplyChainEthics />
      <Consultants />
      <NatureImage />
      <WasteCounters />
      <Journal />
      <Certifications />
      <Testimonials />
      <ConsultationCTA />
      <Footer />
    </>
  );
};

export default Index;
