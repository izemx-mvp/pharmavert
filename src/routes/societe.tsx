import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Leaf, Sparkles, Store, BarChart2, Shield, Heart, Globe } from "lucide-react";
import aboutImg from "@/assets/about-team.png";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/societe")({
  head: () => ({
    meta: [
      { title: "Société — Pharmavert" },
      { name: "description", content: "Pharmavert : société marocaine de promotion et distribution de compléments alimentaires et cosmétiques à marques propres." },
      { property: "og:title", content: "À Propos de Pharmavert" },
      { property: "og:description", content: "Découvrez la mission, la vision et les valeurs de Pharmavert au Maroc." },
      { property: "og:url", content: "/societe" },
    ],
    links: [{ rel: "canonical", href: "/societe" }],
  }),
  component: Societe,
});

function Societe() {
  return (
    <>
      {/* HERO */}
      <section className="py-20" style={{ background: "linear-gradient(135deg,#F4FAF4,#E8F5E9)" }}>
        <div className="pv-container">
          <Reveal>
            <nav className="text-sm text-muted-foreground flex items-center gap-1 mb-6">
              <Link to="/" className="hover:text-primary">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-primary font-semibold">Société</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              À Propos de Pharmavert
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Promotion & Distribution de Compléments Alimentaires & Produits Cosmétiques au Maroc
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="section-pad bg-white">
        <div className="pv-container grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={aboutImg} alt="Équipe Pharmavert" className="rounded-2xl shadow-xl w-full" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Présentation</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Une vitrine professionnelle pour des marques propres marocaines
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pharmavert est une société marocaine spécialisée dans la promotion et la commercialisation de produits alimentaires et cosmétiques. L'entreprise dispose de ses propres marques de produits et s'appuie sur un réseau structuré de pharmacies, grossistes, médecins et distributeurs pour assurer leur commercialisation à l'échelle nationale. Pharmavert ambitionne de renforcer sa présence digitale à travers le site pharmavert.ma, vitrine professionnelle de ses marques et catalogue produits.
            </p>
          </Reveal>
        </div>

        <div className="pv-container mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {["4 Produits Phares", "Marques Propres", "Réseau National", "Présence Digitale"].map((m, i) => (
            <Reveal key={m} delay={i * 0.05}>
              <div className="bg-surface border-t-[3px] border-primary rounded-xl p-6 text-center">
                <div className="text-base md:text-lg font-extrabold text-primary">{m}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section-pad bg-white border-t">
        <div className="pv-container grid md:grid-cols-2 gap-8">
          {[
            { t: "Notre Mission", d: "Développer et promouvoir des compléments alimentaires et produits cosmétiques de qualité, distribués efficacement auprès des professionnels de santé et partenaires du secteur pharmaceutique marocain." },
            { t: "Notre Vision", d: "Devenir la référence marocaine en promotion et distribution de produits alimentaires et cosmétiques à marques propres, en renforçant notre réseau partenarial et notre visibilité digitale." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div className="h-full bg-surface rounded-2xl p-10 border-l-[5px] border-primary">
                <h3 className="text-2xl font-extrabold mb-4 text-primary">{c.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section-pad text-white" style={{ background: "linear-gradient(135deg,#2E7D32,#1B5E20)" }}>
        <div className="pv-container">
          <SectionHeader eyebrow="Expertise" title="Nos Domaines d'Expertise" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, t: "Compléments Alimentaires", d: "Bioactifs naturels, nutraceutiques et produits de santé" },
              { icon: Sparkles, t: "Produits Cosmétiques", d: "Soins et cosmétiques pour les professionnels de santé" },
              { icon: Store, t: "Réseau Pharmacies", d: "Distribution en officine à travers le Maroc" },
              { icon: BarChart2, t: "Promotion Professionnelle", d: "Promotion active auprès des médecins, grossistes et distributeurs" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <div className="bg-white text-foreground rounded-xl p-7 h-full border-t-[3px] border-accent">
                  <c.icon size={28} className="text-primary mb-3" />
                  <h3 className="font-extrabold mb-2">{c.t}</h3>
                  <p className="text-sm text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="section-pad" style={{ backgroundColor: "#E8F5E9" }}>
        <div className="pv-container">
          <SectionHeader eyebrow="Valeurs" title="Nos Valeurs" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, t: "Qualité", d: "Des produits rigoureusement formulés et contrôlés" },
              { icon: Heart, t: "Proximité", d: "Un accompagnement personnalisé de chaque partenaire" },
              { icon: Globe, t: "Ambition", d: "Une vision nationale avec des standards internationaux" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-8 text-center h-full border-t-[3px] border-primary">
                  <div className="inline-flex p-4 rounded-full bg-card-accent text-primary mb-4">
                    <c.icon size={28} />
                  </div>
                  <h3 className="text-xl font-extrabold mb-2">{c.t}</h3>
                  <p className="text-sm text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
