import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="px-4 py-20 md:py-28 relative overflow-hidden">
      {/* Ambient orb */}
      <div
        className="ambient-orb animate-glow-pulse"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "400px",
          background: "rgba(201, 168, 76, 0.04)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Your Next Customer Is Calling.{" "}
            <span className="text-gold">Who&apos;s Answering?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-muted leading-relaxed">
            Every hour without PrimeVoice is another call your competitor picks
            up. Try it now &mdash; takes 30 seconds.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#demo"
              className="rounded-xl bg-gold px-10 py-4 font-sans text-base font-semibold text-background transition-all duration-300 hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow"
            >
              Try The AI Receptionist Live
            </a>
            <a
              href="#get-started"
              className="rounded-xl border border-gold/30 px-10 py-4 font-sans text-base font-semibold text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/5"
            >
              Get Started Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
