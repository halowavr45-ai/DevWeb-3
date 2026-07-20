# TurtleNinja Prints

Boutique Next.js pour vendre des fichiers STL avec paiement Stripe + PayPal
et téléchargement sécurisé (lien à usage limité, généré uniquement après
confirmation du paiement).

## 1. Installation locale

```bash
npm install
cp .env.example .env.local
```

Remplis `.env.local` (voir section clés ci-dessous), puis :

```bash
npm run dev
```

Le site tourne sur http://localhost:3000.

## 2. Ajouter tes vrais fichiers STL

1. Édite `lib/products.js` : nom, prix (en centimes), specs, description.
2. Zippe chaque modèle et dépose-le dans `private-files/` avec le nom
   exact indiqué dans `fileKey`.
3. Remplace les images placeholder dans `public/images/` par tes vraies
   photos/rendus (mêmes noms de fichiers, ou mets à jour `image` dans
   `lib/products.js`).

`private-files/` n'est jamais exposé publiquement : seule la route
`/api/download`, qui vérifie un token signé, peut y accéder.

## 3. Clés Stripe

1. Crée un compte sur https://dashboard.stripe.com
2. Récupère ta clé secrète (`STRIPE_SECRET_KEY`) dans Développeurs → Clés API.
3. Pour le webhook : Développeurs → Webhooks → Ajouter un endpoint
   → URL `https://tondomaine.com/api/webhook` → événement
   `checkout.session.completed`. Copie le secret de signature dans
   `STRIPE_WEBHOOK_SECRET`.
4. En local, teste avec la Stripe CLI : `stripe listen --forward-to
   localhost:3000/api/webhook`.

Le webhook sert uniquement à journaliser/notifier — le lien de
téléchargement, lui, est généré immédiatement quand l'utilisateur revient
sur `/success`, via vérification directe de la session Stripe.

## 4. Clés PayPal

1. Crée une app sur https://developer.paypal.com/dashboard/applications
2. Copie `PAYPAL_CLIENT_ID` et `PAYPAL_CLIENT_SECRET`.
3. Duplique le client ID dans `NEXT_PUBLIC_PAYPAL_CLIENT_ID` (nécessaire
   pour charger le bouton PayPal côté navigateur).
4. Laisse `PAYPAL_ENV=sandbox` pour tester, passe à `live` en production.

## 5. Secret des liens de téléchargement

```bash
openssl rand -hex 32
```

Colle le résultat dans `DOWNLOAD_TOKEN_SECRET`. Les liens de
téléchargement expirent après 30 minutes (modifiable dans
`lib/downloadToken.js`).

## 6. Déploiement sur Vercel

```bash
npm i -g vercel
vercel
```

Puis dans les réglages du projet sur vercel.com → Environment Variables,
ajoute toutes les variables de `.env.example` (avec tes vraies valeurs de
production, y compris `PAYPAL_ENV=live` et des clés Stripe `sk_live_...`
quand tu es prêt à passer en réel). Redeploy après ajout des variables.

Mets aussi à jour `SITE_URL` avec ton vrai domaine, et recrée le webhook
Stripe en pointant vers `https://tondomaine.com/api/webhook`.

## 7. Limite importante à connaître

Les fichiers dans `private-files/` sont lus depuis le système de fichiers
du serveur. Ça fonctionne bien pour démarrer, mais si tes fichiers sont
volumineux ou nombreux, passe à un stockage objet (Vercel Blob, S3,
Cloudflare R2) et génère une URL signée temporaire dans
`app/api/download/route.js` au lieu de lire le disque — les fonctions
Vercel ont des limites de taille de déploiement.

## Structure

```
app/
  page.js                 catalogue (accueil)
  product/[slug]/page.js  fiche produit + boutons de paiement
  success/page.js         confirmation + lien de téléchargement
  cancel/page.js          paiement annulé
  api/checkout/           crée une session Stripe Checkout
  api/verify-session/     vérifie le paiement Stripe, émet un token
  api/webhook/            webhook Stripe (logs/fulfillment)
  api/paypal/create-order/
  api/paypal/capture/     confirme le paiement PayPal, émet un token
  api/download/           sert le fichier après vérification du token
lib/products.js           catalogue produit (source unique)
private-files/            tes vrais .zip/.stl (jamais public)
```
