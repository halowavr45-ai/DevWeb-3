"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function BuyBox({ product }) {
  const { dict } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const paypalRef = useRef(null);
  const [paypalReady, setPaypalReady] = useState(false);

  async function handleStripeCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: product.slug }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(dict.buybox.errorStart);
      }
    } catch (e) {
      setError(dict.buybox.errorNetwork);
    } finally {
      setLoading(false);
    }
  }

  // Load PayPal SDK once and render its buttons into paypalRef
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    if (!clientId) return;

    const existing = document.getElementById("paypal-sdk");
    function render() {
      if (!window.paypal || !paypalRef.current) return;
      paypalRef.current.innerHTML = "";
      window.paypal
        .Buttons({
          style: { color: "black", shape: "rect", label: "pay", height: 45 },
          createOrder: async () => {
            const res = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ slug: product.slug }),
            });
            const data = await res.json();
            return data.id;
          },
          onApprove: async (data) => {
            const res = await fetch("/api/paypal/capture", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderId: data.orderID, slug: product.slug }),
            });
            const result = await res.json();
            if (result.token) {
              window.location.href = `/success?provider=paypal&token=${result.token}`;
            } else {
              setError(dict.buybox.errorPaypalToken);
            }
          },
          onError: () => setError(dict.buybox.errorPaypalFailed),
        })
        .render(paypalRef.current);
      setPaypalReady(true);
    }

    if (existing) {
      render();
      return;
    }
    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR`;
    script.onload = render;
    document.body.appendChild(script);
  }, [product.slug]);

  return (
    <div className="space-y-4">
      <button
        onClick={handleStripeCheckout}
        disabled={loading}
        className="w-full font-mono uppercase tracking-wider text-sm bg-acid text-paper px-6 py-3 hover:bg-paper hover:text-ink transition-colors disabled:opacity-60 focus-ring"
      >
        {loading ? dict.buybox.redirecting : dict.buybox.payStripe}
      </button>

      <div className="flex items-center gap-3 text-muted text-xs font-mono uppercase">
        <span className="flex-1 h-px bg-white/10" />
        {dict.buybox.or}
        <span className="flex-1 h-px bg-white/10" />
      </div>

      <div ref={paypalRef} />
      {!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID && (
        <p className="text-xs text-muted font-mono">{dict.buybox.paypalDisabled}</p>
      )}

      {error && <p className="text-bandana text-sm font-mono">{error}</p>}
    </div>
  );
}
