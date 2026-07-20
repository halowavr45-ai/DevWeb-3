"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice, getLocalizedProduct } from "../lib/products";
import { useLanguage } from "../contexts/LanguageContext";

export default function ProductCard({ product: rawProduct }) {
  const { locale } = useLanguage();
  const product = getLocalizedProduct(rawProduct, locale);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative block blade-card bg-surface border border-white/10 scanline-hover focus-ring"
    >
      <div className="aspect-square relative bg-surface2 layer-texture">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-ink/80 border border-acid/30 text-acid">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl tracking-wide">{product.name}</h3>
        <p className="text-muted text-sm mt-1">{product.tagline}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-mono text-lg text-acid">{formatPrice(product.priceCents, locale)}</span>
          <span className="font-mono text-xs text-muted uppercase">{product.printTime}</span>
        </div>
      </div>
    </Link>
  );
}
