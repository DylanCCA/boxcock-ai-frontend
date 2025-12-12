import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "The Coop", emoji: "🏠" },
    { label: "Hatchery", emoji: "🥚" },
    { label: "Training", emoji: "💪" },
    { label: "Fights", emoji: "🥊" },
    { label: "Shop", emoji: "🛒" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="font-headline text-2xl text-gradient-gold"
          >
            BOXCOCK.AI
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="font-body text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </motion.a>
            ))}
            <Button variant="default" size="sm" className="shadow-neon">
              Join The Coop
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="block py-2 font-body text-foreground/80 hover:text-foreground"
              >
                <span className="mr-2">{item.emoji}</span>
                {item.label}
              </a>
            ))}
            <Button variant="default" size="sm" className="mt-4 w-full shadow-neon">
              Join The Coop
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
