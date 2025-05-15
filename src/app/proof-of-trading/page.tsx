import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ProofOfTradingPage() {
  return (
    <div className="min-h-screen avtar-grid">
      <Header />
      <div className="pt-32 pb-16 bg-avtar-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Proof of Trading (PoT)
          </h1>
          <h2 className="text-xl md:text-2xl text-avtar-gray text-center mb-12">
            The world&apos;s 1st token model based on trading volume and liquidity
          </h2>

          <p className="text-avtar-gray text-center max-w-3xl mx-auto mb-24">
            Imagine a new token model that is NOT based on linear time-based unlock,
            BUT based on &quot;total and collective token trading volume&quot;
          </p>

          <h3 className="text-2xl font-bold text-center mb-12">What are the benefits?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="bg-avtar-darkGray/30 p-6 rounded-lg border border-avtar-blue/10">
              <Image
                src="https://ext.same-assets.com/1288700763/181246865.png"
                alt="No token dumping"
                width={200}
                height={200}
                className="w-full h-auto mb-4"
              />
              <p className="text-white">
                No token dumping on TGE by insiders, VCs, KOLs, and presale investors. Fair for secondary market.
              </p>
            </div>

            <div className="bg-avtar-darkGray/30 p-6 rounded-lg border border-avtar-blue/10">
              <Image
                src="https://ext.same-assets.com/1288700763/1617385747.png"
                alt="Token mechanics"
                width={200}
                height={200}
                className="w-full h-auto mb-4"
              />
              <p className="text-white">
                Token mechanics based on trading volume and liquidity. Everyone is incentivised to trade.
              </p>
            </div>

            <div className="bg-avtar-darkGray/30 p-6 rounded-lg border border-avtar-blue/10">
              <Image
                src="https://ext.same-assets.com/1288700763/136039366.png"
                alt="Trading incentives"
                width={200}
                height={200}
                className="w-full h-auto mb-4"
              />
              <p className="text-white">
                Trading incentives for traders, bots, arbitrageurs and speculators. Traders risk the cost of capital to exchange incentives for sustainable trading volume.
              </p>
            </div>

            <div className="bg-avtar-darkGray/30 p-6 rounded-lg border border-avtar-blue/10">
              <Image
                src="https://ext.same-assets.com/1288700763/4139252041.png"
                alt="Game theory"
                width={200}
                height={200}
                className="w-full h-auto mb-4"
              />
              <p className="text-white">
                Game theory 3,3. Everyone is incentivised to trade. &quot;You trade, I trade, everyone wins&quot;.
              </p>
            </div>
          </div>

          <div className="mb-24 text-center">
            <h3 className="text-2xl font-bold text-white inline">Trading volume attracts liquidity,</h3>
            <h3 className="text-2xl text-avtar-gray inline"> & volatility attracts speculators & traders.</h3>
          </div>

          <h3 className="text-2xl font-bold text-center mb-12">How it works?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="text-center">
              <div className="bg-avtar-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#3ab59e"/>
                  <path d="M12 17l-5-5h10l-5 5z" fill="#3ab59e"/>
                </svg>
              </div>
              <p className="text-white">
                Investors, teams, KOLs, pre-sale, community, gets option token
              </p>
            </div>

            <div className="text-center">
              <div className="bg-avtar-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="#3ab59e"/>
                  <path d="M7 12h2v5H7v-5zm4-7h2v12h-2V5zm4 4h2v8h-2V9z" fill="#3ab59e"/>
                </svg>
              </div>
              <p className="text-white">
                Option token can only be converted based on total trading volume
              </p>
            </div>

            <div className="text-center">
              <div className="bg-avtar-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h8v2H3v-2zm0-4h12v2H3V9zm0-4h12v2H3V5zm15 7l-5-5v10l5-5z" fill="#3ab59e"/>
                </svg>
              </div>
              <p className="text-white">
                Traders are incentivised with option token for taking capital risk
              </p>
            </div>

            <div className="text-center">
              <div className="bg-avtar-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#3ab59e"/>
                </svg>
              </div>
              <p className="text-white">
                LPs gets yield from token trading volume
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-12">What is $avtar & $oavtar?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-avtar-darkGray/30 p-8 rounded-lg border border-avtar-blue/10">
              <h4 className="text-xl font-bold mb-6">$avtar</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 mt-0.5"
                  />
                  <span className="text-white">Native token in avtar protocol</span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 mt-0.5"
                  />
                  <span className="text-white">Converted from oavtar option token based on trading volume</span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 mt-0.5"
                  />
                  <span className="text-white">Used to launch AI Agent on avtar protocol</span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 mt-0.5"
                  />
                  <span className="text-white">Used as LP and base quote for avtar&apos;s AI agents</span>
                </li>
              </ul>
            </div>

            <div className="bg-avtar-darkGray/30 p-8 rounded-lg border border-avtar-blue/10">
              <h4 className="text-xl font-bold mb-6">$oavtar</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 mt-0.5"
                  />
                  <span className="text-white">$oavtar is the option token for avtar&apos;s avtar token</span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 mt-0.5"
                  />
                  <span className="text-white">All stakeholders are allocated with options token $oavtar instead of $avtar</span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 mt-0.5"
                  />
                  <span className="text-white">$oavtar are 100% distributed to the stakeholders respectively. Therefore, no artificial time-based linear vesting.</span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 mt-0.5"
                  />
                  <span className="text-white">$oavtar can only be converted to $avtar based on total trading volume. No dumping on TGE.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="https://avtar.gitbook.io/docs/avtar-token/introduction"
              target="_blank"
              className="inline-flex items-center gap-2 text-avtar-blue hover:text-avtar-blue/80 transition-colors px-6 py-3 border border-avtar-blue/20 rounded-lg"
            >
              <span>Read More</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
