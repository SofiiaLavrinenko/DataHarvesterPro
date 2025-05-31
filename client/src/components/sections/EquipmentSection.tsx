import { Container } from "@/components/ui/container";
import { Link as ScrollLink } from "react-scroll";
import { Bike, Battery, Drill, Gauge, ShieldCheck, Clock, Lightbulb, Lock, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import bikePhoto from "@assets/photo_2025-05-28 23.37.30.jpeg";

export default function EquipmentSection() {
  const { t } = useLanguage();
  
  return (
    <section id="sprzet" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-black">
      <Container className="px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">{t('equipment.title')}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            {t('equipment.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img 
                src={bikePhoto} 
                alt={t('equipment.imageAlt')}
                className="object-cover object-center w-full h-64 sm:h-80 md:h-96"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-white text-center">{t('equipment.model')}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Battery className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">{t('equipment.battery.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">{t('equipment.battery.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Gauge className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">{t('equipment.motor.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">{t('equipment.motor.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Bike className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">{t('equipment.frame.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">{t('equipment.frame.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Drill className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">{t('equipment.brakes.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">{t('equipment.brakes.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">{t('equipment.lights.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">{t('equipment.lights.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <Lock className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">{t('equipment.lock.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">{t('equipment.lock.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-900/50 p-3 md:p-4 rounded-lg hover:bg-gray-900 transition-all duration-300">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-base md:text-lg mb-1">{t('equipment.airtag.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">{t('equipment.airtag.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
