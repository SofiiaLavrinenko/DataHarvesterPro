import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Battery, MapPin, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import heroPhoto from "@assets/photo_2025-05-28 23.37.33.jpeg";

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="pt-20 md:pt-28 pb-12 md:pb-16 bg-gradient-to-br from-gray-900 to-black">
      <Container className="px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
              {t('hero.title')} <span className="text-orange-500 underline decoration-orange-500">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80}>
                <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 shadow-lg transform hover:-translate-y-1 transition duration-300 text-lg md:text-xl px-6 md:px-8 py-3 md:py-6">
                  <span className="font-extrabold">{t('hero.cta')}</span>
                </Button>
              </ScrollLink>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500 max-w-lg mx-auto lg:max-w-none">
              <img 
                src={heroPhoto} 
                alt={t('hero.imageAlt')}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 md:p-5 backdrop-blur-sm">
                <div className="text-white">
                  <p className="font-medium text-sm md:text-lg">{t('hero.badgeTitle')}</p>
                  <p className="text-xs md:text-sm text-gray-200">{t('hero.badgeSubtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-start">
              <div className="bg-gray-800 p-2 md:p-3 rounded-lg mr-3 md:mr-4 shadow-inner border border-gray-700 flex-shrink-0">
                <Battery className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base md:text-lg mb-1">{t('hero.feature1Title')}</h3>
                <p className="text-xs md:text-sm text-gray-300">{t('hero.feature1Desc')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-start">
              <div className="bg-gray-800 p-2 md:p-3 rounded-lg mr-3 md:mr-4 shadow-inner border border-gray-700 flex-shrink-0">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base md:text-lg mb-1">{t('hero.feature2Title')}</h3>
                <p className="text-xs md:text-sm text-gray-300">{t('hero.feature2Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
