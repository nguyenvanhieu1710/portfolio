"use client";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import type { Lang, Translations, TranslationKey } from "@/locales/types";

// Import translations
import enTranslations from "@/locales/en/index";
import viTranslations from "@/locales/vi/index";

const translations: Translations = {
  en: enTranslations,
  vi: viTranslations,
};

type LangContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: <K extends keyof TranslationKey>(
    namespace: K,
    key?: K extends keyof TranslationKey ? keyof TranslationKey[K] & string : never
  ) => string;
  changeLanguage: (lang: Lang) => void;
};

const LanguageContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (namespace, key) => {
    if (!key) return namespace as string;
    const translationsForNamespace = translations['en'][namespace as keyof TranslationKey];
    if (translationsForNamespace && typeof translationsForNamespace === 'object' && key in translationsForNamespace) {
      return translationsForNamespace[key as keyof typeof translationsForNamespace] as string;
    }
    return key as string;
  },
  changeLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [isMounted, setIsMounted] = useState(false);

  // Initialize language - always default to English
  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Lang | null;
    
    // Always default to English if no language is set
    if (!storedLang || (storedLang !== 'en' && storedLang !== 'vi')) {
      localStorage.setItem("lang", "en");
    } else {
      setLang(storedLang);
    }
    
    setIsMounted(true);
    
    // Listen for language changes from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "lang" && e.newValue && (e.newValue === 'en' || e.newValue === 'vi')) {
        setLang(e.newValue as Lang);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const changeLanguage = (newLang: Lang) => {
    if (newLang === lang) return;
    
    // Update local state
    setLang(newLang);
    
    // Update localStorage
    localStorage.setItem("lang", newLang);
    
    // Dispatch a storage event to notify other tabs/windows
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'lang',
        newValue: newLang,
        oldValue: lang,
        storageArea: localStorage,
      })
    );
    
    // Update document language attribute for accessibility
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    changeLanguage(lang === "en" ? "vi" : "en");
  };

  // Memoize the translation function to prevent unnecessary re-renders
  const t = useMemo(() => {
    return (namespace: keyof TranslationKey, key?: string) => {
      if (!isMounted) return key || namespace;
      
      try {
        if (key) {
          // @ts-ignore - We know the structure matches
          return translations[lang][namespace]?.[key] || key;
        }
        // If no key is provided, return the namespace translation if it's a string
        // @ts-ignore
        return typeof translations[lang][namespace] === 'string' 
          ? translations[lang][namespace] 
          : namespace;
      } catch (error) {
        console.warn(`Translation not found for: ${namespace}.${key || ''}`);
        return key || namespace;
      }
    };
  }, [lang, isMounted]);

  const value = useMemo(
    () => ({
      lang,
      toggleLang,
      t,
      changeLanguage,
    }),
    [lang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return context;
};
