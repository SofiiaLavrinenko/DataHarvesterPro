import { Container } from "@/components/ui/container";
import { Link as ScrollLink } from "react-scroll";
import { Bike, Battery, Drill, Gauge, ShieldCheck, Clock } from "lucide-react";

export default function EquipmentSection() {
  return (
    <section id="sprzet" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Спецификация оборудования</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Наши электровелосипеды были тщательно подобраны, чтобы удовлетворить потребности курьеров и обеспечить надежную работу в любых условиях.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Электровелосипед для курьеров"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">Модель Courier Pro 2023</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Battery className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-white text-lg">Батарея</h4>
                    <p className="text-sm text-gray-300">48В 15Ач, запас хода до 80 км</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Gauge className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-white text-lg">Двигатель</h4>
                    <p className="text-sm text-gray-300">500Вт, максимальная скорость 25 км/ч</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Bike className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-white text-lg">Рама</h4>
                    <p className="text-sm text-gray-300">Алюминиевая, усиленная, универсальный размер</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Drill className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-white text-lg">Тормоза</h4>
                    <p className="text-sm text-gray-300">Гидравлические дисковые, передние и задние</p>
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
