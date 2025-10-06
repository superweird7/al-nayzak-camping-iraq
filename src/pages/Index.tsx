import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Offers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
