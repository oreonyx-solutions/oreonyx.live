"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";


import { 
  PiKeyboardDuotone
} from "react-icons/pi"

export default function Page() {
  return (
    <div className="bg-primary relative">
      <Link href="/blog/new" title="Rédiger un article" className="transform hover:scale-105 transition-all group h-16 w-16 rounded-full fixed bg-black shadow-xl bottom-5 right-5 flex justify-center items-center">
        <PiKeyboardDuotone className='group-hover:text-green-500 text-white text-2xl' />
      </Link>
      <Navbar />
      <div className="lg:pt-32 lg:pb-32 pt-32 pb-24 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="flex w-full">
          <div className="w-7/12 pl-20">
              <div className="h-[35rem] bg-gray-200 rounded-xl w-full flex items-center relative">
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                    <Image
                      alt="source data"
                      src="/illustrations/oreonyx_desktop.jpeg"
                      layout="fill"
                      objectFit="cover"
                      className="absolute"
                    />
                </div>
                  <div className="h-[26rem] w-8/12 bg-white rounded-xl -left-20 absolute p-10 space-y-3">
                      <div className="flex items-center space-x-4">
                          <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden relative">
                          <Image
                            alt="source data"
                            src="/illustrations/oreonyx_desktop.jpeg"
                            layout="fill"
                            objectFit="cover"
                            className="absolute"
                          />
                          </div>
                          <span><span className="text-xl font-bold">BBC News</span> ✦ 10 mins ago</span>
                      </div>
                      <div className="space-y-4">
                        <h1 className="text-3xl font-bold">People spend night on roofs and trees after Ukraine dan breach</h1>
                      <div className="space-y-3">
                          <h2 className="text-base text-gray-600">
                              Hundreads of thousands of people have bee left without access to normal drinking water since the breach of the Kakhovka dam, Ukraine's President Volodymyr Zlensky has said.<Link href="/blog/people-spend-night-on-roofs-and-trees-after-Ukraine-dan-breach" className="text-green-500 hover:underline font-medium">Read More</Link>
                          </h2>
                          <div className="justify-between">
                            <div>
                                <h3 className="text-base">Aug 03, 2023</h3>
                            </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="w-5/12 pl-6 space-y-4">
            <div className="w-full flex">
              <div className="w-4/12 h-32 bg-gray-200 rounded-xl overflow-hidden relative">
              <Image
                  alt="source data"
                  src="/illustrations/oreonyx_desktop.jpeg"
                  layout="fill"
                  objectFit="cover"
              />
              </div>
              <div className="w-8/12 pl-4 space-y-2">
                  <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden relative">
                        <Image
                          alt="source data"
                          src="/illustrations/oreonyx_desktop.jpeg"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <span><span className="text-md font-bold">BBC News</span> ✦ <span className="text-md text-gray-500">10 mins ago</span></span>
                  </div>
                  <div className="w-9/12">
                      <h3 className="text-base text-gray-500">CNN Chairman and CEO Chris Licht is out</h3>
                  </div>
                  <div>
                      <h4 className="text-sm"><span className="text-green-500">Business</span> <span className="text-gray-500">• 2 min read</span></h4>
                  </div>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-4/12 h-32 bg-gray-200 rounded-xl overflow-hidden relative">
              <Image
                  alt="source data"
                  src="/illustrations/oreonyx_desktop.jpeg"
                  layout="fill"
                  objectFit="cover"
              />
              </div>
              <div className="w-8/12 pl-4 space-y-2">
                  <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden relative">
                        <Image
                          alt="source data"
                          src="/illustrations/oreonyx_desktop.jpeg"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <span><span className="text-md font-bold">BBC News</span> ✦ <span className="text-md text-gray-500">10 mins ago</span></span>
                  </div>
                  <div className="w-9/12">
                      <h3 className="text-base text-gray-500">CNN Chairman and CEO Chris Licht is out</h3>
                  </div>
                  <div>
                      <h4 className="text-sm"><span className="text-green-500">Business</span> <span className="text-gray-500">• 2 min read</span></h4>
                  </div>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-4/12 h-32 bg-gray-200 rounded-xl overflow-hidden relative">
              <Image
                  alt="source data"
                  src="/illustrations/oreonyx_desktop.jpeg"
                  layout="fill"
                  objectFit="cover"
              />
              </div>
              <div className="w-8/12 pl-4 space-y-2">
                  <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden relative">
                        <Image
                          alt="source data"
                          src="/illustrations/oreonyx_desktop.jpeg"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <span><span className="text-md font-bold">BBC News</span> ✦ <span className="text-md text-gray-500">10 mins ago</span></span>
                  </div>
                  <div className="w-9/12">
                      <h3 className="text-base text-gray-500">CNN Chairman and CEO Chris Licht is out</h3>
                  </div>
                  <div>
                      <h4 className="text-sm"><span className="text-green-500">Business</span> <span className="text-gray-500">• 2 min read</span></h4>
                  </div>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-4/12 h-32 bg-gray-200 rounded-xl overflow-hidden relative">
              <Image
                  alt="source data"
                  src="/illustrations/oreonyx_desktop.jpeg"
                  layout="fill"
                  objectFit="cover"
              />
              </div>
              <div className="w-8/12 pl-4 space-y-2">
                  <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden relative">
                        <Image
                          alt="source data"
                          src="/illustrations/oreonyx_desktop.jpeg"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <span><span className="text-md font-bold">BBC News</span> ✦ <span className="text-md text-gray-500">10 mins ago</span></span>
                  </div>
                  <div className="w-9/12">
                      <h3 className="text-base text-gray-500">CNN Chairman and CEO Chris Licht is out</h3>
                  </div>
                  <div>
                      <h4 className="text-sm"><span className="text-green-500">Business</span> <span className="text-gray-500">• 2 min read</span></h4>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8 mt-24">
          <h1 className="text-gray-600 text-base md:text-3xl font-mono font-bold uppercase">
            Dernières nouvelles
          </h1>
          <div className="grid grid-cols-3 gap-6">
              <div className="space-y-4">
                  <div className="overflow-hidden relative h-64 rounded-xl">
                    <Image
                        alt="source data"
                        src="/illustrations/oreonyx_desktop.jpeg"
                        layout="fill"
                        objectFit="cover"
                    />
                  </div>
                  <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden relative">
                        <Image
                          alt="source data"
                          src="/illustrations/oreonyx_desktop.jpeg"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <span><span className="text-lg font-bold">BBC News</span> ✦ <span className="text-lg text-gray-500">10 mins ago</span></span>
                  </div>
                      <h1 className="text-2xl font-bold">People spend night on roofs and trees after Ukraine dan breach</h1>
                      <div className="space-y-3">
                        <h2 className="text-base text-gray-600">
                            Hundreads of thousands of people have bee left without access to normal drinking water since the breach of the Kakhovka dam, Ukraine's President Volodymyr Zlensky has said.
                        </h2>
                      </div>
                      <div>
                        <h4 className="text-sm"><span className="text-green-500">Business</span> <span className="text-gray-500">• 2 min read</span></h4>
                      </div>
                  </div>
              </div>
              <div className="space-y-4">
                  <div className="overflow-hidden relative h-64 rounded-xl">
                    <Image
                        alt="source data"
                        src="/illustrations/oreonyx_desktop.jpeg"
                        layout="fill"
                        objectFit="cover"
                    />
                  </div>
                  <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden relative">
                        <Image
                          alt="source data"
                          src="/illustrations/oreonyx_desktop.jpeg"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <span><span className="text-lg font-bold">BBC News</span> ✦ <span className="text-lg text-gray-500">10 mins ago</span></span>
                  </div>
                      <h1 className="text-2xl font-bold">People spend night on roofs and trees after Ukraine dan breach</h1>
                      <div className="space-y-3">
                        <h2 className="text-base text-gray-600">
                            Hundreads of thousands of people have bee left without access to normal drinking water since the breach of the Kakhovka dam, Ukraine's President Volodymyr Zlensky has said.
                        </h2>
                      </div>
                      <div>
                        <h4 className="text-sm"><span className="text-green-500">Business</span> <span className="text-gray-500">• 2 min read</span></h4>
                      </div>
                  </div>
              </div>
              <div className="space-y-4">
                  <div className="overflow-hidden relative h-64 rounded-xl">
                    <Image
                        alt="source data"
                        src="/illustrations/oreonyx_desktop.jpeg"
                        layout="fill"
                        objectFit="cover"
                    />
                  </div>
                  <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden relative">
                        <Image
                          alt="source data"
                          src="/illustrations/oreonyx_desktop.jpeg"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <span><span className="text-lg font-bold">BBC News</span> ✦ <span className="text-lg text-gray-500">10 mins ago</span></span>
                  </div>
                      <h1 className="text-2xl font-bold">People spend night on roofs and trees after Ukraine dan breach</h1>
                      <div className="space-y-3">
                        <h2 className="text-base text-gray-600">
                            Hundreads of thousands of people have bee left without access to normal drinking water since the breach of the Kakhovka dam, Ukraine's President Volodymyr Zlensky has said.
                        </h2>
                      </div>
                      <div>
                        <h4 className="text-sm"><span className="text-green-500">Business</span> <span className="text-gray-500">• 2 min read</span></h4>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <hr className="mb-12" />
      <Footer />
    </div>
  );
}
