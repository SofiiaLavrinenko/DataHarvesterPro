import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Check, X, ArrowRight, Battery } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="cennik" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Прозрачные цены</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите оптимальный вариант аренды с полной технической поддержкой и гарантией качества.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {/* Недельный план */}
          <div className="bg-primary text-white rounded-xl shadow-lg p-6 transition-standard hover:shadow-xl flex flex-col">
            <div className="bg-white text-primary text-xs font-semibold uppercase py-1 px-3 rounded-full inline-block mb-3">
              Еженедельная аренда
            </div>
            <h3 className="text-xl font-semibold mb-2">Недельный тариф</h3>
            <p className="text-blue-100 mb-6">Идеальное решение для работающих курьеров</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">220 зл</span>
              <span className="text-blue-100">/неделя</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Электровелосипед с батареей</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Качественные курьерские сумки</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Шлем и светоотражающий жилет</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Надежный велосипедный замок</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Базовая страховка</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Возвратная кауция 200 зл</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Техническое обслуживание и поддержка</span>
              </li>
            </ul>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button className="w-full bg-white text-primary hover:bg-blue-50">
                Забронировать
              </Button>
            </ScrollLink>
            
            <div className="mt-6 bg-blue-800 rounded-lg p-4">
              <div className="flex items-center">
                <Battery className="h-6 w-6 text-green-400 mr-2" />
                <div>
                  <p className="font-medium text-white">Дополнительная батарея</p>
                  <p className="text-blue-100 text-sm">+80 зл/неделя</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
