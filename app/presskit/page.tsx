"use client";

import React, { useState } from "react";

import Image from "next/image";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";

import { ArrowDown } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="font-mono lg:pt-32 lg:pb-32 pt-32 pb-24 pb-24 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-12 w-full lg:w-10/12">
          <div className="space-y-6 lg:space-y-0 lg:flex justify-between">
            <div className="w-full md:w-6/12 space-y-8">
              <h5 className="text-5xl font-medium">Press kit</h5>
              <h4 className="text-xl">
                Merci de l&apos;intérêt que vous portez à Oreonyx. Ces lignes
                directrices vous aideront à faire un usage correct de notre
                marque.
              </h4>
            </div>
            <div className="w-full md:w-6/12 flex lg:justify-end lg:items-end">
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/1mBIN7oluLZkuqU5E2gUM0GPuRicRN5_y?usp=share_link"
              >
                <button className="px-6 py-2 border-2 bg-black text-white border-gray-900 uppercase flex items-center space-x-2">
                  <span className="font-medium">
                    Télécharger tous les fichiers
                  </span>
                  <ArrowDown className="h-4 w-4" />
                </button>
              </a>
            </div>
          </div>
          <hr className="my-12" />
          <div className="space-y-24">
            <div className="space-y-6">
              <div className="w-full md:w-8/12 space-y-3">
                <h5 className="text-3xl font-medium">Logo Primaire</h5>
                <h4 className="text-lg">
                  Notre logo principal combine notre marque verbale, Oreonyx.
                </h4>
                <h4 className="text-lg">
                  Dans la mesure du possible, nous nous efforçons
                  d&apos;utiliser notre logo principal en couleurs. Pour les
                  fonds sombres, veillez à utiliser notre logo primaire inversé.
                </h4>
              </div>
              <div className="lg:flex space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="space-y-4 w-full md:w-10/12 lg:w-6/12">
                  <div className="bg-black h-72 flex justify-center items-center">
                    <div className="relative">
                      <Image
                        alt="source data"
                        src="/oreonyx-primary-logo-light.png"
                        width={250}
                        height={0}
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">Logo primaire</h5>
                    <h6 className="text-lg">
                      Il s&apos;agit du logo principal de Oreonyx. Il devrait
                      être utilisé sous cette forme dans la mesure du possible.
                    </h6>
                  </div>
                </div>
                <div className="space-y-4 w-full md:w-10/12 lg:w-6/12">
                  <div className="bg-secondary h-72 flex justify-center items-center">
                    <div className="relative">
                      <Image
                        alt="source data"
                        src="/oreonyx-primary-logo-dark.png"
                        width={250}
                        height={0}
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">
                      Logo primaire inversé
                    </h5>
                    <h6 className="text-lg">
                      Cette version comporte un mot-symbole noir pour une
                      meilleure lisibilité sur des fonds blanc ou chargés.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <a
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1mBIN7oluLZkuqU5E2gUM0GPuRicRN5_y?usp=share_link"
                >
                  <button className="px-6 py-2 border-2 bg-black text-white border-gray-900 uppercase flex items-center space-x-2">
                    <span className="font-medium">
                      Télécharger les logos primaires
                    </span>
                    <ArrowDown className="h-4 w-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-24">
            <div className="space-y-6">
              <div className="w-full md:w-8/12 space-y-3">
                <h5 className="text-3xl font-medium">Logo Monotone</h5>
                <h4 className="text-lg">
                  Lorsque nos logos primaires ou en couleur ne sont pas
                  disponibles, utilisez le logo monotone qui offre le plus de
                  contraste.
                </h4>
              </div>
              <div className="lg:flex space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="space-y-4 w-full md:w-10/12 lg:w-6/12">
                  <div className="bg-secondary h-72 flex justify-center items-center">
                    <div className="relative">
                      <Image
                        alt="source data"
                        src="/oreonyx_default_dark.png"
                        width={250}
                        height={0}
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">Monotone Noir</h5>
                  </div>
                </div>
                <div className="space-y-4 w-full md:w-10/12 lg:w-6/12">
                  <div className="bg-black h-72 flex justify-center items-center">
                    <div className="relative">
                      <Image
                        alt="source data"
                        src="/oreonyx_default.png"
                        width={250}
                        height={0}
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">Monotone Blanc</h5>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <a
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1mBIN7oluLZkuqU5E2gUM0GPuRicRN5_y?usp=share_link"
                >
                  <button className="px-6 py-2 border-2 bg-black text-white border-gray-900 uppercase flex items-center space-x-2">
                    <span className="font-medium">
                      Télécharger les logos monochrome
                    </span>
                    <ArrowDown className="h-4 w-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e9e9e9] rounded-none lg:rounded-3xl py-12 mb-12 px-4 md:px-6 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto space-y-6">
        <div className="font-mono w-full md:w-8/12 space-y-10">
          <div className="space-y-3">
            <h5 className="text-4xl font-medium">Petite remarque</h5>
            <h5 className="text-lg">
              Il s&apos;agit d&apos;un rappel juridique amical que ces
              graphiques sont exclusifs et protégés par les lois sur la
              propriété intellectuelle.
            </h5>
          </div>
          <div className="space-y-3">
            <h5 className="text-4xl font-medium">
              S&apos;il vous plaît, faites-ceci
            </h5>
            <h5 className="text-lg">
              Prévoyez beaucoup d&apos;espace autour du logo Oreonyx.
              Qu&apos;ils soient grands ou petits, donnez-lui la possibilité de
              respirer et de ne pas se sentir encombré.
            </h5>
          </div>
          <div className="space-y-3">
            <h5 className="text-4xl font-medium">
              S&apos;il vous plaît, ne pas faites-ceci
            </h5>
            <ul className="text-lg list-disc pl-5">
              <li>Modifier ces fichiers de quelque manière que ce soit.</li>
              <li>
                Afficher ces graphiques d&apos;une manière qui implique une
                relation, une affiliation ou une approbation par Oreonyx de
                votre produit, de votre service ou de votre entreprise.
              </li>
              <li>
                Utilisez ces graphiques dans le cadre du nom de votre produit,
                de votre entreprise ou de votre service.
              </li>
              <li>
                Combiner ces graphiques avec d&apos;autres graphiques sans
                l&apos;accord écrit de Oreonyx.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-4xl font-medium">Télécharger</h5>
            <h5 className="text-lg">
              Vous pouvez télécharger les fichiers SVG et PNG. Veuillez ne pas
              modifier le logo Oreonyx.
            </h5>
          </div>
          <a
            className=" mt-6"
            target="_blank"
            href="https://drive.google.com/drive/folders/1mBIN7oluLZkuqU5E2gUM0GPuRicRN5_y?usp=share_link"
          >
            <button className="px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase flex items-center space-x-2">
              <span className="font-medium">Télécharger tous les fichiers</span>
              <ArrowDown className="h-4 w-4" />
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
