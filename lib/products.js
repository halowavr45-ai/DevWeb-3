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
  category: "Full Miniatures",
  categoryEn: "Full Miniatures",
  fileKey: "type-10-assault-juggernauts.zip",
  description: "Description longue en FR.",
  descriptionEn: "Long description in EN.",
  image: "/images/AS_G.jpg",
},

  {
  slug: "assault-juggernaut-chest-belt",  // identifiant unique, utilisé dans l'URL /product/mon-nouveau-produit
  name: "Assault Juggernaut Chest Belt",  // nom du produit, affiché dans le catalogue
  tagline: "Type-7",
  taglineEn: "Type-7",
  priceCents: 100,                   // 15,00 €
  category: "Accessories",
  categoryEn: "Accessories",
  fileKey: "type-10-assault-juggernaut-chest-belt.zip",
  description: "Description longue en FR.",
  descriptionEn: "Long description in EN.",
  image: "/images/AS_G_C_B.jpg",
},

{
  slug: "assault-juggernaut-jump-pack",  // identifiant unique, utilisé dans l'URL /product/mon-nouveau-produit
  name: "Assault Juggernaut Jump Pack",  // nom du produit, affiché dans le catalogue
  tagline: "Type-7",
  taglineEn: "Type-7",
  priceCents: 100,                   // 15,00 €
  category: "Accessories",
  categoryEn: "Accessories",
  fileKey: "type-10-assault-juggernaut-jump-pack.zip",
  description: "Description longue en FR.",
  descriptionEn: "Long description in EN.",
  image: "/images/AS_G_VII_JP.jpg",
},

{
  slug: "assault-juggernaut-helmet",  // identifiant unique, utilisé dans l'URL /product/mon-nouveau-produit
  name: "Assault Juggernaut Helmet",  // nom du produit, affiché dans le catalogue
  tagline: "Type-10 / Type-7 / Type-6",
  taglineEn: "Type-10 / Type-7 / Type-6",
  priceCents: 100,                   // 15,00 €
  category: "Accessories",
  categoryEn: "Accessories",
  fileKey: "type-10-assault-juggernaut-helmet.zip",
  description: "Description longue en FR.",
  descriptionEn: "Long description in EN.",
  image: "/images/AS_G_H.jpg",
},

{
  slug: "catacomb-juggernaut-life-saver",  // identifiant unique, utilisé dans l'URL /product/mon-nouveau-produit
  name: "Catacomb Juggernaut Life Saver",  // nom du produit, affiché dans le catalogue
  tagline: "Catacomb Armor",
  taglineEn: "Catacomb Armor",
  priceCents: 3000,                   // 15,00 €
  category: "Commissioned Characters",
  categoryEn: "Commissioned Characters",
  fileKey: "type-10-catacomb-juggernaut-life-saver.zip",
  description: "Description longue en FR.",
  descriptionEn: "Long description in EN.",
  image: "/images/CJ_LS.jpg",
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
