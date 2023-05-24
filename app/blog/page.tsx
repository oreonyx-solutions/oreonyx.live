"use client";

import React, { useState } from "react";
import Image from "next/image";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="lg:pt-32 lg:pb-32 pt-32 pb-24 font-mono px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-10">
          <div className="space-y-3 lg:space-y-6">
            <div className="flex justify-center">
              <h6 className="text-green-500 text-md md:text-lg">
                Mises à jour de produits
              </h6>
            </div>
            <div className="flex justify-center">
              <div className="w-10/12 md:w-8/12">
                <h4 className="text-xl md:text-4xl lg:text-5xl font-semibold text-center">
                  3 millions de dollars supplémentaires en banque.Que se
                  passera-t-il ensuite ?
                </h4>
              </div>
            </div>
            <div className="flex justify-center">
              <h6 className="text-gray-500 text-md md:text-lg">
                29 mars 2023 - 9 MIN LECTURE
              </h6>
            </div>
          </div>
          <div className="h-[15rem] md:h-[20rem] lg:h-[30rem] w-full bg-gray-100 rounded-lg relative">
            <Image
              alt="source data"
              src="https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-all hover:transform hover:scale-105"
            />
          </div>
        </div>
        <div className="my-20 space-y-6 px-4 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="w-full flex lg:justify-center">
            <div className="space-y-10 md:w-10/12">
              <div className="lg:flex space-y-3 lg:space-y-0">
                <div className="lg:h-[15rem] w-full lg:w-7/12 h-72 rounded-md bg-gray-100 relative">
                  <Image
                    alt="source data"
                    src="https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md duration-900 transition-all hover:transform hover:scale-105"
                  />
                </div>
                <div className="w-full lg:w-5/12 lg:pl-10 flex items-center">
                  <div className="md:space-y-6">
                    <h6 className="text-green-500 text-md md:text-lg">
                      Articles
                    </h6>
                    <h4 className="text-xl md:text-3xl lg:text-3xl font-semibold">
                      Le système de videoconférence qui bouscule les codes.
                    </h4>
                    <h6 className="text-gray-500 text-md md:text-lg">
                      13 mars 2023 - 15 MIN LECTURE
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer />
    </div>
  );
}
