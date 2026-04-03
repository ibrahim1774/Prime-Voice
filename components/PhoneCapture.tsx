"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function PhoneCapture() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Enter a valid phone number");
      return;
    }

    setIsLoading(true);
    try {
      await fetch(
        "https://hook.us2.make.com/1ijk41d5vdixvoedkr13qliymoyv2x2w",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phoneNumber: phone,
            source: "homepage-phone-capture",
          }),
        }
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="get-started"
      className="px-4 py-20 md:py-28 relative section-glow-divider overflow-hidden"
    >
      {/* Ambient orb */}
      <div
        className="ambient-orb animate-glow-pulse"
        style={{
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "300px",
          background: "rgba(201, 168, 76, 0.03)",
        }}
      />
      <div
        className="particle particle-sm animate-float-particle"
        style={{ top: "20%", right: "15%" }}
      />
      <div
        className="particle particle-md animate-float-particle-slow"
        style={{ top: "65%", left: "10%" }}
      />

      <div className="relative mx-auto max-w-lg text-center">
        <ScrollReveal>
          {submitted ? (
            <div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10">
                <svg
                  className="h-8 w-8 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                We&apos;ll Be In Touch{" "}
                <span className="text-gold">Soon.</span>
              </h2>
              <p className="mt-4 font-sans text-muted">
                Someone from our team will reach out shortly to get your AI
                receptionist set up.
              </p>
            </div>
          ) : (
            <>
              <p className="font-sans text-sm uppercase tracking-[0.25em] text-gold mb-4">
                Get Started
              </p>
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Ready? Drop Your Number.
              </h2>
              <p className="mt-4 font-sans text-sm text-muted md:text-base">
                We&apos;ll set up your AI receptionist and have it live within 24
                hours.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-3"
              >
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setError("");
                  }}
                  className="flex-1 rounded-xl border border-white/[0.07] bg-charcoal/70 backdrop-blur-sm px-5 py-4 font-sans text-white placeholder:text-subtle focus:border-gold/40 focus:ring-1 focus:ring-gold/30 focus:bg-charcoal/90 transition-all duration-300"
                  autoComplete="tel"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-xl bg-gold px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-300 hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-glow whitespace-nowrap"
                >
                  {isLoading ? "Sending..." : "Get Started in 30 Seconds"}
                </button>
              </form>
              {error && (
                <p className="mt-2 text-sm text-red-400 font-sans">{error}</p>
              )}
              <p className="mt-3 font-sans text-xs text-subtle">
                $29/month. No contracts. Cancel anytime.
              </p>
            </>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
