import { useEffect, useRef, useState } from "react";

const cloudArchCerts = [
  { name: "Certified GRC Engineer – Practitioner — GRC Engineering Club", status: "In Progress" },
  { name: "Terraform Associate (004) — HashiCorp", status: "Planned" },
  { name: "AI Practitioner (AIF-C01) — AWS", status: "Planned" },
  { name: "Solutions Architect – Associate (SAA-C03) — AWS", status: "Planned" },
];

const privacyGovCerts = [
  { name: "ISO 27001 Lead Auditor — Exemplar Global", status: "In Progress" },
  { name: "Artificial Intelligence Governance Professional (AIGP) — IAPP", status: "Planned" },
  { name: "Ethical Principles of Conversational AI — Linux Foundation", status: "Complete" },
  { name: "Conversational AI: Ensuring Compliance and Mitigating Risks — Linux Foundation", status: "Complete" },
];

const processDataCerts = [
  { name: "Lean Six Sigma Green Belt — SSGI", status: "Complete" },
  { name: "Process Improvement Specialist — SSGI", status: "Complete" },
  { name: "SQL — Introduction & Advanced*", status: "Complete" },
];

type Cert = { name: string; status: string };

const CertSection = ({
  title,
  certs,
  visible,
  delayOffset,
}: {
  title: string;
  certs: Cert[];
  visible: boolean;
  delayOffset: number;
}) => (
  <div className="mb-12">
    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6">{title}</h3>
    <div className="space-y-0">
      {certs.map((c, i) => (
        <div
          key={c.name}
          className={`flex items-center justify-between py-5 border-b border-border transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          style={{ transitionDelay: `${(delayOffset + i) * 100}ms` }}
        >
          <span className="font-sans text-lg sm:text-xl text-foreground">{c.name}</span>
          <span className={statusPill(c.status)}>{c.status}</span>
        </div>
      ))}
    </div>
  </div>
);

const statusPill = (status: string) => {
  const base = "font-sans text-xs editorial-spacing uppercase px-3 py-1 rounded-full text-foreground";
  if (status === "Complete") return `${base} bg-green-200`;
  if (status === "In Progress") return `${base} bg-accent/20`;
  return `${base} bg-muted`;
};

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

        <CertSection title="AI Governance, Risk & Compliance" certs={privacyGovCerts} visible={visible} delayOffset={0} />
        <CertSection title="AI & Cloud Architecture" certs={cloudArchCerts} visible={visible} delayOffset={privacyGovCerts.length} />
        <CertSection title="Process & Data" certs={processDataCerts} visible={visible} delayOffset={privacyGovCerts.length + cloudArchCerts.length} />

        <p className="font-sans text-xs text-muted-foreground mt-4 italic">
          *Professional Training
        </p>
      </div>
    </section>
  );
};

export default Certifications;
