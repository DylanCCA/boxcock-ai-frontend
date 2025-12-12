import { motion } from "framer-motion";
import { Zap, Shield, Brain, Sparkles } from "lucide-react";

const fighters = [
  {
    name: "Lightning Legs Larry",
    type: "THE SPEEDSTER",
    emoji: "⚡",
    color: "from-cluck-arena to-blue-400",
    borderColor: "border-cluck-arena",
    icon: Zap,
    stats: { speed: 10, power: 3, defense: 2 },
    special: "The Blur Peck",
    description: "50 tiny hits in 1 second!",
  },
  {
    name: "Big Bertha the Brahma",
    type: "THE TANK",
    emoji: "🛡️",
    color: "from-gray-500 to-gray-700",
    borderColor: "border-gray-400",
    icon: Shield,
    stats: { speed: 2, power: 7, defense: 10 },
    special: "Feather Fortress",
    description: "Becomes immovable!",
  },
  {
    name: "Professor Pecks-a-Lot",
    type: "THE TECHNICIAN",
    emoji: "🧠",
    color: "from-cluck-grass to-green-400",
    borderColor: "border-cluck-grass",
    icon: Brain,
    stats: { speed: 5, power: 5, defense: 5 },
    special: "Counter Cluck",
    description: "Predicts and counters!",
  },
  {
    name: "Disco Diva Hen",
    type: "THE WILDCARD",
    emoji: "✨",
    color: "from-cluck-sunset to-pink-400",
    borderColor: "border-cluck-sunset",
    icon: Sparkles,
    stats: { speed: 7, power: 6, defense: 2 },
    special: "Feather Storm",
    description: "Random chaos attack!",
  },
];

const FighterClasses = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cluck-purple/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-5xl sm:text-6xl text-gradient-gold mb-4">
            THE HATCHERY
          </h2>
          <p className="font-accent text-xl text-foreground">
            "Choose Your Champion Egg!"
          </p>
          <p className="font-body text-muted-foreground mt-2 max-w-2xl mx-auto">
            Each mystical egg contains a unique fighter class. Choose wisely - your
            destiny awaits!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fighters.map((fighter, index) => (
            <motion.div
              key={fighter.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-card rounded-2xl p-6 border-2 ${fighter.borderColor} overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${fighter.color} opacity-10`}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4 text-center"
                >
                  {fighter.emoji}
                </motion.div>

                <div className="text-center mb-4">
                  <div className="font-accent text-xs text-muted-foreground uppercase tracking-wider">
                    {fighter.type}
                  </div>
                  <h3 className="font-headline text-xl text-foreground mt-1">
                    {fighter.name}
                  </h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm text-muted-foreground">Speed</span>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < fighter.stats.speed
                              ? "bg-cluck-arena"
                              : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm text-muted-foreground">Power</span>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < fighter.stats.power
                              ? "bg-cluck-barn"
                              : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm text-muted-foreground">Defense</span>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < fighter.stats.defense
                              ? "bg-cluck-gold"
                              : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-3 text-center">
                  <div className="font-headline text-sm text-cluck-gold">
                    {fighter.special}
                  </div>
                  <div className="font-body text-xs text-muted-foreground">
                    {fighter.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FighterClasses;
