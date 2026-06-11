import { Link } from "@tanstack/react-router";
import { Mail, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-primary mt-8">
      <div className="pv-container pt-14 pb-8">
        <div className="flex items-center gap-3 mb-3">
          <img src={logo} alt="Pharmavert" className="h-10 w-auto" />
          <span className="font-extrabold text-xl text-primary">Pharmavert</span>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Promotion & Distribution de Compléments Alimentaires & Produits Cosmétiques au Maroc
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <FooterCol title="Navigation">
            <FooterLink to="/">Accueil</FooterLink>
            <FooterLink to="/societe">Société</FooterLink>
            <FooterLink to="/produits">Produits</FooterLink>
            <FooterLink to="/partenaires">Partenaires</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterCol>
          <FooterCol title="Produits">
            <FooterAnchor href="/produits#deconat">Déconat</FooterAnchor>
            <FooterAnchor href="/produits#cumax">Cumax Gélule</FooterAnchor>
            <FooterAnchor href="/produits#nobal">Nobal</FooterAnchor>
            <FooterAnchor href="/produits#ociamag">Ociamag 375mg</FooterAnchor>
          </FooterCol>
          <FooterCol title="Partenaires">
            <span className="text-muted-foreground">Pharmacies</span>
            <span className="text-muted-foreground">Grossistes</span>
            <span className="text-muted-foreground">Médecins</span>
            <span className="text-muted-foreground">Distributeurs</span>
          </FooterCol>
          <FooterCol title="Contact">
            <span className="text-muted-foreground flex items-center gap-2"><Mail size={16}/> contact@pharmavert.ma</span>
            <a href="https://www.instagram.com/pharmavert/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center gap-2"><Instagram size={16}/> @pharmavert</a>
            <span className="text-muted-foreground flex items-center gap-2"><MapPin size={16}/> Maroc</span>
          </FooterCol>
        </div>

        <div className="pt-6 border-t text-sm text-muted-foreground text-center">
          © 2025 Pharmavert — Tous droits réservés · Maroc
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-bold text-foreground mb-4">{title}</h4>
      <div className="flex flex-col gap-2 text-sm">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-muted-foreground hover:text-primary transition-colors">
      {children}
    </Link>
  );
}

function FooterAnchor({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
      {children}
    </a>
  );
}
