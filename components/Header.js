"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="border-b border-white/10 sticky top-0 z-40 bg-ink/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="focus-ring">
          <span className="font-display text-2xl tracking-wide">
            TURTLE<span className="text-acid">NINJA</span>
          </span>
          <span className="block text-[10px] font-mono tracking-[0.3em] text-muted">
            PRINTS.STL
          </span>
        </Link>
        <nav className="flex items-center gap-6 font-mono text-sm uppercase tracking-wide text-muted">
          <Link href="/#catalog" className="hover:text-acid transition-colors focus-ring">
            {t("nav.catalog")}
          </Link>
          <Link href="/#about" className="hover:text-acid transition-colors focus-ring">
            {t("nav.studio")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
