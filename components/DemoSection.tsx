import IntakeForm from "./IntakeForm";
import ScrollReveal from "./ScrollReveal";

export default function DemoSection() {
  return (
    <section
      id="demo"
      className="px-4 py-20 md:py-28 relative section-glow-divider overflow-hidden"
    >
      {/* Ambient orb */}
      <div
        className="ambient-orb animate-glow-pulse"
        style={{
          top: "20%",
          right: "15%",
          width: "350px",
          height: "350px",
          background: "rgba(201, 168, 76, 0.03)",
        }}
      />
      {/* Particles */}
      <div
        className="particle particle-sm animate-float-particle"
        style={{ top: "15%", left: "10%" }}
      />
      <div
        className="particle particle-md animate-float-particle-delayed"
        style={{ top: "70%", right: "8%" }}
      />

      <div className="relative mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-sans text-sm uppercase tracking-[0.25em] text-gold mb-4">
              Hear It Yourself
            </p>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Build Your AI Receptionist in{" "}
              <span className="text-gold">30 Seconds</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-muted md:text-base leading-relaxed">
              Tell us your business name and what you do. We&apos;ll build a
              custom AI receptionist and let you call it &mdash; live, right now.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <IntakeForm
            buttonText="Try The AI Receptionist Live"
            trustText="Takes about 30 seconds."
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
