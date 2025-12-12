import { motion } from "framer-motion";
import { Crown, Medal, Award, Flame } from "lucide-react";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "https://app-eqoyjidz.fly.dev";

interface LeaderboardEntry {
  rank: number;
  username: string;
  fighter_name: string;
  record: string;
  max_force: number;
  streak: number;
}

const getRankStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return {
        icon: Crown,
        color: "text-cluck-gold",
        bgColor: "bg-cluck-gold/20",
        borderColor: "border-cluck-gold",
      };
    case 2:
      return {
        icon: Medal,
        color: "text-gray-300",
        bgColor: "bg-gray-300/10",
        borderColor: "border-gray-400",
      };
    case 3:
      return {
        icon: Award,
        color: "text-amber-600",
        bgColor: "bg-amber-600/10",
        borderColor: "border-amber-600",
      };
    default:
      return {
        icon: Award,
        color: "text-gray-400",
        bgColor: "bg-gray-400/10",
        borderColor: "border-gray-500",
      };
  }
};

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/leaderboard`)
      .then((res) => res.json())
      .then((data) => {
        setLeaderboardData(data.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch leaderboard:", err);
        setLoading(false);
      });
  }, []);
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
            THE PECKING ORDER
          </h2>
          <p className="font-accent text-xl text-foreground">
            "Top Trainers of the Coop!"
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {loading ? (
            <div className="text-center text-foreground font-body">Loading leaderboard...</div>
          ) : (
            leaderboardData.map((entry, index) => {
              const style = getRankStyle(entry.rank);
              const IconComponent = style.icon;
              return (
                <motion.div
                  key={entry.rank}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`${style.bgColor} rounded-xl p-4 border-2 ${style.borderColor} flex items-center gap-4`}
                >
                  <div className={`${style.color} text-3xl font-stats`}>
                    #{entry.rank}
                  </div>

                  <motion.div
                    animate={{ rotate: entry.rank === 1 ? [0, 5, -5, 0] : 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <IconComponent className={`w-10 h-10 ${style.color}`} />
                  </motion.div>

                  <div className="flex-1">
                    <div className="font-headline text-lg text-foreground">
                      {entry.username}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">
                      Fighter: {entry.fighter_name}
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-6">
                    <div className="text-center">
                      <div className="font-stats text-lg text-foreground">
                        {entry.record}
                      </div>
                      <div className="font-body text-xs text-muted-foreground">
                        W-L-D
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="font-stats text-lg text-cluck-arena">
                        {entry.max_force}N
                      </div>
                      <div className="font-body text-xs text-muted-foreground">
                        Max Force
                      </div>
                    </div>

                    <div className="text-center flex items-center gap-1">
                      <Flame className="w-4 h-4 text-cluck-sunset" />
                      <div className="font-stats text-lg text-cluck-sunset">
                        {entry.streak}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button className="font-headline text-cluck-gold hover:text-cluck-sunset transition-colors">
            View Full Leaderboard →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Leaderboard;
