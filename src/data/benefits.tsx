import {
  FiBarChart2,
  FiAlertCircle,
  FiActivity,
  FiTrendingUp,
  FiTarget,
  FiZap,
  FiCheckCircle,
  FiEye,
  FiRepeat,
  FiLayers,
  FiCompass,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Enregistre tes entraînements simplement",
    description:
      "Note tes séances en quelques secondes. Tout est structuré automatiquement pour suivre ton évolution dans le temps.",
    bullets: [
      {
        title: "Saisie rapide",
        description:
          "Ajoute tes charges, répétitions et séries en quelques secondes par exercice.",
        icon: <FiZap size={26} />,
      },
      {
        title: "Suivi complet des exercices",
        description:
          "Tous tes mouvements sont suivis dans le temps pour analyser ta progression.",
        icon: <FiActivity size={26} />,
      },
      {
        title: "Historique structuré",
        description:
          "Retrouve et compare facilement tes performances sur plusieurs semaines.",
        icon: <FiBarChart2 size={26} />,
      },
    ],
    imageSrc: "/images/removeSet.png",
  },
  {
    title: "Comprends l’évolution de tes performances",
    description:
      "Altère organise tes séances et met en lumière ce que tes données disent vraiment sur ta progression.",
    bullets: [
      {
        title: "Détection de stagnation",
        description:
          "Repère les périodes où tes performances n’évoluent plus réellement.",
        icon: <FiAlertCircle size={26} />,
      },
      {
        title: "Lecture de progression",
        description:
          "Visualise clairement si ta force et ton volume évoluent positivement.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Analyse long terme",
        description:
          "Observe tes tendances sur 4, 8, 12 semaines pour comprendre ton évolution réelle.",
        icon: <FiLayers size={26} />,
      },
    ],
    imageSrc: "/images/removeTracking.webp",
  },
  {
    title: "Sache si ton entraînement fonctionne",
    description:
      "Altère transforme tes données en compréhension simple : progression, stagnation ou surcharge.",
    bullets: [
      {
        title: "État de progression clair",
        description:
          '"En progression", "stagnation probable" ou "charge excessive" — simple et direct.',
        icon: <FiEye size={26} />,
      },
      {
        title: "Lecture instantanée",
        description:
          "Comprends en un coup d’œil où tu en es dans ton entraînement.",
        icon: <FiCompass size={26} />,
      },
      {
        title: "Ajustements guidés",
        description:
          "Identifie facilement ce que tu dois ajuster pour progresser.",
        icon: <FiCheckCircle size={26} />,
      },
    ],
    imageSrc: "/images/trackRemove.png",
  },
];
