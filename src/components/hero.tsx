import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="avtar-grid pt-28 pb-12 relative overflow-hidden min-h-[90vh] content-center">
      <section className="relative w-full" id="hero">
        <section>
          <svg className="blur-3xl absolute opacity-80 right-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" height="100%" width="50%"><g clip-path="url(#clip0_17_60)"><g filter="url(#filter0_f_17_60)"><path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="rgba(36, 171, 229, 0.5)"></path><path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="rgba(36, 171, 229, 0.6)"></path></g></g><defs><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="719.867" id="filter0_f_17_60" width="719.867" x="-159.933" y="-159.933"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in2="BackgroundImageFix" result="shape" in="SourceGraphic" mode="normal"></feBlend><feGaussianBlur stdDeviation="79.9667" result="effect1_foregroundBlur_17_60"></feGaussianBlur></filter></defs></svg>
          <div className="items-center relative max-w-7xl mx-auto w-full lg:px-16 md:px-12 lg:pb-24 lg:pt-30 pb-12 pt-32 px-5">
            <div className="max-w-5xl mx-auto">
              <div className="md:text-center text-left">
                <div className="max-w-4xl gap-6 lg:gap-12 lg:items-end mx-auto">
                  <div>
                    <h1 className="font-medium mt-8 text-[65px] leading-[74px] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-200 via-slate-300 to-slate-600">The First <span className="text-avtar-blue font-workSans">Agentic DeFAI</span>  System Powered by MCP</h1>
                    <p className="font-semithin text-2xl leading-7 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-100 via-slate-300 to-slate-600 m-2 p-4">AvtarAI connects you to onchain through one interface.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:items-center lg:justify-center mt-12 sm:flex-row">
                  <Link href="https://t.me/avtarai_bot" className="items-center relative text-sm  focus:ring-[#e0ffe7] hover:text-gray-900 dark:text-white border-2 border-cyan-100 focus:ring-4 font-medium from-[#82bc92] group group-hover:from-[#77d68a] group-hover:to-[#59d973] inline-flex justify-center overflow-hidden  text-gray-900 to-[#6112b5] focus:shadow-lg mb-2 mr-2 w-fit rounded-full" id="hero-landing-cta-button">
                    <span className="flex items-center justify-center text-white duration-300 ease-in  relative rounded-full transition-all py-2.5 px-5 hover:bg-cyan-100 hover:text-black">Get started
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
