"use client";

import React, { useState } from "react";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="font-mono lg:pt-32 lg:pb-32 pt-32 pb-24 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-12 w-full">
          <div className="space-y-6 lg:space-y-0 lg:flex justify-between">
            <div className="w-full md:w-8/12 lg:w-6/12 space-y-8">
              <h5 className="text-5xl font-medium">
                Politique de confidentialité
              </h5>
              <h4 className="text-xl">
                Oreonyx prend très au sérieux la sécurité de vos données et de
                notre infrastructure. Nous nous engageons à fournir un
                environnement sûr, sécurisé et disponible pour tous nos clients,
                à tout moment.
              </h4>
              <h6 className="text-lg text-gray-600">
                Dernière mise à jour: Avril 2023
              </h6>
            </div>
          </div>
          <div className="prose lg:prose-xl">
            <h4>1. Introduction</h4>
            <p>
              La présente politique de confidentialité définit la manière dont
              nous, Oreonyx Limited, anciennement F Stack Limited et opérant
              sous le nom d&apos;Oreonyx, dont le siège social est situé Office
              25.3, 25 Easton Street, London, WC1X 0DS, Angleterre, collectons
              et traitons vos données à caractère personnel et explique vos
              droits concernant vos données à caractère personnel. Si vous avez
              des questions sur la présente politique de confidentialité ou si
              vous souhaitez exercer l&apos;un de vos droits relatifs à vos
              données personnelles, vous pouvez nous contacter à l&apos;adresse
              ci-dessus ou par courrier électronique à l&apos;adresse
              support@oreonyx.live. Notre méthode de contact préférée est le
              courrier électronique.
            </p>
            <p>
              La présente politique de protection de la vie privée a une
              incidence sur vos droits et obligations juridiques ; veuillez donc
              la lire attentivement. Si vous n&apos;acceptez pas d&apos;être lié
              par cette politique de confidentialité, veuillez ne pas nous
              fournir vos données personnelles ou demander à votre employeur de
              ne pas le faire.
            </p>
            <p>
              Nous pouvons mettre à jour la présente politique de
              confidentialité de temps à autre, à notre discrétion, et en
              particulier pour refléter toute modification des lois applicables.
              Si nous le faisons et que les changements affectent
              substantiellement vos droits ou obligations, nous prendrons des
              mesures commercialement raisonnables pour vous en informer. Dans
              le cas contraire, il vous incombe de consulter régulièrement la
              présente politique de protection de la vie privée afin de prendre
              connaissance de toute modification qui y serait apportée.
            </p>
            <p>
              Nous pouvons collecter vos données personnelles parce que vous
              nous les fournissez, ou parce que votre employeur ou un collègue
              est notre client et souhaite créer un compte pour que vous
              puissiez accéder à notre plateforme. Dans ce cas, nous sommes le
              responsable du traitement de vos données à caractère personnel.
            </p>
            <p>
              Il se peut également que nous recevions vos données à caractère
              personnel par l&apos;intermédiaire de notre plateforme parce que
              l&apos;un de nos clients a téléchargé vos données dans son compte
              sur notre plateforme. Dans ce cas, nous sommes le responsable du
              traitement de vos données à caractère personnel et nous ne
              traiterons vos données à caractère personnel que conformément aux
              instructions du client.
            </p>
            <p>
              Dans certains cas, nous pouvons permettre à certains développeurs
              ou utilisateurs d&apos;accéder à l&apos;API d&apos;Oreonyx afin de
              développer certaines applications permettant
              l&apos;interopérabilité entre une plateforme tierce et les
              services d&apos;Oreonyx (chacune étant une &apos; application
              d&apos;intégration &apos;). Chaque application d&apos;intégration
              sera développée de manière indépendante et aux risques et périls
              du développeur. En conséquence, chaque développeur d&apos;une
              application d&apos;intégration sera considéré comme un contrôleur
              distinct et indépendant de toutes les données personnelles que
              vous pouvez partager en utilisant cette application
              d&apos;intégration, et vous serez soumis aux conditions et à la
              politique de confidentialité distinctes de l&apos;application
              d&apos;intégration. Nous vous encourageons à lire les conditions
              et la politique de confidentialité de chaque application
              d&apos;intégration que vous pouvez utiliser dans le cadre de nos
              services.
            </p>
            <p>
              Ce site web n&apos;est pas destiné aux enfants et nous ne
              collectons pas sciemment des données relatives aux enfants.
            </p>
            <p>
              Ce site web peut inclure des liens vers des sites web, des
              plug-ins et des applications de tiers (y compris des applications
              d&apos;intégration). Le fait de cliquer sur ces liens ou
              d&apos;activer ces connexions peut permettre à des tiers de
              collecter ou de partager des données vous concernant. Nous ne
              contrôlons pas ces sites web tiers et ne sommes pas responsables
              de leurs déclarations de confidentialité. Lorsque vous quittez
              notre site web, nous vous encourageons à lire la politique de
              confidentialité de chaque site web que vous visitez.
            </p>
            <h4>
              2. Quelles sont les données à caractère personnel que nous
              collectons et auprès de qui ? Par données à caractère personnel,
              nous entendons toute information identifiable vous concernant,
              telle que votre nom, votre adresse électronique, votre sexe, votre
              date de naissance, votre numéro de téléphone mobile et personnel,
              votre adresse IP ou une photo de vous que vous téléchargez sur
              notre plateforme. Nous nous réservons le droit d&apos;anonymiser
              et/ou de pseudonymiser ces données personnelles afin qu&apos;elles
              ne soient plus personnellement identifiables et de les utiliser
              sous une forme anonyme et/ou pseudonymisée à des fins commerciales
              internes, à des fins d&apos;analyse ou à d&apos;autres fins de
              temps à autre.
            </h4>
            <p>
              Nous pouvons obtenir des catégories particulières de données à
              caractère personnel vous concernant si vous ou un client
              choisissez de nous fournir ces données. Les catégories spéciales
              de données à caractère personnel sont les données concernant votre
              race ou votre origine ethnique, vos opinions politiques, vos
              croyances religieuses ou philosophiques, votre appartenance à un
              syndicat, vos données génétiques, vos données biométriques, vos
              données relatives à la santé ou à la vie sexuelle ou à
              l&apos;orientation sexuelle.
            </p>
            <p>2.1 Données que vous nous fournissez</p>
            <p>
              Il peut arriver que vous nous fournissiez des données à caractère
              personnel. Cela peut être dû au fait que vous souhaitez
            </p>
            <ul>
              <li>utiliser notre site web ;</li>
              <li>utiliser notre application mobile</li>
              <li>postuler à un emploi chez nous ;</li>
              <li>nous fournir des services ;</li>
              <li>
                vous abonner pour recevoir des courriels de mise à jour des
                produits de notre part ; ou
              </li>
              <li>
                nous contacter de toute autre manière, y compris pour des
                questions, des commentaires ou des réclamations.
              </li>
            </ul>
            <p>
              Vous pouvez nous fournir des données personnelles directement, ou
              par l&apos;intermédiaire de nos plateformes de médias sociaux ou
              d&apos;une application d&apos;intégration, ou d&apos;autres
              personnes peuvent fournir vos données personnelles, par exemple
              pour vous ajouter à l&apos;espace de travail de votre équipe.
            </p>
            <p>
              Nous traiterons toutes ces données personnelles conformément à la
              présente politique de confidentialité. Certaines données à
              caractère personnel doivent obligatoirement nous être fournies
              pour que nous puissions répondre à votre demande, par exemple pour
              vous fournir des services, et nous vous l&apos;indiquerons
              clairement au moment de la collecte des données à caractère
              personnel.
            </p>
            <p>
              Lorsque nous devons collecter des données à caractère personnel en
              vertu de la loi ou d&apos;un contrat conclu avec vous et que vous
              ne nous fournissez pas ces données lorsque nous vous le demandons,
              il se peut que nous ne soyons pas en mesure d&apos;exécuter le
              contrat que nous avons conclu ou que nous essayons de conclure
              avec vous (par exemple, pour vous fournir nos services). Dans ce
              cas, il se peut que nous devions annuler un produit ou un service
              que vous avez souscrit auprès de nous, mais nous vous en
              informerons à ce moment-là.
            </p>
            <p>
              Toutes les données à caractère personnel que vous nous fournissez
              doivent être vraies, complètes et exactes. À notre demande, vous
              devez fournir rapidement une preuve de votre identité. Si vous
              nous fournissez des données inexactes ou fausses et que nous
              soupçonnons ou identifions une fraude, nous l&apos;enregistrerons
              et nous pourrons également le signaler. Lorsque vous nous
              contactez par courrier électronique ou postal, nous pouvons
              conserver une trace de la correspondance et nous pouvons également
              enregistrer tout appel téléphonique que nous avons avec vous.
            </p>
            <p>2.2 Données que nous collectons automatiquement à votre sujet</p>
            <p>
              Lorsque vous utilisez notre site web ou notre application mobile,
              nous collectons et stockons automatiquement des informations sur
              votre appareil et vos activités. Ces informations peuvent inclure
              :
            </p>
            <ul>
              <li>
                des informations techniques sur votre appareil telles que le
                type d&apos;appareil, le navigateur web ou le système
                d&apos;exploitation ;
              </li>
              <li>
                vos préférences et paramètres tels que le fuseau horaire et la
                langue ; et
              </li>
              <li>
                la durée d&apos;utilisation du site web/de l&apos;application et
                les services et fonctionnalités que vous avez utilisés.
              </li>
            </ul>
            <p>
              Certaines de ces informations sont collectées à l&apos;aide de
              cookies et de technologies de suivi similaires. Si vous souhaitez
              en savoir plus sur les types de cookies que nous utilisons,
              pourquoi et comment vous pouvez les contrôler, veuillez consulter
              notre Politique en matière de cookies.
            </p>
            <p>
              2.3 Type de données que nous collectons automatiquement à partir
              de services tiers connectés, tels que Google Services, Dropbox,
              Microsoft Outlook et Microsoft OneDrive.
            </p>
            <p>
              Vous pouvez choisir l&apos;option de vous connecter à des services
              tiers ou d&apos;y accéder afin d&apos;accéder à ces informations à
              partir de l&apos;application Oreonyx et, dans ce cas, nous
              collecterons et stockerons automatiquement vos données
              d&apos;utilisateur auprès de ce tiers. Ces données peuvent inclure
            </p>
            <ul>
              <li>Profil de la tierce partie</li>
              <li>Nom de l&apos;utilisateur</li>
              <li>l&apos;adresse e-mail</li>
              <li>
                Courrier électronique (contenu, pièces jointes et métadonnées)
              </li>
              <li>le calendrier</li>
              <li>Fichiers</li>
            </ul>
            <p>2.4 Données que nous recevons d&apos;autres personnes</p>
            <p>
              Comme indiqué ci-dessus, votre employeur ou un collègue peut de
              temps à autre nous fournir des données personnelles vous
              concernant (par exemple, votre adresse électronique) afin que vous
              puissiez créer un compte sur notre plateforme, ou l&apos;un de nos
              fournisseurs peut nous envoyer des données personnelles que nous
              téléchargeons sur notre plateforme. Si un tiers, tel que votre
              employeur ou un collègue, nous fournit votre adresse électronique
              qui est votre adresse électronique personnelle et non
              professionnelle, vous devez nous contacter pour nous en informer
              et nous supprimerons ces données.
            </p>
            <p>
              Nous pouvons également recevoir des données personnelles vous
              concernant de la part d&apos;une application d&apos;intégration,
              de nos fournisseurs de paiement et/ou de nos partenaires de
              services de sécurité du site web, en particulier en cas
              d&apos;utilisation abusive de la plateforme, y compris
              l&apos;introduction de virus ou d&apos;autres logiciels
              malveillants.
            </p>
            <p>
              Si vous postulez à un emploi chez nous, nous pouvons recevoir des
              données personnelles vous concernant de la part de votre ancien
              employeur ou d&apos;une autre référence.
            </p>
            <h4>
              3. Utilisation licite de vos données personnelles Nous
              n&apos;utiliserons vos données à caractère personnel que si nous
              disposons d&apos;une base légale pour le faire. Les motifs
              légitimes sur lesquels nous nous appuyons dans le cadre de la
              présente politique de protection de la vie privée sont les
              suivants :
            </h4>
            <ul>
              <li>
                le consentement (lorsque vous choisissez de le fournir, par
                exemple lorsque vous choisissez d&apos;utiliser une application
                d&apos;intégration pour partager vos données entre Oreonyx et un
                tiers, et jamais pour les données provenant des services Google
                connectés) ;
              </li>
              <li>
                l&apos;exécution de notre contrat avec vous, votre employeur ou
                votre collègue ;
              </li>
              <li>le respect des exigences légales ; et</li>
              <li>
                les intérêts légitimes. Lorsque nous faisons référence aux
                intérêts légitimes, nous entendons nos intérêts commerciaux
                légitimes dans le cadre du fonctionnement normal de notre
                entreprise, qui n&apos;ont pas d&apos;impact matériel sur vos
                droits, votre liberté ou vos intérêts.
              </li>
            </ul>
            <p>
              Nous n&apos;utiliserons vos données personnelles que si nous
              disposons d&apos;une base légale pour le faire. La manière dont
              nous utilisons vos données personnelles dépend de la raison pour
              laquelle nous les avons collectées.
            </p>
            <p>
              3.1 Utilisation de données provenant de votre employeur ou
              d&apos;un collègue qui utilise Oreonyx
            </p>
            <p>
              Si nous avons reçu vos données personnelles parce que vous êtes
              employé par une société qui utilise Oreonyx comme CRM ou parce
              qu&apos;un collègue utilise Oreonyx pour de tels services et vous
              invite à collaborer sur son espace de travail, nous traiterons vos
              données personnelles pour exécuter tout contrat que nous avons
              conclu avec votre employeur ou votre collègue ou en relation avec
              toute mesure que nous prenons à la demande de votre employeur ou
              de votre collègue avant de conclure un contrat avec nous ou de
              mettre à jour un tel contrat avec nous. Typiquement, cela inclut
              la création d&apos;un compte utilisateur pour vous afin que vous
              puissiez accéder aux applications Oreonyx et rejoindre
              l&apos;espace de travail de votre employeur ou collègue.
            </p>
            <p>
              3.2 Utilisation de données provenant de services Google connectés
            </p>
            <p>
              Si nous avons reçu vos données personnelles parce que vous avez
              choisi de vous connecter avec Google, nous traiterons vos données
              personnelles pour exécuter tout contrat que nous avons conclu avec
              votre employeur ou en relation avec toute mesure que nous prenons
              à la demande de votre employeur avant de conclure un contrat. Cela
              inclut notamment le fait de vous donner accès à l&apos;application
              Oreonyx.
            </p>
            <p>
              Oreonyx est une application de gestion de la relation client (CRM)
              et de gestion des tâches destinée aux entreprises. Si nous avons
              reçu des données personnelles parce que vous avez choisi de
              connecter votre Google Drive, Google Calendar et/ou votre compte
              Gmail, nous collecterons vos données à partir de ce service afin
              d&apos;améliorer l&apos;expérience de gestion des courriels, des
              fichiers et des contacts et d&apos;améliorer votre productivité
              lors de l&apos;utilisation de l&apos;application Oreonyx. En
              particulier, cela inclut l&apos;accès à vos données
              d&apos;utilisateur Google à partir de l&apos;application Oreonyx
              où vous pouvez voir vos données dans le contexte pertinent
              d&apos;une application de logiciel CRM et gérer vos relations
              professionnelles.
            </p>
            <p>
              Limites supplémentaires concernant l&apos;utilisation de vos
              données d&apos;utilisateur Google :
            </p>
            <p>
              Nonobstant toute autre disposition de la présente politique de
              confidentialité, si vous nous donnez accès à des données provenant
              de services Google connectés, notre utilisation de ces données
              sera soumise à ces restrictions supplémentaires :
            </p>
            <ul>
              <li>
                Nous n&apos;utiliserons l&apos;accès aux données d&apos;un
                service Google connecté que pour fournir notre application web
                et mobile de CRM et de gestion des tâches Oreonyx qui permet aux
                utilisateurs de lire, traiter et écrire des e-mails,
                d&apos;accéder à leurs fichiers Google Drive et à leur agenda.
                En outre, notre utilisation des données est limitée à la
                fourniture ou à l&apos;amélioration des fonctionnalités
                destinées à l&apos;utilisateur qui sont mises en évidence dans
                l&apos;interface utilisateur de l&apos;application qui en fait
                la demande.
              </li>
              <li>
                Nous ne transmettrons pas ces données à des tiers, à moins que
                cela ne soit nécessaire pour fournir et améliorer les
                fonctionnalités qui sont mises en évidence dans l&apos;interface
                utilisateur, pour se conformer à la législation applicable ou
                dans le cadre d&apos;une fusion, d&apos;une acquisition ou
                d&apos;une vente d&apos;actifs.
              </li>
              <li>
                Nous n&apos;utiliserons jamais les données des utilisateurs de
                Google pour diffuser des publicités, y compris des publicités
                reciblées, personnalisées ou basées sur les centres
                d&apos;intérêt.
              </li>
              <li>
                Nous n&apos;autoriserons pas les êtres humains à lire ces
                données sauf si nous avons votre accord affirmatif pour des
                messages spécifiques, si cela est nécessaire à des fins de
                sécurité telles que l&apos;investigation d&apos;abus, pour se
                conformer à la loi applicable ou pour nos opérations internes
                et, même dans ce cas, uniquement lorsque les données ont été
                agrégées et rendues anonymes.
              </li>
              <li>
                L&apos;utilisation et le transfert par Oreonyx à toute autre
                application des informations reçues des API de Google seront
                conformes à la politique des données utilisateur des services
                API de Google, y compris les exigences relatives à
                l&apos;utilisation limitée.
              </li>
            </ul>
            <p>
              3.3 Utilisation des données que vous avez téléchargées ou saisies
              dans l&apos;application Oreonyx
            </p>
            <p>
              Si nous avons reçu vos données personnelles parce que vous les
              avez téléchargées sur notre plateforme, nous traiterons ces
              données personnelles pour l&apos;un des objectifs légitimes
              décrits ci-dessus et selon vos instructions.
            </p>
            <p>3.4 Utilisation des données pour nos intérêts légitimes</p>
            <p>
              Nous pouvons également utiliser vos données personnelles dans le
              cadre de nos intérêts légitimes, y compris pour traiter les
              services à la clientèle dont vous avez besoin, à des fins
              réglementaires et juridiques (par exemple à des fins de lutte
              contre le blanchiment d&apos;argent et de prévention de la
              fraude), à des fins d&apos;audit et pour vous contacter au sujet
              des modifications apportées à la présente politique de
              confidentialité.
            </p>
            <p>
              3.5 Utilisation des données pour fournir des courriels de mise à
              jour des produits (marketing)
            </p>
            <p>
              Nous nous efforçons de vous offrir des choix concernant certaines
              utilisations de vos données personnelles, en particulier dans le
              domaine du marketing et de la publicité.
            </p>
            <p>
              Nous pouvons utiliser vos données d&apos;identité, de contact,
              techniques, d&apos;utilisation et de profil pour nous faire une
              idée de ce que nous pensons que vous voulez ou avez besoin, ou de
              ce qui peut vous intéresser. C&apos;est ainsi que nous décidons
              quels produits, services et offres peuvent être pertinents pour
              vous (c&apos;est ce que nous appelons le marketing).
            </p>
            <p>
              Vous recevrez des communications marketing de notre part si vous
              nous avez demandé des informations ou si vous avez acheté nos
              services et si vous n&apos;avez pas refusé de recevoir ces
              communications.
            </p>
            <p>
              Vous pouvez consentir à recevoir de notre part des messages
              électroniques de mise à jour sur les produits. Vous pouvez
              demander à ne plus recevoir de messages marketing à tout moment en
              suivant les liens d&apos;exclusion figurant dans les messages
              marketing qui vous sont envoyés, en accédant aux paramètres de
              notre site web ou en nous contactant à tout moment.
            </p>
            <p>
              Si vous choisissez de ne plus recevoir ces messages marketing,
              cela ne s&apos;appliquera pas aux données à caractère personnel
              qui nous sont fournies à la suite d&apos;un achat, d&apos;un
              enregistrement de garantie, d&apos;une expérience avec un produit
              ou un service ou d&apos;autres transactions. Il se peut donc que
              vous receviez des messages électroniques concernant votre
              utilisation, votre compte et/ou l&apos;utilisation de votre compte
              par les utilisateurs, même si vous avez choisi de ne pas recevoir
              nos messages de marketing. En effet, ces courriels sont
              transactionnels et ne requièrent pas votre consentement pour être
              reçus. Veuillez noter que si vous refusez de recevoir des
              courriels de marketing, il se peut que nous ayons besoin de
              quelques jours pour mettre à jour nos dossiers afin de refléter
              votre demande.
            </p>
            <p>
              Si vous nous demandez de vous retirer de notre liste d&apos;envoi
              de mises à jour de produits, nous conserverons votre nom et votre
              adresse électronique afin de nous assurer que nous ne vous
              enverrons plus d&apos;informations sur les mises à jour de
              produits. Nous continuerons également à vous envoyer les
              informations nécessaires relatives à votre utilisation de nos
              services si vous, votre employeur ou votre collègue avez un compte
              chez nous.
            </p>
            <p>
              Nous obtiendrons également votre consentement explicite avant de
              partager vos données personnelles avec des tiers à des fins de
              marketing.
            </p>
            <p>
              3.6 Utilisation des données pour améliorer nos services Nous
              analysons également les données relatives à l&apos;utilisation de
              notre plateforme et utilisons ces informations pour améliorer nos
              services et notre plateforme dans le cadre de nos intérêts
              légitimes. Veuillez consulter notre politique en matière de
              cookies pour obtenir des informations détaillées.
            </p>
            <p>
              3.7 Utilisation des données pour traiter les demandes
              d&apos;emploi
            </p>
            <p>
              Si vous postulez à un emploi chez nous, nous utiliserons les
              données personnelles que vous nous fournissez pour traiter votre
              candidature et vous répondre en conséquence.
            </p>
            <p>3.8 Changement de finalité</p>
            <p>
              Nous n&apos;utiliserons vos données à caractère personnel
              qu&apos;aux fins pour lesquelles nous les avons collectées (telles
              que décrites ci-dessus), à moins que nous ne considérions
              raisonnablement que nous devons les utiliser pour une autre raison
              et que cette raison est compatible avec l&apos;objectif initial.
              Si vous souhaitez obtenir une explication sur la manière dont le
              traitement pour la nouvelle finalité est compatible avec la
              finalité initiale, veuillez nous contacter.
            </p>
            <p>
              Si nous devons utiliser vos données à caractère personnel à des
              fins non liées, nous vous en informerons et nous vous expliquerons
              la base juridique qui nous permet de le faire.
            </p>
            <p>
              Veuillez noter que nous pouvons traiter vos données à caractère
              personnel à votre insu ou sans votre consentement, conformément
              aux règles susmentionnées, lorsque la loi l&apos;exige ou le
              permet.
            </p>
            <h4>4. Avec qui partageons-nous vos données ?</h4>
            <p>
              Pour nos intérêts légitimes, nous pouvons partager vos données à
              caractère personnel avec tous les prestataires de services,
              sous-traitants et agents que nous pouvons désigner pour exécuter
              des fonctions en notre nom et conformément à nos instructions, y
              compris les prestataires de paiement, les prestataires de services
              informatiques, les comptables, les auditeurs et les avocats. Nous
              ne fournirons à nos prestataires de services, sous-traitants et
              agents que les données à caractère personnel dont ils ont besoin
              pour nous fournir le service et, si nous cessons d&apos;utiliser
              leurs services, nous leur demanderons de supprimer vos données à
              caractère personnel ou de les rendre anonymes dans leurs systèmes.
            </p>
            <p>
              Afin de respecter nos obligations légales, nous pouvons, dans
              certaines circonstances, être amenés à divulguer vos données
              personnelles en vertu des lois et/ou règlements applicables, par
              exemple dans le cadre de procédures de lutte contre le blanchiment
              d&apos;argent ou pour protéger les droits, la propriété ou la
              sécurité d&apos;un tiers.
            </p>
            <p>
              Pour nos intérêts légitimes, nous pouvons également partager vos
              données personnelles dans le cadre de, ou pendant les négociations
              de, toute fusion, vente d&apos;actifs, consolidation ou
              restructuration, financement ou acquisition de tout ou partie de
              notre activité par ou dans une autre société, auquel cas nous
              enverrons un avis à nos utilisateurs.
            </p>
            <h4>
              5. Où nous détenons et traitons vos données à caractère personnel
              Tout ou partie de vos données personnelles peuvent être stockées
              ou transférées en dehors du Royaume-Uni (RU) ou de l&apos;Espace
              économique européen (EEE), y compris, par exemple, si notre
              serveur de messagerie est situé dans un pays situé en dehors du
              Royaume-Uni ou de l&apos;EEE ou si l&apos;un de nos fournisseurs
              de services est basé en dehors du Royaume-Uni ou de l&apos;EEE.
            </h4>
            <p>
              Lorsque vos données personnelles sont transférées en dehors du
              Royaume-Uni ou de l&apos;EEE, elles ne sont transférées qu&apos;à
              des pays qui ont été identifiés comme offrant une protection
              adéquate de vos données ou à un tiers pour lequel nous avons mis
              en place des mécanismes de transfert approuvés pour protéger vos
              données personnelles, c&apos;est-à-dire en concluant l&apos;Accord
              international de transfert de données (IDTA) du Royaume-Uni ou un
              addendum, ou les Clauses contractuelles types de la Commission
              européenne.
            </p>
            <p>
              Veuillez nous contacter à l&apos;adresse électronique indiquée
              dans la clause 10 si vous souhaitez obtenir de plus amples
              informations sur le mécanisme spécifique que nous utilisons lors
              du transfert de vos données à caractère personnel en dehors du
              Royaume-Uni ou de l&apos;EEE en vertu du présent paragraphe.
            </p>
            <h4>6. Sécurité</h4>
            <p>
              Nous traiterons vos données à caractère personnel d&apos;une
              manière qui garantisse une sécurité appropriée des données à
              caractère personnel, y compris la protection contre le traitement
              non autorisé ou illégal et contre la perte, la destruction ou les
              dommages accidentels. Pour ce faire, nous utilisons des mesures
              techniques ou organisationnelles appropriées. Par exemple, toutes
              les informations que vous nous fournissez sont stockées sur nos
              serveurs sécurisés et nos employés sont tenus de respecter toutes
              les lois applicables en matière de protection des données.
            </p>
            <p>
              Si vous êtes notre client et que vous souhaitez nous envoyer des
              données à caractère personnel pour les héberger sur notre
              plateforme, nous devons tous deux nous conformer à nos obligations
              en vertu de l&apos;accord client d&apos;Oreonyx.
            </p>
            <p>
              Nonobstant ce qui précède, vous reconnaissez qu&apos;aucun système
              ne peut être totalement sécurisé. Par conséquent, bien que nous
              prenions ces mesures pour sécuriser vos données à caractère
              personnel, nous ne promettons pas que vos données à caractère
              personnel resteront toujours totalement sécurisées. En cas de
              violation de la sécurité, nous ferons tout ce qui est en notre
              pouvoir dès que possible pour mettre fin à la violation et
              minimiser la perte de données.
            </p>
            <h4>7. Vos droits</h4>
            <p>
              Vous disposez d&apos;un certain nombre de droits en vertu de la
              législation applicable en matière de protection des données.
              Certains de ces droits sont complexes et tous les détails
              n&apos;ont pas été repris ci-dessous. De plus amples informations
              sont disponibles ici.
            </p>
            <ul>
              <li>
                Droit d&apos;accès : Vous avez le droit d&apos;obtenir de notre
                part une copie des données à caractère personnel que nous
                détenons à votre sujet.
              </li>
              <li>
                Droit de rectification : Vous pouvez nous demander de corriger
                les erreurs dans les données à caractère personnel que nous
                traitons pour vous si elles sont inexactes, incomplètes ou
                périmées.
              </li>
              <li>
                Droit à la portabilité : Vous pouvez nous demander de transférer
                vos données à caractère personnel à un autre prestataire de
                services.
              </li>
              <li>
                Droit à la limitation du traitement : Dans certaines
                circonstances, vous avez le droit d&apos;exiger que nous
                limitions le traitement de vos informations personnelles.
              </li>
              <li>
                Droit à l&apos;oubli : Vous avez également le droit
                d&apos;exiger à tout moment que nous supprimions les données à
                caractère personnel que nous détenons à votre sujet,
                lorsqu&apos;il n&apos;est plus nécessaire que nous les
                conservions. Toutefois, bien que nous respections votre droit à
                l&apos;oubli, nous pouvons conserver vos données à caractère
                personnel conformément aux lois applicables.
              </li>
              <li>
                Droit de ne plus recevoir d&apos;informations commerciales :
                Vous pouvez nous demander de ne plus vous envoyer
                d&apos;informations sur nos services, mais nous continuerons à
                vous contacter pour toute question relative à votre rapport.
              </li>
            </ul>
            <p>
              Vous n&apos;aurez pas à payer de frais pour accéder à vos données
              personnelles (ou pour exercer l&apos;un des autres droits).
              Toutefois, nous pouvons facturer des frais raisonnables si votre
              demande est manifestement infondée, répétitive ou excessive. Dans
              ce cas, nous pouvons également refuser de donner suite à votre
              demande.
            </p>
            <p>
              Il se peut que nous devions vous demander des informations
              spécifiques pour nous aider à confirmer votre identité et garantir
              votre droit d&apos;accès à vos données à caractère personnel ou
              d&apos;exercice de tout autre droit. Il s&apos;agit d&apos;une
              mesure de sécurité visant à garantir que les données à caractère
              personnel ne sont pas divulguées à une personne qui n&apos;a pas
              le droit de les recevoir. Nous pouvons également vous contacter
              pour vous demander des informations complémentaires concernant
              votre demande afin de pouvoir la traiter rapidement.
            </p>
            <p>
              Nous nous efforçons de répondre à toutes les demandes légitimes
              dans un délai d&apos;un mois. Il peut arriver que nous ayons
              besoin de plus d&apos;un mois si votre demande est
              particulièrement complexe ou si vous avez formulé plusieurs
              demandes. Dans ce cas, nous vous en informerons et vous tiendrons
              au courant.
            </p>
            <p>
              Si nous sommes un sous-traitant de vos données (et que notre
              client est le responsable du traitement), nous ne traiterons vos
              données à caractère personnel que selon les instructions de notre
              client. Vous devrez contacter directement notre client si vous
              souhaitez exercer vos droits en ce qui concerne les données
              traitées sur notre plateforme. Si vous nous contactez directement,
              nous en informerons notre client dès que cela sera raisonnablement
              possible et nous l&apos;aiderons, en tant que responsable du
              traitement, à prendre les mesures appropriées pour lui permettre
              de s&apos;acquitter de ses obligations envers vous.
            </p>
            <p>
              Si vous avez des réclamations concernant la présente politique de
              protection de la vie privée ou le traitement de vos données à
              caractère personnel, n&apos;hésitez pas à nous en faire part. Nous
              examinerons et étudierons votre plainte et essaierons de vous
              répondre dans un délai raisonnable. Vous pouvez également
              contacter le commissaire à l&apos;information (Information
              Commissioner), voir www.ico.org.uk ou, si vous êtes basé en dehors
              du Royaume-Uni, veuillez contacter votre autorité locale de
              protection des données.
            </p>
            <h4>
              8. Conservation des données personnelles Nous conserverons les
              données à caractère personnel conformément aux lois applicables.
            </h4>
            <p>
              Si nous avons reçu vos données personnelles parce que vous êtes un
              employé d&apos;un client, nous les conserverons jusqu&apos;à ce
              que nous ne travaillions plus avec votre employeur, sauf si nous
              sommes tenus de conserver les données personnelles pendant une
              période donnée pour nous conformer à des exigences légales,
              d&apos;audit ou statutaires, y compris les exigences du HMRC en ce
              qui concerne les documents financiers.
            </p>
            <p>
              Si nous disposons de vos données personnelles parce qu&apos;un
              client les a téléchargées sur notre plateforme, nous les
              conserverons conformément aux instructions de notre client.
            </p>
            <p>
              Dans certaines circonstances, vous pouvez nous demander de
              supprimer vos données : voir &apos;Vos droits&apos; ci-dessus pour
              plus d&apos;informations.
            </p>
            <p>
              Dans certaines circonstances, nous rendrons vos données
              personnelles anonymes (de sorte qu&apos;elles ne puissent plus
              être associées à vous) à des fins de recherche ou de statistiques,
              auquel cas nous pourrons utiliser ces informations indéfiniment
              sans vous en avertir.
            </p>
            <h4>9. Généralités</h4>
            <p>
              Si une disposition de la présente politique de confidentialité est
              jugée invalide ou inapplicable par un tribunal compétent, cette
              disposition sera interprétée, dans la mesure du possible, de
              manière à refléter les intentions des parties et toutes les autres
              dispositions resteront pleinement en vigueur.
            </p>
            <p>
              La présente politique de confidentialité est régie et interprétée
              conformément à la législation de l&apos;Angleterre et du Pays de
              Galles, et vous acceptez de vous soumettre à la juridiction
              exclusive des tribunaux anglais.
            </p>
            <h4>10. Comment nous contacter</h4>
            <p>
              Vous pouvez nous contacter pour toute question ou commentaire
              concernant vos données personnelles, la présente politique ou
              toute autre question relative à la protection de la vie privée en
              envoyant un courriel à support@oreonyx.live.
            </p>
            <p>
              Si vous vous trouvez dans l&apos;Union européenne, vous pouvez
              adresser vos questions relatives à la protection de la vie privée
              à notre représentant de l&apos;UE conformément à l&apos;article 27
              du GDPR :
            </p>
            <p>EU-REP.Global GmbH, à l&apos;attention d&apos;Oreonyx</p>
            <p>Hopfenstr. 1d, 24114 Kiel, Allemagne</p>
            <p>
              <a href="mailto:‍attio@eu-rep.global">‍attio@eu-rep.global</a>
            </p>
            <p>
              <a href="https://www.eu-rep.global"> www.eu-rep.global</a>
            </p>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer />
    </div>
  );
}
