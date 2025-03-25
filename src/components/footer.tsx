import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-avtar-dark py-12 px-6 md:px-12 border-t border-avtar-darkGreen/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white mr-1">avtar</span>
              <Image
                src="/logo.svg"
                alt="avtar Logo"
                width={36}
                height={36}
                className="w-8 h-auto"
              />
            </Link>
            <p className="text-avtar-gray text-sm">
              Your personal AI agent for Crypto and finance
            </p>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <Link href="/" className="text-white hover:text-avtar-green transition-colors">
                Home
              </Link>
              <Link href="https://github.com/thirdfi" target="_blank" className="text-white hover:text-avtar-green transition-colors">
                Github
              </Link>
              <Link href="/proof-of-trading" className="text-white hover:text-avtar-green transition-colors">
                Token
              </Link>
              <Link href="https://x.com/avtar_AI" target="_blank" className="text-white hover:text-avtar-green transition-colors">
                X
              </Link>
              <Link href="https://t.me/avtarxbt_bot" target="_blank" className="text-white hover:text-avtar-green transition-colors">
                Launch AI Agent
              </Link>
              <Link href="https://t.me/avtarAI" target="_blank" className="text-white hover:text-avtar-green transition-colors">
                Telegram
              </Link>
              <Link href="https://avtar.gitbook.io/docs/" target="_blank" className="text-white hover:text-avtar-green transition-colors">
                Doc
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-avtar-darkGreen/30 text-sm text-avtar-gray">
          <p>{new Date().getFullYear()} avtar.ai</p>
          <div className="mt-2 md:mt-0">All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
