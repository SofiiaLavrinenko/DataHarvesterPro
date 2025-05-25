import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
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
    <header className={`fixed w-full z-50 transition-standard ${scrolled ? 'bg-black shadow-sm' : 'bg-black bg-opacity-80'}`}>
      <Container className="py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoPath} alt="RowerHub.bike" className="h-14" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-orange-400 cursor-pointer transition-standard font-medium text-lg"
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
            className="md:hidden text-white hover:text-orange-400"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          
          {/* Call Button */}
          <Button className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
            <PhoneCall className="h-4 w-4" />
            Позвонить
          </Button>
        </div>
      </Container>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black shadow-md">
          <Container className="py-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="py-3 border-b border-gray-800 text-white hover:text-orange-400 text-lg"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </ScrollLink>
              ))}
              <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
                <PhoneCall className="h-4 w-4" />
                Позвонить
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
