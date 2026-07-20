"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted font-mono">
        <p>{dict.footer.line1(new Date().getFullYear())}</p>
        <p>{dict.footer.line2}</p>
      </div>
    </footer>
  );
}
