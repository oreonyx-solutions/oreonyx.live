"use client";

import Image from "next/image";
import Link from "next/link";
import { PowerGlitch } from "powerglitch";
import { useEffect } from "react";
import { Sprout, ArrowRight, ShieldCheck } from "lucide-react";

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
        <div className="lg:pt-48 lg:pb-32 pt-32 pb-24 lg:flex space-y-12 md:space-y-0">
          <div className="space-y-8 w-full lg:w-7/12">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-7xl font-mono font-bold uppercase text-gray-900">
                TRANSFORM THE FUTURE OF EDUCATION
                <span className="bg-clip-text bg-gradient bg-gradient-to-br from-sky-300 via-pink-500 to-sky-600 text-transparent">
                  .
                </span>
              </h1>
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
                  className="group flex space-x-1 items-center rounded-full uppercase hover:bg-black hover:text-white px-6 py-2 border-2 border-gray-900"
                >
                  <span>Register</span>
                  <i className="group-hover:transfrom group-hover:translate-x-1 transition-all ri-arrow-right-line"></i>
                </Link>
              </div>
              <div>
                <Link
                  href="contact"
                  className="font-medium md:px-6 md:py-2 hover:underline uppercase "
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 relative h-32 md:h-auto">
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
              <h2 className="uppercase text-2xl lg:text-6xl font-bold text-center text-gray-900">
                Why choose Oreonyx?
              </h2>
              <div className="md:flex space-y-6 md:space-y-0">
                <div className="w-full md:w-6/12 space-x-6  py-4 space-y-6 md:space-y-0 md:flex md:px-6 text-gray-900">
                  <div className="flex justify-center md:inline md:justify-start">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <h5 className="text-md lg:text-lg text-center md:text-start">
                      We offer a platform for education, promoting ideas and
                      solutions that fuel the growth of thoughts and skills.
                    </h5>
                  </div>
                </div>
                <div className="w-full md:w-6/12 space-x-6  py-4 space-y-6 md:space-y-0  md:flex md:px-6 text-gray-900">
                  <div className="flex justify-center md:inline md:justify-start">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <h5 className="text-md lg:text-lg text-center md:text-start">
                      Knowledge and mastery of social interactions within the
                      academic ecosystems and proposals of essential values,
                      useful in the job market.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex w-full md:space-x-6 space-y-6 md:space-y-0">
              <div className="w-full md:w-6/12">
                <Link
                  href="/climate"
                >
                  <div className="rounded-3xl overflow-hidden relative w-full py-8 flex px-4 lg:px-8 bg-gradient-to-tr from-green-500 via-green-500 to-green-300">
                    <Image
                      className="cl hidden lg:inline absolute transform rotate-12 -right-6 -bottom-24 text-white"
                      alt="source data"
                      src="/svg/seedling-line-nx.svg"
                      width={256}
                      height={256}
                    />
                    <Image
                      className="cl lg:hidden absolute transform rotate-12 -right-8 -bottom-12"
                      alt="source data"
                      src="/svg/seedling-line-nx.svg"
                      width={140}
                      height={140}
                    />
                    <div className="space-y-3 text-white w-11/12 lg:w-8/12">
                      <div>
                        <h5 className="text-xl">Oreonyx Climate.</h5>
                      </div>
                      <div className="">
                        <div>
                          <h5 className="text-4xl lg:text-5xl font-bold">
                            +8 Billion
                          </h5>
                        </div>
                        <div>
                          <h5 className="text-xl">
                            students and humans to be educated in ecological
                            awareness.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full md:w-6/12 rounded-3xl bg-[#faf9f6]">
                <div className="relative py-4 lg:py-8 flex px-4 lg:px-8 text-gray-900">
                  <div className="text-gray-900 flex lg:inline space-y-3 lg:space-y-6">
                    <h5 className="text-center text-xl lg:text-4xl relative">
                      We are all proud, because our goals are to revolutionize
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
