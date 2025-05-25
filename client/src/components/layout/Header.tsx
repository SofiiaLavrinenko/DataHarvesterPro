import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu, X, Bike, PhoneCall } from "lucide-react";

const navItems = [
  { id: "funkcje", label: "Funkcje" },
  { id: "cennik", label: "Cennik" },
  { id: "zasady", label: "Zasady" },
  { id: "sprzet", label: "Sprzęt" },
  { id: "kontakt", label: "Kontakt" }
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
    <header className={`fixed w-full z-50 transition-standard ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <Container className="py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bike className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">ElektroBike Wrocław</span>
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
                className="text-foreground hover:text-primary cursor-pointer transition-standard"
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
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          
          {/* Call Button */}
          <Button className="hidden md:flex items-center gap-2">
            <PhoneCall className="h-4 w-4" />
            Zadzwoń
          </Button>
        </div>
      </Container>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
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
                  className="py-2 border-b border-gray-100 text-foreground"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </ScrollLink>
              ))}
              <Button className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                Zadzwoń
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
