import { useEffect, useRef, useState } from "react";

const artifacts = [
  {
    title: "Executive Summary",
    description: "Architecture philosophy, core competencies, and approach — Coming Soon",
  },
  {
    title: "Technology Roadmaps",
    description: "Multi-year infrastructure evolution aligned with business milestones — Coming Soon",
  },
  {
    title: "Reference Architectures",
    description: "Reusable patterns for regulated AI integration and event-driven systems — Coming Soon",
  },
  {
    title: "Governance & Compliance",
    description: "Audit frameworks, consent models, and security architecture — Coming Soon",
  },
];

const Artifacts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="artifacts" className="py-24 md:py-32 bg-secondary">
      <div ref={ref} className="container max-w-5xl mx-auto px-6">
        <p className={`font-sans text-sm editorial-spacing uppercase text-accent mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Resources
        </p>
        <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Architecture Artifacts
        </h2>
        <p className={`font-sans text-lg text-muted-foreground mb-16 max-w-2xl transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Decision documents, roadmaps, and governance frameworks — the work behind the diagrams.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {artifacts.map((a, i) => (
            <div
              key={a.title}
              className={`p-8 rounded-lg border border-border hover:border-accent transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 3) * 100}ms` }}
            >
              <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{a.title}</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artifacts;
