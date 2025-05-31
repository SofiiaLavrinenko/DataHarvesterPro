import { createContext, useContext, useState, ReactNode } from 'react';

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
    'nav.why': 'Почему мы',
    'nav.pricing': 'Цены',
    'nav.rules': 'Правила',
    'nav.equipment': 'Характеристики',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Доставляй больше с',
    'hero.title.highlight': 'электровелосипедом',
    'hero.description': 'Профессиональные электровелосипеды для эффективной доставки в городе. Надежность, скорость и экономия - все для вашего успеха в курьерском бизнесе.',
    'hero.button': 'Забронировать сейчас',
    'hero.efficiency.title': 'Повысь эффективность',
    'hero.efficiency.subtitle': 'Доставляй больше за меньшее время',
    'hero.stat1.title': 'До 100 км',
    'hero.stat1.subtitle': 'запас хода',
    'hero.stat2.title': 'Доставка 24/7',
    'hero.stat2.subtitle': 'работай когда удобно',
    'hero.stat3.title': 'Экономия до 70%',
    'hero.stat3.subtitle': 'на транспортных расходах',
    'hero.stat4.title': 'Быстрая зарядка',
    'hero.stat4.subtitle': '4-6 часов до полной зарядки',
    
    // Features Section
    'features.title': 'Почему наши велосипеды?',
    'features.subtitle': 'Мы предлагаем самые современные электровелосипеды, адаптированные к потребностям курьеров, обеспечивающие надежность и эффективность в повседневной работе.',
    'features.battery.title': 'Эффективная батарея',
    'features.battery.desc': 'Батареи емкостью 35Ah, обеспечивающие до 100 км пробега на одной зарядке.',
    'features.speed.title': 'Быстрая доставка',
    'features.speed.desc': 'Развивайте скорость до 25 км/ч и доставляйте заказы быстрее обычных велосипедов.',
    'features.save.title': 'Экономия времени',
    'features.save.desc': 'Забудьте о пробках и поиске парковки. Электровелосипед - ваш надежный партнер.',
    'features.safety.title': 'Безопасность превыше всего',
    'features.safety.desc': 'Надежные тормоза, яркое освещение и прочная рама для безопасной работы.',
    'features.gps.title': 'GPS отслеживание',
    'features.gps.desc': 'Контролируйте местоположение велосипеда в режиме реального времени.',
    'features.support.title': '24/7 поддержка',
    'features.support.desc': 'Наша команда всегда готова помочь вам с любыми вопросами.',
    'features.gallery.title': 'Наши велосипеды',
    'features.gallery.hint': '← Прокрутите, чтобы увидеть больше фотографий →',
    
    // Pricing Section
    'pricing.title': 'Цены на аренду',
    'pricing.subtitle': 'Выберите подходящий тариф для вашего бизнеса',
    'pricing.week.title': 'Недельная аренда',
    'pricing.week.price': '400 злотых',
    'pricing.week.period': 'в неделю',
    'pricing.week.feature1': 'Полная зарядка',
    'pricing.week.feature2': 'Техническая поддержка', 
    'pricing.week.feature3': 'Замена при поломке',
    'pricing.week.feature4': 'GPS отслеживание',
    'pricing.month.title': 'Месячная аренда',
    'pricing.month.price': '1200 злотых',
    'pricing.month.period': 'в месяц',
    'pricing.month.feature1': 'Все преимущества недельной аренды',
    'pricing.month.feature2': 'Скидка 25%',
    'pricing.month.feature3': 'Приоритетная поддержка',
    'pricing.month.feature4': 'Бесплатное обслуживание',
    'pricing.button': 'Выбрать тариф',
    
    // Rules Section
    'rules.title': 'Правила аренды',
    'rules.subtitle': 'Простые и понятные условия для комфортной работы',
    'rules.age.title': 'Возраст 18+',
    'rules.age.desc': 'Аренда доступна лицам от 18 лет с действующими документами',
    'rules.deposit.title': 'Залог 500 злотых',
    'rules.deposit.desc': 'Возвращается при возврате велосипеда в исправном состоянии',
    'rules.license.title': 'Права не нужны',
    'rules.license.desc': 'Для управления электровелосипедом водительские права не требуются',
    'rules.maintenance.title': 'Обслуживание включено',
    'rules.maintenance.desc': 'Техническое обслуживание и мелкий ремонт за наш счет',
    'rules.return.title': 'Гибкие условия возврата',
    'rules.return.desc': 'Минимальный срок аренды - 7 дней, возврат в любое время',
    'rules.insurance.title': 'Страхование включено',
    'rules.insurance.desc': 'Полное страхование от кражи и серьезных поломок',
    
    // Equipment Section
    'equipment.title': 'Технические характеристики',
    'equipment.subtitle': 'Профессиональное оборудование для эффективной работы курьера',
    'equipment.model': 'Модель Courier Pro 2023',
    'equipment.battery.title': 'Батарея',
    'equipment.battery.desc': '35Ah, запас хода до 100 км',
    'equipment.motor.title': 'Надежный двигатель',
    'equipment.motor.desc': 'Минимум обслуживания — максимум концентрации на работе',
    'equipment.brakes.title': 'Гидравлические тормоза Shimano',
    'equipment.brakes.desc': 'Надежное торможение в любых условиях',
    'equipment.lights.title': 'Передние и задние фонари',
    'equipment.lights.desc': 'Яркое LED освещение для безопасности',
    'equipment.lock.title': 'Замок ABUS',
    'equipment.lock.desc': 'Надежная защита от кражи',
    'equipment.tracking.title': 'AirTag отслеживание',
    'equipment.tracking.desc': 'GPS мониторинг местоположения',
    'equipment.speed.title': 'Максимальная скорость',
    'equipment.speed.desc': 'До 25 км/ч с электроприводом',
    'equipment.weight.title': 'Вес велосипеда',
    'equipment.weight.desc': '22 кг с установленной батареей',
    'equipment.charging.title': 'Время зарядки',
    'equipment.charging.desc': '4-6 часов до полной зарядки',
    
    // Contact Section
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Есть вопросы? Хотите забронировать велосипед? Наша команда готова помочь вам.',
    'contact.form.title': 'Напишите нам',
    'contact.form.name': 'Имя и фамилия',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Телефон',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить сообщение',
    'contact.info.title': 'Контактная информация',
    'contact.info.address': 'г. Вроцлав, Польша',
    'contact.info.phone': '+48 123 456 789',
    'contact.info.email': 'info@rowerhub.bike',
    'contact.info.hours': 'Пн-Вс: 8:00 - 20:00',
    'contact.social.title': 'Мы в социальных сетях',
    'contact.social.desc': 'Следите за новостями и получайте полезные советы',
    
    // Footer
    'footer.description': 'Профессиональная аренда электровелосипедов для курьеров во Вроцлаве. Надежность, экономичность и удобство для вашего бизнеса.',
    'footer.links': 'Быстрые ссылки',
    'footer.contact.title': 'Контакты',
    'footer.social.title': 'Социальные сети',
    'footer.rights': '© 2025 RowerHub.bike. Все права защищены.',
  },
  en: {
    // Header
    'nav.why': 'Why Us',
    'nav.pricing': 'Pricing',
    'nav.rules': 'Rules',
    'nav.equipment': 'Specs',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Deliver more with',
    'hero.title.highlight': 'electric bike',
    'hero.description': 'Professional electric bikes for efficient city delivery. Reliability, speed and economy - everything for your success in courier business.',
    'hero.button': 'Book Now',
    'hero.efficiency.title': 'Increase efficiency',
    'hero.efficiency.subtitle': 'Deliver more in less time',
    'hero.stat1.title': 'Up to 100 km',
    'hero.stat1.subtitle': 'driving range',
    'hero.stat2.title': '24/7 Delivery',
    'hero.stat2.subtitle': 'work when convenient',
    'hero.stat3.title': 'Save up to 70%',
    'hero.stat3.subtitle': 'on transport costs',
    'hero.stat4.title': 'Fast charging',
    'hero.stat4.subtitle': '4-6 hours to full charge',
    
    // Features Section
    'features.title': 'Why our bikes?',
    'features.subtitle': 'We offer the most modern electric bikes, adapted to the needs of couriers, ensuring reliability and efficiency in daily work.',
    'features.battery.title': 'Efficient battery',
    'features.battery.desc': '35Ah batteries providing up to 100 km range on a single charge.',
    'features.speed.title': 'Fast delivery',
    'features.speed.desc': 'Reach speeds up to 25 km/h and deliver orders faster than regular bikes.',
    'features.save.title': 'Time saving',
    'features.save.desc': 'Forget about traffic jams and parking search. Electric bike is your reliable partner.',
    'features.safety.title': 'Safety first',
    'features.safety.desc': 'Reliable brakes, bright lighting and sturdy frame for safe work.',
    'features.gps.title': 'GPS tracking',
    'features.gps.desc': 'Monitor bike location in real time.',
    'features.support.title': '24/7 support',
    'features.support.desc': 'Our team is always ready to help you with any questions.',
    'features.gallery.title': 'Our bikes',
    'features.gallery.hint': '← Scroll to see more photos →',
    
    // Pricing Section
    'pricing.title': 'Rental prices',
    'pricing.subtitle': 'Choose the right plan for your business',
    'pricing.week.title': 'Weekly rental',
    'pricing.week.price': '400 PLN',
    'pricing.week.period': 'per week',
    'pricing.week.feature1': 'Full charge',
    'pricing.week.feature2': 'Technical support',
    'pricing.week.feature3': 'Replacement if broken', 
    'pricing.week.feature4': 'GPS tracking',
    'pricing.month.title': 'Monthly rental',
    'pricing.month.price': '1200 PLN',
    'pricing.month.period': 'per month',
    'pricing.month.feature1': 'All weekly rental benefits',
    'pricing.month.feature2': '25% discount',
    'pricing.month.feature3': 'Priority support',
    'pricing.month.feature4': 'Free maintenance',
    'pricing.button': 'Choose plan',
    
    // Rules Section
    'rules.title': 'Rental rules',
    'rules.subtitle': 'Simple and clear conditions for comfortable work',
    'rules.age.title': 'Age 18+',
    'rules.age.desc': 'Rental available to persons 18+ with valid documents',
    'rules.deposit.title': '500 PLN deposit',
    'rules.deposit.desc': 'Returned when bike is returned in good condition',
    'rules.license.title': 'No license needed',
    'rules.license.desc': 'No driving license required to operate electric bike',
    'rules.maintenance.title': 'Maintenance included',
    'rules.maintenance.desc': 'Technical maintenance and minor repairs at our expense',
    'rules.return.title': 'Flexible return terms',
    'rules.return.desc': 'Minimum rental period - 7 days, return anytime',
    'rules.insurance.title': 'Insurance included',
    'rules.insurance.desc': 'Full insurance against theft and serious breakdowns',
    
    // Equipment Section
    'equipment.title': 'Technical specifications',
    'equipment.subtitle': 'Professional equipment for efficient courier work',
    'equipment.model': 'Courier Pro 2023 Model',
    'equipment.battery.title': 'Battery',
    'equipment.battery.desc': '35Ah, range up to 100 km',
    'equipment.motor.title': 'Reliable motor',
    'equipment.motor.desc': 'Minimum maintenance — maximum focus on work',
    'equipment.brakes.title': 'Shimano hydraulic brakes',
    'equipment.brakes.desc': 'Reliable braking in all conditions',
    'equipment.lights.title': 'Front and rear lights',
    'equipment.lights.desc': 'Bright LED lighting for safety',
    'equipment.lock.title': 'ABUS lock',
    'equipment.lock.desc': 'Reliable theft protection',
    'equipment.tracking.title': 'AirTag tracking',
    'equipment.tracking.desc': 'GPS location monitoring',
    'equipment.speed.title': 'Maximum speed',
    'equipment.speed.desc': 'Up to 25 km/h with electric drive',
    'equipment.weight.title': 'Bike weight',
    'equipment.weight.desc': '22 kg with installed battery',
    'equipment.charging.title': 'Charging time',
    'equipment.charging.desc': '4-6 hours to full charge',
    
    // Contact Section
    'contact.title': 'Contact us',
    'contact.subtitle': 'Have questions? Want to book a bike? Our team is ready to help you.',
    'contact.form.title': 'Write to us',
    'contact.form.name': 'Name and surname',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.info.title': 'Contact information',
    'contact.info.address': 'Wrocław, Poland',
    'contact.info.phone': '+48 123 456 789',
    'contact.info.email': 'info@rowerhub.bike',
    'contact.info.hours': 'Mon-Sun: 8:00 - 20:00',
    'contact.social.title': 'Follow us on social media',
    'contact.social.desc': 'Stay updated and get useful tips',
    
    // Footer
    'footer.description': 'Professional electric bike rental for couriers in Wrocław. Reliability, economy and convenience for your business.',
    'footer.links': 'Quick links',
    'footer.contact.title': 'Contact',
    'footer.social.title': 'Social media',
    'footer.rights': '© 2025 RowerHub.bike. All rights reserved.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    const translationMap = translations[language] as Record<string, string>;
    return translationMap[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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