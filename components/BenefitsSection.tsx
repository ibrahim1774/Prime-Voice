import ScrollReveal from "./ScrollReveal";

const BENEFITS = [
  {
    title: "Book More Jobs",
    description:
      "Every call answered means more estimates, more bookings, more revenue.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Never Miss a Call",
    description:
      "24/7/365. Nights, weekends, holidays. Never calls in sick.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
  },
  {
    title: "Save Thousands",
    description:
      "Answering services cost $300\u2013500/month. PrimeVoice starts at $29.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Stay On The Job Site",
    description:
      "PrimeVoice handles the phone so you can handle the work.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l3.05 3.05 6.95-6.95a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-8.95 8.95a1.5 1.5 0 01-2.12 0z" />
      </svg>
    ),
  },
  {
    title: "Sound Professional",
    description:
      "Callers hear a polished, knowledgeable receptionist \u2014 not voicemail.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="px-4 py-28 relative section-glow-divider overflow-hidden">
      {/* Depth gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,20,20,0.9)_0%,rgba(10,10,10,1)_70%)]" />
      {/* Ambient orb */}
      <div
        className="ambient-orb animate-glow-pulse"
        style={{ top: "20%", right: "20%", width: "400px", height: "400px", background: "rgba(201, 168, 76, 0.025)", animationDelay: "1s" }}
      />
      {/* Floating particles */}
      <div className="particle particle-sm animate-float-particle" style={{ top: "10%", right: "25%" }} />
      <div className="particle particle-md animate-float-particle-slow" style={{ top: "70%", left: "15%" }} />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-20">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-gold mb-4">
            Why PrimeVoice
          </p>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            What This Means For{" "}
            <span className="text-gold">Your Business</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {BENEFITS.map((benefit, i) => (
            <ScrollReveal
              key={benefit.title}
              className={i === BENEFITS.length - 1 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}
            >
              <div className="gold-glow-border rounded-2xl p-6 md:p-8 h-full transition-all duration-500">
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold"
                  style={{ boxShadow: "0 0 12px rgba(201, 168, 76, 0.1)" }}
                >
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-white md:text-xl">
                  {benefit.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
