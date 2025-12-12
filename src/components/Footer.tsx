import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cluck-purple/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-headline text-3xl text-gradient-gold mb-2">
              BOXCOCK.AI
            </h3>
            <p className="font-accent text-sm text-muted-foreground">
              "Where Feathers Fly and Champions Rise!"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {["The Coop", "Training", "Fights", "Shop", "Leaderboards"].map(
              (link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ scale: 1.1, color: "#FFD700" }}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </motion.a>
              )
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-2xl"
            >
              🐦
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-2xl"
            >
              📸
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-2xl"
            >
              💬
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border/30 text-center"
        >
          <p className="font-body text-xs text-muted-foreground">
            © 2024 BOXCOCK.AI - All Rights Reserved
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            No actual chickens were harmed in the making of this platform. 🐔
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
