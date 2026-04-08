import { ScrollProgress } from "./components/ScrollProgress";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
