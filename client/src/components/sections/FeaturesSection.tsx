import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Battery, Zap, Clock, Shield, MapPin, ReceiptText } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="funkcje" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Dlaczego nasze rowery?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferujemy najnowocześniejsze rowery elektryczne dostosowane do potrzeb kurierów, zapewniające niezawodność i wydajność w codziennej pracy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Battery className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Wydajna bateria</h3>
            <p className="text-muted-foreground">
              Baterie o pojemności 48V zapewniające do 80 km zasięgu na jednym ładowaniu.
            </p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mocny silnik</h3>
            <p className="text-muted-foreground">
              Silniki o mocy 500W pozwalające na łatwe pokonywanie wzniesień z ładunkiem.
            </p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Elastyczne terminy</h3>
            <p className="text-muted-foreground">
              Wynajem dzienny, tygodniowy lub miesięczny - dopasowany do Twoich potrzeb.
            </p>
          </div>
          
          {/* Feature Card 4 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pełny serwis</h3>
            <p className="text-muted-foreground">
              Bezpłatny serwis techniczny i wymiana części eksploatacyjnych w cenie wynajmu.
            </p>
          </div>
          
          {/* Feature Card 5 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lokalizacja w centrum</h3>
            <p className="text-muted-foreground">
              Punkt odbioru i zwrotu rowerów w centralnej części Wrocławia, blisko restauracji.
            </p>
          </div>
          
          {/* Feature Card 6 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <ReceiptText className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pełna dokumentacja</h3>
            <p className="text-muted-foreground">
              Wszystkie formalności załatwiamy na miejscu, umowa i faktura od ręki.
            </p>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <ScrollLink to="cennik" smooth={true} duration={500} offset={-80}>
            <Button>
              Sprawdź naszą ofertę
            </Button>
          </ScrollLink>
        </div>
      </Container>
    </section>
  );
}
