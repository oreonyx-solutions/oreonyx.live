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
      <div className="font-mono lg:pt-32 lg:pb-32 pt-32 pb-24 space-y-12 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="w-full lg:flex space-y-8 lg:space-y-0">
          <div className="w-full lg:w-6/12">
            <h4 className="text-7xl leading-none lg:leading-normal">
              Prenez contact
            </h4>
            <h5 className="text-xl We look forward to hearing from you.">
              Nous vous attendions avec impatience.
            </h5>
          </div>
          <div className="w-full lg:w-6/12">
            <form>
              <div className="space-y-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nom & prénoms
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="focus:border-transparent bg-transparent block w-full  border border-black py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nom de votre entreprise / organisation
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="focus:border-transparent bg-transparent block w-full  border border-black py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="focus:border-transparent bg-transparent block text-sm font-medium leading-6 text-gray-900"
                  >
                    Titre du poste
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="focus:border-transparent bg-transparent block w-full  border border-black py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="focus:border-transparent bg-transparent block text-sm font-medium leading-6 text-gray-900"
                  >
                    Adresse email
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="focus:border-transparent bg-transparent block w-full  border border-black py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="focus:border-transparent bg-transparent block text-sm font-medium leading-6 text-gray-900"
                  >
                    Numero de téléphone
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="focus:border-transparent bg-transparent block w-full  border border-black py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="focus:border-transparent bg-transparent block text-sm font-medium leading-6 text-gray-900"
                  >
                    Dites-nous en plus
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={3}
                      defaultValue={""}
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="focus:border-transparent bg-transparent block w-full  border border-black py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <button className="px-6 py-4 lg:py-2 border-2 bg-black text-white border-gray-900 uppercase w-full">
                  <span> Envoyer</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer />
    </div>
  );
}
