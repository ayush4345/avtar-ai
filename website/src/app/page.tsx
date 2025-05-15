import Header from "@/components/header";
import Hero from "@/components/hero";
import IntroSection from "@/components/intro-section";
import PoTSection from "@/components/pot-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-avtar-dark">
      <Header />
      <main>
        <Hero />
        <section className="py-6 text-center bg-black/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-avtar-blue text-4xl font-mono font-light">
              #DeFAI The next generation crypto x AI for web3.0
            </p>
          </div>
        </section>
        <IntroSection />
      </main>
      <Footer />
    </div>
  );
}
