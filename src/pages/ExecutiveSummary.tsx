import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ExecutiveSummary = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Header */}
    <section className="pt-24 pb-12 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="font-sans text-sm editorial-spacing uppercase text-accent mb-4">Artifact</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3">
          Executive Summary
        </h1>
        <p className="font-sans text-xl text-muted-foreground mb-3">
          Architecture philosophy, core competencies, and approach
        </p>
        <p className="font-sans text-base text-muted-foreground">
          Mercedes D. Edwards — Solutions Architect, AI &amp; Cloud Enablement
        </p>
      </div>
    </section>

    {/* Action Bar */}
    <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          to="/#artifacts"
          className="flex items-center gap-1.5 font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 px-4 py-2 rounded border border-accent text-accent font-sans text-xs editorial-spacing uppercase hover:bg-accent/10 transition-colors"
        >
          <Download className="w-3.5 h-3.5" /> Download PDF
        </button>
      </div>
    </div>

    {/* Document Body */}
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-lg border border-border p-8 md:p-12 shadow-sm">
        {/* Architecture Philosophy */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
          Architecture Philosophy
        </h2>
        <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-8">
          I design AI and cloud solutions for environments where the real challenge isn't the technology — it's the complexity surrounding it. Regulated industries, legacy systems that can't be replaced overnight, distributed teams that need to adopt new tools without disrupting the work that is already in motion. My approach begins with understanding business constraints and governance boundaries before selecting a single service or architecting a solution.
        </p>
        <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-12">
          Architecture decisions should be explainable to every stakeholder in the room — the executives, the legal/ compliance officer, the engineering lead, and the end user who needs it to work on Monday morning. I prioritize defensible trade-offs over theoretical perfection, and I design for what happens after launch day: how systems are maintained, how teams are enabled to operate them independently, and how governance scales alongside the technology.
        </p>

        <div className="section-divider mb-12" />

        {/* Core Competencies */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Core Competencies
        </h2>
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Governance Governance &amp; Compliance Architecture
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Designing systems where security, consent management, and audit readiness are embedded from the first architectural decision — not layered on after deployment. Experienced in building commercial governance frameworks, tiered approval workflows, and cross-functional compliance structures across distributed organizations.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              AI-Powered Enablement &amp; Knowledge Management
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Architecting intelligent systems that help organizations learn, adopt, and scale. From curriculum redesign and project-based learning programs to prompt engineering training for non-technical users — bridging the gap between AI capability and practical organizational adoption.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Legacy Integration &amp; Modernization
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Designing integration architectures for systems that lack modern APIs, documented structures, or interoperability standards. Building event-driven pipelines that bridge legacy platforms to cloud-native services without requiring replacement of the systems organizations still depend on.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Full-Lifecycle AI Operations
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Covering the arc from initial design through production reliability — including observability, cost optimization, agentic troubleshooting, and operational handoff. Ensuring the teams who inherit a system can maintain, monitor, and evolve it without ongoing external dependency.
            </p>
          </div>
        </div>

        <div className="section-divider mb-12" />

        {/* Approach */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Approach
        </h2>
        <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
          Every engagement follows the same progression:
        </p>
        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-4">
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Understand the constraints first.</strong> Business requirements, regulatory boundaries, team capabilities, existing systems, and what cannot change. The architecture serves these realities — not the other way around.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-4">
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Design for defensible decisions.</strong> Every service selection, integration pattern, and security model comes with documented alternatives considered, trade-offs evaluated, and rationale tied to business outcomes. No decision exists without a reason that can be articulated under scrutiny.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-4">
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Build for the handoff.</strong> The architecture is only as good as the team that operates it after the engagement ends. Operational playbooks, governance documentation, and enablement artifacts are deliverables — not afterthoughts.
            </p>
          </div>
        </div>

        <div className="section-divider mb-12" />

        {/* Portfolio Highlights */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Portfolio Highlights
        </h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-accent/20">
                <th className="text-left font-sans text-sm editorial-spacing uppercase text-foreground px-4 py-3 border border-border">
                  Project
                </th>
                <th className="text-left font-sans text-sm editorial-spacing uppercase text-foreground px-4 py-3 border border-border">
                  Industry
                </th>
                <th className="text-left font-sans text-sm editorial-spacing uppercase text-foreground px-4 py-3 border border-border">
                  Focus
                </th>
                <th className="text-left font-sans text-sm editorial-spacing uppercase text-foreground px-4 py-3 border border-border">
                  Key Services
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-sans text-base font-medium text-foreground px-4 py-3 border border-border">
                  MedBridge AI
                </td>
                <td className="font-sans text-base text-muted-foreground px-4 py-3 border border-border">
                  Healthcare
                </td>
                <td className="font-sans text-base text-muted-foreground px-4 py-3 border border-border">
                  Legacy EHR integration, RAG clinical chatbot, agentic security under HIPAA
                </td>
                <td className="font-sans text-base text-muted-foreground px-4 py-3 border border-border">
                  Bedrock, Kinesis, Lambda, Cognito, Verified Permissions
                </td>
              </tr>
              <tr>
                <td className="font-sans text-base font-medium text-foreground px-4 py-3 border border-border">
                  ThreadLine
                </td>
                <td className="font-sans text-base text-muted-foreground px-4 py-3 border border-border">
                  Retail / Supply Chain
                </td>
                <td className="font-sans text-base text-muted-foreground px-4 py-3 border border-border">
                  Demand forecasting, omnichannel order orchestration, cross-border compliance
                </td>
                <td className="font-sans text-base text-muted-foreground px-4 py-3 border border-border">
                  COMING SOON
                </td>
              </tr>
              <tr>
                <td className="font-sans text-base font-medium text-foreground px-4 py-3 border border-border">
                  MedBridge AI Phase II
                </td>
                <td className="font-sans text-base text-muted-foreground px-4 py-3 border border-border">
                  Healthcare — Operations
                </td>
                <td className="font-sans text-base text-muted-foreground px-4 py-3 border border-border">
                  AI observability, cost optimization, agentic troubleshooting with Kiro CLI
                </td>
                <td className="font-sans text-base text-muted-foreground px-4 py-3 border border-border">
                  COMING SOON
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section-divider mb-12" />

        {/* Certifications */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
          Certifications
        </h2>
        <ul className="space-y-2 mb-8">
          <li className="font-sans text-base text-muted-foreground">
            AWS AI Practitioner (AIF-C01) — Expected April 2026
          </li>
          <li className="font-sans text-base text-muted-foreground">
            AWS Solutions Architect Associate (SAA-C03) — Expected May 2026
          </li>
          <li className="font-sans text-base text-muted-foreground">
            AWS Data Engineer Associate, Gen AI Developer Professional, Solutions Architect Professional — Planned
          </li>
        </ul>

        <div className="section-divider mb-8" />

        <p className="font-sans text-base italic text-muted-foreground text-center">
          Full portfolio, architecture decision documents, and project write-ups:{" "}
          <a href="https://mercedesedwards.cloud" className="text-accent hover:underline">
            mercedesedwards.cloud
          </a>
        </p>
      </div>
    </div>

    <Footer />
  </div>
);

export default ExecutiveSummary;
