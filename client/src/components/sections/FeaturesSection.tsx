import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Battery, Zap, Clock, Shield, MapPin, ReceiptText } from "lucide-react";
import bikePhoto1 from "@assets/IMG_8783_resized.jpg";
import bikePhoto2 from "@assets/photo_2025-05-28 23.37.26.jpeg";
import bikePhoto3 from "@assets/photo_2025-05-28 23.37.36.jpeg";

export default function FeaturesSection() {
  return (
    <section id="funkcje" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Почему наши велосипеды?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем самые современные электровелосипеды, адаптированные к потребностям курьеров, обеспечивающие надежность и эффективность в повседневной работе.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Battery className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Эффективная батарея</h3>
            <p className="text-muted-foreground">
              Батареи емкостью 35Ah, обеспечивающие до 80 км пробега на одной зарядке.
            </p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Мощный двигатель</h3>
            <p className="text-muted-foreground">
              Мощные двигатели, позволяющие легко преодолевать подъемы с грузом.
            </p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Гибкие сроки</h3>
            <p className="text-muted-foreground">
              Аренда на неделю или месяц - адаптирована под ваши потребности.
            </p>
          </div>
          
          {/* Feature Card 4 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Полный сервис</h3>
            <p className="text-muted-foreground">
              Бесплатное техническое обслуживание и замена расходных материалов включены в стоимость аренды.
            </p>
          </div>
          
          {/* Feature Card 5 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Расположение в центре</h3>
            <p className="text-muted-foreground">
              Пункт выдачи и возврата велосипедов в центральной части Вроцлава, рядом с ресторанами.
            </p>
          </div>
          
          {/* Feature Card 6 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <ReceiptText className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Полная документация</h3>
            <p className="text-muted-foreground">
              Все формальности оформляем на месте, договор и счет-фактура предоставляются сразу.
            </p>
          </div>
        </div>
        
        {/* Photo Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Наши велосипеды</h3>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ minWidth: 'max-content' }}>
              <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={bikePhoto1} 
                  alt="Электровелосипеды RowerHub в офисе"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={bikePhoto2} 
                  alt="Электровелосипед RowerHub - детальный вид"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={bikePhoto3} 
                  alt="Электровелосипед RowerHub - вид сбоку"
                  className="w-full h-full object-cover object-center"
                />
              </div>

            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            ← Прокрутите, чтобы увидеть больше фотографий →
          </p>
        </div>
      </Container>
    </section>
  );
}
