import deconat from "@/assets/Deconat-product.png";
import cumax from "@/assets/Cumax-product.png";
import nobal from "@/assets/Nobal-product.png";
import ociamag from "@/assets/Ociamag-product.png";

export type Product = {
  id: "deconat" | "cumax" | "nobal" | "ociamag";
  name: string;
  image: string;
  tagline: string;
  badge: string;
  category: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  composition?: { name: string; dosage: string; action: string }[];
};

export const products: Product[] = [
  {
    id: "deconat",
    name: "Déconat",
    image: deconat,
    tagline: "Myorelaxant & Antalgique naturel",
    badge: "Myorelaxant & Antalgique",
    category: "Complément Alimentaire",
    description:
      "Déconat est une formule naturelle associant des bioactifs myorelaxants et antalgiques soigneusement sélectionnés pour soulager les douleurs et contractures musculaires. À base de Valériane, Camomille, Passiflore et Mélisse, Déconat agit en profondeur pour un confort musculaire durable.",
    benefits: [
      "Soulage les contractures musculaires douloureuses",
      "Réduit les tensions musculaires liées au stress et à l'effort physique",
      "Combat les douleurs musculaires passagères ou chroniques",
      "Efficace, rapide, durable et sans effets indésirables",
    ],
    ingredients: ["Valériane", "Camomille", "Passiflore", "Mélisse"],
  },
  {
    id: "cumax",
    name: "Cumax Gélule",
    image: cumax,
    tagline: "Anti-inflammatoire naturel & protection articulaire",
    badge: "Anti-inflammatoire Naturel",
    category: "Complément Alimentaire",
    description:
      "Cumax Gélule est une formule avancée combinant une synergie d'actifs naturels pour soulager rapidement les douleurs articulaires et musculaires. Son action anti-inflammatoire puissante en fait une alternative naturelle aux anti-inflammatoires classiques, avec un meilleur profil de tolérance.",
    benefits: [
      "Soulage rapidement les douleurs articulaires et musculaires",
      "Réduit l'inflammation chronique (arthrose, rhumatisme)",
      "Protège les articulations et le cartilage",
      "Améliore la mobilité articulaire",
      "Effet antioxydant — neutralise les radicaux libres responsables du stress oxydatif",
      "Action similaire aux anti-inflammatoires classiques avec meilleur profil de tolérance",
    ],
    ingredients: ["Curcumine", "Harpagophytum", "Bambou"],
  },
  {
    id: "nobal",
    name: "Nobal",
    image: nobal,
    tagline: "Votre allié contre les ballonnements",
    badge: "Confort Digestif",
    category: "Complément Alimentaire",
    description:
      "Nobal est un complexe bioactif unique associant Charbon Activé, Extrait Sec de Fenouil et Extrait Sec de Carvi pour combattre efficacement les ballonnements, gaz et inconforts digestifs. Une formule 100% naturelle pour une digestion légère au quotidien.",
    benefits: ["Ventre plus plat", "Digestion plus légère", "Meilleur confort au quotidien"],
    ingredients: ["Charbon Activé", "Fenouil", "Carvi"],
    composition: [
      {
        name: "Charbon Activé",
        dosage: "180mg",
        action: "Absorbe les gaz intestinaux · Aide à réduire les ballonnements",
      },
      {
        name: "E.S de Fenouil",
        dosage: "60mg",
        action: "Favorise la digestion · Apaise les spasmes intestinaux",
      },
      {
        name: "E.S de Carvi",
        dosage: "60mg",
        action: "Soutient la fonction digestive · Limite la formation des gaz",
      },
    ],
  },
  {
    id: "ociamag",
    name: "Ociamag 375mg",
    image: ociamag,
    tagline: "La puissance du magnésium marin 375mg",
    badge: "Magnésium Marin",
    category: "Complément Alimentaire",
    description:
      "Ociamag 375mg est une formule premium à base de magnésium marin naturel, dosé à 375mg par prise pour une efficacité optimale. Le magnésium contribue à réduire la fatigue, soutenir le système nerveux, et maintenir une fonction musculaire normale. Une solution naturelle et hautement biodisponible pour un bien-être quotidien.",
    benefits: [
      "Réduit la fatigue et l'épuisement",
      "Contribue au fonctionnement normal du système nerveux",
      "Soutient la fonction musculaire normale",
      "Hautement biodisponible — magnésium marin naturel",
      "Dosage optimal de 375mg par prise",
    ],
    ingredients: ["Magnésium Marin", "375mg"],
  },
];
