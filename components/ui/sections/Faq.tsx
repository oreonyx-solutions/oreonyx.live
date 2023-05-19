import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { MailCheck } from "lucide-react";

export default function Faq() {
  return (
    <div className="my-24 lg:my-24 px-6 lg:px-6 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto space-y-6 font-mono">
      <div className="flex justify-center">
        <div className="w-full md:w-8/12">
          <h1 className="text-4xl lg:text-6xl text-center font-bold uppercase">
            Foire aux questions!{" "}
          </h1>
        </div>
      </div>
      <div className="space-y-12">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12">
            <Accordion
              className="text-base lg:text-lg"
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="uppercase">
                  C&apos;est quoi Oreonyx?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx est une plateforme numérique innovante qui met le
                  numérique au service de l&apos;écosystème universitaire. Notre
                  mission est d&apos;améliorer l&apos;accès à
                  l&apos;enseignement supérieur et l&apos;employabilité des
                  jeunes en offrant des outils performants pour gérer
                  efficacement les universités, augmenter la qualité de
                  l&apos;enseignement à distance et optimiser les collaborations
                  entre les étudiants, les universités, les entreprises et les
                  organisations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="uppercase">
                  Comment rejoindre Oreonyx?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx est actuellement en phase bêta, ce qui signifie
                  qu&apos;il n&apos;est accessible qu&apos;à un nombre limité de
                  personnes. Pour rejoindre le programme de bêta-testeurs, il
                  vous suffit de remplir ce{" "}
                  <a
                    className="underline"
                    target="_blank"
                    href="https://tally.so/r/nrBOep"
                  >
                    formulaire
                  </a>
                  . Nous vous tiendrons informé de votre éligibilité.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="uppercase">
                  <span className="hidden lg:inline">
                    Quels sont les avantages pour les universités ?
                  </span>
                  <span className="lg:hidden">
                    Avantages pour les universités ?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  L&apos;utilisation d&apos;Oreonyx présente plusieurs avantages
                  pour les universités, tels que la gestion simplifiée des
                  programmes d&apos;études, des outils de suivi et
                  d&apos;évaluation des performances des étudiants, la
                  possibilité de proposer un enseignement à distance de qualité,
                  ainsi que des fonctionnalités de collaboration et de mise en
                  réseau entre les étudiants, les universités, les entreprises
                  et les organisations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="uppercase">
                  <span className="hidden lg:inline">
                    Comment Oreonyx améliore l&apos;enseignement à distance?
                  </span>
                  <span className="lg:hidden">
                    L&apos;enseignement à distance?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx offre une gamme de fonctionnalités pour améliorer
                  l&apos;enseignement à distance, telles que des salles de
                  classe virtuelles interactives, des outils de partage de
                  contenus multimédias, des forums de discussion pour faciliter
                  les échanges entre les étudiants et les enseignants, ainsi que
                  des options d&apos;évaluation en ligne.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="uppercase">
                  <span className="hidden lg:inline">
                    Comment favorise-t-il la collaboration entre les parties
                    prenantes?
                  </span>
                  <span className="lg:hidden">
                    Collaborations entre les parties?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx facilite la collaboration en fournissant des outils de
                  communication et de partage d&apos;informations avancés. Les
                  étudiants peuvent interagir avec d&apos;autres étudiants, des
                  enseignants, des représentants d&apos;entreprises et des
                  professionnels, ce qui favorise les échanges, les stages, les
                  opportunités de mentorat et les partenariats académiques.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="uppercase">
                  <span className="hidden lg:inline">
                    Oreonyx offre t&apos;il un support technique aux
                    utilisateurs?
                  </span>
                  <span className="lg:hidden">
                    Offrez-vous un support technique?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oui, Oreonyx propose un support technique dédié aux
                  utilisateurs. Notre équipe de support est disponible pour
                  répondre à vos questions, résoudre les problèmes techniques et
                  fournir une assistance pour garantir une expérience fluide sur
                  la plateforme.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="uppercase">
                  <span className="hidden lg:inline">
                    Quels types d&apos;outils de gestion sont disponibles pour
                    les universités ?
                  </span>
                  <span className="lg:hidden">
                    Quel sont les outils de gestion?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx propose une variété d&apos;outils de gestion pour les
                  universités, notamment la gestion des emplois du temps, des
                  examens et des évaluations, des données étudiantes, des
                  inscriptions, ainsi que des fonctionnalités de reporting et
                  d&apos;analyse pour suivre les performances et les progrès des
                  étudiants.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="uppercase">
                  <span className="hidden lg:inline">
                    Comment Oreonyx contribue-t-il à l&apos;employabilité des
                    étudiants ?
                  </span>
                  <span className="lg:hidden">
                    L&apos;employabilité des étudiants?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx favorise l&apos;employabilité des étudiants en offrant
                  des opportunités de connexion avec des entreprises et des
                  organisations partenaires. Les étudiants peuvent accéder à des
                  offres de stages, à des programmes de mentorat, à des
                  ressources de développement professionnel et à des événements
                  de réseautage pour renforcer leurs compétences et leurs
                  perspectives d&apos;emploi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="uppercase">
                  <span className="hidden lg:inline">
                    Quelle est la disponibilité géographique d&apos;Oreonyx?
                  </span>
                  <span className="lg:hidden">
                    Disponibilité géographique d&apos;Oreonyx?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx est une plateforme accessible à l&apos;échelle
                  mondiale. Tant que vous disposez d&apos;une connexion
                  Internet, vous pouvez accéder à Oreonyx depuis n&apos;importe
                  quel endroit et participer à ses fonctionnalités,
                  indépendamment de votre emplacement géographique.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex justify-center w-full ">
          <a
            href="mailto:support@oreonyx.live"
            className="space-x-2 px-6 py-3 border-2 hover:bg-black hover:text-white border-gray-900 uppercase flex items-center first-line:space-x-2"
          >
            <span className="hidden lg:inline font-medium">
              Contactez-nous directement par mail
            </span>
            <span className="lg:hidden font-medium">
              Contactez-nous par mail
            </span>
            <MailCheck className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
