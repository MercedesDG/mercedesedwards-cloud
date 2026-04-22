import { useEffect, useRef, useState } from "react";
import iappLogo from "@/assets/iapp-logo.jpg";

const affiliations = [
  {
    name: "IAPP — International Association of Privacy Professionals",
    status: "Member",
    logo: iappLogo,
  },
];

const Affiliations = () => {
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
    <section id="affiliations" className="py-24 md:py-32" style={{ backgroundColor: "#d3d8d5" }}>
      <div
        ref={ref}
        className={`container max-w-4xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-sans text-sm editorial-spacing uppercase text-accent mb-4">
          Community
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12">
          Professional Affiliations
        </h2>

        <div className="space-y-0">
          {affiliations.map((a, i) => (
            <div
              key={a.name}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5 border-b border-foreground/20 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={a.logo}
                  alt={`${a.name} logo`}
                  className="w-8 h-8 rounded-sm object-cover flex-shrink-0"
                  loading="lazy"
                />
                <span className="font-sans text-lg sm:text-xl text-foreground">{a.name}</span>
              </div>
              <span
                className="font-sans text-xs editorial-spacing uppercase px-3 py-1 rounded-full text-white self-start sm:self-auto"
                style={{ backgroundColor: "#7AB648" }}
              >
                {a.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
