import { useEffect, useRef, useState } from "react";

const specialties = [
  "Legacy Integration",
  "Agentic AI Security",
  "AI Operations & Observability",
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
            I am an AI & Cloud Architect focused on what happens when AI meets real-world complexity — regulated industries, legacy systems, and the operational demands that come after launch day.
          </p>
          <p>
            With a background in enterprise consulting and business analysis, I bring a client-first approach to architecture. My portfolio spans healthcare, retail, and supply chain, covering the full AI lifecycle: building secure agentic systems, designing event-driven architectures for global operations, and ensuring reliability in production.
          </p>
          <p>
            I believe the best architecture decisions are the ones you can explain to a non-technical stakeholder without losing the technical truth.
          </p>
          <p>
            Actively pursuing AWS certifications and building hands-on projects grounded in realistic business problems, real constraints, and defensible architecture decisions.
          </p>
          <p className="text-foreground font-medium">
            Currently based in London with the right to work in the U.S. and U.K. — targeting Miami and south Florida, open to NY.
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
