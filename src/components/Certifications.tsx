import { useEffect, useRef, useState } from "react";

const certs = [
  { name: "AWS AI Practitioner (AIF-C01)", status: "In Progress" },
  { name: "AWS Solutions Architect Associate (SAA-C03)", status: "In Progress" },
  { name: "AWS Data Engineer Associate", status: "Planned" },
  { name: "AWS Generative AI Developer", status: "Planned" },
  { name: "AWS Solutions Architect Professional", status: "Planned" },
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

  return (
    <section id="certifications" className="py-24 md:py-32 bg-secondary">
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
        <div className="space-y-0">
          {certs.map((c, i) => (
            <div
              key={c.name}
              className={`flex items-center justify-between py-5 border-b border-border transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-sans text-base sm:text-lg text-foreground">
                {c.name}
              </span>
              <span
                className={`font-sans text-xs editorial-spacing uppercase px-3 py-1 rounded-full ${
                  c.status === "In Progress"
                    ? "bg-accent/20 text-accent"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
