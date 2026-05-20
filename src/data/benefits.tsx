import {
  FiBarChart2,
  FiAlertCircle,
  FiActivity,
  FiMessageSquare,
  FiTrendingUp,
  FiTarget,
  FiZap,
  FiCheckCircle,
  FiEye,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Tracking simple et rapide",
    description:
      "Note tes séances en quelques secondes. Charges, reps, séries — tout est enregistré et prêt à être analysé sur le long terme.",
    bullets: [
      {
        title: "Saisie ultra-rapide",
        description:
          "Entre tes performances en moins de 10 secondes par exercice.",
        icon: <FiZap size={26} />,
      },
      {
        title: "Tous tes exercices",
        description:
          "Squat, dévelé couché, tractions, isolation — chaque mouvement est suivi.",
        icon: <FiActivity size={26} />,
      },
      {
        title: "Historique complet",
        description:
          "Retrouve n'importe quelle séance passée et vois ta courbe d'évolution.",
        icon: <FiBarChart2 size={26} />,
      },
    ],
    imageSrc: "/images/removeSet.png",
  },
  {
    title: "Analyse de progression réelle",
    description:
      "Finis les doutes. Atlas lit tes données sur plusieurs semaines et te dit objectivement si tu progresses ou si tu stagnes sans le voir.",
    bullets: [
      {
        title: "Détection de stagnation",
        description:
          "L'app identifie automatiquement les périodes sans progression significative.",
        icon: <FiAlertCircle size={26} />,
      },
      {
        title: "Lecture du volume utile",
        description:
          "Sais si tu fais trop, pas assez, ou exactement ce qu'il faut pour progresser.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Tendance long terme",
        description:
          "Visualise ta progression réelle sur 4, 8, 12 semaines et plus.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/removeTracking.webp",
  },
  {
    title: "Feedback intelligent",
    description:
      "Plus besoin d'interpréter des graphiques compliqués. Atlas te donne un verdict clair et actionnable après chaque période d'analyse.",
    bullets: [
      {
        title: "Verdict clair",
        description:
          '"Tu progresses", "stagnation probable" ou "volume trop élevé" — sans jargon.',
        icon: <FiMessageSquare size={26} />,
      },
      {
        title: "Lecture visuelle simple",
        description:
          "Des indicateurs colorés pour comprendre ta situation en un coup d'œil.",
        icon: <FiEye size={26} />,
      },
      {
        title: "Actions concrètes",
        description:
          "Chaque feedback est accompagné de pistes pour corriger ou maintenir ta trajectoire.",
        icon: <FiCheckCircle size={26} />,
      },
    ],
    imageSrc: "/images/trackRemove.png",
  },
];
