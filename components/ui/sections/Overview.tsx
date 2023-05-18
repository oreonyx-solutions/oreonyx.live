import Image from "next/image";
import Link from "next/link";

export default function Overview() {
  return (
    <div>
      <div className="pb-0 pt-16 md:py-16 space-y-3">
        <div className="flex justify-center">
          <span className="text-lg text-transparent text-center md:text-lg font-bold bg-clip-text bg-gradient-to-r from-[#faf9f6] via-gray-900 to-[#faf9f6]">
            Une infrastructure solide grâce à des partenaires technique de
            confiance
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
          <h1
            id="features"
            className="text-center text-3xl md:text-6xl font-mono font-bold uppercase"
          >
            NOTRE OFFRE DE VALEUR{" "}
            <Link
              href="https://app.oreonyx.live"
              className="space-x-2 hidden absolute border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-4 py-2 rounded-3xl text-sm ml-4"
            >
              <div className="">
                <i className="text-2xl ri-arrow-right-up-line"></i>
              </div>
            </Link>
          </h1>
          <h3 className="text-xl font-mono text-center">
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
            <div className="font-mono w-full md:w-6/12 bg-[#e9e9e9] py-8 px-6 md:px-3 lg:px-6 rounded-3xl space-y-6">
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
                  <h5 className="text-3xl lg:text-4xl relative font-semibold">
                    Donnez vie à vos idées
                  </h5>
                  <p className="text-lg text-gray-800">
                    Créez et partagez du contenu attrayant avec des outils de
                    présentation, de dessin, de partage d&apos;écran et bien
                    plus encore. Transformez vos idées en réalité et engagez
                    votre public avec des présentations interactives et
                    dynamiques.
                  </p>
                </div>
                <div className="w-full">
                  <Link
                    href="https://app.oreonyx.live"
                    className="w-48 bg-gradient-to-r from-[#00b4ff] via-[#00f0ff] to-[#00ffdd] hover:bg-gradient-to-r hover:from-[#00f0ff] hover:via-[#00b4ff] hover:to-[#00ffdd] transition-colors duration-300 text-center text-white font-bold uppercase rounded-3xl py-2"
                  >
                    <span className="inline-block">Découvrir maintenant</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="font-mono w-full md:w-6/12 bg-[#e9e9e9] py-8 px-6 md:px-3 lg:px-6 rounded-3xl space-y-6">
              <div className="bg-[#faf9f6] h-52 rounded-3xl relative">
                <Image
                  alt="source data"
                  src="/illustrations/oreonyx_meeting.jpeg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
              <div className="w-full space-y-3">
                <div className="space-y-3">
                  <h5 className="text-3xl lg:text-4xl relative font-semibold">
                    Connectez-vous avec le monde
                  </h5>
                  <p className="text-lg text-gray-800">
                    Organisez des réunions en ligne avec des participants du
                    monde entier. Partagez des idées, collaborez en temps réel,
                    et renforcez les liens avec vos collègues, vos amis et votre
                    famille où que vous soyez. La communication n&apos;a jamais
                    été aussi simple et accessible.
                  </p>
                </div>
                <div className="w-full">
                  <Link
                    href="https://app.oreonyx.live"
                    className="w-48 bg-gradient-to-r from-[#00b4ff] via-[#00f0ff] to-[#00ffdd] hover:bg-gradient-to-r hover:from-[#00f0ff] hover:via-[#00b4ff] hover:to-[#00ffdd] transition-colors duration-300 text-center text-white font-bold uppercase rounded-3xl py-2"
                  >
                    <span className="inline-block">Découvrir maintenant</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:flex md:space-x-6">
            <div className="font-mono w-full md:w-6/12 bg-[#e9e9e9] py-8 px-6 md:px-3 lg:px-6 rounded-3xl space-y-6">
              <div className="bg-[#faf9f6] h-52 rounded-3xl relative">
                <Image
                  alt="source data"
                  src="/illustrations/oreonyx_learning.jpeg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
              <div className="w-full space-y-3">
                <div className="space-y-3">
                  <h5 className="text-3xl lg:text-4xl relative font-semibold">
                    Apprendre sans frontières
                  </h5>
                  <p className="text-lg text-gray-800">
                    Explorez une variété de cours en ligne dans différents
                    domaines. Apprenez à votre rythme, où que vous soyez, et
                    obtenez des certifications reconnues. Élargissez vos
                    connaissances, développez vos compétences et poursuivez vos
                    objectifs d&apos;apprentissage.
                  </p>
                </div>
                <div className="w-full">
                  <Link
                    href="https://app.oreonyx.live"
                    className="w-48 bg-gradient-to-r from-[#00b4ff] via-[#00f0ff] to-[#00ffdd] hover:bg-gradient-to-r hover:from-[#00f0ff] hover:via-[#00b4ff] hover:to-[#00ffdd] transition-colors duration-300 text-center text-white font-bold uppercase rounded-3xl py-2"
                  >
                    <span className="inline-block">Découvrir maintenant</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="font-mono w-full md:w-6/12 bg-[#e9e9e9] py-8 px-6 md:px-3 lg:px-6 rounded-3xl space-y-6">
              <div className="bg-[#faf9f6] h-52 rounded-3xl relative">
                <Image
                  alt="source data"
                  src="/illustrations/oreonyx_collaboration.jpeg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
              <div className="w-full space-y-3">
                <div className="space-y-3">
                  <h5 className="text-3xl lg:text-4xl relative font-semibold">
                    Collaborer en toute simplicité
                  </h5>
                  <p className="text-lg text-gray-800">
                    Travaillez efficacement avec votre équipe grâce à des outils
                    de collaboration avancés. Partagez des fichiers, échangez
                    des idées et coordonnez vos projets en temps réel.
                    Simplifiez votre flux de travail, améliorez la productivité
                    et atteignez vos objectifs plus rapidement.
                  </p>
                </div>
                <div className="w-full">
                  <Link
                    href="https://app.oreonyx.live"
                    className="w-48 bg-gradient-to-r from-[#00b4ff] via-[#00f0ff] to-[#00ffdd] hover:bg-gradient-to-r hover:from-[#00f0ff] hover:via-[#00b4ff] hover:to-[#00ffdd] transition-colors duration-300 text-center text-white font-bold uppercase rounded-3xl py-2"
                  >
                    <span className="inline-block">Découvrir maintenant</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
