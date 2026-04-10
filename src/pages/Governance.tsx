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
        <p className="font-sans text-sm editorial-spacing uppercase text-accent mb-4">Artifact</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
          MedBridge AI — Governance Architecture Considerations
        </h1>
        <p className="font-sans text-xl text-muted-foreground mb-3">
          Audit frameworks, consent models, and security architecture
        </p>
        <p className="font-sans text-base text-muted-foreground mb-4">
          Mercedes D. Edwards — Solutions Architect, AI &amp; Cloud Enablement
        </p>
        <span className="inline-block px-3 py-1 rounded-full border border-accent text-muted-foreground font-sans text-xs editorial-spacing uppercase">
          MedBridge AI — Healthcare
        </span>
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
        <div className="text-center py-16">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Document Coming Soon
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-lg mx-auto">
            The governance architecture considerations document for MedBridge AI is currently being finalized and will be published here shortly.
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Governance;
