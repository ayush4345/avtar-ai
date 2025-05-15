import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PoTSection = () => {
  return (
    <div className="py-16 bg-avtar-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-gradient-to-br from-avtar-darkBlue/30 to-transparent p-8 md:p-12 rounded-lg border border-avtar-blue/10 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="relative w-full max-w-xs mx-auto">
              <div className="absolute inset-0 bg-avtar-blue/20 blur-3xl rounded-full"></div>
              <Image
                src="https://ext.same-assets.com/1288700763/1763409526.png"
                alt="Proof of Trading"
                width={300}
                height={300}
                className="relative z-10"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-white">Proof of Trading (PoT)</h2>
            <p className="text-xl text-avtar-gray mb-6">
              The world&apos;s 1st token model based on trading volume and liquidity
            </p>
            <p className="text-avtar-gray mb-8">
              PoT is the world&apos;s 1st token model that is based on trading volume,
              leveraging game theory (3,3) ensuring fair and equitable outcome for
              all market participants. DeFi 3.0 is here.
            </p>

            <Link href="/proof-of-trading" className="inline-flex items-center gap-2 text-avtar-blue hover:text-avtar-blue/80 transition-colors">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoTSection;
