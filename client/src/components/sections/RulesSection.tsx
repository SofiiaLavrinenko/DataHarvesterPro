import { Container } from "@/components/ui/container";
import { Link as ScrollLink } from "react-scroll";
import { CheckCircle2, XCircle } from "lucide-react";

export default function RulesSection() {
  return (
    <section id="zasady" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Правила использования</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ознакомьтесь с правилами аренды электровелосипедов. Мы заботимся о вашей безопасности и комфорте при использовании наших услуг.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <CheckCircle2 className="h-6 w-6 text-secondary mr-3" />
              Что мы обеспечиваем
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Полная зарядка</h4>
                  <p className="text-muted-foreground text-sm">
                    Каждый велосипед выдается с полностью заряженной батареей, готовый к работе.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Техническая поддержка</h4>
                  <p className="text-muted-foreground text-sm">
                    В случае поломки мы обеспечиваем техническую помощь или замену велосипеда.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Гибкость возврата</h4>
                  <p className="text-muted-foreground text-sm">
                    Возможность продления аренды или досрочного возврата с пропорциональным расчетом.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Обучение использованию</h4>
                  <p className="text-muted-foreground text-sm">
                    Каждый арендатор получает инструктаж по использованию электровелосипеда.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <XCircle className="h-6 w-6 text-destructive mr-3" />
              Ваши обязанности
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Ответственность за оборудование</h4>
                  <p className="text-muted-foreground text-sm">
                    Арендатор отвечает за вверенное оборудование и обязан вернуть его в исходном состоянии.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Запрет модификаций</h4>
                  <p className="text-muted-foreground text-sm">
                    Запрещено вносить какие-либо технические модификации в велосипед.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Безопасная парковка</h4>
                  <p className="text-muted-foreground text-sm">
                    Велосипед всегда должен быть пристегнут прилагаемым замком к стационарным элементам инфраструктуры.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Сообщение о неисправностях</h4>
                  <p className="text-muted-foreground text-sm">
                    Обязательное немедленное сообщение о любых неисправностях и технических проблемах.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80} className="text-primary hover:underline cursor-pointer">
            Полные правила аренды доступны в нашем офисе
          </ScrollLink>
        </div>
      </Container>
    </section>
  );
}
