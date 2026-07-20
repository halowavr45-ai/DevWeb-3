"use client";

import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

export default function CancelPage() {
  const { dict } = useLanguage();

  return (
    <div className="max-w-xl mx-auto px-6 py-24 text-center">
      <p className="font-mono text-xs text-bandana uppercase tracking-[0.3em]">
        {dict.cancel.eyebrow}
      </p>
      <h1 className="font-display text-4xl mt-3">{dict.cancel.title}</h1>
      <p className="text-muted mt-4">{dict.cancel.text}</p>
      <Link
        href="/#catalog"
        className="inline-block mt-8 font-mono uppercase tracking-wider text-sm bg-acid text-paper px-8 py-4 hover:bg-paper hover:text-ink transition-colors focus-ring"
      >
        {dict.cancel.back}
      </Link>
    </div>
  );
}
