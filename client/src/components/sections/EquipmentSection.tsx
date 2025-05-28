import { Container } from "@/components/ui/container";
import { Link as ScrollLink } from "react-scroll";
import { Bike, Battery, Drill, Gauge, ShieldCheck, Clock, Lightbulb, Lock, MapPin } from "lucide-react";
import bikePhoto from "@assets/photo_2025-05-28 23.37.30.jpeg";

export default function EquipmentSection() {
  return (
    <section id="sprzet" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-black">
      <Container className="px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Спецификация оборудования</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Наши электровелосипеды были тщательно подобраны, чтобы удовлетворить потребности курьеров и обеспечить надежную работу в любых условиях.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img 
                src={bikePhoto} 
                alt="Электровелосипед для курьеров"
                className="object-cover w-full h-64 sm:h-80 md:h-96"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-white text-center">Модель Courier Pro 2023</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Battery className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">Батарея</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">35Ah, запас хода до 80 км</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Gauge className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">Надежный двигатель</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">Минимум обслуживания — максимум концентрации на работе</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Bike className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">Рама</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">Алюминиевая, усиленная, универсальный размер</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Drill className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">Гидравлические тормоза Shimano</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">Обеспечивают безопасное торможение в любых условиях</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">Фонари</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">Передний и задний свет для уверенной езды в темное время суток</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Lock className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">Замок ABUS</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">Надёжный немецкий замок с высшей степенью защиты</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">AirTag</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">Отслеживание перемещения для предотвращения краж</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
