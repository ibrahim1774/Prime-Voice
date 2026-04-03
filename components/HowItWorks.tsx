import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    description:
      "Your business name, phone number, and what you do. That\u2019s it.",
  },
  {
    number: "02",
    title: "We Build Your Receptionist",
    description:
      "In seconds, we create a custom AI receptionist trained on your services.",
  },
  {
    number: "03",
    title: "Talk To It Right Now",
    description:
      "Call it from your browser. Hear how it handles a real customer call.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-28 relative section-glow-divider overflow-hidden">
      {/* Ambient orb */}
      <div
        className="ambient-orb animate-glow-pulse"
        style={{ bottom: "10%", left: "30%", width: "350px", height: "250px", background: "rgba(201, 168, 76, 0.025)", animationDelay: "3s" }}
      />
      {/* Floating particles */}
      <div className="particle particle-sm animate-float-particle-delayed" style={{ top: "20%", right: "10%" }} />
      <div className="particle particle-md animate-float-particle-slow" style={{ top: "60%", left: "5%" }} />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-20">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-gold mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Live in{" "}
            <span className="text-gold">30 Seconds</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((step) => (
            <ScrollReveal key={step.number}>
              <div className="gold-glow-border rounded-2xl p-8 md:p-10 h-full transition-all duration-500">
                <span className="font-serif text-6xl font-bold text-gold/15">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
