import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="avtar-grid pt-28 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-avtar-green">AI agent</span> for Crypto Trading & Alpha Signal
          </h1>

          <p className="text-avtar-gray text-lg mb-8">
            Deploy your AI Agent for
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-avtar-gray max-w-3xl mx-auto mb-12">
            <div className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-avtar-green mr-2"></span>
              Crypto buy/sell signals
            </div>
            <div className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-avtar-green mr-2"></span>
              Perps funding rates
            </div>
            <div className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-avtar-green mr-2"></span>
              Open interests
            </div>
            <div className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-avtar-green mr-2"></span>
              Orderbook orderflows
            </div>
            <div className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-avtar-green mr-2"></span>
              Arbitrage signals
            </div>
            <div className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-avtar-green mr-2"></span>
              AI-meme buy signals
            </div>
            <div className="flex items-center md:col-span-3 justify-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-avtar-green mr-2"></span>
              Financial market analysis
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link href="https://data.thirdfi.org/" target="_blank">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-avtar-green text-avtar-green hover:bg-avtar-green/10">
                Data-To-Earn
              </Button>
            </Link>
            <Link href="https://t.me/avtarxbt_bot" target="_blank">
              <Button size="lg" className="w-full sm:w-auto bg-avtar-green hover:bg-avtar-green/90 text-white">
                Launch AI Agent
              </Button>
            </Link>
          </div>

          <div className="relative px-4">
            <p className="text-sm text-avtar-gray text-center mb-4">Powered by</p>
            <div className="flex flex-wrap justify-center gap-8 items-center mb-16">
              <Image src="https://ext.same-assets.com/1288700763/2632223710.png" alt="Eliza" width={100} height={24} className="h-6 w-auto" />
              <Image src="https://ext.same-assets.com/1288700763/853740680.png" alt="Google Cloud" width={100} height={24} className="h-6 w-auto" />
              <Image src="https://ext.same-assets.com/1288700763/2632223710.png" alt="BNB Chain" width={100} height={24} className="h-6 w-auto" />
              <Image src="https://ext.same-assets.com/1288700763/1407617582.png" alt="ChatGPT" width={100} height={24} className="h-6 w-auto" />
              <Image src="https://ext.same-assets.com/1288700763/1767977562.png" alt="IO.NET" width={100} height={24} className="h-6 w-auto" />
              <Image src="https://ext.same-assets.com/1288700763/666747951.png" alt="ThirdFi" width={100} height={24} className="h-6 w-auto" />
            </div>

            <p className="text-sm text-avtar-gray text-center mb-4">Backed by</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <Image src="https://ext.same-assets.com/1288700763/1887834281.png" alt="Amber Group" width={100} height={24} className="h-6 w-auto" />
              <Image src="https://ext.same-assets.com/1288700763/2358323132.png" alt="Redbeard Ventures" width={100} height={24} className="h-6 w-auto" />
              <Image src="https://ext.same-assets.com/1288700763/1887834281.png" alt="IBC Group" width={100} height={24} className="h-6 w-auto" />
              <Image src="https://ext.same-assets.com/1288700763/1887834281.png" alt="Techstars" width={100} height={24} className="h-6 w-auto" />
              <Image src="https://ext.same-assets.com/1288700763/1887834281.png" alt="Chainlink" width={100} height={24} className="h-6 w-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 avtar-gradient"></div>
    </div>
  );
};

export default Hero;
