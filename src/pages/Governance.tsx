import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Governance = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Header */}
    <section className="pt-24 pb-12 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="font-sans text-sm editorial-spacing uppercase text-accent mb-4">Artifacts</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3">
          Governance &amp; Compliance
        </h1>
        <p className="font-sans text-xl text-muted-foreground mb-3">
          Audit frameworks, consent models, and security architecture — the governance thinking behind each project.
        </p>
        <p className="font-sans text-base text-muted-foreground">
          Mercedes D. Edwards — Solutions Architect, AI Enablement
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
      </div>
    </div>

    {/* Document Body */}
    <div className="container max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* SECTION 1: MedBridge AI (Live) */}
      <article className="bg-white rounded-lg border border-border p-8 md:p-12 shadow-sm">
        <span className="inline-block px-3 py-1 mb-4 rounded-full border border-accent text-muted-foreground font-sans text-xs editorial-spacing uppercase">
          MedBridge AI — Healthcare
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
          MedBridge AI — Governance Architecture Considerations
        </h2>
        <p className="font-sans text-lg text-muted-foreground mb-8">
          How HIPAA, consent management, and agentic AI security shaped every architectural decision.
        </p>
        {/* Project Context */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Project Context</h2>
          <p className="font-sans text-base text-muted-foreground leading-relaxed">
            MedBridge AI is a unified patient data platform for Cascade Regional Health Partners (CRHP), a 14-clinic healthcare network operating across Florida, Georgia, and Alabama. The system integrates a legacy MUMPS/OpenVista EHR with modern cloud services to provide a RAG-powered clinical chatbot, real-time data pipelines, and agentic AI capabilities — all handling Protected Health Information (PHI) under strict regulatory requirements.
          </p>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mt-4">
            This document outlines the governance constraints shaping the system's architecture and the design principles ensuring compliance is structural, not superficial.
          </p>
        </section>

        <hr className="border-border mb-10" />

        {/* Regulatory Landscape */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Regulatory Landscape</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">HIPAA (Health Insurance Portability and Accountability Act)</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                All PHI must be encrypted at rest and in transit. Access must follow the minimum necessary standard — users and AI agents see only the data required for their specific clinical purpose. Every access event must be logged immutably.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">21st Century Cures Act &amp; CMS Interoperability Rule</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                CRHP must demonstrate full Electronic Health Information (EHI) exchange capability and FHIR-based API access by the 2027 compliance deadline. The architecture must produce FHIR R4-compliant data as a first-class output, not as an afterthought conversion.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">42 CFR Part 2</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Behavioral health and substance abuse records carry additional federal protections beyond standard HIPAA. Patient consent must be explicitly captured before these records can be shared across state lines or between providers — and Alabama, Georgia, and Florida each have differing state-level requirements that layer on top of federal rules.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">CMS Prior Authorization Final Rule</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                CRHP's largest payer requires FHIR-based prior authorization submissions by January 2027. The data pipeline must produce payer-compatible FHIR resources, not just clinician-facing records.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border mb-10" />

        {/* Governance Design Principles */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Governance Design Principles</h2>

          {/* Principle 1 */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">1. Consent as Architecture, Not Configuration</h3>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-3">
              Patient consent is not a toggle — it's a structural constraint that determines what data flows where. The system implements consent at the data pipeline level:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-sans text-base text-muted-foreground leading-relaxed">
              <li>Consent records are stored as FHIR Consent resources alongside patient data</li>
              <li>The RAG knowledge base respects consent boundaries during retrieval — if a patient has restricted behavioral health record sharing with Georgia clinics, those records are excluded from retrieval <em>before</em> the chatbot generates a response, not filtered after</li>
              <li>Consent changes propagate through the pipeline in near real-time via the same CDC mechanism used for clinical data</li>
            </ul>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-3 italic">
              Why this matters architecturally: Retrofitting consent into a system that wasn't designed for it creates gaps. Building it into the data flow from the start means compliance is enforced by the system's structure, not by policy documents that rely on human adherence.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">2. Identity and Authorization Are Separate Problems</h3>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-3">
              <strong>Authentication</strong> (who is this person?) and <strong>authorization</strong> (what are they allowed to do?) are handled by different services for different reasons:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-sans text-base text-muted-foreground leading-relaxed">
              <li><strong>Amazon Cognito</strong> manages identity — authenticating clinicians, administrators, and system service accounts across all 14 clinics with federated access</li>
              <li><strong>Amazon Verified Permissions (Cedar)</strong> manages authorization — evaluating fine-grained, context-dependent access policies at query time</li>
            </ul>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mt-3">
              This separation matters because authorization in healthcare is not static. A nurse in Alabama should not see oncology notes from Georgia <em>unless</em> there is an active referral. The authorization decision depends on: who is asking, what role they hold, which clinic they're at, whether an active referral exists, and whether the patient has consented to cross-state sharing. These are contextual, dynamic decisions that cannot be reduced to a static role-based access matrix.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">3. The AI Agent Is a Governed Entity</h3>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-3">
              The Bedrock-powered clinical chatbot is not exempt from access controls. It operates as a governed agent with its own identity and scoped permissions:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-sans text-base text-muted-foreground leading-relaxed">
              <li>The agent authenticates via Amazon Bedrock Agentcore Identity — establishing a machine identity distinct from the human user</li>
              <li>The agent's access scope is dynamically scoped to the requesting user's permissions — it inherits the clinician's authorization context, not a blanket "system admin" role</li>
              <li>Every action the agent takes (data retrieval, scheduling, referral generation) requires delegated authority that can be independently revoked</li>
              <li>Human-in-the-loop confirmation is required for all write operations — the agent can <em>propose</em> a follow-up appointment, but a human must approve it before execution</li>
            </ul>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-3 italic">
              Why this matters: As agentic AI systems take actions on behalf of users, the governance model must treat the agent as an actor in the system — with its own identity, auditable behavior, and revocable permissions. This is an emerging architectural challenge that most organizations have not yet addressed.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">4. Audit Trails Are Correlated, Not Fragmented</h3>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-3">
              Every chatbot interaction produces a complete, traceable chain:
            </p>
            <p className="font-sans text-sm font-medium text-foreground bg-secondary rounded-lg p-4 mb-4">
              Authenticated user → query intent → agent actions → data sources accessed → permissions evaluated → consent checks applied → response content → user acknowledgment
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-3">
              Each chain carries a single correlation ID that links all components. This enables auditors to reconstruct the full decision path for any interaction without requiring engineering support.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-2">The audit trail is:</p>
            <ul className="list-disc pl-6 space-y-2 font-sans text-base text-muted-foreground leading-relaxed">
              <li><strong>Immutable</strong> — stored in append-only format in Amazon S3 with versioning enabled</li>
              <li><strong>Indexed</strong> — queryable via Amazon OpenSearch for rapid auditor access</li>
              <li><strong>Exportable</strong> — formatted for HIPAA audit requirements with chain-of-custody documentation</li>
              <li><strong>Proactive</strong> — anomaly detection flags unusual access patterns (e.g., a clinician querying 50 patient records in an hour) before a violation occurs, not after</li>
            </ul>
          </div>

          {/* Principle 5 */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">5. Data Residency Is a Hard Constraint</h3>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-3">
              All PHI remains in AWS us-east-1. This is non-negotiable under CRHP's HIPAA Business Associate Agreement. The architecture enforces this through:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-sans text-base text-muted-foreground leading-relaxed">
              <li>S3 bucket policies restricting object storage to us-east-1</li>
              <li>VPC configuration preventing data egress to non-approved regions</li>
              <li>AWS Config rules continuously monitoring for any drift from the approved data residency configuration</li>
            </ul>
          </div>
        </section>

        <hr className="border-border mb-10" />

        {/* Governance and the Legacy System */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Governance and the Legacy System</h2>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
            The OpenVista system presents a unique governance challenge: it cannot be modified, yet data extracted from it must meet modern compliance standards.
          </p>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-3">
            The architecture addresses this through a <strong>governance transformation layer</strong> — the Lambda functions that convert MUMPS hierarchical data to FHIR R4 format also apply governance metadata:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-sans text-base text-muted-foreground leading-relaxed">
            <li>Patient consent status is attached to records during transformation, not after storage</li>
            <li>Data lineage tags track which records originated from OpenVista vs. Epic vs. Athenahealth — enabling auditors to trace any record back to its source system</li>
            <li>Records from OpenVista that cannot be reliably mapped to FHIR are flagged for manual clinical review rather than silently dropped or approximated</li>
          </ul>
        </section>

        <hr className="border-border mb-10" />

        {/* What This Document Signals */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">What This Document Signals</h2>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
            This is not a completed governance implementation — MedBridge AI's architecture is in active development. This document captures the governance <em>thinking</em> that is shaping every architectural decision from the outset.
          </p>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
            In a production healthcare environment, governance cannot be a phase that comes after the build. It is the framework within which the build happens. The decisions documented here — consent as architecture, agent-as-governed-entity, correlated audit trails — represent how I approach the intersection of AI systems and regulatory complexity.
          </p>
          <p className="font-sans text-base text-muted-foreground leading-relaxed">
            Full architecture decision documents and working prototypes will be published at mercedesedwards.cloud as the project progresses.
          </p>
        </section>

        <div className="mt-10 pt-6 border-t border-border flex justify-end">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-4 py-2 rounded border border-accent text-accent font-sans text-xs editorial-spacing uppercase hover:bg-accent/10 transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Download PDF
          </button>
        </div>
      </article>

      {/* SECTION 2: ThreadLine (Coming Soon) */}
      <article className="bg-white rounded-lg border border-border p-8 md:p-12 shadow-sm opacity-70">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full border border-accent text-muted-foreground font-sans text-xs editorial-spacing uppercase">
            ThreadLine — Retail &amp; Supply Chain
          </span>
          <span className="inline-block font-sans text-xs editorial-spacing uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground">
            Coming Soon
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
          ThreadLine — Governance &amp; Compliance Considerations
        </h2>
        <p className="font-sans text-base italic text-muted-foreground leading-relaxed">
          Cross-border compliance, data residency, and regulatory alignment for omnichannel supply chain operations across the US and Latin America.
        </p>
      </article>

      {/* SECTION 3: MedBridge AI Phase 2 (Coming Soon) */}
      <article className="bg-white rounded-lg border border-border p-8 md:p-12 shadow-sm opacity-70">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full border border-accent text-muted-foreground font-sans text-xs editorial-spacing uppercase">
            MedBridge AI Phase 2 — Healthcare Operations
          </span>
          <span className="inline-block font-sans text-xs editorial-spacing uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground">
            Coming Soon
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
          MedBridge AI Phase 2 — Operational Governance &amp; Audit Trail Architecture
        </h2>
        <p className="font-sans text-base italic text-muted-foreground leading-relaxed">
          Correlated audit trails, anomaly detection, and governance of AI-powered observability and troubleshooting agents in production healthcare environments.
        </p>
      </article>

      <p className="font-sans text-base italic text-muted-foreground text-center pt-6">
        Governance artifacts are published as each project's architecture progresses. Full architecture decision documents and project write-ups are available at{" "}
        <a href="https://mercedesedwards.cloud" className="text-accent hover:underline">
          mercedesedwards.cloud
        </a>
        .
      </p>
    </div>

    <Footer />
  </div>
);

export default Governance;
