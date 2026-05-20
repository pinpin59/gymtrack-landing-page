import { motion } from "framer-motion";

import { IBenefitBullet } from "@/types";
import { childVariants } from "./BenefitSection";

const BenefitBullet: React.FC<IBenefitBullet> = ({
  title,
  description,
  icon,
}: IBenefitBullet) => {
  return (
    <motion.div
      className="flex flex-row items-start mt-5 gap-4"
      variants={childVariants}
    >
      <div className="flex-shrink-0 mt-0.5 text-primary">{icon}</div>
      <div>
        <h4 className="text-sm sm:text-base font-semibold">{title}</h4>
        <p className="text-xs sm:text-sm text-foreground-accent mt-0.5">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitBullet;
