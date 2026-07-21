"use client";
import ProductCard from "../components/ProductCard";
import { products } from "../lib/products";
import { useLanguage } from "../contexts/LanguageContext";
export default function Home() {
  const { dict } = useLanguage();
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 layer-texture pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 relative">
          <p className="font-mono text-xs tracking-[0.3em] text-acid uppercase print-reveal">
            {dict.hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 max-w-3xl print-reveal print-reveal-delay-1">
            {dict.hero.title}
          </h1>
          <p className="text-muted max-w-xl mt-6 text-lg print-reveal print-reveal-delay-2">
            {dict.hero.subtitle}
          </p>
          <a
            href="#catalog"
            className="inline-block mt-10 font-mono uppercase tracking-wider text-sm bg-acid text-paper px-6 py-3 hover:bg-paper hover:text-ink transition-colors focus-ring"
          >
            {dict.hero.cta}
          </a>
        </div>
      </section>
      <section id="catalog" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl tracking-wide">{dict.catalog.title}</h2>
          <span className="font-mono text-xs text-muted uppercase">
            {dict.catalog.count(products.length)}
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
      <section id="about" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border border-white/10 bg-surface p-10">
          <h2 className="font-display text-2xl mb-3">{dict.about.title}</h2>
          <p className="text-muted max-w-2xl">{dict.about.text}</p>
          <a
            href="https://www.patreon.com/turtleninja475?utm_campaign=creatorshare_creator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 font-mono uppercase tracking-wider text-sm bg-acid text-paper px-6 py-3 hover:bg-paper hover:text-ink transition-colors focus-ring"
          >
            {dict.about.cta}
          </a>
        </div>
      </section>
    </>
  );
}