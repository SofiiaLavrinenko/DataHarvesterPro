import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Battery, MapPin, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-gray-900 to-black">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Доставляй больше с <span className="text-orange-500">электровелосипедом</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Аренда современных электровелосипедов для курьеров во Вроцлаве. Увеличь свои возможности доставки и зарабатывай больше.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
                <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                  Связаться с нами
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
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm card-hover">
            <div className="flex items-start mb-4">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <Battery className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Долгий срок службы батареи</h3>
                <p className="text-sm text-gray-400">До 8 часов непрерывной работы</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm card-hover">
            <div className="flex items-start mb-4">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Идеально для города</h3>
                <p className="text-sm text-gray-400">Легкое маневрирование в городском потоке</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm card-hover">
            <div className="flex items-start mb-4">
              <div className="bg-gray-800 p-3 rounded-lg mr-4">
                <ShieldCheck className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Полная страховка</h3>
                <p className="text-sm text-gray-400">Защита для тебя и велосипеда</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
