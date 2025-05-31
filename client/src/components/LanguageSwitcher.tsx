import { useLanguage } from "@/hooks/useLanguage";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-1">
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
          language === 'ru'
            ? 'bg-orange-500 text-white shadow-sm'
            : 'text-white hover:bg-white/10'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
          language === 'en'
            ? 'bg-orange-500 text-white shadow-sm'
            : 'text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
}