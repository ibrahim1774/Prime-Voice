"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  "Custom AI receptionist for your business",
  "24/7 coverage \u2014 nights, weekends, holidays",
  "Dedicated phone number & lead capture app",
  "Cancel anytime \u2014 no contracts, no setup fees",
];

export default function PricingTeaser() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  async function handleCheckout() {
    if (isCheckingOut) return;
    setIsCheckingOut(true);
    try {
      const businessName =
        new URLSearchParams(window.location.search).get("businessName") || "";
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessName }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setIsCheckingOut(false);
    }
  }

  return (
    <section className="px-4 py-28 relative section-glow-divider overflow-hidden">
      {/* Ambient glow behind pricing card */}
      <div
        className="ambient-orb animate-glow-pulse"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          background: "rgba(201, 168, 76, 0.03)",
        }}
      />
      {/* Floating particles */}
      <div
        className="particle particle-sm animate-float-particle"
        style={{ top: "10%", left: "20%" }}
      />
      <div
        className="particle particle-md animate-float-particle-delayed"
        style={{ top: "80%", right: "25%" }}
      />

      <div className="relative mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="gold-glow-border rounded-3xl p-10 text-center md:p-14 relative overflow-hidden">
            {/* Subtle radial glow inside card */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06)_0%,transparent_50%)]" />

            <div className="relative">
              <p className="font-sans text-sm uppercase tracking-[0.25em] text-gold mb-6">
                Simple Pricing
              </p>

              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                Try It First. Then Start for
              </h2>
              <p className="mt-2 font-serif text-7xl font-bold text-gold md:text-8xl">
                $29
                <span className="text-3xl text-gold/60">/mo</span>
              </p>

              <p className="mt-6 font-sans text-muted max-w-md mx-auto">
                Hear your AI receptionist handle a real call. If you like what
                you hear, set it up for $29/month. No contracts. Cancel anytime.
              </p>

              <p className="mt-2 font-sans text-xs text-subtle">
                *Additional charges apply based on call volume at $0.06&ndash;$0.13
                per minute.
              </p>

              <div className="mt-10 space-y-3 text-left max-w-sm mx-auto">
                {FEATURES.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 font-sans text-muted"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#demo"
                  className="rounded-xl border border-gold/30 px-8 py-4 font-sans text-base font-semibold text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/5"
                >
                  Try The Demo First
                </a>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="rounded-xl bg-gold px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-300 hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isCheckingOut ? "Redirecting..." : "Get Started Now"}
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
