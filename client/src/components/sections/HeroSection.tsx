import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Battery, MapPin, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-white to-blue-50">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Доставляй больше с <span className="text-gradient">электровелосипедом</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Аренда современных электровелосипедов для курьеров во Вроцлаве. Увеличь свои возможности доставки и зарабатывай больше.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <ScrollLink to="cennik" smooth={true} duration={500} offset={-80}>
                <Button className="w-full sm:w-auto">
                  Проверить цены
                </Button>
              </ScrollLink>
              <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
                <Button variant="outline" className="w-full sm:w-auto">
                  Контакты <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScrollLink>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1571168538867-ea0bdf879ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Курьер на электровелосипеде"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm">
                <div className="text-white">
                  <p className="font-medium">Повысь эффективность</p>
                  <p className="text-sm">Доставляй больше за меньшее время</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm card-hover">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Battery className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Долгий срок службы батареи</h3>
                <p className="text-sm text-muted-foreground">До 8 часов непрерывной работы</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm card-hover">
            <div className="flex items-start mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold">Идеально для города</h3>
                <p className="text-sm text-muted-foreground">Легкое маневрирование в городском потоке</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm card-hover">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Полная страховка</h3>
                <p className="text-sm text-muted-foreground">Защита для тебя и велосипеда</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
