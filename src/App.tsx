import HeroSection from './components/HeroSection';
import InteractiveDemo from './components/InteractiveDemo';
import MetricsDashboard from './components/MetricsDashboard';
import ServicesGrid from './components/ServicesGrid';
import TechStackDiagram from './components/TechStackDiagram';
import AboutUs from './components/AboutUs';
import PricingCalculator from './components/PricingCalculator';
import ConsultationForm from './components/ConsultationForm';

function App() {
  return (
    <main className="pt-16">
      <HeroSection />
      <div id="demo">
        <InteractiveDemo />
      </div>
      <MetricsDashboard />
      <div id="services">
        <ServicesGrid />
      </div>
      <TechStackDiagram />
      <div id="about">
        <AboutUs />
      </div>
      <div id="pricing">
        <PricingCalculator />
      </div>
      <div id="consultation">
        <ConsultationForm />
      </div>
    </main>
  );
}

export default App;
