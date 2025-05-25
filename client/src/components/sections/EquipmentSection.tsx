import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Bike, Battery, Drill, Gauge, ShieldCheck, Clock, Download } from "lucide-react";

export default function EquipmentSection() {
  return (
    <section id="sprzet" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Спецификация оборудования</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наши электровелосипеды были тщательно подобраны, чтобы удовлетворить потребности курьеров и обеспечить надежную работу в любых условиях.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Электровелосипед для курьеров"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Модель Courier Pro 2023</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Battery className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Батарея</h4>
                    <p className="text-sm text-muted-foreground">48В 15Ач, запас хода до 80 км</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Gauge className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Двигатель</h4>
                    <p className="text-sm text-muted-foreground">500Вт, максимальная скорость 25 км/ч</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Bike className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Рама</h4>
                    <p className="text-sm text-muted-foreground">Алюминиевая, усиленная, универсальный размер</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Drill className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Тормоза</h4>
                    <p className="text-sm text-muted-foreground">Гидравлические дисковые, передние и задние</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Курьерское оборудование"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Дополнительное оборудование</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-secondary mr-3" />
                  <div>
                    <h4 className="font-medium">Безопасность</h4>
                    <p className="text-sm text-muted-foreground">Шлем, светоотражающий жилет, премиум-класса замок</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Bike className="h-5 w-5 text-secondary mr-3" />
                  <div>
                    <h4 className="font-medium">Курьерские сумки</h4>
                    <p className="text-sm text-muted-foreground">Водонепроницаемые, объем 50Л, термоизолированные</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Battery className="h-5 w-5 text-secondary mr-3" />
                  <div>
                    <h4 className="font-medium">Зарядное устройство</h4>
                    <p className="text-sm text-muted-foreground">Быстрое зарядное устройство 4А, полная зарядка за 4 часа</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-secondary mr-3" />
                  <div>
                    <h4 className="font-medium">Поддержка</h4>
                    <p className="text-sm text-muted-foreground">Техническое обслуживание 7 дней в неделю</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <Download className="h-16 w-16 text-primary" />
            </div>
            <div className="md:w-2/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Скачать полную спецификацию</h3>
              <p className="text-muted-foreground">
                Подробная техническая документация наших электровелосипедов, с инструкцией по эксплуатации и советами для курьеров.
              </p>
            </div>
            <div className="md:w-1/4 text-center">
              <Button className="w-full sm:w-auto">
                Скачать PDF
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
