import BenefitSection from "./BenefitSection";

import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
  return (
    <div className="mt-20" id="features">
      <h2 className="sr-only">Features</h2>

      <p className="text-center text-sm mb-10 font-semibold uppercase tracking-widest text-primary">
        Ce que tu peux faire avec Altère
      </p>
      {benefits.map((item, index) => {
        return (
          <BenefitSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        );
      })}
    </div>
  );
};

export default Benefits;
