import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Gratuit",
    price: 0,
    features: [
      "Tracking illimité (charges, reps, séries)",
      "Historique des 30 derniers jours",
      "Résumé hebdomadaire simple",
      "Jusqu'à 5 exercices suivis",
    ],
  },
  {
    name: "Pro",
    price: 6.99,
    features: [
      "Tracking illimité tous exercices",
      "Analyse de progression réelle",
      "Détection automatique de stagnation",
      "Lecture du volume utile",
      "Historique complet",
      "Feedback intelligent hebdomadaire",
    ],
  },
  {
    name: "Annuel",
    price: 49.99,
    features: [
      "Tout le plan Pro",
      "2 mois offerts",
      "Accès anticipé aux nouvelles fonctions",
      "Support prioritaire",
    ],
  },
];
