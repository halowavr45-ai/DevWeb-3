// Dictionnaire de traductions — source unique pour les textes statiques du site.
export const translations = {
  fr: {
    nav: { catalog: "Catalogue", studio: "Studio" },
    hero: {
      eyebrow: "Slicing layer 1 / 1 — modèles prêts",
      title: "Des fichiers STL taillés pour l'impression, pas pour la démo.",
      subtitle:
        "Chaque modèle est modélisé sur Blender, testé en impression réelle et vendu prêt à trancher : orientation, supports et temps d'impression déjà réglés pour vous.",
      cta: "Voir le catalogue",
    },
    catalog: {
      title: "Catalogue",
      count: (n) => `${n} modèle${n > 1 ? "s" : ""} disponible${n > 1 ? "s" : ""}`,
    },
    about: {
      title: "Le studio",
      text: "TurtleNinja Prints, c'est un seul créateur, un Blender et une imprimante qui tourne trop souvent tard le soir. Chaque fichier vendu ici a été imprimé au moins une fois avant d'être mis en ligne — pas de modèle jamais testé.",
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
      title: "STL files cut for printing, not for demos.",
      subtitle:
        "Every model is designed in Blender, test-printed for real, and sold ready to slice: orientation, supports and print time already dialed in for you.",
      cta: "Browse the catalog",
    },
    catalog: {
      title: "Catalog",
      count: (n) => `${n} model${n > 1 ? "s" : ""} available`,
    },
    about: {
      title: "The studio",
      text: "TurtleNinja Prints is one creator, one copy of Blender, and a printer that runs too late into the night. Every file sold here has been printed at least once before going live — no untested models.",
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
