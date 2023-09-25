import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const FaqBg = {
  backgroundImage: "url('shapes/readme-bg-pattern.png')"
};

export default function CTA() {
  return (
    <div className="py-12">
      <div style={FaqBg} className="md:rounded-3xl py-12 md:py-6 lg:py-24 px-6 md:px-8 lg:px-12 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto space-y-6">
        <div className="md:flex justify-center">
          <div className="w-full md:w-10/12 lg:w-10/12">
            <h1 className="text-2xl md:text-4xl lg:text-6xl md:text-center font-mono font-bold uppercase">
              IT&apos;S TIME TO TAKE IT TO THE NEXT LEVEL
            </h1>
          </div>
        </div>
        <div className="md:flex justify-center">
          <div className="w-full md:w-8/12 lg:w-6/12">
            <h1 className="text-lg md:text-center font-mono">
              Now you can reach the maximum number of people easily using
              Oreonyx, you can get all the convenience in your hands. Sign up
              now.
            </h1>
          </div>
        </div>
        <div className="md:flex justify-center items-center space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
          <div>
            <a target="_blank" href="https://tally.so/r/nrBOep">
              <button className="rounded-full px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 flex items-center">
                <span className="md:hidden font-medium"> Beta program</span>
                <span className="xs:hidden md:inline font-medium">
                  {" "}
                  Join the beta program{" "}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </div>
          <div>
            <Link
              href="support"
              className="font-medium lg:px-6 lg:py-2 uppercase flex space-x-2 items-center"
            >
              <span className="hover:underline">Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
