import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pharmavert" },
      {
        name: "description",
        content:
          "Contactez Pharmavert pour vos demandes de partenariat, d'information produit ou de catalogue.",
      },
      { property: "og:title", content: "Contactez Pharmavert" },
      {
        property: "og:description",
        content: "Notre équipe répond à toutes vos demandes professionnelles.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  nom: z.string().trim().min(2, "Nom requis (min. 2 caractères)").max(100),
  societe: z.string().trim().min(2, "Société requise").max(150),
  telephone: z.string().trim().min(6, "Téléphone requis").max(30),
  email: z.string().trim().email("Email invalide").max(150),
  partenariat: z.string().min(1, "Sélectionnez un type"),
  produit: z.string().optional(),
  objet: z.string().min(1, "Sélectionnez un objet"),
  message: z.string().max(2000).optional(),
});

type FormData = z.infer<typeof schema>;

const initial: FormData = {
  nom: "",
  societe: "",
  telephone: "",
  email: "",
  partenariat: "",
  produit: "",
  objet: "",
  message: "",
};

function Contact() {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);

  const set =
    (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [k]: e.target.value }));
      setErrors((er) => ({ ...er, [k]: undefined }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      for (const issue of r.error.issues) {
        errs[issue.path[0] as keyof FormData] = issue.message;
      }
      setErrors(errs);
      toast.error("Veuillez corriger les erreurs du formulaire");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success(
        "Votre message a bien été envoyé. Notre équipe vous contactera dans les meilleurs délais.",
      );
      setData(initial);
      setLoading(false);
    }, 600);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="py-24 text-white"
        style={{ background: "linear-gradient(135deg,#2E7D32,#1B5E20)" }}
      >
        <div className="pv-container max-w-3xl">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5">Contactez-Nous</h1>
            <p className="text-lg text-white/85">
              Notre équipe est disponible pour répondre à vos demandes de partenariat, d'information
              produit ou de catalogue.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="pv-container grid lg:grid-cols-[1fr_1.3fr] gap-12">
          {/* Coordonnées */}
          <Reveal>
            <h2 className="text-2xl font-extrabold mb-7">Coordonnées</h2>
            <div className="space-y-5 mb-7">
              <ContactItem icon={MapPin} title="Adresse" value="Maroc" />
              <ContactItem icon={Phone} title="Téléphone" value="À compléter" />
              <ContactItem
                icon={Mail}
                title="Email"
                value="contact@pharmavert.ma"
                href="mailto:contact@pharmavert.ma"
              />
              <ContactItem
                icon={Instagram}
                title="Instagram"
                value="@pharmavert"
                href="https://www.instagram.com/pharmavert/"
                external
              />
            </div>
            <div className="bg-card-accent border-l-4 border-primary p-5 rounded-r-xl">
              <p className="text-sm text-foreground/85">
                Notre équipe traite toutes les demandes de partenariat, d'information produit et de
                catalogue dans les meilleurs délais.
              </p>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={0.05}>
            <div className="bg-surface rounded-2xl p-7 sm:p-10 border border-border">
              <h2 className="text-2xl font-extrabold mb-7">Laissez-nous un message</h2>
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Nom complet *"
                    name="nom"
                    value={data.nom}
                    onChange={set("nom")}
                    error={errors.nom}
                  />
                  <Field
                    label="Société *"
                    name="societe"
                    value={data.societe}
                    onChange={set("societe")}
                    error={errors.societe}
                  />
                  <Field
                    label="Téléphone *"
                    name="telephone"
                    type="tel"
                    value={data.telephone}
                    onChange={set("telephone")}
                    error={errors.telephone}
                  />
                  <Field
                    label="Email *"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={set("email")}
                    error={errors.email}
                  />
                </div>
                <SelectField
                  label="Type de partenariat *"
                  name="partenariat"
                  value={data.partenariat}
                  onChange={set("partenariat")}
                  error={errors.partenariat}
                  options={["Pharmacie", "Grossiste", "Médecin", "Distributeur", "Autre"]}
                />
                <SelectField
                  label="Produit concerné"
                  name="produit"
                  value={data.produit ?? ""}
                  onChange={set("produit")}
                  error={errors.produit}
                  options={[
                    "Déconat",
                    "Cumax Gélule",
                    "Nobal",
                    "Ociamag 375mg",
                    "Plusieurs produits",
                    "Autre",
                  ]}
                />
                <SelectField
                  label="Objet de la demande *"
                  name="objet"
                  value={data.objet}
                  onChange={set("objet")}
                  error={errors.objet}
                  options={[
                    "Demande de partenariat",
                    "Information produit",
                    "Demande de catalogue",
                    "Autre",
                  ]}
                />
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={data.message ?? ""}
                    onChange={set("message")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Détaillez votre demande..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary btn-primary-hover w-full disabled:opacity-60"
                >
                  {loading ? (
                    "Envoi..."
                  ) : (
                    <>
                      Envoyer ma demande <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex gap-4 items-start">
      <div className="p-3 rounded-xl bg-card-accent text-primary shrink-0">
        <Icon size={22} />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
        <div className="font-bold text-foreground break-words">{value}</div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block hover:opacity-80 transition"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-bold mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  options: string[];
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-bold mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border-destructive" : "border-border"
        }`}
      >
        <option value="">— Sélectionnez —</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
