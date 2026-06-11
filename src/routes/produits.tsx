import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { products, type Product } from "@/data/products";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Produits — Pharmavert" },
      { name: "description", content: "Découvrez les 4 produits phares Pharmavert : Déconat, Cumax, Nobal et Ociamag — formules naturelles pour les professionnels de santé." },
      { property: "og:title", content: "Nos Produits — Pharmavert" },
      { property: "og:description", content: "Compléments alimentaires naturels développés par Pharmavert." },
      { property: "og:url", content: "/produits" },
    ],
    links: [{ rel: "canonical", href: "/produits" }],
  }),
  component: Produits,
});

function Produits() {
  // smooth scroll to hash on load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-white border-b">
        <div className="pv-container text-center">
          <Reveal>
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-card-accent px-3 py-1 rounded-full mb-4">
              Catalogue
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5">Nos Produits</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez les 4 produits phares Pharmavert — des formules naturelles et bioactives développées pour les professionnels de santé et disponibles dans votre réseau de pharmacies partenaires.
            </p>
          </Reveal>
        </div>
      </section>

      {products.map((p, idx) => (
        <ProductSection key={p.id} product={p} reverse={idx % 2 === 1} alt={idx % 2 === 1} />
      ))}

      {/* CTA */}
      <section className="section-pad text-white" style={{ background: "linear-gradient(135deg,#2E7D32,#1B5E20)" }}>
        <div className="pv-container text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Vous souhaitez référencer nos produits ?
            </h2>
            <p className="text-white/85 mb-8">
              Contactez notre équipe commerciale pour recevoir notre catalogue complet et discuter d'un partenariat de distribution.
            </p>
            <Link to="/contact" className="btn-outline-white">
              Nous contacter <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProductSection({ product, reverse, alt }: { product: Product; reverse: boolean; alt: boolean }) {
  return (
    <section id={product.id} className={`section-pad scroll-mt-24 ${alt ? "bg-surface" : "bg-white"}`}>
      <div className="pv-container">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <Reveal>
            <div className="aspect-square bg-white rounded-2xl shadow-xl p-10 flex items-center justify-center border border-border">
              <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-primary text-primary-foreground">
                {product.category}
              </span>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-card-accent text-primary">
                {product.badge}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3">{product.name}</h2>
            <p className="text-lg text-primary font-semibold mb-6 italic">{product.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mb-7 border-l-4 border-primary pl-4">
              {product.description}
            </p>

            {product.composition && (
              <div className="grid sm:grid-cols-3 gap-3 mb-7">
                {product.composition.map((c) => (
                  <div key={c.name} className="bg-white border border-border rounded-xl p-4 border-t-[3px] border-t-primary">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                      {c.dosage}
                    </div>
                    <div className="font-extrabold text-primary mb-2">{c.name}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{c.action}</div>
                  </div>
                ))}
              </div>
            )}

            <h3 className="font-extrabold text-foreground mb-3">Bénéfices</h3>
            <ul className="space-y-2 mb-7">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-extrabold text-foreground mb-3">Ingrédients actifs</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {product.ingredients.map((i) => (
                <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-full bg-card-accent text-primary border border-primary/20">
                  {i}
                </span>
              ))}
            </div>

            <Link to="/contact" className="btn-primary btn-primary-hover">
              Demander des informations <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
