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
