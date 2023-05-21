import Image from "next/image";
import Link from "next/link";

//gonna unistall this
import ReactPlayer from "react-player";

import { X } from "lucide-react";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";
import Faq from "@/components/ui/sections/Faq";
import CTA from "@/components/ui/sections/CTA";
import Footer from "@/components/ui/sections/Footer";
import Overview from "@/components/ui/sections/Overview";

//styles
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="bg-primary">
      <div className="bg-black py-2 text-white flex justify-center items-center relative">
        <span className="line-clamp-1">
          <a href="#" className="hover:underline">
            <span className="lg:hidden">Nouvel article: Bêta Testing !</span>
            <span className="hidden lg:inline">
              Participez au Programme de Bêta Testing d&apos;Oreonyx :
              Contribuez à façonner la prochaine génération d&apos;outils
              éducatifs!
            </span>
          </a>
        </span>
        <button title="Fermer" className="absolute right-5">
          <X className="h-5 w-5" />
        </button>
      </div>
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
