import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Check, X, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="cennik" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Przejrzysty cennik</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wybierz plan dostosowany do Twoich potrzeb, z możliwością elastycznego wynajmu i pełnym wsparciem technicznym.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Dzienny Plan */}
          <div className="bg-background rounded-xl shadow-sm p-6 transition-standard hover:shadow-md flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Dzienny</h3>
            <p className="text-muted-foreground mb-6">Idealne na krótkie zlecenia i próby</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">99 zł</span>
              <span className="text-muted-foreground">/dzień</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Rower elektryczny z baterią</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Sakwy kurierskie</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Kask i kamizelka odblaskowa</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Zapięcie rowerowe</span>
              </li>
              <li className="flex items-start text-muted-foreground">
                <X className="h-5 w-5 mr-2 mt-0.5" />
                <span>Ubezpieczenie rozszerzone</span>
              </li>
              <li className="flex items-start text-muted-foreground">
                <X className="h-5 w-5 mr-2 mt-0.5" />
                <span>Dodatkowa bateria</span>
              </li>
            </ul>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button variant="outline" className="w-full">
                Zarezerwuj
              </Button>
            </ScrollLink>
          </div>
          
          {/* Tygodniowy Plan */}
          <div className="bg-primary text-white rounded-xl shadow-lg p-6 transition-standard hover:shadow-xl transform scale-105 flex flex-col">
            <div className="bg-white text-primary text-xs font-semibold uppercase py-1 px-3 rounded-full inline-block mb-3">
              Najpopularniejszy
            </div>
            <h3 className="text-xl font-semibold mb-2">Tygodniowy</h3>
            <p className="text-blue-100 mb-6">Dla regularnie pracujących kurierów</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">499 zł</span>
              <span className="text-blue-100">/tydzień</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Rower elektryczny z baterią</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Sakwy kurierskie premium</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Kask i kamizelka odblaskowa</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Zapięcie rowerowe klasy premium</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Ubezpieczenie rozszerzone</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>Serwis na żądanie</span>
              </li>
            </ul>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button className="w-full bg-white text-primary hover:bg-blue-50">
                Zarezerwuj
              </Button>
            </ScrollLink>
          </div>
          
          {/* Miesięczny Plan */}
          <div className="bg-background rounded-xl shadow-sm p-6 transition-standard hover:shadow-md flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Miesięczny</h3>
            <p className="text-muted-foreground mb-6">Dla profesjonalnych dostawców</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">1599 zł</span>
              <span className="text-muted-foreground">/miesiąc</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Rower elektryczny z baterią</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Sakwy kurierskie premium</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Kask i kamizelka odblaskowa</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Zapięcie rowerowe klasy premium</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Ubezpieczenie rozszerzone</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Dodatkowa bateria w zestawie</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                <span>Priorytetowy serwis 24/7</span>
              </li>
            </ul>
            
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
              <Button variant="outline" className="w-full">
                Zarezerwuj
              </Button>
            </ScrollLink>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-xl font-semibold mb-2">Potrzebujesz większej floty?</h3>
              <p className="text-muted-foreground">
                Skontaktuj się z nami, aby omówić specjalną ofertę dla firm kurierskich i restauracji. Oferujemy atrakcyjne zniżki przy wynajmie wielu rowerów.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
                <Button className="flex items-center gap-2">
                  Porozmawiajmy <ArrowRight className="h-4 w-4" />
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
