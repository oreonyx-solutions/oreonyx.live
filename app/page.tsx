"use client";

import { useState } from "react";
import { useIntl } from "react-intl";

import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";
import Faq from "@/components/ui/sections/Faq";
import CTA from "@/components/ui/sections/CTA";
import Footer from "@/components/ui/sections/Footer";
import Overview from "@/components/ui/sections/Overview";
import enMessages from "@/locales/en.json";
import frMessages from "@/locales/fr.json";

interface Messages {
  [key: string]: { [key: string]: string };
}

const messages: Messages = {
  en: enMessages,
  fr: frMessages,
};

export default function Home() {
  const intl = useIntl();
  const [language, setLanguage] = useState("fr");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="bg-primary">
      <h1>{intl.formatMessage({ id: "home.title" })}</h1>
      <Navbar />
      <Hero />
      <div className="md:px-6 text-gray-900">
        <Overview />
        <Faq />
        <CTA />
        <Footer language={language} onLanguageChange={setLanguage} />
      </div>
    </div>
  );
}
