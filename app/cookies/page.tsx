"use client";

import React, { useState } from "react";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="font-mono lg:pt-32 lg:pb-32 pt-32 pb-24 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-12 w-full">
          <div className="space-y-6 lg:space-y-0 lg:flex justify-between">
            <div className="w-full md:w-8/12 lg:w-6/12 space-y-8">
              <h5 className="text-5xl font-medium">Cookies</h5>
              <h4 className="text-xl">
                Oreonyx utilise des cookies pour sécuriser et contrôler sa
                plateforme afin de fournir à nos clients la meilleure expérience
                utilisateur possible. Ce document décrit notre utilisation des
                cookies et vos droits en la matière.
              </h4>
              <h6 className="text-lg text-gray-600">
                Dernière mise à jour: Avril 2023
              </h6>
            </div>
          </div>
          <div className="prose lg:prose-xl">
            <p>
              Nous utilisons des cookies, de petits extraits de texte, pour vous
              distinguer des autres utilisateurs et collecter des informations,
              qui peuvent inclure des données à caractère personnel. Pour en
              savoir plus sur la manière dont nous utilisons et protégeons vos
              données personnelles, consultez notre politique de
              confidentialité. Cela nous aide à vous offrir une bonne expérience
              lorsque vous naviguez sur notre site web et utilisez notre
              produit, ainsi qu&apos;à nous permettre d&apos;améliorer nos
              sites.
            </p>
            <p>
              Un cookie est un petit fichier de lettres et de chiffres que nous
              stockons sur votre navigateur ou sur le disque dur de votre
              ordinateur si vous y consentez. Les cookies contiennent des
              informations qui sont transférées sur le disque dur de votre
              ordinateur.
            </p>
            <p>
              Le présent document décrit plus en détail les types de cookies que
              nous utilisons et les raisons de leur utilisation. Dans les
              tableaux ci-dessous, vous trouverez une description de chaque
              cookie que nous utilisons, son rôle et sa date d&apos;expiration.
            </p>
            <p>Nous utilisons les cookies suivants :</p>
            <p>
              <strong>Cookies strictement nécessaires.</strong> Il s&apos;agit
              des cookies nécessaires au fonctionnement de notre site web. Ils
              comprennent, par exemple, les cookies qui vous permettent de vous
              connecter à des zones sécurisées de notre site web,
              d&apos;utiliser un panier d&apos;achat ou des services de
              facturation électronique.
            </p>
            <p>
              <strong>Cookies analytiques ou de performance.</strong> Ils nous
              permettent de reconnaître et de compter le nombre de visiteurs et
              de voir comment les visiteurs se déplacent sur notre site web
              lorsqu&apos;ils l&apos;utilisent. Cela nous aide à améliorer le
              fonctionnement de notre site web, par exemple en veillant à ce que
              les utilisateurs trouvent facilement ce qu&apos;ils recherchent.
            </p>
            <p>
              <strong>Cookies de fonctionnalité</strong> Ils sont utilisés pour
              vous reconnaître lorsque vous revenez sur notre site web. Cela
              nous permet de personnaliser notre contenu, de vous accueillir par
              votre nom et de nous souvenir de vos préférences (par exemple,
              votre choix de langue ou de région).
            </p>
            <p>
              <strong>Cookies de ciblage.</strong> Ces cookies enregistrent
              votre visite sur notre site web, les pages que vous avez
              consultées et les liens que vous avez suivis. Nous utiliserons ces
              informations pour rendre notre site web et la publicité qui y est
              affichée plus pertinents par rapport à vos intérêts. [Nous pouvons
              également partager ces informations avec des tiers à cette fin].
            </p>
            <p>
              Vous trouverez dans le tableau ci-dessous de plus amples
              informations sur les différents cookies que nous utilisons et sur
              les raisons pour lesquelles nous les utilisons :
            </p>
            <p>
              <strong>
                Cookie Title or Name | Length/expiry period | Purpose
              </strong>
            </p>
            <p>
              _clck | 1 an | Persiste l&apos;ID de l&apos;utilisateur Clarity et
              les préférences, uniques à ce site, sur le navigateur. Cela
              garantit que le comportement lors de visites ultérieures sur le
              même site sera attribué au même identifiant d&apos;utilisateur.
            </p>
            <p>
              _ga | 2 ans | Utilisé pour distinguer les utilisateurs dans Google
              Analytics
            </p>
            <p>
              _gaexp | 79 jours | Utilisé pour déterminer l&apos;inclusion
              d&apos;un utilisateur dans une expérience A/B de Google Optimize
              et l&apos;expiration des expériences auxquelles un utilisateur a
              été inclus.
            </p>
            <p>
              _gat_gtag | 1 jour | Utilisé pour stocker et suivre les
              conversions dans Google Analytics.
            </p>
            <p>
              _gcl_au | 90 jours | Utilisé pour stocker et suivre les
              conversions dans Google Analytics.
            </p>
            <p>
              _gid | 1 jour | Utilisé pour distinguer les utilisateurs dans
              Google Analytics
            </p>
            <p>
              oreonyx-cookie-banner | 1 an | Oreonyx utilise ce cookie pour se
              souvenir de l&apos;acceptation de notre bannière de cookies.
            </p>
            <p>
              oreonyx-session | 180 jours | Oreonyx utilise ce cookie pour
              faciliter la connexion aux applications Oreonyx.
            </p>
            <p>
              intercom-id-[id] | 269 jours | Identifiant de visiteur anonyme
              pour Intercom.
            </p>
            <p>
              intercom-session-[id] | 7 jours | Identifiant pour chaque session
              de navigation unique pour Intercom.
            </p>
            <p>
              mp_[id]_mixpanel | 1 an | Utilisé par Mixpanel pour suivre les
              événements des utilisateurs à travers les applications Oreonyx.
            </p>
            <p>
              CLID | 1 an | Identifie la première fois que Clarity a vu cet
              utilisateur sur n&apos;importe quel site utilisant Clarity.
            </p>
            <p>
              MUID | 1 an 24 jours | Identifie les navigateurs web uniques qui
              visitent les sites Microsoft. Ces cookies sont utilisés pour la
              publicité, l&apos;analyse des sites et d&apos;autres objectifs
              opérationnels.
            </p>
            <p>
              bcookie | 2 ans | Cookie d&apos;identification du navigateur
              permettant d&apos;identifier de manière unique les appareils
              accédant à
              <a href="#" className="text-blue-500">
                LinkedIn
              </a>
              afin de détecter les abus sur la plateforme.
            </p>
            <p>
              li_gc | 2 ans | Utilisé pour stocker le consentement des invités
              concernant l&apos;utilisation de cookies à des fins non
              essentielles pour LinkedIn.
            </p>
            <p>
              lidc | 1 jour | Pour faciliter la sélection du centre de données
              pour LinkedIn.
            </p>
            <p>
              muc_ads | 2 ans | Cookie persistant utilisé par Twitter à des fins
              de personnalisation.
            </p>
            <p>
              personalization_id | 2 ans | Cookie persistant utilisé par Twitter
              à des fins de personnalisation.
            </p>
            <p>
              Veuillez noter que des tiers peuvent également utiliser des
              cookies sur lesquels nous n&apos;avons aucun contrôle. Ces tiers
              nommés peuvent inclure, par exemple, Intercom pour notre
              fonctionnalité de chat et nos courriels, ou des réseaux
              publicitaires et des fournisseurs de services externes tels que
              des services d&apos;analyse du trafic web. Ces cookies tiers sont
              susceptibles d&apos;être des cookies analytiques, des cookies de
              performance ou des cookies de ciblage.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer />
    </div>
  );
}
