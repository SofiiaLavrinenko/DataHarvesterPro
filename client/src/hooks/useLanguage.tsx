import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Header  
    'header.call': 'Позвонить',
    'nav.why': 'Преимущества',
    'nav.pricing': 'Цены',
    'nav.rules': 'Правила',
    'nav.equipment': 'Характеристики',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Доставляй больше с',
    'hero.titleHighlight': 'электровелосипедом',
    'hero.subtitle': 'Профессиональные электровелосипеды для эффективной доставки в городе. Надежность, скорость и экономия - все для вашего успеха в курьерском бизнесе.',
    'hero.cta': 'Забронировать сейчас',
    'hero.imageAlt': 'Два электровелосипеда RowerHub для курьеров',
    'hero.badgeTitle': 'Повысь эффективность',
    'hero.badgeSubtitle': 'Доставляй больше за меньшее время',
    'hero.feature1Title': 'Долгий срок службы батареи',
    'hero.feature1Desc': '35Ah, до 8 часов непрерывной работы',
    'hero.feature2Title': 'Идеально для города',
    'hero.feature2Desc': 'Легкое маневрирование в городском потоке',
    
    // Features Section
    'features.title': 'Почему наши велосипеды?',
    'features.subtitle': 'Мы предлагаем самые современные электровелосипеды, адаптированные к потребностям курьеров, обеспечивающие надежность и эффективность в повседневной работе.',
    'features.feature1Title': 'Мощная батарея',
    'features.feature1Desc': 'До 100 км запаса хода на одной зарядке',
    'features.feature2Title': 'Быстрая зарядка',
    'features.feature2Desc': '4-6 часов до полной зарядки батареи',
    'features.feature3Title': 'Круглосуточная работа',
    'features.feature3Desc': 'Работайте в любое время суток',
    'features.feature4Title': 'Надежная безопасность',
    'features.feature4Desc': 'Качественные тормоза и освещение',
    'features.feature5Title': 'GPS отслеживание',
    'features.feature5Desc': 'Всегда знайте местоположение велосипеда',
    'features.feature6Title': 'Техподдержка 24/7',
    'features.feature6Desc': 'Круглосуточная помощь и обслуживание',
    'features.galleryTitle': 'Наши велосипеды',
    'features.photo1Alt': 'Электровелосипед RowerHub для курьеров',
    'features.photo2Alt': 'Два электровелосипеда на парковке',
    'features.photo3Alt': 'Велосипед с курьерской сумкой',
    'features.photo4Alt': 'Велосипед во время зарядки',
    'features.scrollHint': 'Пролистайте горизонтально, чтобы увидеть больше фото',
    
    // Pricing Section
    'pricing.title': 'Выгодные тарифы',
    'pricing.subtitle': 'Подберите оптимальный вариант аренды с технической поддержкой и гарантией качества.',
    'pricing.badge': 'Аренда электровелосипедов',
    'pricing.price': 'от 26 зл',
    'pricing.period': '/день',
    'pricing.feature1': 'Высокая мощность и дальность поездки',
    'pricing.feature2': 'Надежный велосипедный замок',
    'pricing.feature3': 'Техподдержка и обслуживание 24/7',
    'pricing.cta': 'Забронировать',
    
    // Rules Section
    'rules.title': 'Правила использования',
    'rules.subtitle': 'Ознакомьтесь с правилами аренды электровелосипедов. Мы заботимся о вашей безопасности и комфорте при использовании наших услуг.',
    'rules.weProvide': 'Что мы обеспечиваем',
    'rules.responsibilities': 'Ваши обязанности',
    
    // Equipment Section
    'equipment.title': 'Характеристики',
    'equipment.subtitle': 'Технические данные наших электровелосипедов',
    
    // Contact Section
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Есть вопросы? Хотите забронировать велосипед? Наша команда готова помочь вам.',
    
    // Footer
    'footer.description': 'Профессиональная аренда электровелосипедов для курьеров во Вроцлаве. Надежность, экономичность и удобство для вашего бизнеса.',
    'footer.rights': '© 2025 RowerHub.bike. Все права защищены.',
  },
  en: {
    // Header
    'header.call': 'Call Now',
    'nav.why': 'Why Choose Us',
    'nav.pricing': 'Pricing',
    'nav.rules': 'Rules',
    'nav.equipment': 'Specs',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Deliver more with',
    'hero.titleHighlight': 'electric bikes',
    'hero.subtitle': 'Professional electric bikes for efficient city delivery. Reliability, speed and economy - everything for your success in the courier business.',
    'hero.cta': 'Book Now',
    'hero.imageAlt': 'Two RowerHub electric bikes for couriers',
    'hero.badgeTitle': 'Boost Efficiency',
    'hero.badgeSubtitle': 'Deliver more in less time',
    'hero.feature1Title': 'Long Battery Life',
    'hero.feature1Desc': '35Ah, up to 8 hours of continuous work',
    'hero.feature2Title': 'Perfect for City',
    'hero.feature2Desc': 'Easy maneuvering in urban traffic',
    
    // Features Section
    'features.title': 'Why Choose Our Bikes?',
    'features.subtitle': 'We offer the most modern electric bikes adapted to courier needs, providing reliability and efficiency in daily work.',
    'features.feature1Title': 'Powerful Battery',
    'features.feature1Desc': 'Up to 100 km range on a single charge',
    'features.feature2Title': 'Fast Charging',
    'features.feature2Desc': '4-6 hours to full battery charge',
    'features.feature3Title': '24/7 Operation',
    'features.feature3Desc': 'Work at any time of day or night',
    'features.feature4Title': 'Reliable Safety',
    'features.feature4Desc': 'Quality brakes and lighting system',
    'features.feature5Title': 'GPS Tracking',
    'features.feature5Desc': 'Always know your bike location',
    'features.feature6Title': '24/7 Tech Support',
    'features.feature6Desc': 'Round-the-clock help and maintenance',
    'features.galleryTitle': 'Our Bikes',
    'features.photo1Alt': 'RowerHub electric bike for couriers',
    'features.photo2Alt': 'Two electric bikes parked',
    'features.photo3Alt': 'Bike with courier bag',
    'features.photo4Alt': 'Bike during charging',
    'features.scrollHint': 'Scroll horizontally to see more photos',
    
    // Pricing Section
    'pricing.title': 'Affordable Plans',
    'pricing.subtitle': 'Choose the optimal rental option with technical support and quality guarantee.',
    'pricing.badge': 'Electric Bike Rental',
    'pricing.price': 'from 26 PLN',
    'pricing.period': '/day',
    'pricing.feature1': 'High power and long range',
    'pricing.feature2': 'Reliable bike lock',
    'pricing.feature3': '24/7 technical support and maintenance',
    'pricing.cta': 'Book Now',
    
    // Rules Section
    'rules.title': 'Usage Rules',
    'rules.subtitle': 'Get familiar with electric bike rental rules. We care about your safety and comfort when using our services.',
    'rules.weProvide': 'What We Provide',
    'rules.responsibilities': 'Your Responsibilities',
    
    // Equipment Section
    'equipment.title': 'Specifications',
    'equipment.subtitle': 'Technical specifications of our electric bikes',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? Want to book a bike? Our team is ready to help you.',
    
    // Footer
    'footer.description': 'Professional electric bike rental for couriers in Wrocław. Reliability, economy and convenience for your business.',
    'footer.rights': '© 2025 RowerHub.bike. All rights reserved.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['ru', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations[typeof language]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}