import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();
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
    <section id="kontakt" className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
      <Container className="px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white relative inline-block">
            {t('contact.title')}
            <span className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-0.5 md:h-1 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 md:mt-6 text-sm sm:text-base md:text-lg px-4">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 md:p-8 rounded-xl shadow-xl border border-gray-800">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">{t('contact.form.title')}</h3>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-sm md:text-base">{t('contact.form.name')} *</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20 text-sm md:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm md:text-base">{t('contact.form.email')} *</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20 text-sm md:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-sm md:text-base">{t('contact.form.phone')}</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20 text-sm md:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white text-sm md:text-base">{t('contact.form.message')} *</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500/20 text-sm md:text-base min-h-[100px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2 py-3 md:py-4 text-sm md:text-base"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">{t('contact.info.title')}</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start hover:bg-gray-800/50 p-3 md:p-4 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 border border-orange-500/50 flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-base md:text-lg">Email</h4>
                    <p className="text-gray-300 text-sm md:text-base break-all">contact@rowerhub.bike</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:bg-gray-800/50 p-3 md:p-4 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 border border-orange-500/50 flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-base md:text-lg">Телефон</h4>
                    <p className="text-gray-300 text-sm md:text-base">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:bg-gray-800/50 p-3 md:p-4 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 border border-orange-500/50 flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-base md:text-lg">Адрес</h4>
                    <p className="text-gray-300 text-sm md:text-base">
                      ул. Курьерская 42<br />
                      50-001 Вроцлав<br />
                      Польша
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
              <div>
                <h4 className="font-medium mb-4 md:mb-5 text-white text-base md:text-lg">Следите за нами</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500/40 transition-all duration-300 border border-orange-500/50 transform hover:-translate-y-1">
                    <Instagram className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500/40 transition-all duration-300 border border-orange-500/50 transform hover:-translate-y-1">
                    <Facebook className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
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
