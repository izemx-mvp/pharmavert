import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/societe", label: "Société" },
  { to: "/produits", label: "Produits" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] bg-white transition-shadow ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="pv-container flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Pharmavert" className="h-11 w-auto" />
          <span className="font-extrabold text-xl tracking-tight text-primary hidden sm:inline">
            Pharmavert
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative text-[15px] font-semibold text-foreground/80 hover:text-primary transition-colors py-2 data-[status=active]:text-primary data-[status=active]:after:content-[''] data-[status=active]:after:absolute data-[status=active]:after:left-0 data-[status=active]:after:right-0 data-[status=active]:after:-bottom-1 data-[status=active]:after:h-[3px] data-[status=active]:after:bg-primary data-[status=active]:after:rounded-full"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary btn-primary-hover text-sm">
            Devenir Partenaire
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white shadow-lg">
          <div className="pv-container py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="px-3 py-3 rounded-md font-semibold text-foreground/85 hover:bg-surface data-[status=active]:text-primary data-[status=active]:bg-surface"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary btn-primary-hover mt-3"
            >
              Devenir Partenaire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
