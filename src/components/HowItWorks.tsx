import { motion } from "framer-motion";
import { Egg, Dumbbell, Swords, Trophy } from "lucide-react";

const steps = [
  {
    icon: Egg,
    title: "Hatch Your Champion",
    description:
      "Choose your fighter from the mystical eggs in The Hatchery. Each contains a unique chicken warrior!",
    emoji: "🥚",
    color: "bg-cluck-gold",
  },
  {
    icon: Dumbbell,
    title: "Train at The Scratch Pad",
    description:
      "Play mini-games to boost your stats! Peck targets, lift seeds, dodge farmers, and master combos!",
    emoji: "💪",
    color: "bg-cluck-arena",
  },
  {
    icon: Swords,
    title: "Enter The Cluckdown",
    description:
      "Face opponents in epic boxing matches! Watch the force meters fly as feathers get ruffled!",
    emoji: "🥊",
    color: "bg-cluck-barn",
  },
  {
    icon: Trophy,
    title: "Claim Glory",
    description:
      "Rise through The Pecking Order! Earn Cluck Coins, unlock gear, and become the Supreme Chicken Champion!",
    emoji: "🏆",
    color: "bg-cluck-sunset",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cluck-barn/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-5xl sm:text-6xl text-gradient-gold mb-4">
            HOW IT WORKS
          </h2>
          <p className="font-accent text-xl text-foreground">
            "Your Journey to Glory!"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-2xl p-6 border border-border/50 h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center text-2xl`}
                  >
                    {step.emoji}
                  </motion.div>
                  <div className="font-stats text-4xl text-muted-foreground/30">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3 className="font-headline text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl text-muted-foreground"
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
