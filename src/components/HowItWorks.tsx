import { FiEdit3, FiBarChart2, FiMessageCircle } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: <FiEdit3 size={28} className="text-primary" />,
    title: "Tu enregistres ta séance",
    description:
      "Charges, reps, séries — saisi en quelques secondes. Pas de friction, pas de formulaires compliqués. Juste l'essentiel.",
  },
  {
    number: "02",
    icon: <FiBarChart2 size={28} className="text-primary" />,
    title: "Atlas analyse tes données",
    description:
      "L'app compare tes performances semaine après semaine, détecte les tendances et lit ton volume réel sur le long terme.",
  },
  {
    number: "03",
    icon: <FiMessageCircle size={28} className="text-primary" />,
    title: "Tu reçois un verdict clair",
    description:
      '"Tu progresses", "stagnation probable" ou "volume trop élevé". Pas de graphiques à interpréter — juste la réponse.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 px-5 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Comment ça marche
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
          De la séance au verdict en 3 étapes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Ligne connectrice sur desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 z-0" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-4">
                {step.icon}
              </div>
              <span className="text-xs font-bold text-primary tracking-widest mb-2">
                ÉTAPE {step.number}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
