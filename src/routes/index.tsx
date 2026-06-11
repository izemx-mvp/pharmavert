import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronDown,
  Package,
  Users,
  Leaf,
  Award,
  Store,
  Truck,
  Stethoscope,
  Handshake,
  TrendingUp,
  Network,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pharmavert — Votre Partenaire Santé & Bien-Être au Maroc" },
      {
        name: "description",
        content:
          "Pharmavert développe et distribue ses propres marques de compléments alimentaires et cosmétiques auprès des pharmacies, grossistes et médecins au Maroc.",
      },
      { property: "og:title", content: "Pharmavert — Santé & Bien-Être" },
      {
        property: "og:description",
        content:
          "Marques propres de compléments alimentaires et cosmétiques distribuées dans tout le Maroc.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[100vh] flex items-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,40,15,0.72)" }} />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><path d='M30 10v40M10 30h40' stroke='white' stroke-width='2'/></svg>\")",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pv-container relative z-10 py-32">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-bold tracking-wider uppercase mb-6">
              <Leaf size={14} /> Promotion & Distribution · Maroc
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Votre Partenaire en Produits de Santé & Bien-Être
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base sm:text-lg text-white/85 mb-9 leading-relaxed">
              Pharmavert développe et distribue ses propres marques de compléments alimentaires et
              produits cosmétiques auprès des pharmacies, grossistes, médecins et partenaires
              professionnels à travers le Maroc.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/produits" className="btn-primary btn-primary-hover">
                Découvrir nos produits <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Nous contacter
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/90">
              {["Marques Propres", "Réseau Professionnel National", "4 Produits Phares"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-accent" /> {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/80">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="py-14 bg-white border-b">
        <div className="pv-container grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Package, num: "4", label: "Produits Phares" },
            { icon: Users, num: "4+", label: "Types de Partenaires" },
            { icon: Award, num: "100%", label: "Marques Propres" },
            { icon: Network, num: "Maroc", label: "Présence Nationale" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="text-center">
              <s.icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent">
                {s.num}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUITS PHARES */}
      <section className="section-pad bg-white">
        <div className="pv-container">
          <SectionHeader
            eyebrow="Catalogue"
            title="Nos Produits Phares"
            subtitle="Des formules naturelles et bioactives développées par Pharmavert pour les professionnels de santé"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <a
                  href={`/produits#${p.id}`}
                  className="group block bg-white border-t-[3px] border-primary rounded-xl shadow-[0_4px_18px_-12px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-20px_rgba(46,125,50,0.4)] transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="grid sm:grid-cols-[200px_1fr] gap-4 p-5 items-center">
                    <div className="aspect-square bg-white rounded-lg p-3 flex items-center justify-center">
                      <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-extrabold mb-1">{p.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{p.tagline}</p>
                      <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-card-accent text-primary mb-4">
                        {p.category}
                      </span>
                      <div className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Voir le produit <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <Link to="/produits" className="btn-primary btn-primary-hover">
              Voir tous les produits <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PRÉSENTATION GÉNÉRALE */}
      <section className="section-pad bg-surface">
        <div className="pv-container grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div className="text-xs font-bold tracking-[0.18em] uppercase text-primary mb-4">
              À Propos
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Une expertise marocaine au service des professionnels de santé
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Pharmavert est une société marocaine spécialisée dans la promotion et la
              commercialisation de compléments alimentaires et produits cosmétiques. À travers son
              réseau structuré de pharmacies, grossistes, médecins et distributeurs, Pharmavert
              développe et promeut ses propres marques, alliant innovation, qualité et proximité
              avec le marché marocain.
            </p>
            <Link to="/societe" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
              En savoir plus sur Pharmavert <ArrowRight size={18} />
            </Link>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Package, t: "Marques Propres", d: "Des produits développés et promus sous les marques Pharmavert" },
              { icon: Users, t: "Réseau Professionnel", d: "Pharmacies, grossistes, médecins, distributeurs et partenaires" },
              { icon: Leaf, t: "Formules Naturelles", d: "Bioactifs naturels rigoureusement sélectionnés" },
              { icon: Award, t: "Efficacité Prouvée", d: "Des produits recommandés par les professionnels de santé" },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 0.05}>
                <div className="bg-white p-6 rounded-xl border-t-[3px] border-primary h-full shadow-sm hover:shadow-md transition">
                  <b.icon className="text-primary mb-3" size={26} />
                  <h3 className="font-bold mb-2">{b.t}</h3>
                  <p className="text-sm text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSEAU PARTENAIRES */}
      <section
        className="section-pad text-white"
        style={{ background: "linear-gradient(135deg,#2E7D32,#1B5E20)" }}
      >
        <div className="pv-container">
          <SectionHeader
            eyebrow="Réseau"
            title="Notre Réseau de Partenaires"
            subtitle="Une distribution structurée à travers tout le territoire marocain"
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Store, t: "Pharmacies", d: "Distribution en officine de nos gammes alimentaires et cosmétiques" },
              { icon: Truck, t: "Grossistes", d: "Distribution à grande échelle sur tout le territoire marocain" },
              { icon: Stethoscope, t: "Médecins", d: "Prescription et recommandation par les professionnels de santé" },
              { icon: Handshake, t: "Distributeurs", d: "Partenaires distributeurs pour une couverture nationale" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <div className="bg-white/[0.08] backdrop-blur border border-white/15 rounded-xl p-7 h-full flex flex-col">
                  <c.icon size={32} className="mb-4" />
                  <h3 className="text-xl font-extrabold mb-2">{c.t}</h3>
                  <p className="text-sm text-white/80 mb-6 flex-1">{c.d}</p>
                  <Link to="/contact" className="btn-outline-white text-sm">
                    Devenir partenaire
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="section-pad" style={{ backgroundColor: "#E8F5E9" }}>
        <div className="pv-container">
          <SectionHeader eyebrow="Engagement" title="Notre Engagement" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, t: "Qualité Garantie", d: "Des formulations rigoureuses conformes aux standards du marché marocain et international" },
              { icon: Network, t: "Distribution Professionnelle", d: "Un réseau étendu de pharmacies, grossistes et médecins partenaires" },
              { icon: TrendingUp, t: "Innovation Continue", d: "Des marques propres en développement constant pour répondre aux besoins du marché" },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 0.05}>
                <div className="bg-white p-7 rounded-xl border-t-[3px] border-primary h-full">
                  <div className="inline-flex p-3 rounded-lg bg-card-accent text-primary mb-4">
                    <b.icon size={26} />
                  </div>
                  <h3 className="text-lg font-extrabold mb-2">{b.t}</h3>
                  <p className="text-sm text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad bg-white">
        <div className="pv-container">
          <Reveal>
            <div className="rounded-2xl border-2 border-primary/15 bg-gradient-to-br from-surface to-white p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                Vous souhaitez distribuer nos produits ?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-7">
                Notre équipe commerciale est disponible pour vous présenter notre catalogue et
                discuter d'un partenariat.
              </p>
              <Link to="/contact" className="btn-primary btn-primary-hover">
                Nous contacter <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
