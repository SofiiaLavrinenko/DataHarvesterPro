import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Ошибка формы",
        description: "Заполните все обязательные поля."
      });
      return;
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Сообщение отправлено",
      description: "Спасибо за обращение. Мы ответим вам как можно скорее."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="kontakt" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white relative inline-block">
            Свяжитесь с нами
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Есть вопросы? Хотите забронировать велосипед? Наша команда готова помочь вам.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl shadow-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-6 text-white">Напишите нам</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Имя и фамилия *</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Электронная почта *</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Телефон</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Сообщение *</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2 py-6"
              >
                <Send className="h-5 w-5" />
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl shadow-xl mb-8">
              <h3 className="text-xl font-semibold mb-6 text-white">Контактные данные</h3>
              
              <div className="space-y-6">
                <div className="flex items-start hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 mt-1 border border-orange-500/50">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-lg">Email</h4>
                    <p className="text-gray-300">contact@rowerhub.bike</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 mt-1 border border-orange-500/50">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-lg">Телефон</h4>
                    <p className="text-gray-300">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 mt-1 border border-orange-500/50">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-lg">Адрес</h4>
                    <p className="text-gray-300">
                      ул. Курьерская 42<br />
                      50-001 Вроцлав<br />
                      Польша
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl shadow-xl">
              <div>
                <h4 className="font-medium mb-5 text-white text-lg">Следите за нами</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500/40 transition-all duration-300 border border-orange-500/50 transform hover:-translate-y-1">
                    <Instagram className="h-6 w-6 text-orange-500" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500/40 transition-all duration-300 border border-orange-500/50 transform hover:-translate-y-1">
                    <Facebook className="h-6 w-6 text-orange-500" />
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
