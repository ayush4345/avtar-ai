import Image from "next/image";

const IntroSection = () => {
  return (
    <div className="py-16 bg-avtar-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-lg text-avtar-green mb-2 text-center">Introducing avtar.ai</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-20 text-center">
          Imagine Pump.fun + Virtuals.io + AI agent + crypto signals + finance alphas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-b from-avtar-darkGreen/20 to-transparent p-6 rounded-lg border border-avtar-green/10">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-avtar-green/10 flex items-center justify-center mr-3">
                <div className="w-3 h-3 rounded-full bg-avtar-green"></div>
              </div>
              <p className="text-white">No more KOL groups pump & dump on you. AI agent takes care of it.</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-avtar-darkGreen/20 to-transparent p-6 rounded-lg border border-avtar-green/10">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-avtar-green/10 flex items-center justify-center mr-3">
                <div className="w-3 h-3 rounded-full bg-avtar-green"></div>
              </div>
              <p className="text-white">Tokenised AI agent using fair launch with multiple features with multi-tiers unlocked.</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-avtar-darkGreen/20 to-transparent p-6 rounded-lg border border-avtar-green/10">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-avtar-green/10 flex items-center justify-center mr-3">
                <div className="w-3 h-3 rounded-full bg-avtar-green"></div>
              </div>
              <p className="text-white">Aggregator for all crypto signals, alphas, news and socials, in real time.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-avtar-darkGreen/20 to-transparent p-8 md:p-12 rounded-lg border border-avtar-green/10 mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Own personal DeFAI AI agent</h3>
          <p className="text-center text-avtar-gray mb-8">$avtar token to launch AI agent</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="https://data.thirdfi.org/" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-md px-6 py-2.5 text-sm font-medium
              border border-avtar-green text-avtar-green hover:bg-avtar-green/10 transition-colors"
            >
              Data-To-Earn
            </a>
            <a href="https://t.me/avtarxbt_bot" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-md px-6 py-2.5 text-sm font-medium
              bg-avtar-green hover:bg-avtar-green/90 text-white transition-colors"
            >
              Launch AI Agent
            </a>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://ext.same-assets.com/1288700763/2830841477.png"
              alt="AI Agent Illustration"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative">
            <div className="absolute -top-1 -left-1 w-24 h-24 border-t border-l border-avtar-green/20"></div>
            <div className="pt-8 pl-8">
              <h4 className="text-lg font-bold mb-6 text-white">For creators</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-green"
                  />
                  <span className="text-avtar-gray">Launch your own AI agent sidekick</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-green"
                  />
                  <span className="text-avtar-gray">Rally your community to unlock more exclusive features</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-green"
                  />
                  <span className="text-avtar-gray">Determine the AI agent parameters</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-green"
                  />
                  <span className="text-avtar-gray">Optional: Input your trading referrals for transparency</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 border-b border-r border-avtar-green/20"></div>
          </div>

          <div className="relative">
            <div className="absolute -top-1 -left-1 w-24 h-24 border-t border-l border-avtar-green/20"></div>
            <div className="pt-8 pl-8">
              <h4 className="text-lg font-bold mb-6 text-white">For end users</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-5 h-5 rounded-full mr-3 text-avtar-green flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-avtar-green"></div>
                  </div>
                  <span className="text-avtar-gray">Follow and co-own AI agents</span>
                </li>
                <li className="flex">
                  <div className="w-5 h-5 rounded-full mr-3 text-avtar-green flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-avtar-green"></div>
                  </div>
                  <span className="text-avtar-gray">Join the creators community</span>
                </li>
                <li className="flex">
                  <div className="w-5 h-5 rounded-full mr-3 text-avtar-green flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-avtar-green"></div>
                  </div>
                  <span className="text-avtar-gray">Get the signals to craft your trading strategy</span>
                </li>
                <li className="flex">
                  <div className="w-5 h-5 rounded-full mr-3 text-avtar-green flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-avtar-green"></div>
                  </div>
                  <span className="text-avtar-gray">Optional: Launch your own AI agent for personal use</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 border-b border-r border-avtar-green/20"></div>
          </div>

          <div className="relative">
            <div className="absolute -top-1 -left-1 w-24 h-24 border-t border-l border-avtar-green/20"></div>
            <div className="pt-8 pl-8">
              <h4 className="text-lg font-bold mb-6 text-white">For speculators</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-green"
                  />
                  <span className="text-avtar-gray">Observe AI agent performance, ROI and P&L</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-green"
                  />
                  <span className="text-avtar-gray">Farm for avtar option token with proof-of-trading</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-green"
                  />
                  <span className="text-avtar-gray">Convert option token to avtar with bonding curve</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-green"
                  />
                  <span className="text-avtar-gray">Optional: Trade avtar to get option token as yield</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 border-b border-r border-avtar-green/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
