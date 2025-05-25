import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Check, Zap } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="cennik" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white relative inline-block">
            Выгодные тарифы
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Подберите оптимальный вариант аренды с технической поддержкой и гарантией качества.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {/* Тарифы */}
          <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-orange-500 text-white rounded-xl shadow-2xl p-8 transition-all duration-500 hover:shadow-orange-500/20 flex flex-col">
            <div className="bg-orange-500 text-white text-xs font-semibold uppercase py-2 px-4 rounded-full inline-block mb-4 self-start shadow-lg">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                <span>Аренда электровелосипедов</span>
              </div>
            </div>
            
            <div className="mb-12 text-center">
              <span className="text-7xl font-bold text-orange-500 drop-shadow-lg">от 26 зл</span>
              <span className="text-2xl text-gray-300 ml-2">/день</span>
            </div>
            
            <div className="mb-10">
              <ul className="space-y-5">
                <li className="flex items-start bg-gray-900/50 p-3 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Check className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">Высокая мощность и дальность поездки</span>
                </li>
                <li className="flex items-start bg-gray-900/50 p-3 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Check className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">Надежный велосипедный замок</span>
                </li>
                <li className="flex items-start bg-gray-900/50 p-3 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Check className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">Техподдержка и обслуживание 24/7</span>
                </li>
              </ul>
            </div>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-6 shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-1 transition duration-300">
                Забронировать
              </Button>
            </ScrollLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
