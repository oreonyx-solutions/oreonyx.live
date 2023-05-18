import Image from "next/image";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";

export default function page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="font-mono pt-24 space-y-12 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-10">
          <div className="prose lg:prose-lg">
            <h1>
              <span className="text-green-500">Construire </span>une plateforme
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
                <Image
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
            <h4 className="text-4xl font-semibold">Postes à pourvoir</h4>
            <div className="w-full lg:flex lg:space-x-3 space-y-10 lg:space-y-6">
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h5 className="text-xl font-semibold mb-2">
                    Développeur Front-End
                  </h5>
                  <p>
                    Nous recherchons un développeur Front-End passionné pour
                    rejoindre notre équipe et contribuer à la création
                    d&apos;une plateforme éducative innovante. Vous serez
                    responsable du développement et de la maintenance des
                    interfaces utilisateur de notre application, en utilisant
                    les dernières technologies Web.
                  </p>
                  <ul className="mt-4">
                    <li>
                      Expérience dans le développement Front-End avec HTML, CSS,
                      JavaScript, React.js
                    </li>
                    <li>
                      Connaissance des principes de conception d&apos;interface
                      utilisateur et de l&apos;expérience utilisateur (UX)
                    </li>
                    <li>
                      Capacité à travailler en équipe et à communiquer
                      efficacement
                    </li>
                  </ul>
                  <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    Postuler maintenant
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h5 className="text-xl font-semibold mb-2">Designer UX/UI</h5>
                  <p>
                    Nous sommes à la recherche d&apos;un designer UX/UI
                    talentueux pour créer des interfaces utilisateur intuitives
                    et attrayantes pour notre plateforme éducative. Vous
                    travaillerez en étroite collaboration avec notre équipe de
                    développement pour concevoir des expériences utilisateur
                    exceptionnelles qui répondent aux besoins de nos
                    utilisateurs.
                  </p>
                  <ul className="mt-4">
                    <li>
                      Expérience dans la conception d&apos;interfaces
                      utilisateur et de maquettes avec des outils tels que
                      Sketch, Figma ou Adobe XD
                    </li>
                    <li>
                      Compréhension approfondie des principes de conception
                      d&apos;interface utilisateur et de l&apos;expérience
                      utilisateur
                    </li>
                    <li>
                      Capacité à itérer rapidement en fonction des commentaires
                      des utilisateurs et des données d&apos;utilisation
                    </li>
                  </ul>
                  <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    Postuler maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
