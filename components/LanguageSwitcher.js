"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-wide">
      <button
        onClick={() => setLocale("fr")}
        aria-pressed={locale === "fr"}
        className={`px-1.5 py-1 focus-ring transition-colors ${
          locale === "fr" ? "text-acid" : "text-muted hover:text-paper"
        }`}
      >
        FR
      </button>
      <span className="text-muted">/</span>
      <button
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-1.5 py-1 focus-ring transition-colors ${
          locale === "en" ? "text-acid" : "text-muted hover:text-paper"
        }`}
      >
        EN
      </button>
    </div>
  );
}
