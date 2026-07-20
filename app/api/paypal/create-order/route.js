import { NextResponse } from "next/server";
import { getPaypalAccessToken, PAYPAL_BASE } from "../../../../lib/paypal";
import { getProductBySlug } from "../../../../lib/products";

export async function POST(req) {
  try {
    const { slug } = await req.json();
    const product = getProductBySlug(slug);
    if (!product) {
      return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
    }

    const accessToken = await getPaypalAccessToken();
    const amount = (product.priceCents / 100).toFixed(2);

    const res = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: product.slug,
            description: product.name,
            amount: { currency_code: "EUR", value: amount },
          },
        ],
      }),
    });

    const order = await res.json();
    if (!res.ok) {
      console.error(order);
      return NextResponse.json({ error: "Création de commande PayPal impossible" }, { status: 500 });
    }

    return NextResponse.json({ id: order.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
