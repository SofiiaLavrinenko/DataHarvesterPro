import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Check, X, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="cennik" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Прозрачные цены</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите план, адаптированный к вашим потребностям, с возможностью гибкой аренды и полной технической поддержкой.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Дневной план */}
          <div className="bg-background rounded-xl shadow-sm p-6 transition-standard hover:shadow-md flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Дневной</h3>
            <p className="text-muted-foreground mb-6">Идеально для коротких заказов и тестирования</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">99 зл</span>
              <span className="text-muted-foreground">/день</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Электровелосипед с батареей</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Курьерские сумки</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Шлем и светоотражающий жилет</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Велосипедный замок</span>
              </li>
              <li className="flex items-start text-muted-foreground">
                <X className="h-5 w-5 mr-2 mt-0.5" />
                <span>Расширенная страховка</span>
              </li>
              <li className="flex items-start text-muted-foreground">
                <X className="h-5 w-5 mr-2 mt-0.5" />
                <span>Дополнительная батарея</span>
              </li>
            </ul>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button variant="outline" className="w-full">
                Забронировать
              </Button>
            </ScrollLink>
          </div>
          
          {/* Недельный план */}
          <div className="bg-primary text-white rounded-xl shadow-lg p-6 transition-standard hover:shadow-xl transform scale-105 flex flex-col">
            <div className="bg-white text-primary text-xs font-semibold uppercase py-1 px-3 rounded-full inline-block mb-3">
              Самый популярный
            </div>
            <h3 className="text-xl font-semibold mb-2">Недельный</h3>
            <p className="text-blue-100 mb-6">Для регулярно работающих курьеров</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">499 зл</span>
              <span className="text-blue-100">/неделя</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Электровелосипед с батареей</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Премиум курьерские сумки</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Шлем и светоотражающий жилет</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Премиум велосипедный замок</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Расширенная страховка</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Сервис по запросу</span>
              </li>
            </ul>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button className="w-full bg-white text-primary hover:bg-blue-50">
                Забронировать
              </Button>
            </ScrollLink>
          </div>
          
          {/* Месячный план */}
          <div className="bg-background rounded-xl shadow-sm p-6 transition-standard hover:shadow-md flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Месячный</h3>
            <p className="text-muted-foreground mb-6">Для профессиональных доставщиков</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">1599 зл</span>
              <span className="text-muted-foreground">/месяц</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Электровелосипед с батареей</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Премиум курьерские сумки</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Шлем и светоотражающий жилет</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Премиум велосипедный замок</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Расширенная страховка</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Дополнительная батарея в комплекте</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Приоритетный сервис 24/7</span>
              </li>
            </ul>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button variant="outline" className="w-full">
                Забронировать
              </Button>
            </ScrollLink>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-xl font-semibold mb-2">Нужен больший автопарк?</h3>
              <p className="text-muted-foreground">
                Свяжитесь с нами, чтобы обсудить специальное предложение для курьерских компаний и ресторанов. Мы предлагаем привлекательные скидки при аренде нескольких велосипедов.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
                <Button className="flex items-center gap-2">
                  Давайте обсудим <ArrowRight className="h-4 w-4" />
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
