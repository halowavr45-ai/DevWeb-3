"use client";

import Image from "next/image";
import { formatPrice, getLocalizedProduct } from "../lib/products";
import { useLanguage } from "../contexts/LanguageContext";
import BuyBox from "./BuyBox";

export default function ProductPageContent({ product: rawProduct }) {
  const { locale, dict } = useLanguage();
  const product = getLocalizedProduct(rawProduct, locale);

  const specs = [
    [dict.product.specs.category, product.category],
    [dict.product.specs.difficulty, product.difficulty],
    [dict.product.specs.printTime, product.printTime],
    [dict.product.specs.layerHeight, product.layerHeight],
    [dict.product.specs.supports, product.supports],
  ].filter(([, value]) => value && String(value).trim() !== "");

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div className="aspect-square relative bg-surface2 layer-texture border border-white/10">
        <Image src={product.image} alt={product.name} fill className="object-contain p-12" />
      </div>

      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-acid">
          {product.category}
        </span>
        <h1 className="font-display text-4xl mt-2">{product.name}</h1>
        <p className="text-muted mt-2">{product.tagline}</p>

        <p className="mt-6 text-paper/90 leading-relaxed">{product.description}</p>

        <dl className="mt-8 grid grid-cols-2 gap-y-3 font-mono text-sm border-t border-white/10 pt-6">
          {specs.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="text-muted">{label}</dt>
              <dd className="text-paper">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 border border-white/10 bg-surface p-6">
          <div className="flex items-baseline justify-between mb-6">
            <span className="font-display text-3xl text-acid">
              {formatPrice(product.priceCents, locale)}
            </span>
            <span className="font-mono text-xs text-muted">{dict.product.fileType}</span>
          </div>
          <BuyBox product={product} />
        </div>
      </div>
    </div>
  );
}