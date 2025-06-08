import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Container } from "@/components/ui/container";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, ArrowRight, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { contactFormSchema, type ContactForm } from "@/../../shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Ошибка отправки заявки');
      }
      
      return result;
    },
    onSuccess: (data) => {
      toast({
        title: "Заявка отправлена!",
        description: data.message || "Мы свяжемся с вами в ближайшее время.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Ошибка отправки",
        description: error.message || "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-orange-900/20">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 lg:p-10 rounded-xl shadow-2xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-white">
              {t('contact.form.title')}
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-base md:text-lg">{t('contact.form.name')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('contact.form.name.placeholder')}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 h-11 md:h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-base md:text-lg">{t('contact.form.email')}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t('contact.form.email.placeholder')}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 h-11 md:h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-base md:text-lg">{t('contact.form.phone')}</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder={t('contact.form.phone.placeholder')}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 h-11 md:h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-base md:text-lg">{t('contact.form.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('contact.form.message.placeholder')}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 min-h-[120px] text-base resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {contactMutation.isPending ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {t('contact.form.sending')}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4 md:h-5 md:w-5" />
                      {t('contact.form.submit')}
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">{t('contact.info.title')}</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start hover:bg-gray-800/50 p-3 md:p-4 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 border border-orange-500/50 flex-shrink-0">
                    <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-base md:text-lg">Telegram</h4>
                    <p className="text-gray-300 text-sm md:text-base break-all">{t('contact.info.telegram')}</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:bg-gray-800/50 p-3 md:p-4 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 border border-orange-500/50 flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-base md:text-lg">{t('contact.form.phone')}</h4>
                    <p className="text-gray-300 text-sm md:text-base">{t('contact.info.phone')}</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:bg-gray-800/50 p-3 md:p-4 rounded-lg transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 mt-1 border border-orange-500/50 flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white text-base md:text-lg">{t('contact.info.address.title')}</h4>
                    <p className="text-gray-300 text-sm md:text-base">
                      {t('contact.info.address')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
              <div>
                <h4 className="font-medium mb-4 md:mb-5 text-white text-base md:text-lg">{t('contact.social.title')}</h4>
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