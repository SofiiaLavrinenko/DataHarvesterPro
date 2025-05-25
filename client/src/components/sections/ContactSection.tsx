import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Błąd formularza",
        description: "Wypełnij wszystkie wymagane pola."
      });
      return;
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Wiadomość wysłana",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="kontakt" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skontaktuj się z nami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Masz pytania? Chcesz zarezerwować rower? Nasz zespół jest gotowy, aby Ci pomóc.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jan Kowalski"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Adres email *</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jan.kowalski@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+48 123 456 789"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Temat</Label>
                <Select onValueChange={handleSelectChange} value={formData.subject}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Wybierz temat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rezerwacja">Rezerwacja roweru</SelectItem>
                    <SelectItem value="pytanie">Pytanie ogólne</SelectItem>
                    <SelectItem value="oferta-firmowa">Oferta firmowa</SelectItem>
                    <SelectItem value="serwis">Serwis techniczny</SelectItem>
                    <SelectItem value="inne">Inne</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Wiadomość *</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Twoja wiadomość..."
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Wyślij wiadomość
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-background p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-6">Dane kontaktowe</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">kontakt@elektrobike-wroclaw.pl</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telefon</h4>
                    <p className="text-muted-foreground">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Adres</h4>
                    <p className="text-muted-foreground">
                      ul. Kurierska 42<br />
                      50-001 Wrocław<br />
                      Polska
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Godziny otwarcia</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Poniedziałek - Piątek</span>
                  <span>8:00 - 19:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Sobota</span>
                  <span>9:00 - 16:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Niedziela</span>
                  <span>Zamknięte</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Śledź nas</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-standard">
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-standard">
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-standard">
                    <Twitter className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
