import Image from "next/image";
import { LuChartLine } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { GiToken } from "react-icons/gi";

const IntroSection = () => {
  return (
    <div className="py-24 relative" id="features">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="glow-circle absolute -top-[300px] -left-[300px] opacity-20 blur-3xl"></div>
        <div className="glow-circle-blue absolute top-[40%] -right-[200px] opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          No noise. <span className="text-gradient-blue">Just action.</span>
        </h2>
        
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Experience the future of DeFi with our intelligent AI-powered platform that simplifies crypto complexity.
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="glass-card p-8 rounded-xl hover:border-[#00C3FF]/30 transition-all duration-300 hover:shadow-glow-sm group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#00C3FF] to-[#0070FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <RiQuestionAnswerLine className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00C3FF] transition-colors">Ask Questions</h3>
            <p className="text-gray-400">AI-Powered DeFi interaction through natural language. Get instant answers to your crypto questions.</p>
          </div>
          
          <div className="glass-card p-8 rounded-xl hover:border-[#00C3FF]/30 transition-all duration-300 hover:shadow-glow-sm group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#00C3FF] to-[#0070FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GiToken className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00C3FF] transition-colors">Token Insights</h3>
            <p className="text-gray-400">Token scanning, market prediction and risk scoring to help you make informed decisions.</p>
          </div>
          
          <div className="glass-card p-8 rounded-xl hover:border-[#00C3FF]/30 transition-all duration-300 hover:shadow-glow-sm group">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#00C3FF] to-[#0070FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <LuChartLine className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00C3FF] transition-colors">Trade Smarter</h3>
            <p className="text-gray-400">Real-time analysis and actionable insights to optimize your trading strategy.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card-highlight p-10 md:p-16 rounded-2xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
            <div className="glow-circle-blue absolute -top-[100px] -right-[100px] opacity-10 blur-3xl"></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
            <div className="flex flex-col items-start max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Your Personal <span className="text-gradient-blue">DeFAI Agent</span></h3>
              <p className="text-gray-400 mb-8">Navigate the crypto world with confidence using our AI-powered assistant that provides personalized insights and recommendations.</p>
              <a href="https://t.me/avtarai_bot" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Launch AI Agent
              </a>
            </div>
            
            <div className="flex justify-center relative">
              <div className="absolute -bottom-6 w-48 h-12 bg-[#00C3FF]/20 blur-xl rounded-full"></div>
              <Image
                src="/mascot2.png"
                alt="AI Agent Illustration"
                width={200}
                height={250}
                className="relative z-10 floating"
              />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="text-center mb-16" id="about">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Crypto is <span className="text-gradient-blue">chaos.</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
            <span className="text-gradient-blue font-medium">Avtar.ai</span> brings structure.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Signals, trades, and onchain insights powered by AI to help you navigate the complex world of cryptocurrency.
          </p>
        </div>

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
