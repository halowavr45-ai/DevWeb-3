// Catalogue produit — source unique de vérité.
// Le fichier STL réel doit être déposé dans /private-files/<fileKey> (voir README)
// et ne JAMAIS être mis dans /public.
export const products = [
  {
  slug: "assault-juggernauts",        // identifiant unique, utilisé dans l'URL /product/mon-nouveau-produit
  name: "Assault Juggernauts",  // nom du produit, affiché dans le catalogue
  tagline: "Type-10",
  taglineEn: "Type-10",
  priceCents: 500,                   // 15,00 €
  category: "Miniatures",
  categoryEn: "Miniatures",
  fileKey: "type-10-assault-juggernauts.zip",
  description: "Description longue en FR.",
  descriptionEn: "Long description in EN.",
  image: "/images/AS_G.jpg",
},

  {
  slug: "juggernaut-defender-chest",  // identifiant unique, utilisé dans l'URL /product/mon-nouveau-produit
  name: "Juggernaut Defender Chest",  // nom du produit, affiché dans le catalogue
  tagline: "Type-10",
  taglineEn: "Type-10",
  priceCents: 100,                   // 1,00 €
  category: "Miniatures",
  categoryEn: "Miniatures",
  fileKey: "type-10-juggernaut-defender-chest.zip",
  description: "Description longue en FR.",
  descriptionEn: "Long description in EN.",
  image: "/images/AS_G.jpg",
},

];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

// Renvoie le produit avec les champs textuels traduits selon la langue.
// Les propriétés techniques (slug, prix, image, printTime, layerHeight...) restent identiques.
export function getLocalizedProduct(product, locale) {
  if (!product) return product;
  if (locale === "en") {
    return {
      ...product,
      tagline: product.taglineEn ?? product.tagline,
      description: product.descriptionEn ?? product.description,
      category: product.categoryEn ?? product.category,
    };
  }
  return product;
}

export function formatPrice(cents, locale = "fr") {
  return (cents / 100).toLocaleString(locale === "en" ? "en-US" : "fr-FR", {
    style: "currency",
    currency: "EUR",
  });
}
