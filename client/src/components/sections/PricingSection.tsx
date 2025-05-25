import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Check, Battery, Calendar } from "lucide-react";

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
              Гибкие тарифы
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Аренда электровелосипедов</h3>
            <p className="text-gray-300 mb-6">Выберите подходящий период для ваших потребностей</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-orange-500">от 26 зл</span>
              <span className="text-gray-300">/день</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-orange-400 mr-2" />
                  <h4 className="font-medium text-white">Недельная аренда</h4>
                </div>
                <p className="text-gray-400 text-sm mb-3">220 зл/неделя</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Полный комплект для работы</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Возвратная кауция 200 зл</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Battery className="h-5 w-5 text-orange-400 mr-2" />
                  <h4 className="font-medium text-white">Дополнительно</h4>
                </div>
                <p className="text-gray-400 text-sm mb-3">Опциональные услуги</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Дополнительная батарея +80 зл/неделя</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Техподдержка 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Забронировать
              </Button>
            </ScrollLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
