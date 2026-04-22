import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Artifacts from "@/components/Artifacts";
import Certifications from "@/components/Certifications";
import Affiliations from "@/components/Affiliations";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Artifacts />
      <Certifications />
      <Affiliations />
      <Footer />
  </div>
);

export default Index;
