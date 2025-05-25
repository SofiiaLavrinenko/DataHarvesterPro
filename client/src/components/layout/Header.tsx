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
    <header className={`fixed w-full z-50 transition-standard ${scrolled ? 'bg-black shadow-lg' : 'bg-black bg-opacity-90'}`}>
      <Container className="py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center mr-8">
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
              <img src={logoPath} alt="RowerHub.bike" className="h-9" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 flex-grow justify-center">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-orange-400 cursor-pointer transition-standard font-medium text-lg tracking-wide border-b-2 border-transparent hover:border-orange-400 py-1"
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
          <Button className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 shadow-lg transform hover:-translate-y-1 transition duration-300">
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
              <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 shadow-md">
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
