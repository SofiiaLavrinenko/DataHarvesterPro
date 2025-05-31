import { Container } from "@/components/ui/container";
import { Link as ScrollLink } from "react-scroll";
import { CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function RulesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="zasady" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('rules.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('rules.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <CheckCircle2 className="h-6 w-6 text-secondary mr-3" />
              {t('rules.weProvide')}
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('rules.fullCharge.title')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('rules.fullCharge.desc')}
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('rules.techSupport.title')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('rules.techSupport.desc')}
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('rules.flexibility.title')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('rules.flexibility.desc')}
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('rules.training.title')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('rules.training.desc')}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <XCircle className="h-6 w-6 text-destructive mr-3" />
              {t('rules.responsibilities')}
            </h3>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('rules.responsibility.title')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('rules.responsibility.desc')}
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('rules.noModifications.title')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('rules.noModifications.desc')}
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('rules.safeParking.title')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('rules.safeParking.desc')}
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('rules.reportIssues.title')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('rules.reportIssues.desc')}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80} className="text-primary hover:underline cursor-pointer">
            {t('rules.fullRules')}
          </ScrollLink>
        </div>
      </Container>
    </section>
  );
}
