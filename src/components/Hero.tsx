import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Play, ClipboardList, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import heroArena from "@/assets/hero-arena.png";

const API_URL = import.meta.env.VITE_API_URL || "https://app-eqoyjidz.fly.dev";

interface Stats {
  total_trainers: number;
  total_fighters: number;
  total_matches: number;
  total_tournaments: number;
  total_cluck_coins: number;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
  return `${num}+`;
};

const Hero = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Failed to fetch stats:", err));
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroArena})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-cluck-gold/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cluck-arena/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mb-6"
          >
            <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-gold drop-shadow-lg">
              BOXCOCK.AI
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-accent text-xl sm:text-2xl md:text-3xl text-foreground mb-4"
          >
            "Where Feathers Fly and Champions Rise!"
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            The world's first digital chicken boxing league. Train your champion,
            battle opponents, rise through The Pecking Order. No feathers harmed,
            all glory earned!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cluck-gold via-cluck-sunset to-cluck-gold text-primary-foreground font-headline text-xl px-8 py-6 shadow-neon animate-pulse-glow border-4 border-foreground cursor-pointer"
                onClick={() => scrollToSection("hatchery")}
              >
                <Zap className="mr-2" />
                ENTER THE COOP
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cluck-arena text-cluck-arena hover:bg-cluck-arena hover:text-foreground font-headline text-lg px-6 py-5 cursor-pointer"
                onClick={() => scrollToSection("how-it-works")}
              >
                <Play className="mr-2" />
                Watch Trailer
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cluck-barn text-cluck-barn hover:bg-cluck-barn hover:text-foreground font-headline text-lg px-6 py-5 cursor-pointer"
                onClick={() => scrollToSection("leaderboard")}
              >
                <ClipboardList className="mr-2" />
                Leaderboard
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex justify-center gap-8"
          >
            <div className="text-center">
              <div className="font-stats text-3xl text-cluck-gold">
                {stats ? formatNumber(stats.total_trainers) : "10K+"}
              </div>
              <div className="font-body text-sm text-muted-foreground">Trainers</div>
            </div>
            <div className="text-center">
              <div className="font-stats text-3xl text-cluck-arena">
                {stats ? formatNumber(stats.total_matches) : "50K+"}
              </div>
              <div className="font-body text-sm text-muted-foreground">Fights</div>
            </div>
            <div className="text-center">
              <div className="font-stats text-3xl text-cluck-sunset">
                {stats ? formatNumber(stats.total_cluck_coins) : "1M+"}
              </div>
              <div className="font-body text-sm text-muted-foreground">Cluck Coins</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex justify-center gap-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center"
          >
            <div className="text-6xl mb-2">🐓</div>
            <div className="font-headline text-lg text-cluck-gold">Rocky Rooster</div>
            <div className="font-body text-sm text-muted-foreground">"The Undisputed Champ"</div>
          </motion.div>
          <div className="font-headline text-4xl text-cluck-barn self-center">VS</div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="text-center"
          >
            <div className="text-6xl mb-2">🐔</div>
            <div className="font-headline text-lg text-cluck-arena">Apollo Pollo</div>
            <div className="font-body text-sm text-muted-foreground">"The Rising Star"</div>
          </motion.div>
        </motion.div>

        {/* Scroll to explore indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer"
          onClick={() => scrollToSection("hatchery")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <p className="font-body text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <ChevronDown className="w-6 h-6 text-cluck-gold mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
