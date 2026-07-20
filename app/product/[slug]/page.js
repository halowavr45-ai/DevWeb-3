import { notFound } from "next/navigation";
import { getProductBySlug, products } from "../../../lib/products";
import ProductPageContent from "../../../components/ProductPageContent";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return <ProductPageContent product={product} />;
}
