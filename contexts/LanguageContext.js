"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, locales, defaultLocale } from "../lib/i18n";

const LanguageContext = createContext(null);
const STORAGE_KEY = "tn-locale";

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(defaultLocale);

  // Read saved preference on mount (client-only, avoids SSR mismatch).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && locales.includes(saved)) {
      setLocaleState(saved);
    } else {
      const browser = window.navigator.language?.slice(0, 2);
      if (browser && locales.includes(browser)) setLocaleState(browser);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  function setLocale(next) {
    if (locales.includes(next)) setLocaleState(next);
  }

  function t(key) {
    const value = key
      .split(".")
      .reduce((acc, part) => (acc == null ? acc : acc[part]), translations[locale]);
    return value ?? key;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dict: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
