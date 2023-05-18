import Image from "next/image";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="font-mono py-24 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
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
              <button className="px-6 py-2 border-2 bg-black text-white border-gray-900 uppercase flex items-center space-x-2">
                <span>Télécharger tous les fichiers</span>
                <i className="ri-arrow-down-line"></i>
              </button>
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
                        src="/oreonyx_default.png"
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
                        src="/oreonyx_default_dark.png"
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
                      Cette version comporte un mot-symbole blanc pour une
                      meilleure lisibilité sur des fonds sombres ou chargés.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <button className="px-6 py-2 border-2 bg-black text-white border-gray-900 uppercase flex items-center space-x-2">
                  <span>Télécharger les logos primaires</span>
                  <i className="ri-arrow-down-line"></i>
                </button>
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
          <button className="px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase flex items-center space-x-2">
            <span>Télécharger tous les fichiers</span>
            <i className="ri-arrow-down-line"></i>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
