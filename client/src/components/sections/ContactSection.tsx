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
      subject: "",
      message: ""
    });
  };

  return (
    <section id="kontakt" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Есть вопросы? Хотите забронировать велосипед? Наша команда готова помочь вам.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Имя и фамилия *</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Электронная почта *</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ivan.ivanov@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 123 456 7890"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Select onValueChange={handleSelectChange} value={formData.subject}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Выберите тему" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rezerwacja">Бронирование велосипеда</SelectItem>
                    <SelectItem value="pytanie">Общий вопрос</SelectItem>
                    <SelectItem value="oferta-firmowa">Корпоративное предложение</SelectItem>
                    <SelectItem value="serwis">Техническое обслуживание</SelectItem>
                    <SelectItem value="inne">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение *</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Ваше сообщение..."
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-background p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-6">Контактные данные</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@rowerhub.bike</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      ул. Курьерская 42<br />
                      50-001 Вроцлав<br />
                      Польша
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Часы работы</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Понедельник - Пятница</span>
                  <span>8:00 - 19:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Суббота</span>
                  <span>9:00 - 16:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Воскресенье</span>
                  <span>Закрыто</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Следите за нами</h4>
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
