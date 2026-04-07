import { Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="py-20 md:py-28">
    <div className="container max-w-4xl mx-auto px-6 text-center">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
        Mercedes D. Edwards
      </h2>
      <p className="font-sans text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
        Helping enterprises integrate AI into complex systems.
      </p>
      <div className="flex items-center justify-center gap-8 mb-16">
        <a
          href="#"
          className="flex items-center gap-2 font-sans text-sm editorial-spacing uppercase text-foreground hover:text-accent transition-colors"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a
          href="#"
          className="flex items-center gap-2 font-sans text-sm editorial-spacing uppercase text-foreground hover:text-accent transition-colors"
        >
          <Mail className="w-4 h-4" /> Email
        </a>
        <a
          href="#"
          className="flex items-center gap-2 font-sans text-sm editorial-spacing uppercase text-foreground hover:text-accent transition-colors"
        >
          <FileText className="w-4 h-4" /> Resume
        </a>
      </div>
      <div className="section-divider mb-8" />
      <p className="font-sans text-xs text-muted-foreground">
        © 2025 Mercedes D. Edwards. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
