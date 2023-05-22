import { X } from "lucide-react";

export default function Banner() {
  return (
    <div className="bg-black py-2 text-white flex justify-center items-center relative w-full">
      <span className="line-clamp-1">
        <a href="#" className="hover:underline">
          <span className="lg:hidden">Nouvel article: Bêta Testing !</span>
          <span className="hidden lg:inline">
            Participez au Programme de Bêta Testing d&apos;Oreonyx : Contribuez
            à façonner la prochaine génération d&apos;outils éducatifs!
          </span>
        </a>
      </span>
      <button title="Fermer" className="absolute right-5">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
