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
        <section className="py-4 text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-avtar-green font-bold text-4xl">
              #DeFAI The next generation crypto x AI for web3.0
            </p>
          </div>
        </section>
        <IntroSection />
        <PoTSection />
      </main>
      <Footer />
    </div>
  );
}
