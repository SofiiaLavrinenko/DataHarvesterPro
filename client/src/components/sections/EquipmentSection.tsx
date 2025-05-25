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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-black border border-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Электровелосипед для курьеров"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Модель Courier Pro 2023</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Battery className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Батарея</h4>
                    <p className="text-sm text-gray-400">48В 15Ач, запас хода до 80 км</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Gauge className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Двигатель</h4>
                    <p className="text-sm text-gray-400">500Вт, максимальная скорость 25 км/ч</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Bike className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Рама</h4>
                    <p className="text-sm text-gray-400">Алюминиевая, усиленная, универсальный размер</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Drill className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Тормоза</h4>
                    <p className="text-sm text-gray-400">Гидравлические дисковые, передние и задние</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black border border-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Курьерское оборудование"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Дополнительное оборудование</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Безопасность</h4>
                    <p className="text-sm text-gray-400">Шлем, светоотражающий жилет, премиум-класса замок</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Bike className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Курьерские сумки</h4>
                    <p className="text-sm text-gray-400">Водонепроницаемые, объем 50Л, термоизолированные</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Battery className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Зарядное устройство</h4>
                    <p className="text-sm text-gray-400">Быстрое зарядное устройство 4А, полная зарядка за 4 часа</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Поддержка</h4>
                    <p className="text-sm text-gray-400">Техническое обслуживание 7 дней в неделю</p>
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
