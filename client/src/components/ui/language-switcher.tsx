import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'ua' : 'ru');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-white hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300 flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">
        {language === 'ru' ? 'УКР' : 'РУС'}
      </span>
    </Button>
  );
}