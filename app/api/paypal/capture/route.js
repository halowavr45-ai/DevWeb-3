import { NextResponse } from "next/server";
import { getPaypalAccessToken, PAYPAL_BASE } from "../../../../lib/paypal";
import { issueDownloadToken } from "../../../../lib/downloadToken";
import { getProductBySlug } from "../../../../lib/products";

export async function POST(req) {
  try {
    const { orderId, slug } = await req.json();
    const product = getProductBySlug(slug);
    if (!product) {
      return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
    }

    const accessToken = await getPaypalAccessToken();
    const res = await fetch(`${PAYPAL_BASE}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const capture = await res.json();
    const status = capture?.status;

    if (!res.ok || status !== "COMPLETED") {
      console.error(capture);
      return NextResponse.json({ error: "Paiement non confirmé par PayPal" }, { status: 402 });
    }

    const token = issueDownloadToken(slug, `paypal_${orderId}`);
    return NextResponse.json({ token });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
