import Image from "next/image";
import Link from "next/link";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";
import CTA from "@/components/ui/sections/CTA";

export default function page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="pt-24 pb-12 font-mono px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-32">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-full lg:w-10/12">
                  <h4 className="text-4xl md:text-5xl lg:text-7xl font-medium md:text-center">
                    Briser les obstacles d'un accès à une éducation de qualité
                  </h4>
                </div>
              </div>
              <div className="flex justify-center">
                <h6 className="text-gray-500 text-lg md:text-center">
                  Les technologies éducatives représentent la meilleure chance
                  de réinventer de fond en comble le système éducatif mondial
                  afin qu'il puisse bénéficier à tous, y compris les millions de
                  personnes qui n'ont pas accès à une éducation de qualité.
                </h6>
              </div>
              <div className="flex justify-center">
                <h6 className="text-gray-500 lg:text-lg md:text-center">
                  Les avantages économiques et sociaux de l'accès de tous à une
                  éducation de qualité sont considérables. En plus de garantir
                  une meilleure qualité de vie pour les individus, une éducation
                  de qualité est essentielle pour améliorer l'employabilité des
                  jeunes. C'est pourquoi nous travaillons à développer une pile
                  de technologies éducatives en tant que service, que toute
                  institution peut utiliser pour offrir à ses étudiants des
                  opportunités éducatives équitables et de qualité, basées sur
                  les dernières innovations technologiques. Ainsi, nous
                  contribuons à former une nouvelle génération de travailleurs
                  compétents et qualifiés, prêts à relever les défis du marché
                  du travail et à contribuer à la croissance économique.
                </h6>
              </div>
              <div className="flex md:justify-center pt-6">
                <Link
                  href="https://app.oreonyx.live"
                  className="px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 flex"
                >
                  <span> Contacter-nous </span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-3">
              <h6 className="text-base text-green-500">Notre équipe</h6>
              <h2 className="text-5xl">
                Une équipe croissante de professionnels des produits, de la
                technologie et des services éducatifs.
              </h2>
            </div>
            <div className="w-full flex">
              <div className="hidden lg:inline w-3/12"></div>
              <div className="w-full lg:w-9/12 grid grid-cols-2 md:grid-cols-3 gap-5 font-sans">
                <div className="space-y-3">
                  <div className="rounded-xl bg-green-200 h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                      layout="fill"
                      objectFit="cover"
                      className="grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Segbaya K. Benoit</h5>
                    <h5 className="text-base">Co-founder, CEO</h5>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-green-200 h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                      layout="fill"
                      objectFit="cover"
                      className="grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Keleou Amelie</h5>
                    <h5 className="text-base">Co-founder, COO</h5>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-green-200 h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="https://images.unsplash.com/photo-1620932934121-64b011924f08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                      layout="fill"
                      objectFit="cover"
                      className="grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Bonsoa Ayén</h5>
                    <h5 className="text-base">Co-founder, CTO</h5>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-green-200 h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="https://images.unsplash.com/photo-1620511469298-7c119cc6982c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                      layout="fill"
                      objectFit="cover"
                      className="grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Amadou Arouna</h5>
                    <h5 className="text-base">Lead Cloud Architect</h5>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-green-200 h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="https://images.unsplash.com/photo-1631598064992-f1c204d466b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                      layout="fill"
                      objectFit="cover"
                      className="grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Bonsoa Mabagou</h5>
                    <h5 className="text-base">Designer</h5>
                  </div>
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
