import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import resumePdf from "@/assets/mercedes-edwards-resume.pdf";

const Resume = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-12 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="font-sans text-sm editorial-spacing uppercase text-accent mb-4">Resume</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3">
          Mercedes D. Edwards
        </h1>
        <p className="font-sans text-xl text-muted-foreground mb-3">
          AI Governance Professional | Applied AI Governance &amp; Enterprise Architecture
        </p>
        <p className="font-sans text-base text-muted-foreground">
          me@mercedesedwards.cloud | LinkedIn: linkedin.com/in/mercedes-edwards
        </p>
      </div>
    </section>

    <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container max-w-4xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-1.5 font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <a
          href={resumePdf}
          download="Mercedes-Edwards-Resume.pdf"
          className="flex items-center gap-1.5 px-4 py-2 rounded border border-accent text-accent font-sans text-xs editorial-spacing uppercase hover:bg-accent/10 transition-colors"
        >
          <Download className="w-3.5 h-3.5" /> Download PDF
        </a>
      </div>
    </div>

    <main className="container max-w-4xl mx-auto px-6 py-12">
      <article className="bg-card rounded-lg border border-border p-8 md:p-12 shadow-sm">
        <section className="mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">Profile</h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            Applied AI governance and enterprise architecture professional with deep experience in framework design, risk assessment, compliance operations, and cross-functional stakeholder management across enterprise environments. Specialized in making AI systems that are already in production audit-defensible by mapping controls to frameworks including ISO 42001, NIST AI RMF, EU AI Act, and ISO 27001.
          </p>
        </section>

        <div className="section-divider mb-10" />

        <section className="mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-serif text-xl font-bold text-foreground">BRND United</h3>
                <span className="font-sans text-sm text-muted-foreground">Jul 2025 – Present | Remote</span>
              </div>
              <p className="font-sans text-sm italic text-muted-foreground mb-3">Founder &amp; Principal Consultant</p>
              <ul className="list-disc pl-6 space-y-2 font-sans text-base leading-relaxed text-muted-foreground">
                <li>Delivered AI adoption engagements for small business clients, designing governance-aware workflows with data flow mapping, access controls, and process logic documentation.</li>
                <li>Developed AI governance guidelines for non-technical clients adopting generative AI tools, covering acceptable use, data handling, and output quality controls.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-serif text-xl font-bold text-foreground">The Process Play</h3>
                <span className="font-sans text-sm text-muted-foreground">May 2023 – Sep 2024 | London, U.K.</span>
              </div>
              <p className="font-sans text-sm italic text-muted-foreground mb-3">Consultant — Business Analysis &amp; Process Governance</p>
              <ul className="list-disc pl-6 space-y-2 font-sans text-base leading-relaxed text-muted-foreground">
                <li>Managed a tri-party enablement partnership between ServiceNow, Northeastern University London, and The Process Play.</li>
                <li>Mapped and optimized key business processes for automation with traceable requirements documentation and governance-focused workshops.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-serif text-xl font-bold text-foreground">LHH ICEO</h3>
                <span className="font-sans text-sm text-muted-foreground">Apr 2020 – Mar 2021 | London, U.K.</span>
              </div>
              <p className="font-sans text-sm italic text-muted-foreground mb-3">Operations Manager | VP, Diversity &amp; Inclusion Committee</p>
              <ul className="list-disc pl-6 space-y-2 font-sans text-base leading-relaxed text-muted-foreground">
                <li>Led operations and cross-functional governance for a national career transition and executive coaching practice.</li>
                <li>Designed a tiered commercial governance framework with digital contract workflows, cross-functional approval processes, and compliance alerts.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider mb-10" />

        <section className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-5">Education</h2>
            <div className="space-y-5 font-sans text-base text-muted-foreground">
              <p><strong className="text-foreground">Western Governors University</strong><br />Bachelor of Science, Information Technology — Expected Spring 2027</p>
              <p><strong className="text-foreground">GRC Mastery</strong><br />Cybersecurity GRC Professional Program — May 2026</p>
              <p><strong className="text-foreground">GoCloud Careers</strong><br />Enterprise Architecture &amp; Generative AI Architecture — Ongoing</p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-5">Certifications</h2>
            <ul className="list-disc pl-6 space-y-2 font-sans text-base text-muted-foreground">
              <li>AIGP — In Progress</li>
              <li>ISO/IEC 42001 Lead Auditor — Planned</li>
              <li>ISO/IEC 27701 Lead Auditor — Planned</li>
              <li>ISO 27001 Lead Auditor</li>
              <li>Lean Six Sigma Green Belt</li>
            </ul>
          </div>
        </section>

        <div className="section-divider mb-10" />

        <section>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-5">Core Competencies</h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            Governance Framework Design · Risk Assessment &amp; Controls Mapping · Regulatory Compliance · Controls-to-Code Translation · Evidence Architecture &amp; Audit Readiness · Cross-Functional Stakeholder Management · Process Architecture &amp; Optimization · Program Management · Client-Facing Consulting · Workshop Facilitation &amp; Training
          </p>
        </section>
      </article>
    </main>

    <Footer />
  </div>
);

export default Resume;