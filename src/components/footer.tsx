import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-avtar-dark py-12 px-6 md:px-12 border-t border-avtar-darkBlue/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white mr-1">Avtar.ai</span>
            </Link>
            <p className="text-avtar-gray text-sm">
              Your personal AI agent for Crypto and finance
            </p>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <Link href="/" className="text-white hover:text-avtar-blue transition-colors">
                Home
              </Link>
              <Link href="" target="_blank" className="text-white hover:text-avtar-blue transition-colors">
                Github
              </Link>
              <Link href="https://x.com/avtarai" target="_blank" className="text-white hover:text-avtar-blue transition-colors">
                X
              </Link>
              <Link href="" target="_blank" className="text-white hover:text-avtar-blue transition-colors">
                Launch AI Agent
              </Link>
              <Link href="" target="_blank" className="text-white hover:text-avtar-blue transition-colors">
                Telegram
              </Link>
              <Link href="" target="_blank" className="text-white hover:text-avtar-blue transition-colors">
                Doc
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-avtar-darkBlue/30 text-sm text-avtar-gray">
          <p>{new Date().getFullYear()} Avtar.ai</p>
          <div className="mt-2 md:mt-0">All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
