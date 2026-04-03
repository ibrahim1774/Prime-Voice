import ScrollReveal from "./ScrollReveal";

const STATS = [
  {
    stat: "62%",
    headline: "of callers hang up if no one answers",
    detail:
      "They don\u2019t leave a voicemail. They call the next contractor on the list.",
  },
  {
    stat: "$2,600",
    headline: "average value of a missed contracting lead",
    detail:
      "Plumbing emergencies. HVAC installs. Roof repairs. One missed call can cost more than a month of PrimeVoice.",
  },
  {
    stat: "nights",
    headline: "weekends & holidays \u2014 calls don\u2019t stop",
    detail:
      "Half of homeowner calls come outside business hours. If you\u2019re not answering, your competitor is.",
  },
  {
    stat: "$0",
    headline: "is what voicemail earns you",
    detail:
      "80% of callers won\u2019t leave a message. They want to talk to someone now. PrimeVoice answers instantly.",
  },
];

export default function PainPoints() {
  return (
    <section className="px-4 py-28 relative section-glow-divider overflow-hidden">
      {/* Depth gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,20,20,0.8)_0%,rgba(10,10,10,1)_80%)]" />
      {/* Ambient glow orb */}
      <div
        className="ambient-orb animate-glow-pulse"
        style={{ top: "30%", left: "50%", transform: "translateX(-50%)", width: "500px", height: "300px", background: "rgba(201, 168, 76, 0.03)" }}
      />
      {/* Floating particles */}
      <div className="particle particle-sm animate-float-particle" style={{ top: "15%", left: "8%" }} />
      <div className="particle particle-md animate-float-particle-delayed" style={{ top: "60%", right: "12%" }} />
      <div className="particle particle-sm animate-float-particle-slow" style={{ top: "40%", left: "75%" }} />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-20">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-gold mb-4">
            The Problem
          </p>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            You&apos;re Losing Jobs{" "}
            <span className="text-gold">Right Now</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {STATS.map((item) => (
            <ScrollReveal key={item.stat}>
              <div className="group">
                <p className="font-serif text-7xl font-bold text-gold md:text-8xl">
                  {item.stat}
                </p>
                <p className="mt-4 font-sans text-xl font-medium text-white">
                  {item.headline}
                </p>
                <p className="mt-3 font-sans text-muted leading-relaxed">
                  {item.detail}
                </p>
                <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold/40 to-transparent" style={{ boxShadow: "0 0 8px rgba(201, 168, 76, 0.15)" }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
