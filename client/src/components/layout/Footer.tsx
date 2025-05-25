import { Container } from "@/components/ui/container";
import { Bike, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Bike className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">RowerHub.bike</span>
            </div>
            <p className="text-gray-400 mb-6">
              Современная аренда электровелосипедов для курьеров во Вроцлаве. Быстрое, надежное и экологичное решение.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-standard">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-standard">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-standard">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-standard">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Предложения</h4>
            <ul className="space-y-3">
              <li>
                <ScrollLink to="funkcje" className="text-gray-400 hover:text-white transition-standard cursor-pointer" smooth={true} duration={500} offset={-80}>
                  Преимущества
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="cennik" className="text-gray-400 hover:text-white transition-standard cursor-pointer" smooth={true} duration={500} offset={-80}>
                  Цены
                </ScrollLink>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Наши велосипеды
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Поддержка</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Центр помощи
                </a>
              </li>
              <li>
                <ScrollLink to="zasady" className="text-gray-400 hover:text-white transition-standard cursor-pointer" smooth={true} duration={500} offset={-80}>
                  Правила использования
                </ScrollLink>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Сервис
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Форум
                </a>
              </li>
              <li>
                <ScrollLink to="kontakt" className="text-gray-400 hover:text-white transition-standard cursor-pointer" smooth={true} duration={500} offset={-80}>
                  Контакты
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Компания</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Конфиденциальность
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-standard">
                  Условия
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RowerHub.bike. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-standard">Конфиденциальность</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-standard">Правила</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-standard">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
