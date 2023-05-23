"use client";

import { useState } from "react";
import { useIntl } from "react-intl";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";
import Faq from "@/components/ui/sections/Faq";
import CTA from "@/components/ui/sections/CTA";
import Footer from "@/components/ui/sections/Footer";
import Overview from "@/components/ui/sections/Overview";

// Rest of the imports and component code
export default function Home() {
  const intl = useIntl();
  const [language, setLanguage] = useState("fr"); // Initialize the language state with the default language

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
