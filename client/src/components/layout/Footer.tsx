import { Container } from "@/components/ui/container";
import { Bike, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Bike className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">ElektroBike Wrocław</span>
            </div>
            <p className="text-gray-400 mb-6">
              Nowoczesny wynajem rowerów elektrycznych dla kurierów we Wrocławiu. Szybkie, niezawodne i ekologiczne rozwiązanie.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-standard">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-standard">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-standard">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-standard">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Oferta</h4>
            <ul className="space-y-3">
              <li>
                <ScrollLink to="funkcje" className="text-gray-400 hover:text-white transition-standard cursor-pointer" smooth={true} duration={500} offset={-80}>
                  Funkcje
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="cennik" className="text-gray-400 hover:text-white transition-standard cursor-pointer" smooth={true} duration={500} offset={-80}>
                  Cennik
                </ScrollLink>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Nasze rowery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Recenzje
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Wsparcie</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Centrum pomocy
                </a>
              </li>
              <li>
                <ScrollLink to="zasady" className="text-gray-400 hover:text-white transition-standard cursor-pointer" smooth={true} duration={500} offset={-80}>
                  Zasady korzystania
                </ScrollLink>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Serwis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Forum
                </a>
              </li>
              <li>
                <ScrollLink to="kontakt" className="text-gray-400 hover:text-white transition-standard cursor-pointer" smooth={true} duration={500} offset={-80}>
                  Kontakt
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Firma</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  O nas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Kariera
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Prywatność
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Warunki
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ElektroBike Wrocław. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-standard">Prywatność</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-standard">Regulamin</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-standard">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
