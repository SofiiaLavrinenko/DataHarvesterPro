import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Check, Zap } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="cennik" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-black">
      <Container className="px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white relative inline-block">
            Выгодные тарифы
            <span className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-0.5 md:h-1 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 md:mt-6 text-sm sm:text-base md:text-lg px-4">
            Подберите оптимальный вариант аренды с технической поддержкой и гарантией качества.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-orange-500 text-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-orange-500/20">
            <div className="bg-orange-500 text-white text-xs sm:text-sm font-semibold uppercase py-1.5 md:py-2 px-3 md:px-4 rounded-full inline-block mb-4 md:mb-6 shadow-lg">
              <div className="flex items-center">
                <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                <span className="text-xs md:text-sm">Недельная аренда</span>
              </div>
            </div>
            
            <div className="mb-8 md:mb-12 text-center">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 drop-shadow-lg">220 зл</span>
              <span className="text-lg sm:text-xl md:text-2xl text-gray-300 ml-2">/неделя</span>
            </div>
            
            <div className="mb-8 md:mb-10">
              <ul className="space-y-3 md:space-y-5">
                <li className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-sm sm:text-base md:text-lg">Высокая мощность и дальность поездки</span>
                </li>
                <li className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-sm sm:text-base md:text-lg">Надежный велосипедный замок</span>
                </li>
                <li className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-sm sm:text-base md:text-lg">Техподдержка и обслуживание 24/7</span>
                </li>
              </ul>
            </div>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg md:text-xl py-4 md:py-6 px-6 shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-1 transition duration-300">
                Забронировать
              </Button>
            </ScrollLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
