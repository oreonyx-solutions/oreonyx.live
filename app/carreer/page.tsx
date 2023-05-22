//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";

import { ArrowRight, MailCheck } from "lucide-react";

export default function page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="font-mono pt-12 lg:pt-24 space-y-12 px-4 md:px-6  xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-10">
          <h1 className="text-2xl md:hidden">
            <span className="text-green-500">Construire </span>une platforme
            innovante vecteur d&apos;évolution de pensées et d&apos;idées
          </h1>
          <div className="prose prose-base lg:prose-lg">
            <h1 className="hidden md:inline">
              <span className="text-green-500">Construire </span>une platforme
              innovante vecteur d&apos;évolution de pensées et d&apos;idées
            </h1>
            <div>
              <h5>
                Chez Oreonyx, notre objectif est de révolutionner
                l&apos;écosystème de l&apos;éducation supérieure en fournissant
                une plateforme de gestion intégrée de nouvelle génération.
              </h5>
              <p>
                Nous sommes convaincus que les solutions actuelles sont
                obsolètes et qu&apos;il est temps de repenser complètement la
                manière dont les établissements d&apos;enseignement supérieur
                gèrent leurs processus administratifs et pédagogiques.
              </p>
              <p>
                Pour cela, nous mettons à disposition une solution innovante qui
                permet d&apos;améliorer l&apos;expérience étudiante et de
                faciliter la gestion administrative. Nous offrons des outils de
                collaboration et de formation à distance pour répondre aux
                besoins des établissements d&apos;enseignement supérieur
                modernes.
              </p>
              <blockquote>
                Notre mission est de simplifier la gestion administrative de
                l&apos;enseignement supérieur avec des outils innovants pour une
                meilleure expérience étudiante.
              </blockquote>
              <p>
                Nous sommes déterminés à construire une entreprise qui reflète
                les équipes, les communautés et le monde pour lequel nous
                construisons. Nous cherchons toujours à nous assurer que chacun
                chez Oreonyx est vu, entendu, valorisé et habilité à faire son
                meilleur travail.
              </p>
              <figure>
                <img
                  alt="source data"
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                />
                <figcaption>
                  Nous sommes à la recherche des meilleurs talents en
                  ingénierie, design, marketing et vente pour rejoindre notre
                  mission de révolutionner l&apos;écosystème de l&apos;éducation
                  supérieure. Venez nous rejoindre dans cette aventure !
                </figcaption>
              </figure>
            </div>
          </div>
          <hr className="my-12 lg:my-32" />
          <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Postes à pourvoir
            </h4>
            <div className="w-full lg:flex lg:space-x-3 space-y-10 lg:space-y-0">
              <div className="space-y-6 w-full md:w-9/12 lg:w-7/12 lg:pr-16">
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Design</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Design
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="hidden items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Product Designer
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Engineering</h5>
                  <div className="space-y-3">
                    <div className="hidden items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Senior Frontend Engineer
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Junior Backend Engineer
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="hidden items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Senior - Staff Infrastructure Engineer
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Senior - Staff Mobile Engineer (Hybrid)
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Sales</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Social Media Management
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Senior - Product Support Specialist
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Finance</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Finance
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Data</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Data and Aquisition
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="hidden items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Junior Data Scientist
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Legal</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Legal Affairs
                        </h6>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            Voir{" "}
                            <span className="hidden md:inline">le poste</span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="w-full md:w-8/12 lg:w-full space-y-3 rounded-xl p-6 bg-gradient-to-tr from-black via-black to-green-300 text-white">
                  <h5 className="text-lg font-medium">Avantages & Bénéfices</h5>
                  <div className="pl-3">
                    <ul className="list-decimal">
                      <li>
                        Equilibre entre vie professionnelle et vie privée.
                      </li>
                      <li>Salaire & Equité compétitifs.</li>
                      <li>
                        Conditions de participation favorables aux employés
                        (exercices anticipé et prolongé au Togo).
                      </li>
                      <li>
                        Travail à distance, pas d&apos;obligation de déplacement
                        vers le bureau.
                      </li>
                      <li>
                        Assurance maladie, soins dentaire et soins de la vue
                        (Togo).
                      </li>
                      <li>5 semaines de congés payés, congé parental.</li>
                      <li>Mackbook Pro M2, écran 5K et accessoires.</li>
                      <li>
                        Dejeuner et café payés pendants les jours de travail.
                      </li>
                      <li>
                        Evenements réguliers de l&apos;équipe et hors-sites.
                      </li>
                      <li>Cours d&apos;anglais approfondi</li>
                      <li>Semaines de hack trimestrielles.</li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-full space-y-6">
                  <h4 className="text-xl md:text-2xl font-medium">
                    Vous souhaitez nous contacter pour un poste en particulier?
                    un stage ou juste pour discuter autour d'un bon café?
                  </h4>
                  <div className="flex w-full ">
                    <a
                      href="mailto:carreers@oreonyx.live"
                      className="px-6 py-3 border-2 hover:bg-black hover:text-white border-gray-900 uppercase flex space-x-2 items-center"
                    >
                      <span className="font-medium">Envoyez-nous un mail</span>
                      <MailCheck className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer />
    </div>
  );
}
