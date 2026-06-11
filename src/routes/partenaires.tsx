import { createFileRoute, Link } from "@tanstack/react-router";
import { Store, Truck, Stethoscope, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import partenairesBg from "@/assets/partenaires-bg.png";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Partenaires — Pharmavert" },
      { name: "description", content: "Pharmavert s'appuie sur un réseau de pharmacies, grossistes, médecins et distributeurs pour commercialiser ses gammes au Maroc." },
      { property: "og:title", content: "Nos Partenaires Professionnels" },
      { property: "og:description", content: "Rejoignez le réseau partenarial Pharmavert." },
      { property: "og:url", content: "/partenaires" },
    ],
    links: [{ rel: "canonical", href: "/partenaires" }],
  }),
  component: Partenaires,
});

const partners = [
  {
    icon: Store,
    title: "Pharmacies",
    desc: "Nos pharmacies partenaires référencent et vendent les produits Pharmavert en officine.",
    bullets: ["Accès au catalogue complet", "Support marketing et promotion", "Livraison et suivi personnalisé"],
  },
  {
    icon: Truck,
    title: "Grossistes",
    desc: "Nos partenaires grossistes assurent la distribution à grande échelle sur tout le territoire.",
    bullets: ["Conditions commerciales avantageuses", "Large gamme disponible", "Partenariat durable et structuré"],
  },
  {
    icon: Stethoscope,
    title: "Médecins",
    desc: "Pharmavert collabore avec des médecins pour la prescription et recommandation de ses produits.",
    bullets: ["Produits cliniquement pertinents", "Documentation scientifique", "Accompagnement professionnel"],
  },
  {
    icon: Handshake,
    title: "Distributeurs",
    desc: "Nos distributeurs étendent la présence de Pharmavert sur des zones géographiques ciblées.",
    bullets: ["Exclusivité territoriale possible", "Support logistique", "Gamme à forte valeur ajoutée"],
  },
];

function Partenaires() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative py-24 text-white"
        style={{ background: "linear-gradient(135deg,#2E7D32,#1B5E20)" }}
      >
        <div className="pv-container relative z-10 max-w-3xl">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5">
              Nos Partenaires Professionnels
            </h1>
            <p className="text-lg text-white/85">
              Pharmavert s'appuie sur un réseau solide de pharmacies, grossistes, médecins et distributeurs pour commercialiser ses gammes de produits.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS LIST */}
      {partners.map((p, i) => (
        <section key={p.title} className={`section-pad ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}>
          <div className="pv-container">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                  <img src={partenairesBg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-primary-dark/85" />
                  <div className="relative h-full flex items-center justify-center">
                    <div className="bg-white/15 backdrop-blur p-10 rounded-2xl border border-white/20">
                      <p.icon size={88} className="text-white" />
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                  Partenaire {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{p.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start">
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline-green">
                  Devenir partenaire <ArrowRight size={18} />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-pad text-white" style={{ background: "linear-gradient(135deg,#2E7D32,#1B5E20)" }}>
        <div className="pv-container text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Rejoignez le réseau Pharmavert</h2>
            <p className="text-white/85 mb-8">
              Remplissez notre formulaire pour soumettre votre demande de partenariat. Notre équipe vous contactera dans les meilleurs délais.
            </p>
            <Link to="/contact" className="btn-outline-white">
              Soumettre ma demande <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
