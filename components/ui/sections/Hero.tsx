"use client";

import Image from "next/image";
import Link from "next/link";
import { PowerGlitch } from "powerglitch";
import { useEffect } from "react";
import { Sprout, ArrowRight, ShieldCheck } from "lucide-react";

import { 
  PiPlantDuotone,
  PiShieldCheckDuotone
} from "react-icons/pi"

const HeroBg = {
  backgroundImage: "url('shapes/readme-bg-pattern.png')",
};

export default function Hero() {
  useEffect(() => {
    PowerGlitch.glitch(".cl");
  }, []);
  return (
    <div className="px-4 md:px-6 xl:px-0 w-full flex justify-between md:max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="space-y-2">
        <div className="pb-12 lg:pt-48 lg:pb-32 pt-32 md:flex space-y-12 md:space-y-0">
          <div className="space-y-8 w-full md:w-7/12">
            <div className="space-y-8">
	      <div className="md:w-9/12 lg:w-full">
              <h1 className="text-4xl lg:text-7xl font-mono font-bold uppercase text-gray-900">
                TRANSFORM THE FUTURE OF EDUCATION
                <span className="bg-clip-text bg-gradient bg-gradient-to-br from-sky-300 via-pink-500 to-sky-600 text-transparent">
                  .
                </span>
              </h1>
              </div>
              <div className="w-9/12">
                <h5 className="text-gray-900 text-lg font-mono">
                  A revolutionary digital platform for universities, students
                  and businesses, promoting access to higher education and
                  employability of young people.
                </h5>
              </div>
            </div>
            <div className="md:flex items-center space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
              <div>
              <Link
                  href="https://app.oreonyx.live/register"
                  className="hidden group flex space-x-1 items-center rounded-full uppercase hover:bg-black hover:text-white px-6 py-2 border-2 border-gray-900"
                >
                  <span>Register</span>
                  <i className="group-hover:transfrom group-hover:translate-x-1 transition-all ri-arrow-right-line"></i>
                </Link>
		<a target="_blank" href="https://tally.so/r/nrBOep">
              <button title="Join the beta program" className="rounded-full px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 flex items-center">
                <span className="md:hidden font-medium"> Beta program</span>
                <span className="hidden xs:hidden md:inline font-medium">
                  {" "}
                  Join the beta program{" "}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
              </div>
              <div>
                <Link
                  href="mailto:support@oreonyx.live"
                  className="font-medium md:px-6 md:py-2 hover:underline uppercase "
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 relative md:flex h-32 md:h-auto">
            <Image
              alt="source data"
              src="/illustrations/processing20210919-26192-5q05lm.png"
              layout="fill"
              objectFit="cover"
              className="object-top"
            />
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#e9e9e9] via-[#e9e9e9] to-transparent rounded-3xl">
          <div className="px-2 lg:px-6 py-2 lg:py-6 font-mono space-y-6">
            <div className=" bg-[#faf9f6] px-6 py-12 space-y-8 rounded-3xl">
              <h2 className="uppercase text-2xl md:text-4xl lg:text-6xl font-bold text-center text-gray-900">
                Why choose Oreonyx?
              </h2>
              <div className="md:flex space-y-6 md:space-y-0">
                <div className="w-full md:w-6/12 space-x-6  py-4 space-y-6 md:space-y-0 md:flex md:px-6 text-gray-900">
                  <div className="flex justify-center md:inline md:justify-start">
                    <PiShieldCheckDuotone className="text-3xl" />
                  </div>
                  <div>
                    <h5 className="text-md md:text-base lg:text-lg text-center md:text-start">
                    We provide a platform for education, promoting ideas and solutions that fuel growth in thinking and skills. We firmly believe that education is the foundation for the upliftment of society.
                    </h5>
                  </div>
                </div>
                <div className="w-full md:w-6/12 space-x-6  py-4 space-y-6 md:space-y-0  md:flex md:px-6 text-gray-900">
                  <div className="flex justify-center md:inline md:justify-start">
                    <PiShieldCheckDuotone className="text-3xl" />
                  </div>
                  <div>
                    <h5 className="text-md md:text-base lg:text-lg text-center md:text-start">
                    Develop an in-depth knowledge and mastery of social interactions within university ecosystems through essential value propositions, useful on the skills and job market.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex w-full md:space-x-6 space-y-6 md:space-y-0">
              <div className="w-full md:w-6/12">
                <Link
                  title="See the project"
                  href="/climate"
                >
                  <div className="transition transform hover:scale-95 rounded-3xl overflow-hidden relative w-full py-8 flex px-4 lg:px-8 bg-gradient-to-tr from-green-500 via-green-500 to-green-300">
                    <PiPlantDuotone className='cl text-[195px] text-white xs:hidden lg:inline absolute transform -right-0 -bottom-10' />
                    <PiPlantDuotone className='cl text-[141px] text-white hidden absolute transform -right-0 -bottom-10' />
                    <div className="space-y-3 text-white w-11/12 lg:w-8/12">
                      <div>
                        <h5 className="text-xl font-semibold">Oreonyx Climate.</h5>
                      </div>
                      <div className="">
                        <div>
                          <h5 className="text-4xl lg:text-5xl font-bold">
                            +8 Billion
                          </h5>
                        </div>
                        <div className="pr-10">
                          <h5 className="text-xl">
                            students and humans to be educated in ecological
                            awareness.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-full md:w-6/12 rounded-3xl bg-[#faf9f6]">
                <div className="relative py-4 lg:py-8 flex px-4 lg:px-8 text-gray-900">
                  <div className="text-gray-900 flex lg:inline space-y-3 lg:space-y-6">
                    <h5 className="text-center md:text-right lg:text-center md:text-3xl lg:text-4xl relative">
                      We are all proud, because our goals are to <span className="text-green-500">revolutionize </span>
                      the education of the next generations.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
