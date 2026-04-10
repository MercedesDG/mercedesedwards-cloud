import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

const links: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Artifacts", href: "#artifacts" },
  { label: "Prompts", href: "/prompts", isRoute: true },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const getHref = (item: NavItem) => {
    if (item.isRoute) return item.href;
    // On sub-pages, hash links should navigate to home page section
    return isHome ? item.href : `/${item.href}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-xl font-bold text-foreground">
          ME
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className="font-sans text-xs editorial-spacing uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={getHref(l)}
                className="font-sans text-xs editorial-spacing uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            )
          )}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {links.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block font-sans text-sm editorial-spacing uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={getHref(l)}
                onClick={() => setOpen(false)}
                className="block font-sans text-sm editorial-spacing uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
