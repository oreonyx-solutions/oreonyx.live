import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function Overview() {
  return (
    <div>
      <div className="pb-0 pt-16 md:py-16 space-y-3">
        <div className="flex justify-center">
          <span className="text-lg text-transparent text-center md:text-lg font-bold bg-clip-text bg-gradient-to-r from-[#faf9f6] via-gray-900 to-[#faf9f6]">
            <span className="lg:hidden">
              Des partenaires technique de confiance
            </span>
            <span className="hidden lg:inline">
              Une infrastructure solide grâce à des partenaires technique de
              confiance
            </span>
          </span>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-11/12 md:w-9/12 h-14 relative">
            <Image
              alt="source data"
              src="/Technical_partners_dkt.png"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 px-3 lg:px-12 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto space-y-6 md:space-y-12">
        <div className="space-y-8 md:w-full">
          <h1 className="text-center text-2xl md:text-6xl font-mono font-bold uppercase">
            NOTRE OFFRE DE VALEUR{" "}
          </h1>
          <h3 className="text-lg lg:text-xl font-mono text-center">
            Transformer l&apos;éducation, le monde professionnel et les
            organisations grâce à notre plateforme de communication 2.0.
            Facilitez l&apos;apprentissage à distance, renforcez la
            collaboration et soutenez des causes mondiales telles que la lutte
            contre le changement climatique. Favorisez l&apos;inclusion,
            encouragez la coopération et facilitez les prises de décisions
            stratégiques. Découvrez une nouvelle ère d&apos;interactions fluides
            et intuitives pour contribuer positivement à notre monde.
          </h3>
        </div>
        <div className="w-full space-y-6">
          <div className="space-y-6 md:space-y-0 md:flex md:space-x-6">
            <div className="font-mono w-full md:w-6/12 bg-[#e9e9e9] py-4 md:py-8 px-3 md:px-3 lg:px-6 rounded-3xl space-y-6">
              <div className="bg-[#faf9f6] h-52 rounded-3xl relative">
                <Image
                  alt="source data"
                  src="/illustrations/oreonyx_desktop.jpeg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
              <div className="w-full space-y-3">
                <div className="space-y-3">
                  <h5 className="text-xl lg:text-4xl relative font-semibold">
                    Espace de collaboration
                  </h5>
                  <p className="text-lg">
                    Embrasser cette nouvelle ère de communication, interagissez
                    de manière transparente avec vos collègues ou vos
                    collaborateurs grâce à notre espace de collaboration
                    d&apos;équipe. Partagez des fichiers, travaillez sur des
                    projets communs et communiquez efficacement pour accomplir
                    vos objectifs ensemble.
                  </p>
                  <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
                    <div className="hidden">
                      <Link
                        href="https://app.oreonyx.live"
                        className="px-6 py-2 border rounded-full hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex"
                      >
                        <span className="font-medium">Commencer</span>
                        <ArrowRight className="h-4 w-4 hidden md:inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="first font-mono w-full md:w-6/12 bg-[#e9e9e9] py-4 md:py-8 px-3 md:px-3 lg:px-6 rounded-3xl space-y-6">
              <div className="bg-[#faf9f6] h-52 rounded-3xl relative">
                <Image
                  alt="source data"
                  src="https://images.unsplash.com/photo-1612832164313-ac0d7e07b5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
              <div className="w-full space-y-3">
                <div className="space-y-3">
                  <h5 className="text-xl lg:text-4xl relative font-semibold">
                    Salle de classe virtuelle
                  </h5>
                  <p className="text-lg">
                    Participez à des cours en ligne interactifs via notre salle
                    de classe virtuelle avancée. Assistez à des présentations,
                    posez des questions et discuter en temps réel. Expérimentez
                    dès maintenant la plateforme qui utilise l&apos;intelligence
                    artificielle pour fournir des recommandations
                    d&apos;apprentissage personnalisées.
                  </p>
                  <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
                    <div className="hidden">
                      <Link
                        href="https://app.oreonyx.live"
                        className="px-6 py-2 border rounded-full hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex"
                      >
                        <span> Commencer</span>
                        <ArrowRight className="h-4 w-4 hidden md:inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/** App */}
            <div className="hidden font-mono w-full md:w-6/12 bg-[#e9e9e9] pt-10 pb-8 px-6 md:px-3 lg:px-6 rounded-3xl space-y-6 md:space-y-12">
              <div className="rounded-t-3xl flex bg-gradient-to-b from-[#faf9f6] via-[#faf9f6] to-transparent px-6">
                <div className="relative h-32">
                  <Image
                    alt="source data"
                    src="/illustrations/Workspace.png"
                    width={150}
                    height={0}
                    objectFit="contain"
                  />
                </div>
                <div className="h-32 relative">
                  <Image
                    alt="source data"
                    src="/illustrations/Collaboration.png"
                    width={150}
                    height={0}
                    objectFit="contain"
                  />
                </div>
                <div className="h-32 relative">
                  <Image
                    alt="source data"
                    src="/illustrations/Community.png"
                    width={150}
                    height={0}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="w-full space-y-1">
                <div className="flex justify-center px-4">
                  <div className="relative flex items-center space-x-2 pl-3 pr-5 py-0.5 rounded-2xl bg-gradient-to-tr from-green-500 via-green-500 to-green-300 text-white">
                    <span className="text-sm">Bientôt disponible</span>
                    <div className="top-0 -right-2 h-2 absolute flex justify-center items-center">
                      <Image
                        alt="source data"
                        src="/gifs/party-popper_1f389.png"
                        width={26}
                        height={26}
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-center px-4">
                    <h5 className="text-3xl lg:text-4xl relative text-center font-semibold">
                      <span className="hidden lg:inline">
                        Faites en plus avec
                      </span>{" "}
                      l&apos;application mobile !
                    </h5>
                  </div>
                  <div className="md:px-12 px-16">
                    <div className="lg:flex space-y-3 lg:space-y-0 lg:space-x-6">
                      <div className="px-3 py-2 bg-[#faf9f6] space-x-2 flex w-full">
                        <div className="w-3/12 flex items-center">
                          <i className="ri-google-play-fill text-3xl"></i>
                        </div>
                        <div className="w-9/12">
                          <div className="uppercase text-sm">Telecharger</div>
                          <div className="-mt-2 text-lg font-semibold">
                            Google play
                          </div>
                        </div>
                      </div>
                      <div className="px-3 py-2 bg-[#faf9f6] space-x-2 flex w-full">
                        <div className="w-3/12 flex items-center">
                          <i className="ri-apple-fill text-3xl"></i>
                        </div>
                        <div className="w-9/12">
                          <div className="uppercase text-sm">Telecharger</div>
                          <div className="-mt-2 text-lg font-semibold">
                            App Store
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:flex md:space-x-6">
            <div className="font-mono w-full md:w-6/12 bg-[#e9e9e9] py-4 md:py-8 px-3 md:px-3 lg:px-6 rounded-3xl space-y-6">
              <div className="bg-[#faf9f6] h-52 rounded-3xl relative">
                <Image
                  alt="source data"
                  src="https://images.unsplash.com/photo-1573497161223-d9c42d7b0bad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
              <div className="w-full space-y-3">
                <div className="space-y-3">
                  <h5 className="text-xl lg:text-4xl relative font-semibold">
                    Emplois et Stages
                  </h5>
                  <p className="text-lg">
                    Accès privilégié à une multitude d&apos;opportunités
                    professionnelles. Que vous soyez étudiant à la recherche
                    d&apos;un stage ou d&apos;un emploi à temps partiel, ou
                    diplômé en quête d&apos;une carrière prometteuse, notre
                    plateforme vous connecte avec des entreprises de renom à la
                    recherche de talents exceptionnels.
                  </p>
                  <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
                    <div className="hidden">
                      <Link
                        href="https://app.oreonyx.live"
                        className="px-6 py-2 border rounded-full hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex"
                      >
                        <span> Commencer</span>
                        <ArrowRight className="h-4 w-4 hidden md:inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="first font-mono w-full md:w-6/12 bg-[#e9e9e9] py-4 md:py-8 px-3 md:px-3 lg:px-6 rounded-3xl space-y-6">
              <div className="bg-[#faf9f6] h-52 rounded-3xl relative">
                <Image
                  alt="source data"
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
              <div className="w-full space-y-3">
                <div className="space-y-3">
                  <h5 className="text-xl lg:text-4xl relative font-semibold">
                    Analytique pour tous
                  </h5>
                  <p className="text-lg">
                    Notre outil d&apos;analyse de données convivial est
                    accessible à tous les acteurs. Étudiants, enseignants,
                    entreprises et organisations peuvent explorer, interpréter
                    et prendre des décisions éclairées. Maximisez votre
                    potentiel grâce à des visualisations intuitives et des
                    fonctionnalités d&apos;analyse avancées.
                  </p>
                  <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
                    <div className="hidden">
                      <Link
                        href="https://app.oreonyx.live"
                        className="px-6 py-2 border rounded-full hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex"
                      >
                        <span> Commencer</span>
                        <ArrowRight className="h-4 w-4 hidden md:inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
