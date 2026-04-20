import { useEffect, useRef, useState } from "react";

const specialties = [
  "Legacy Integration",
  "Agentic AI Security",
  "AI Operations & Observability",
  "AI Governance",
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div
        ref={ref}
        className={`container max-w-4xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-sans text-sm editorial-spacing uppercase text-accent mb-4">
          About
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10">
          The Architect
        </h2>
        <div className="space-y-6 font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
          <p>
            I am an AI & Cloud Architect focused on what happens when AI meets real-world complexity — regulated industries, legacy systems, and the operational demands that come after launch day. My experience sits at the intersection of governance architecture, AI systems design, and enablement program delivery — designing the structures that make intelligent systems trustworthy, auditable, and practically adoptable.
          </p>
          <p>
            With a background in enterprise consulting and business analysis, I bring a client-first approach to architecture. My portfolio spans healthcare, retail, and supply chain, covering the full AI lifecycle: building secure agentic systems under HIPAA constraints, designing event-driven architectures for global operations, and embedding governance into the data pipeline itself — not as an afterthought.
          </p>
          <p>
            I believe the best architecture decisions are the ones you can explain to a non-technical stakeholder without losing the technical truth — and that governance is not a constraint on innovation, but the structure that lets innovation scale responsibly.
          </p>
          <p>
            Actively pursuing cloud certifications, AI governance credentials (AIGP), and a BSIT at Western Governors University — building toward deeper specialization in AI governance, privacy engineering, and enterprise architecture at the intersection of technology and policy.
          </p>
          <p className="text-foreground font-medium">
            Currently based in London with the right to work in the U.S. and U.K. — targeting New York and Miami.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-10">
          {specialties.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full border border-accent text-muted-foreground font-sans text-sm editorial-spacing uppercase"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
