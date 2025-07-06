import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { BiLineChart } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="pt-28 pb-20 relative overflow-hidden min-h-[90vh] content-center">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#00C3FF] to-[#0070FF] opacity-10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[#0077FF] to-[#00C3FF] opacity-10 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#0077FF] opacity-5 rounded-full blur-[180px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      </div>
      
      <section className="relative w-full z-10" id="hero">
        <div className="items-center relative max-w-7xl mx-auto w-full lg:px-16 md:px-12 lg:pb-24 lg:pt-10 pb-12 pt-20 px-5">
          <div className="max-w-5xl mx-auto">
            <div className="md:text-center text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0a0b0f]/80 border border-[#00C3FF]/30 backdrop-blur-sm mb-8 animate-float shadow-glow-sm">
                <HiOutlineSparkles className="text-[#00C3FF] mr-2" />
                <span className="text-[#00C3FF] text-sm font-medium mr-2">Powered by</span>
                <span className="text-white font-semibold">MCP</span>
              </div>
              
              <div className="max-w-4xl gap-6 lg:gap-12 lg:items-end mx-auto">
                <div>
                  <h1 className="font-medium mt-4 text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">The First </span>
                    <span className="bg-gradient-to-r from-[#00C3FF] to-[#0070FF] bg-clip-text text-transparent font-semibold">Agentic DeFAI</span>
                    <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"> System for </span>
                    <span className="bg-gradient-to-r from-[#00C3FF] to-[#0070FF] bg-clip-text text-transparent font-semibold">Blockchain</span>
                  </h1>
                  <p className="mt-8 text-lg md:text-xl text-gray-300/80 max-w-3xl mx-auto leading-relaxed">AvtarAI connects you to onchain through one powerful interface, enabling seamless trading and DeFi operations with advanced AI assistance.</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-6 lg:items-center lg:justify-center mt-12 sm:flex-row">
                <Link href="https://t.me/avtarai_bot" 
                  className="relative px-8 py-4 rounded-full bg-gradient-to-r from-[#00C3FF] to-[#0070FF] text-white font-medium text-lg inline-flex items-center justify-center shadow-glow group transition-all duration-300 hover:shadow-glow-lg">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00C3FF] to-[#0070FF] opacity-0 group-hover:opacity-70 blur-xl transition-all duration-300"></span>
                  <span className="flex items-center justify-center relative z-10">
                    <FaRobot className="mr-2" /> Trading Agent <MdArrowOutward className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                {/* <Link href="https://avtar-solana-web.vercel.app/" 
                  className="relative px-8 py-4 rounded-full border border-[#00C3FF]/30 text-white font-medium text-lg inline-flex items-center justify-center hover:bg-[#00C3FF]/10 transition-all duration-300 group">
                  <span className="flex items-center justify-center">
                    <BiLineChart className="mr-2" /> OnChain Agent <MdArrowOutward className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link> */}
              </div>
              
              {/* Stats or features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 bg-[#0a0b0f]/50 backdrop-blur-sm p-6 text-center group hover:border-[#00C3FF]/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00C3FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#00C3FF]/20 to-[#0070FF]/20 mb-4">
                      <div className="text-[#00C3FF] text-xl">💯</div>
                    </div>
                    <div className="text-white text-xl font-semibold mb-2">100% Transparent</div>
                    <p className="text-gray-400">All operations visible on-chain with full transparency and auditability</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 bg-[#0a0b0f]/50 backdrop-blur-sm p-6 text-center group hover:border-[#00C3FF]/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00C3FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#00C3FF]/20 to-[#0070FF]/20 mb-4">
                      <div className="text-[#00C3FF] text-xl">⏱️</div>
                    </div>
                    <div className="text-white text-xl font-semibold mb-2">24/7 Trading</div>
                    <p className="text-gray-400">AI-powered trading assistance available around the clock</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 bg-[#0a0b0f]/50 backdrop-blur-sm p-6 text-center group hover:border-[#00C3FF]/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00C3FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#00C3FF]/20 to-[#0070FF]/20 mb-4">
                      <div className="text-[#00C3FF] text-xl">🔄</div>
                    </div>
                    <div className="text-white text-xl font-semibold mb-2">Multi-Chain</div>
                    <p className="text-gray-400">Seamless operations across multiple blockchain networks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
