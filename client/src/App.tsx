import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/useLanguage";
import { queryClient } from "./lib/queryClient";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import PricingSection from "./components/sections/PricingSection";
import RulesSection from "./components/sections/RulesSection";
import EquipmentSection from "./components/sections/EquipmentSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <HeroSection />
              <FeaturesSection />
              <PricingSection />
              <RulesSection />
              <EquipmentSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
