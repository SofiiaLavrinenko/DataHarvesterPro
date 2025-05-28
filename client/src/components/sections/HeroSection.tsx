import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Battery, MapPin, ShieldCheck } from "lucide-react";
import bicyclesImage from "../../assets/bicycles.jpg";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-gray-900 to-black">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Доставляй больше с <span className="text-orange-500 inline-block relative">
                электровелосипедом
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Аренда современных электровелосипедов для курьеров во Вроцлаве. Увеличь свои возможности доставки и зарабатывай больше.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
                <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 shadow-lg transform hover:-translate-y-1 transition duration-300 text-lg px-8 py-6">
                  Связаться с нами
                </Button>
              </ScrollLink>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
              <img 
                src="https://images.unsplash.com/photo-1571168538867-ea0bdf879ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Курьер на электровелосипеде"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-5 backdrop-blur-sm">
                <div className="text-white">
                  <p className="font-medium text-lg">Повысь эффективность</p>
                  <p className="text-sm text-gray-200">Доставляй больше за меньшее время</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-start mb-4">
              <div className="bg-gray-800 p-3 rounded-lg mr-4 shadow-inner border border-gray-700">
                <Battery className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Долгий срок службы батареи</h3>
                <p className="text-sm text-gray-300">До 8 часов непрерывной работы</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-start mb-4">
              <div className="bg-gray-800 p-3 rounded-lg mr-4 shadow-inner border border-gray-700">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Идеально для города</h3>
                <p className="text-sm text-gray-300">Легкое маневрирование в городском потоке</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-start mb-4">
              <div className="bg-gray-800 p-3 rounded-lg mr-4 shadow-inner border border-gray-700">
                <ShieldCheck className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Полная страховка</h3>
                <p className="text-sm text-gray-300">Защита для тебя и велосипеда</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
