import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "80%",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description:
      "Des pratiquants sérieux stagnent au moins une fois sur 3 mois sans s'en rendre compte.",
  },
  {
    title: "#1",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description:
      "Problème cité par les pratiquants intermédiaires : ne pas savoir si on progresse vraiment.",
  },
  {
    title: "0",
    icon: <PiGlobeFill size={34} className="text-primary" />,
    description:
      "Application existante ne te dit clairement si tu progresses ou si tu stagnes. Jusqu'ici.",
  },
];
