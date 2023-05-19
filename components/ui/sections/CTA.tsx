import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function CTA() {
  return (
    <div className="py-12">
      <div className="bg-[#e9e9e9] md:rounded-3xl py-12 md:py-6 lg:py-24 px-8 lg:px-12 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto space-y-6">
        <div className="md:flex justify-center">
          <div className="w-full md:w-10/12 lg:w-10/12">
            <h1 className="text-4xl lg:text-6xl md:text-center font-mono font-bold uppercase">
              Il est temps de passez à la vitesse supérieure{" "}
            </h1>
          </div>
        </div>
        <div className="md:flex justify-center">
          <div className="w-full md:w-8/12 lg:w-6/12">
            <h1 className="text-lg md:text-center font-mono">
              Maintenant, vous pouvez toucher un maximum de personne facilement
              en utilisant Oreonyx, vous pouvez obtenir toute la commodité dans
              vos mains. Inscrivez-vous dès maintenant.
            </h1>
          </div>
        </div>
        <div className="md:flex justify-center items-center space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
          <div>
            <a target="_blank" href="https://tally.so/r/nrBOep" className="">
              <span className="px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex items-center">
                <span className="md:hidden font-medium"> Programme bêta </span>
                <span className="hidden md:inline last:font-medium">
                  {" "}
                  Rejoindre le programme bêta{" "}
                </span>
                <ArrowRight className="h-4 w-4 hidden md:inline" />
              </span>
            </a>
          </div>
          <div>
            <Link
              href="support"
              className="font-medium lg:px-6 lg:py-2 uppercase flex space-x-2 items-center"
            >
              <HelpCircle className="h-4 w-4" />
              <span className="hover:underline">Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
