import Image from "next/image";
import { LuChartLine } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { GiToken } from "react-icons/gi";

const IntroSection = () => {
  return (
    <div className="py-16 bg-avtar-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-lg text-avtar-blue mb-2 text-center bg-avtar-blue/10 w-fit px-3 mx-auto rounded-full">Introducing Avtar.ai</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-20 text-center">
          No noise. Just action.
        </h3>

        <div className="flex gap-8 justify-between mb-20 m-auto">
          <div className="flex flex-col justify-center gap-4 w-1/2">
            <div className="flex flex-col items-start mb-4">
              <p className="text-white text-2xl font-mono font-semibold flex items-center gap-2"><RiQuestionAnswerLine className="text-avtar-blue" /><span>Ask questions</span> </p>
              <p className="text-gray-300 ml-8 font-light">AI-Powered DeFi interaction through natural languague</p>
            </div>

            <div className="flex flex-col items-start mb-4">
              <p className="text-white text-2xl font-mono font-semibold flex items-center gap-2"><GiToken className="text-avtar-blue" /> <span>Get token insights</span></p>
              <p className="text-gray-300 ml-8 font-light">Token Scanning , market prediction and risk scoring</p>
            </div>

            <div className="flex flex-col items-start mb-4">
              <p className="text-white text-2xl font-mono font-semibold flex items-center gap-2"><LuChartLine className="text-avtar-blue" /><span>Trade smarter</span> </p>
              <p className="text-gray-300 ml-8 font-light">Real time analysis and actionable sights</p>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/mascot.png" className="m-auto" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-avtar-blue/30 via-avtar-darkBlue/10 to-transparent flex justify-between items-center p-8 md:p-12 rounded-xl mb-20">
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold mb-8 text-center font-mono">Own personal DeFAI agent</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href="https://t.me/avtarai_bot" target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-md px-6 py-2.5 text-sm font-medium
              bg-avtar-blue hover:bg-avtar-blue/90 text-white transition-colors"
              >
                Launch AI Agent
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/mascot2.png"
              alt="AI Agent Illustration"
              width={150}
              height={200}
              className="mx-auto rounded-md"
            />
          </div>
        </div>

        <p className="text-avtar-blue mb-10 font-mono text-center text-4xl font-bold">
          Crypto is chaos.
        </p>
        <h3 className="text-2xl md:text-3xl font-mono text-gray-300 font-light mb-20 text-center">
        <span className="text-avtar-blue font-workSans">AvtarAI</span>  brings structure.
          {/* <br/> */}
          <br/>
          Signals, trades, and onchain insights—powered by AI.
        </h3>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative">
            <div className="absolute -top-1 -left-1 w-24 h-24 border-t border-l border-avtar-blue/20"></div>
            <div className="pt-8 pl-8">
              <h4 className="text-lg font-bold mb-6 text-white">For creators</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-blue"
                  />
                  <span className="text-avtar-gray">Launch your own AI agent sidekick</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-blue"
                  />
                  <span className="text-avtar-gray">Rally your community to unlock more exclusive features</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-blue"
                  />
                  <span className="text-avtar-gray">Determine the AI agent parameters</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-blue"
                  />
                  <span className="text-avtar-gray">Optional: Input your trading referrals for transparency</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 border-b border-r border-avtar-blue/20"></div>
          </div>

          <div className="relative">
            <div className="absolute -top-1 -left-1 w-24 h-24 border-t border-l border-avtar-blue/20"></div>
            <div className="pt-8 pl-8">
              <h4 className="text-lg font-bold mb-6 text-white">For end users</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-5 h-5 rounded-full mr-3 text-avtar-blue flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-avtar-blue"></div>
                  </div>
                  <span className="text-avtar-gray">Follow and co-own AI agents</span>
                </li>
                <li className="flex">
                  <div className="w-5 h-5 rounded-full mr-3 text-avtar-blue flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-avtar-blue"></div>
                  </div>
                  <span className="text-avtar-gray">Join the creators community</span>
                </li>
                <li className="flex">
                  <div className="w-5 h-5 rounded-full mr-3 text-avtar-blue flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-avtar-blue"></div>
                  </div>
                  <span className="text-avtar-gray">Get the signals to craft your trading strategy</span>
                </li>
                <li className="flex">
                  <div className="w-5 h-5 rounded-full mr-3 text-avtar-blue flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-avtar-blue"></div>
                  </div>
                  <span className="text-avtar-gray">Optional: Launch your own AI agent for personal use</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 border-b border-r border-avtar-blue/20"></div>
          </div>

          <div className="relative">
            <div className="absolute -top-1 -left-1 w-24 h-24 border-t border-l border-avtar-blue/20"></div>
            <div className="pt-8 pl-8">
              <h4 className="text-lg font-bold mb-6 text-white">For speculators</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-blue"
                  />
                  <span className="text-avtar-gray">Observe AI agent performance, ROI and P&L</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-blue"
                  />
                  <span className="text-avtar-gray">Farm for avtar option token with proof-of-trading</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-blue"
                  />
                  <span className="text-avtar-gray">Convert option token to avtar with bonding curve</span>
                </li>
                <li className="flex">
                  <Image
                    src="https://ext.same-assets.com/2261016538/1248550479.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="mr-3 text-avtar-blue"
                  />
                  <span className="text-avtar-gray">Optional: Trade avtar to get option token as yield</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 border-b border-r border-avtar-blue/20"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default IntroSection;
