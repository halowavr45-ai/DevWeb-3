import jwt from "jsonwebtoken";

function secret() {
  if (!process.env.DOWNLOAD_TOKEN_SECRET) {
    throw new Error("DOWNLOAD_TOKEN_SECRET manquante dans les variables d'environnement.");
  }
  return process.env.DOWNLOAD_TOKEN_SECRET;
}

// A token is only ever issued after a payment has been verified server-side
// (Stripe session confirmed as paid, or PayPal order confirmed as captured).
export function issueDownloadToken(slug, orderRef) {
  return jwt.sign({ slug, orderRef }, secret(), { expiresIn: "30m" });
}

export function verifyDownloadToken(token) {
  return jwt.verify(token, secret()); // throws if invalid/expired
}
