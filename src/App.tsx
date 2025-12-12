import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FighterClasses from "@/components/FighterClasses";
import HowItWorks from "@/components/HowItWorks";
import Leaderboard from "@/components/Leaderboard";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FighterClasses />
        <HowItWorks />
        <Leaderboard />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App
