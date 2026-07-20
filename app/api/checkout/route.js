import { NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import { getProductBySlug } from "../../../lib/products";

export async function POST(req) {
  try {
    const { slug } = await req.json();
    const product = getProductBySlug(slug);
    if (!product) {
      return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
    }

    const stripe = getStripe();
    const origin = req.headers.get("origin") || process.env.SITE_URL;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: { name: product.name, description: product.tagline },
            unit_amount: product.priceCents,
          },
          quantity: 1,
        },
      ],
      metadata: { slug: product.slug },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
