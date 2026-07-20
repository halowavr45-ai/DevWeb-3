import { NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import { issueDownloadToken } from "../../../lib/downloadToken";
import { getProductBySlug } from "../../../lib/products";

export async function GET(req) {
  const sessionId = new URL(req.url).searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ error: "session_id manquant" }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Paiement non confirmé" }, { status: 402 });
    }

    const slug = session.metadata?.slug;
    const product = getProductBySlug(slug);
    if (!product) {
      return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
    }

    const token = issueDownloadToken(slug, `stripe_${session.id}`);
    return NextResponse.json({ token, product: { name: product.name } });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Vérification impossible" }, { status: 500 });
  }
}
