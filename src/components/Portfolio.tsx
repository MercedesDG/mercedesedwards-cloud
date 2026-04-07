import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface Project {
  industry: string;
  name: string;
  subtitle: string;
  description: string;
  services: string[];
  status: "Architecture In Progress" | "Coming Soon";
}

const projects: Project[] = [
  {
    industry: "Healthcare",
    name: "MedBridge AI",
    subtitle: "Agentic Healthcare Modernization Platform",
    description:
      "Designed a unified patient data platform integrating a legacy MUMPS-based EHR with modern systems through CDC pipelines, a RAG-powered clinical chatbot, and fine-grained agentic security — all under HIPAA constraints.",
    services: ["Amazon Bedrock", "Amazon ECS", "Amazon Cognito", "Verified Permissions", "Amazon DMS"],
    status: "Architecture In Progress",
  },
  {
    industry: "Retail & Supply Chain",
    name: "ThreadLine",
    subtitle: "AI-Driven Omnichannel Supply Chain Platform",
    description:
      "Architected a demand forecasting, order orchestration, and cross-border compliance platform for a fashion retailer operating across the US and Latin America — bridging five SaaS platforms and a legacy Access database.",
    services: ["Amazon SageMaker", "Amazon EventBridge", "AWS Lambda", "Amazon Kinesis", "AWS Step Functions"],
    status: "Coming Soon",
  },
  {
    industry: "Healthcare — Operations",
    name: "MedBridge AI — Phase 2",
    subtitle: "AI Operations, Observability & Agentic Troubleshooting",
    description:
      "Designed the observability, cost optimization, and AI-powered troubleshooting layer for a production healthcare AI system — reducing MTTR from 14 hours to under 60 minutes using Kiro CLI custom agents.",
    services: ["Kiro CLI", "Amazon CloudWatch", "AWS X-Ray", "Amazon Managed Grafana", "AWS Config"],
    status: "Coming Soon",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
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
    <div
      ref={ref}
      className={`bg-background rounded-lg p-8 md:p-10 border border-border transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <span className="inline-block px-3 py-1 rounded-full border border-accent text-accent font-sans text-xs editorial-spacing uppercase mb-6">
        {project.industry}
      </span>
      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
        {project.name}
      </h3>
      <p className="font-sans text-base text-accent font-medium mb-4">
        {project.subtitle}
      </p>
      <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.services.map((s) => (
          <span
            key={s}
            className="px-3 py-1 bg-secondary rounded-full font-sans text-xs text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span
          className={`inline-block px-3 py-1 rounded-full font-sans text-xs editorial-spacing uppercase ${
            project.status === "Architecture In Progress"
              ? "bg-accent/20 text-accent"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {project.status}
        </span>
        <div className="flex gap-6">
          <span className="font-sans text-sm text-muted-foreground flex items-center gap-1 cursor-default opacity-50">
            Architecture Document <ArrowRight className="w-3 h-3" />
          </span>
          <span className="font-sans text-sm text-muted-foreground flex items-center gap-1 cursor-default opacity-50">
            Medium Write-Up <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="py-24 md:py-32">
    <div className="container max-w-5xl mx-auto px-6">
      <p className="font-sans text-sm editorial-spacing uppercase text-accent mb-4">
        Portfolio
      </p>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
        Projects
      </h2>
      <p className="font-sans text-lg text-muted-foreground mb-16 max-w-2xl">
        Three projects. One lifecycle. Build it. Scale it. Keep it running.
      </p>
      <div className="space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
