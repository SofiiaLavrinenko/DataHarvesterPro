import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X, PhoneCall } from "lucide-react";
import logoPath from "../../assets/logo.png";

const navItems = [
  { id: "funkcje", label: "Преимущества" },
  { id: "cennik", label: "Цены" },
  { id: "zasady", label: "Правила" },
  { id: "sprzet", label: "Оборудование" },
  { id: "kontakt", label: "Контакты" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`fixed w-full z-50 transition-standard ${scrolled ? 'bg-black shadow-lg' : 'bg-black bg-opacity-90'}`}>
      <Container className="py-2 md:py-3 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white px-3 pt-2.5 pb-2 md:px-4 md:pt-3.5 md:pb-2.5 rounded-lg shadow-md flex items-center justify-center">
              <img src={logoPath} alt="RowerHub.bike" className="h-7 md:h-9" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-10 flex-grow justify-center">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-orange-400 cursor-pointer transition-standard font-medium text-base xl:text-lg tracking-wide border-b-2 border-transparent hover:border-orange-400 py-1 whitespace-nowrap"
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu} 
            className="lg:hidden text-white hover:text-orange-400 p-2"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
          </Button>
          
          {/* Call Button */}
          <Button className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 shadow-lg transform hover:-translate-y-1 transition duration-300 text-sm xl:text-base px-4 xl:px-6">
            <PhoneCall className="h-4 w-4" />
            Позвонить
          </Button>
        </div>
      </Container>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black shadow-md border-t border-gray-800">
          <Container className="py-4 px-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="py-3 px-2 border-b border-gray-800 text-white hover:text-orange-400 text-lg font-medium transition-all duration-300 cursor-pointer"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </ScrollLink>
              ))}
              <Button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 shadow-md mt-4 py-3 text-lg">
                <PhoneCall className="h-5 w-5" />
                Позвонить
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
