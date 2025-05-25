import { Container } from "@/components/ui/container";
import { Link as ScrollLink } from "react-scroll";
import { CheckCircle2, XCircle } from "lucide-react";

export default function RulesSection() {
  return (
    <section id="zasady" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Zasady korzystania</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zapoznaj się z zasadami wynajmu rowerów elektrycznych. Dbamy o Twoje bezpieczeństwo i komfort korzystania z naszych usług.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <CheckCircle2 className="h-6 w-6 text-secondary mr-3" />
              Co zapewniamy
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Pełne naładowanie</h4>
                  <p className="text-muted-foreground text-sm">
                    Każdy rower wydawany jest z w pełni naładowaną baterią, gotowy do pracy.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Wsparcie techniczne</h4>
                  <p className="text-muted-foreground text-sm">
                    W przypadku awarii zapewniamy pomoc techniczną lub wymianę roweru.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Elastyczność zwrotu</h4>
                  <p className="text-muted-foreground text-sm">
                    Możliwość przedłużenia najmu lub wcześniejszego zwrotu z proporcjonalnym rozliczeniem.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Szkolenie z obsługi</h4>
                  <p className="text-muted-foreground text-sm">
                    Każdy najemca otrzymuje instruktaż z obsługi roweru elektrycznego.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <XCircle className="h-6 w-6 text-destructive mr-3" />
              Twoje obowiązki
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Odpowiedzialność za sprzęt</h4>
                  <p className="text-muted-foreground text-sm">
                    Najemca odpowiada za powierzony sprzęt i jest zobowiązany do jego zwrotu w stanie niepogorszonym.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Zakaz modyfikacji</h4>
                  <p className="text-muted-foreground text-sm">
                    Zabronione jest dokonywanie jakichkolwiek modyfikacji technicznych roweru.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Bezpieczne parkowanie</h4>
                  <p className="text-muted-foreground text-sm">
                    Rower należy zawsze przypinać załączonym zapięciem do stałych elementów infrastruktury.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Zgłaszanie usterek</h4>
                  <p className="text-muted-foreground text-sm">
                    Obowiązek natychmiastowego zgłaszania wszelkich usterek i problemów technicznych.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80} className="text-primary hover:underline cursor-pointer">
            Pełny regulamin wynajmu dostępny w naszym biurze
          </ScrollLink>
        </div>
      </Container>
    </section>
  );
}
