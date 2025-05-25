import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
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
    <section id="kontakt" className="py-20 bg-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Свяжитесь с нами</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Есть вопросы? Хотите забронировать велосипед? Наша команда готова помочь вам.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Имя и фамилия *</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-700 text-white"
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
                  className="bg-gray-900 border-gray-700 text-white"
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
                  className="bg-gray-900 border-gray-700 text-white"
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
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>
              
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-6 text-white">Контактные данные</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Email</h4>
                    <p className="text-gray-400">contact@rowerhub.bike</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Телефон</h4>
                    <p className="text-gray-400">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Адрес</h4>
                    <p className="text-gray-400">
                      ул. Курьерская 42<br />
                      50-001 Вроцлав<br />
                      Польша
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm">
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-white">Следите за нами</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-standard">
                    <Instagram className="h-5 w-5 text-orange-500" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-standard">
                    <Facebook className="h-5 w-5 text-orange-500" />
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
