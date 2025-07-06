import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaTelegram, FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00C3FF]/30 to-transparent"></div>
        <div className="glow-circle absolute -bottom-[400px] -left-[200px] opacity-5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center mb-6 group">
              <div className="relative">
                <span className="text-2xl font-bold text-white mr-1 group-hover:text-[#00C3FF] transition-colors duration-300">Avtar<span className="text-[#00C3FF]">.</span>ai</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C3FF] group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your personal AI agent for crypto and finance. Navigate the DeFi landscape with confidence using our intelligent assistant.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/avtarai" target="_blank" rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full flex items-center justify-center bg-[#0a0b0f] border border-gray-800 hover:border-[#00C3FF] hover:text-[#00C3FF] transition-colors">
                <FaXTwitter size={18} />
              </a>
              <a href="https://t.me/avtarai_bot" target="_blank" rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full flex items-center justify-center bg-[#0a0b0f] border border-gray-800 hover:border-[#00C3FF] hover:text-[#00C3FF] transition-colors">
                <FaTelegram size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full flex items-center justify-center bg-[#0a0b0f] border border-gray-800 hover:border-[#00C3FF] hover:text-[#00C3FF] transition-colors">
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-6 text-lg">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#00C3FF] transition-colors relative group inline-block">
                  <span>Home</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C3FF] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-[#00C3FF] transition-colors relative group inline-block">
                  <span>Features</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C3FF] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#00C3FF] transition-colors relative group inline-block">
                  <span>About</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C3FF] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-white font-medium mb-6 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00C3FF] transition-colors flex items-center gap-2 group">
                  <IoDocumentText className="group-hover:text-[#00C3FF] transition-colors" />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/avtarai_bot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00C3FF] transition-colors flex items-center gap-2 group">
                  <FaTelegram className="group-hover:text-[#00C3FF] transition-colors" />
                  <span>Launch AI Agent</span>
                </a>
              </li>
              <li>
                <a href="https://x.com/avtarai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00C3FF] transition-colors flex items-center gap-2 group">
                  <FaXTwitter className="group-hover:text-[#00C3FF] transition-colors" />
                  <span>Follow on X</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/50 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Avtar.ai. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="hover:text-[#00C3FF] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#00C3FF] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
