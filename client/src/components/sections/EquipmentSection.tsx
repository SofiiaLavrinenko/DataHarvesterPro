import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Bike, Battery, Drill, Gauge, ShieldCheck, Clock, Download } from "lucide-react";

export default function EquipmentSection() {
  return (
    <section id="sprzet" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Specyfikacja sprzętu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nasze rowery elektryczne zostały starannie dobrane, aby spełnić potrzeby kurierów i zapewnić niezawodną pracę w każdych warunkach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Rower elektryczny dla kurierów"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Model Courier Pro 2023</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Battery className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Bateria</h4>
                    <p className="text-sm text-muted-foreground">48V 15Ah, zasięg do 80 km</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Gauge className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Silnik</h4>
                    <p className="text-sm text-muted-foreground">500W, maksymalna prędkość 25 km/h</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Bike className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Rama</h4>
                    <p className="text-sm text-muted-foreground">Aluminiowa, wzmocniona, rozmiar uniwersalny</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Drill className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">Hamulce</h4>
                    <p className="text-sm text-muted-foreground">Hydrauliczne tarczowe, przód i tył</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Wyposażenie kurierskie"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Wyposażenie dodatkowe</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-secondary mr-3" />
                  <div>
                    <h4 className="font-medium">Bezpieczeństwo</h4>
                    <p className="text-sm text-muted-foreground">Kask, kamizelka odblaskowa, zapięcie klasy premium</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Bike className="h-5 w-5 text-secondary mr-3" />
                  <div>
                    <h4 className="font-medium">Sakwy kurierskie</h4>
                    <p className="text-sm text-muted-foreground">Wodoodporne, pojemność 50L, termoizolowane</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Battery className="h-5 w-5 text-secondary mr-3" />
                  <div>
                    <h4 className="font-medium">Ładowarka</h4>
                    <p className="text-sm text-muted-foreground">Szybka ładowarka 4A, pełne ładowanie w 4 godziny</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-secondary mr-3" />
                  <div>
                    <h4 className="font-medium">Wsparcie</h4>
                    <p className="text-sm text-muted-foreground">Serwis techniczny 7 dni w tygodniu</p>
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
              <h3 className="text-xl font-semibold mb-2">Pobierz pełną specyfikację</h3>
              <p className="text-muted-foreground">
                Szczegółowa dokumentacja techniczna naszych rowerów elektrycznych, z instrukcją obsługi i poradami dla kurierów.
              </p>
            </div>
            <div className="md:w-1/4 text-center">
              <Button className="w-full sm:w-auto">
                Pobierz PDF
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
