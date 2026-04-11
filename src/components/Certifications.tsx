import { useEffect, useRef, useState } from "react";

const awsCerts = [
  { name: "AWS AI Practitioner (AIF-C01)", status: "In Progress" },
  { name: "AWS Solutions Architect Associate (SAA-C03)", status: "In Progress" },
  { name: "AWS Data Engineer Associate", status: "Planned" },
  { name: "AWS Generative AI Developer", status: "Planned" },
  { name: "AWS Solutions Architect Professional", status: "Planned" },
];

const completedCerts = [
  { name: "Lean Six Sigma Green Belt — SSGI", status: "Complete" },
  { name: "Process Improvement Specialist — SSGI", status: "Complete" },
  { name: "SQL — Introduction & Advanced*", status: "Complete" },
];

const Certifications = () => {
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

  const statusPill = (status: string) => {
    const base = "font-sans text-xs editorial-spacing uppercase px-3 py-1 rounded-full text-foreground";
    if (status === "Complete") return `${base} bg-green-200`;
    if (status === "In Progress") return `${base} bg-accent/20`;
    return `${base} bg-muted`;
  };

  return (
    <section id="certifications" className="py-24 md:py-32 bg-background">
      <div
        ref={ref}
        className={`container max-w-4xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-sans text-sm editorial-spacing uppercase text-accent mb-4">
          Credentials
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12">
          Certifications
        </h2>

        {/* AWS Subheader */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6">AWS</h3>
        <div className="space-y-0 mb-12">
          {awsCerts.map((c, i) => (
            <div
              key={c.name}
              className={`flex items-center justify-between py-5 border-b border-border transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-sans text-lg sm:text-xl text-foreground">
                {c.name}
              </span>
              <span className={statusPill(c.status)}>
                {c.status}
              </span>
            </div>
          ))}
        </div>

        {/* Completed Certs */}
        <div className="space-y-0">
          {completedCerts.map((c, i) => (
            <div
              key={c.name}
              className={`flex items-center justify-between py-5 border-b border-border transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              style={{ transitionDelay: `${(awsCerts.length + i) * 100}ms` }}
            >
              <span className="font-sans text-lg sm:text-xl text-foreground">
                {c.name}
              </span>
              <span className={statusPill(c.status)}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
        <p className="font-sans text-xs text-muted-foreground mt-4 italic">
          *Professional Training
        </p>
      </div>
    </section>
  );
};

export default Certifications;
