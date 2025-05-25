import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="cennik" className="py-20 bg-gradient-to-br from-gray-800 to-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Выгодные тарифы</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Подберите оптимальный вариант аренды с технической поддержкой и гарантией качества.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {/* Тарифы */}
          <div className="bg-black border border-orange-500 text-white rounded-xl shadow-lg p-6 transition-standard hover:shadow-xl flex flex-col">
            <div className="bg-orange-500 text-white text-xs font-semibold uppercase py-1 px-3 rounded-full inline-block mb-3 self-start">
              Аренда электровелосипедов
            </div>
            
            <div className="mb-8 text-center">
              <span className="text-6xl font-bold text-orange-500">от 26 зл</span>
              <span className="text-xl text-gray-300 ml-2">/день</span>
            </div>
            
            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">Высокая мощность и дальность поездки</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">Качественные курьерские сумки в комплекте</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">Шлем и светоотражающий жилет</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">Надежный велосипедный замок</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">Техподдержка и обслуживание 24/7</span>
                </li>
              </ul>
            </div>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6">
                Забронировать
              </Button>
            </ScrollLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
