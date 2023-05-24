"use client";

import React, { useState } from "react";

import Image from "next/image";

//components
import Navbar from "@/components/ui/sections/Navbar";
import CTA from "@/components/ui/sections/CTA";
import Footer from "@/components/ui/sections/Footer";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="font-mono lg:pt-32 lg:pb-32 pt-32 pb-24 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-12 w-full">
          <div className="space-y-6 lg:space-y-0 lg:flex justify-between">
            <div className="w-full md:w-8/12 lg:w-6/12 space-y-8">
              <h5 className="text-5xl font-medium">Quoi de neuf ?</h5>
              <h4 className="text-xl">
                Un aperçu des dernières fonctionnalités d&apos;Oreonyx, des
                améliorations de produits, des mises à jour de conception et des
                corrections de bogues importantes.
              </h4>
            </div>
          </div>
          <div>
            <div className="prose lg:prose-lg first:pt-0 pt-20 pb-20 border-0 border-b last:border-b-0">
              <h2>Changelog (23 Mars, 2023)</h2>
              <p>
                Mises à jour, corrections et améliorations pour le 23 Mars 2023
                :
              </p>
              <ul className="list-disc">
                <li>
                  Possibilité de créer des définitions d&apos;attributs avec un
                  emoji comme titre.
                </li>
                <li>
                  Ajout de corrections et d&apos;améliorations historiques de la
                  synchronisation des boîtes aux lettres, y compris
                  l&apos;affichage d&apos;un message d&apos;erreur de
                  synchronisation des boîtes aux lettres si nous détectons que
                  nous ne pouvons pas synchroniser le courrier d&apos;une boîte
                  de réception Gmail.
                </li>
                <li>
                  Augmentation de la vitesse de synchronisation des boîtes aux
                  lettres en augmentant la simultanéité de notre file
                  d&apos;attente.
                </li>
                <li>
                  Mise à jour des tableaux afin qu&apos;ils ne défilent
                  automatiquement que lorsque le clavier est utilisé.
                </li>
                <li>
                  Correction d&apos;un bug qui empêchait l&apos;affichage de
                  l&apos;adresse électronique d&apos;un enregistrement dans
                  notre extension de navigateur.
                </li>
                <li>
                  Publication d&apos;une nouvelle version de notre extension
                  pour navigateur.
                </li>
                <li>
                  Implémentation de la possibilité de rendre le markdown dans
                  les documents de l&apos;API.
                </li>
                <li>
                  Correction d&apos;un bug où les tâches en double étaient
                  affichées.
                </li>
              </ul>
              <div className="flex justify-between font-medium">
                <div className="flex space-x-3">
                  <div className="flex space-x-2 items-center">
                    <span className="h-3 w-3 bg-gradient-to-br from-purple-500 to-purple-300"></span>
                    <span>Amélioration</span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <span className="h-3 w-3 bg-gradient-to-br from-yellow-500 to-yellow-300"></span>
                    <span>Design</span>
                  </div>
                </div>
                <div>
                  <span>2022-12-21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-6">
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
