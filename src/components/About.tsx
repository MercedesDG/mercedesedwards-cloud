import { useEffect, useRef, useState } from "react";

const specialties = [
  "AI Lifecycle Adoption",
  "AI Enablement",
  "AI Management",
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
          The AI Business Architect
        </h2>
        <div className="space-y-6 font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
          <p>
            I work across the full AI adoption lifecycle — enablement, management, and governance — helping organizations adopt AI with structure, accountability, and strong business alignment.
          </p>
          <p>
            My background spans business analysis, process optimization, enterprise consulting, and AI adoption. I approach every engagement as people and business-first: understanding how the organization operates, how people work within it, where AI creates genuine value and risk, and what compliance structures need to be in place before, during, and after deployment. I have spent my career translating complex requirements into workable systems — first for business processes and enterprise platforms, now for AI adoption programs and compliance frameworks.
          </p>
          <p>
            My portfolio addresses healthcare, manufacturing, and retail — industries where AI is already deployed and the governance has not caught up. I work with systems as they exist: ungoverned models in production, missing documentation, teams that need training, processes that need redesigning, and organizations that need an AI management program they can run once a consultant leaves.
          </p>
          <p>
            I believe compliance is not a constraint on innovation, but the structure that enables it — and allows it to survive its first audit.
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
