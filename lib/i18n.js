// Dictionnaire de traductions — source unique pour les textes statiques du site.
export const translations = {
  fr: {
    nav: { catalog: "Catalogue", studio: "Studio" },
    hero: {
      eyebrow: "Slicing layer 1 / 1 — modèles prêts",
      title: "Quand la passion se heurte au manque de diversité des produits...",
      subtitle:
        "Il faut bien que quelqu'un, quelque part, relève le niveau pour faire plaisir aux fans.",
      cta: "Voir le catalogue",
    },
    catalog: {
      title: "Catalogue",
      count: (n) => `${n} modèle${n > 1 ? "s" : ""} disponible${n > 1 ? "s" : ""}`,
    },
    about: {
      title: "Soutenez-nous sur Patreon",
      text: "Rejoignez notre Patreon pour profiter d'un accès anticipé à nos nouveaux modèles, ainsi que la possibilité de commissionner des miniatures exclusives directement auprès de nos artistes.",
      cta: "Rejoindre le Patreon",
    },
    footer: {
      line1: (year) => `© ${year} TurtleNinja Prints. Fichiers STL conçus sur Blender.`,
      line2: "Paiement sécurisé · Stripe & PayPal · Téléchargement immédiat après achat",
    },
    product: {
      fileType: "Fichier .ZIP (STL)",
      specs: {
        category: "Catégorie",
        difficulty: "Difficulté",
        printTime: "Temps d'impression",
        layerHeight: "Hauteur de couche",
        supports: "Supports",
      },
    },
    buybox: {
      payStripe: "Payer par carte (Stripe)",
      redirecting: "Redirection…",
      or: "ou",
      paypalDisabled: "PayPal désactivé — ajoute NEXT_PUBLIC_PAYPAL_CLIENT_ID pour l'activer.",
      errorStart: "Impossible de démarrer le paiement. Réessaie.",
      errorNetwork: "Erreur réseau. Réessaie.",
      errorPaypalToken: "Paiement reçu mais lien de téléchargement introuvable. Contacte le support.",
      errorPaypalFailed: "Le paiement PayPal a échoué. Réessaie.",
    },
    success: {
      checking: "Vérification du paiement…",
      confirmed: "Paiement confirmé",
      title: "Ton fichier est prêt",
      text: "Le lien ci-dessous expire dans 30 minutes. Télécharge et sauvegarde ton fichier sans attendre.",
      download: "Télécharger le fichier STL",
      errorTitle: "Un problème est survenu",
      errorNoOrder: "Aucune commande à confirmer.",
      errorVerify: "Paiement non confirmé.",
      errorNetwork: "Erreur réseau lors de la vérification.",
      errorContact: "Si le paiement a bien été débité, contacte le support avec ta preuve d'achat.",
    },
    cancel: {
      eyebrow: "Paiement annulé",
      title: "Aucun débit effectué",
      text: "Tu as quitté avant la fin du paiement. Ton panier n'a pas été validé.",
      back: "Retour au catalogue",
    },
  },
  en: {
    nav: { catalog: "Catalog", studio: "Studio" },
    hero: {
      eyebrow: "Slicing layer 1 / 1 — models ready",
      title: "When hobby meets the lack of product diversity....",
      subtitle:
        "Someone somewhere has to step up their game to make the fans happy.",
      cta: "Browse the catalog",
    },
    catalog: {
      title: "Catalog",
      count: (n) => `${n} model${n > 1 ? "s" : ""} available`,
    },
    about: {
      title: "Support us on Patreon",
      text: "Join our Patreon to get early access to new models, plus the ability to commission exclusive miniatures directly from our artists.",
      cta: "Join the Patreon",
    },
    footer: {
      line1: (year) => `© ${year} TurtleNinja Prints. STL files designed in Blender.`,
      line2: "Secure checkout · Stripe & PayPal · Instant download after purchase",
    },
    product: {
      fileType: ".ZIP file (STL)",
      specs: {
        category: "Category",
        difficulty: "Difficulty",
        printTime: "Print time",
        layerHeight: "Layer height",
        supports: "Supports",
      },
    },
    buybox: {
      payStripe: "Pay by card (Stripe)",
      redirecting: "Redirecting…",
      or: "or",
      paypalDisabled: "PayPal disabled — add NEXT_PUBLIC_PAYPAL_CLIENT_ID to enable it.",
      errorStart: "Couldn't start checkout. Try again.",
      errorNetwork: "Network error. Try again.",
      errorPaypalToken: "Payment received but the download link is missing. Contact support.",
      errorPaypalFailed: "PayPal payment failed. Try again.",
    },
    success: {
      checking: "Verifying payment…",
      confirmed: "Payment confirmed",
      title: "Your file is ready",
      text: "The link below expires in 30 minutes. Download and save your file right away.",
      download: "Download the STL file",
      errorTitle: "Something went wrong",
      errorNoOrder: "No order to confirm.",
      errorVerify: "Payment not confirmed.",
      errorNetwork: "Network error while verifying.",
      errorContact: "If you were charged, contact support with your proof of purchase.",
    },
    cancel: {
      eyebrow: "Payment cancelled",
      title: "No charge was made",
      text: "You left before completing payment. Your cart wasn't processed.",
      back: "Back to catalog",
    },
  },
};

export const locales = ["fr", "en"];
export const defaultLocale = "fr";