import { Linkedin, Mail, FileText } from "lucide-react";

import worldMapBg from "@/assets/world-map-bg.png";

const Footer = () => (
  <footer id="contact" className="relative py-20 md:py-28 overflow-hidden">
    <img
      src={worldMapBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-70"
      width={1920}
      height={1080}
    />
    <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
        Mercedes D. Edwards
      </h2>
      <p className="font-sans text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
        Helping organizations govern, enable, and scale with AI.
      </p>
      <div className="flex items-center justify-center gap-8 mb-16">
        <a
          href="https://www.linkedin.com/in/mercedes-edwards"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-sans text-sm editorial-spacing uppercase text-foreground hover:text-accent transition-colors"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a
          href="mailto:me@mercedesedwards.cloud"
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
        © 2026 Mercedes D. Edwards. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
