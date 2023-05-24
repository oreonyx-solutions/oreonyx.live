"use client";

import React, { useState } from "react";
import Head from "next/head";

import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";
import Faq from "@/components/ui/sections/Faq";
import CTA from "@/components/ui/sections/CTA";
import Footer from "@/components/ui/sections/Footer";
import Overview from "@/components/ui/sections/Overview";

export default function Home() {
  return (
    <div className="bg-primary">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>
          Unified management, communication and networking platform for
          universities, businesses and individuals
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Oreonyx Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="Rejoignez Oreonyx Solutions" />
        <meta property="og:url" content="https://www.oreonyx.com" />
        <meta
          property="og:description"
          content="  A revolutionary digital platform for universities, students and
          businesses, promoting access to higher education and employability of
          young people."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/shogunmp7/image/upload/v1675845644/oreonyx_swzmsi.png"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:site_name" content="Oreonyx" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@oreonyxHQ" />
        <meta name="twitter:creator" content="@oreonyxHQ" />
        <meta property="twitter:url" content="https://oreonyx.com" />
        <meta
          property="twitter:image:alt "
          content="Rejoignez Oreonyx Solutions"
        />
        <meta property="twitter:title" content="Oreonyx Solutions" />
        <meta
          property="twitter:description"
          content="Plateforme unifiée pour booster la productivité et les interactions 
        au sein des universités via des outils complets et optimisées 
        de gestion, de communication et de réseautage."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/shogunmp7/image/upload/v1675845644/oreonyx_swzmsi.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Navbar />
      <Hero />
      <div className="md:px-6 text-gray-900">
        <Overview />
        <Faq />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
