"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Banner() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("isBannerClosed");
    setIsBannerVisible(isBannerClosed === null || isBannerClosed !== "true");
  }, []);

  const closeBanner = () => {
    localStorage.setItem("isBannerClosed", "true");
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) {
    return null; // Hide the banner if it's not visible
  }

  return (
    <div
      className={`bg-black py-2 text-white ${
        isBannerVisible ? "flex" : "hidden"
      } justify-center items-center relative w-full`}
    >
      <span className="line-clamp-1">
        <a href="#" className="hover:underline">
          <span className="lg:hidden">Nouvel article: Bêta Testing !</span>
          <span className="hidden lg:inline">
            Participez au Programme de Bêta Testing d&apos;Oreonyx : Contribuez
            à façonner la prochaine génération d&apos;outils éducatifs!
          </span>
        </a>
      </span>
      <button title="Fermer" className="absolute right-5" onClick={closeBanner}>
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
