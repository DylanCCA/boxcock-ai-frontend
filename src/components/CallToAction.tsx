import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Star } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cluck-barn/20 via-cluck-purple/30 to-background" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cluck-gold/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              >
                <Star className="w-8 h-8 text-cluck-gold fill-cluck-gold" />
              </motion.div>
            ))}
          </div>

          <motion.h2
            className="font-headline text-5xl sm:text-6xl md:text-7xl text-gradient-gold mb-6"
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            READY TO RUMBLE?
          </motion.h2>

          <p className="font-accent text-2xl sm:text-3xl text-foreground mb-4">
            "Time to ruffle some feathers!"
          </p>

          <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of trainers in the most egg-citing sport on the planet.
            Your legendary chicken warrior awaits!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cluck-gold via-cluck-sunset to-cluck-gold text-primary-foreground font-headline text-xl px-10 py-7 shadow-neon animate-pulse-glow border-4 border-foreground relative z-10"
              >
                <Zap className="mr-2 w-6 h-6" />
                START YOUR JOURNEY
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cluck-arena text-cluck-arena hover:bg-cluck-arena hover:text-foreground font-headline text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 font-body text-sm text-muted-foreground"
          >
            No credit card required • Free to play • No feathers harmed
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
