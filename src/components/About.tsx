import { useEffect, useRef, useState } from "react";

const specialties = [
  "AI Governance",
  "AI Operations & Observability",
  "Agentic AI Controls",
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
          The Applied Governance Architect
        </h2>
        <div className="space-y-6 font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
          <p>
            I am an AI governance professional who helps organizations securely govern, enable, and scale AI by translating regulatory and ethical obligations into system requirements, engineered controls, evidence pipelines, and practical guardrails for architecture and engineering teams. My work is applied AI governance, grounded in Compliance as Code, GRC engineering, and privacy-conscious architecture, focused on making complex systems auditable, defensible, and ready for scrutiny.
          </p>
          <p>
            My background spans enterprise IT consulting, process engineering, and digital transformation, where I have translated daunting business and regulatory requirements into operationally and technically sound controls. That experience now sits squarely in AI governance: understanding what exists, who owns it, what data it touches, and what obligations apply.
          </p>
          <p>
            I often work in environments with ungoverned models, missing documentation, and regulatory exposure that no one has fully quantified yet. My role is to turn that reality into control frameworks, evidence structures, and workflows that teams can maintain long after implementation.
          </p>
          <p>
            I do not approach governance as a constraint layered on after the fact, but as the structure that lets innovation survive its first audit. My lens is simple: clear accountability, usable documentation, and infrastructure that supports compliance instead of relying on manual effort and good intentions.
          </p>
          <p className="text-foreground font-medium">
            I am targeting roles in Miami and New York - with particular interest in AI governance roles that prioritize Compliance as Code and engineered system controls. Right to work in both the U.S. and U.K.
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
