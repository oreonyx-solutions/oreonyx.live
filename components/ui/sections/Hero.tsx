"use client";

import Image from "next/image";
import Link from "next/link";
import { PowerGlitch } from "powerglitch";
import { useEffect } from "react";
import { Sprout, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  useEffect(() => {
    PowerGlitch.glitch(".cl");
  }, []);
  return (
    <div className="px-4 md:px-6 xl:px-0 w-full flex justify-between md:max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="space-y-2">
        <div className="lg:py-32 py-12 lg:flex space-y-12 md:space-y-0">
          <div className="space-y-8 w-full lg:w-7/12 ">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-7xl font-mono font-bold uppercase text-gray-900">
                Transformez l&apos;avenir de l&apos;éducation{" "}
                <span className="bg-clip-text bg-gradient bg-gradient-to-br from-sky-300 via-pink-500 to-sky-600 text-transparent">
                  .
                </span>
              </h1>
              <div className="w-">
                <h5 className="text-gray-900 text-lg font-mono">
                  Une plateforme numérique révolutionnaire pour les universités,
                  les étudiants et les entreprises, favorisant l&apos;accès à
                  l&apos;enseignement supérieur et l&apos;employabilité des
                  jeunes
                </h5>
              </div>
            </div>
            <div className="md:flex items-center space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
              <div>
                <a target="_blank" href="https://tally.so/r/nrBOep">
                  <button className="px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 flex items-center">
                    <span className="md:hidden font-medium">
                      {" "}
                      Programme bêta{" "}
                    </span>
                    <span className="hidden md:inline font-medium">
                      {" "}
                      Rejoindre le programme bêta{" "}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </a>
              </div>
              <div>
                <Link
                  href="contact"
                  className="font-medium md:px-6 md:py-2 hover:underline uppercase "
                >
                  Contactez-nous
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
                Pourquoi choisir Oreonyx?
              </h2>
              <div className="md:flex space-y-6 md:space-y-0">
                <div className="w-full md:w-6/12 space-x-6  py-4 space-y-6 md:space-y-0 md:flex md:px-6 text-gray-900">
                  <div className="flex justify-center md:inline md:justify-start">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <h5 className="text-md lg:text-lg text-center md:text-start">
                      Nous offrons une platforme vecteur d&apos;éducation,
                      promotrice d&apos;idées et de solutions qui alimentent la
                      croissance des pensées et des compétences.
                    </h5>
                  </div>
                </div>
                <div className="w-full md:w-6/12 space-x-6  py-4 space-y-6 md:space-y-0  md:flex md:px-6 text-gray-900">
                  <div className="flex justify-center md:inline md:justify-start">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <h5 className="text-md lg:text-lg text-center md:text-start">
                      Connaissances et maitrise des interactions sociales au
                      sein des écosystèmes Universitaires et propositions de
                      valeurs essentielles, utiles sur le marché de
                      l&apos;emploi.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex w-full md:space-x-6 space-y-6 md:space-y-0">
              <div className="w-full md:w-6/12">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1TOHMsgLBAdze2NsWyqhul2XQv7XnEo1D/view?usp=sharing"
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
                            +8 Milliards
                          </h5>
                        </div>
                        <div>
                          <h5 className="text-xl">
                            d&apos;étudiants et d&apos;humains à éduquer à la
                            concience écologique.
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
                      Nous sommes tous fiers, car nos objectifs entendent
                      révolutionner l&apos;éducation des prochaines générations.
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
