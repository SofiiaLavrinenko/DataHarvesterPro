import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Battery, Zap, Clock, Shield, MapPin, ReceiptText } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import bikePhoto1 from "@assets/IMG_8783_resized.jpg";
import bikePhoto2 from "@assets/photo_2025-05-28 23.37.26.jpeg";
import bikePhoto3 from "@assets/photo_2025-05-28 23.37.36.jpeg";
import bikePhoto4 from "@assets/photo_2025-05-29 12.15.06.jpeg";

export default function FeaturesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="funkcje" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Battery className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('features.feature1Title')}</h3>
            <p className="text-muted-foreground">
              {t('features.feature1Desc')}
            </p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('features.feature2Title')}</h3>
            <p className="text-muted-foreground">
              {t('features.feature2Desc')}
            </p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('features.feature3Title')}</h3>
            <p className="text-muted-foreground">
              {t('features.feature3Desc')}
            </p>
          </div>
          
          {/* Feature Card 4 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('features.feature4Title')}</h3>
            <p className="text-muted-foreground">
              {t('features.feature4Desc')}
            </p>
          </div>
          
          {/* Feature Card 5 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('features.feature5Title')}</h3>
            <p className="text-muted-foreground">
              {t('features.feature5Desc')}
            </p>
          </div>
          
          {/* Feature Card 6 */}
          <div className="bg-background p-6 rounded-xl shadow-sm transition-standard card-hover">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <ReceiptText className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('features.feature6Title')}</h3>
            <p className="text-muted-foreground">
              {t('features.feature6Desc')}
            </p>
          </div>
        </div>
        
        {/* Photo Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">{t('features.galleryTitle')}</h3>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ minWidth: 'max-content' }}>
              <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={bikePhoto3} 
                  alt={t('features.photo1Alt')}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={bikePhoto2} 
                  alt={t('features.photo2Alt')}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={bikePhoto1} 
                  alt={t('features.photo3Alt')}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 82%' }}
                />
              </div>
              <div className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={bikePhoto4} 
                  alt={t('features.photo4Alt')}
                  className="w-full h-full object-cover object-center"
                />
              </div>

            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            {t('features.scrollHint')}
          </p>
        </div>
      </Container>
    </section>
  );
}
