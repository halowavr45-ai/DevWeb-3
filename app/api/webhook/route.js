import { NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";

export const runtime = "nodejs";

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();
  const stripe = getStripe();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature invalide:", err.message);
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    // Ici tu peux : envoyer un e-mail de confirmation, enregistrer la commande
    // dans une base de données, etc. Le téléchargement lui-même est géré
    // par /api/verify-session, appelé côté client sur la page /success.
    console.log("Commande payée:", session.id, session.metadata?.slug);
  }

  return NextResponse.json({ received: true });
}
