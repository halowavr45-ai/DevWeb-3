"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../contexts/LanguageContext";

function SuccessContent() {
  const { dict } = useLanguage();
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const directToken = params.get("token");

  const [status, setStatus] = useState("checking"); // checking | ready | error
  const [token, setToken] = useState(directToken || null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (directToken) {
      setStatus("ready");
      return;
    }
    if (!sessionId) {
      setStatus("error");
      setError(dict.success.errorNoOrder);
      return;
    }
    fetch(`/api/verify-session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setStatus("ready");
        } else {
          setError(data.error || dict.success.errorVerify);
          setStatus("error");
        }
      })
      .catch(() => {
        setError(dict.success.errorNetwork);
        setStatus("error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, directToken]);

  return (
    <div className="max-w-xl mx-auto px-6 py-24 text-center">
      {status === "checking" && (
        <p className="font-mono text-muted uppercase tracking-wide">{dict.success.checking}</p>
      )}

      {status === "ready" && (
        <>
          <p className="font-mono text-xs text-acid uppercase tracking-[0.3em]">
            {dict.success.confirmed}
          </p>
          <h1 className="font-display text-4xl mt-3">{dict.success.title}</h1>
          <p className="text-muted mt-4">{dict.success.text}</p>
          <a
            href={`/api/download?token=${token}`}
            className="inline-block mt-8 font-mono uppercase tracking-wider text-sm bg-acid text-paper px-8 py-4 hover:bg-paper hover:text-ink transition-colors focus-ring"
          >
            {dict.success.download}
          </a>
        </>
      )}

      {status === "error" && (
        <>
          <h1 className="font-display text-3xl mt-3 text-bandana">{dict.success.errorTitle}</h1>
          <p className="text-muted mt-4">{error}</p>
          <p className="text-muted mt-2 text-sm">{dict.success.errorContact}</p>
        </>
      )}
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  );
}
