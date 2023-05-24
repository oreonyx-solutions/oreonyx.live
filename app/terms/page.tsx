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
                Conditions générales d&apos;utilisation
              </h5>
              <p className="text-xl">
                En vous connectant à votre compte Oreonyx, vous acceptez
                d&apos;être lié par nos conditions générales.
              </p>
              <h6 className="text-lg text-gray-600">
                Dernière mise à jour : Mars 2023
              </h6>
            </div>
          </div>
          <div className="prose lg:prose-xl">
            <p>
              Ce contrat client d&apos;Oreonyx définit les termes et conditions
              selon lesquels Oreonyx Limited, anciennement F Stack Limited,
              opérant sous le nom d&apos;Oreonyx, dont le siège social est situé
              au 25 Easton Street, Office 25.3, WC1X 0DS, Londres, Royaume-Uni
              (&apos; Nous &apos;, &apos; Nous &apos; ou &apos; Oreonyx &apos;)
              vous concède une licence pour ses outils CRM et ses services API
              (ensemble les &apos; Services d&apos;Oreonyx &apos;) (tels que
              définis ci-dessous).
            </p>
            <p>
              CE CONTRAT CLIENT Oreonyx CONTIENT UNE CONVENTION D&apos;ARBITRAGE
              QUI EXIGE QUE, LORSQUE VOUS ÊTES UN CLIENT DES ÉTATS-UNIS, VOUS ET
              Oreonyx ARBITRIEZ CERTAINES RÉCLAMATIONS PAR UN ARBITRAGE
              INDIVIDUEL CONTRAIGNANT AU LIEU DE SAISIR LES TRIBUNAUX, ET LIMITE
              LES RECOURS COLLECTIFS, SAUF SI VOUS VOUS DÉSENGAGEZ DE LA
              CONVENTION D&apos;ARBITRAGE COMME DÉCRIT DANS LA CLAUSE 18.8 DE CE
              CONTRAT CLIENT Oreonyx.
            </p>
            <p>
              En acceptant le Contrat Client d&apos;Oreonyx, soit en vous
              inscrivant pour recevoir les Services d&apos;Oreonyx en ligne,
              soit par contrat séparé entre Vous et Nous, soit en commençant à
              utiliser ou en autorisant tout Utilisateur (tel que défini
              ci-dessous) à accéder ou à utiliser l&apos;un des Services
              d&apos;Oreonyx, soit en indiquant d&apos;une autre manière votre
              acceptation du Contrat Client d&apos;Oreonyx, y compris par le
              biais d&apos;un Essai Gratuit (tel que défini ci-dessous), Vous :
            </p>
            <p>
              En acceptant le Contrat Client d&apos;Oreonyx, soit en vous
              inscrivant pour recevoir les Services d&apos;Oreonyx en ligne,
              soit par contrat séparé entre Vous et Nous, soit en commençant à
              utiliser ou en autorisant tout Utilisateur (tel que défini
              ci-dessous) à accéder ou à utiliser l&apos;un des Services
              d&apos;Oreonyx, soit en indiquant d&apos;une autre manière votre
              acceptation du Contrat Client d&apos;Oreonyx, y compris par le
              biais d&apos;un Essai Gratuit (tel que défini ci-dessous), Vous :
            </p>
            <ul>
              <li>
                acceptez et comprenez qu&apos;à partir de la date d&apos;entrée
                en vigueur (telle que définie ci-dessous), un contrat
                juridiquement contraignant existera entre vous et nous pour les
                services d&apos;Oreonyx, contrat qui sera régi par les termes du
                présent contrat client d&apos;Oreonyx ;
              </li>
              <li>
                garantir et déclarer que lorsque vous concluez le Contrat Client
                d&apos;Oreonyx au nom d&apos;une autre entité juridique telle
                qu&apos;une société ou une organisation (&apos; Entité &apos;),
                vous acceptez et concluez au nom de cette Entité et vous êtes
                autorisé à lier cette Entité au présent Contrat Client
                d&apos;Oreonyx, et toute référence à &apos; Vous &apos; et
                &apos; Votre &apos; désignera en outre cette Entité ;
              </li>
              <li>
                garantir et déclarer que vous utiliserez les services
                d&apos;Oreonyx strictement à des fins professionnelles et non en
                qualité de consommateur, et qu&apos;Oreonyx ne sera pas
                responsable de toute utilisation non professionnelle des
                services d&apos;Oreonyx par vous ou vos utilisateurs ; et
              </li>
              <li>
                vous assurer que vos utilisateurs se conforment aux conditions
                du présent contrat client d&apos;Oreonyx et à la politique
                d&apos;utilisation acceptable, et accepter que vous restiez
                responsable de la conformité de ces utilisateurs.
              </li>
            </ul>
            <p>
              Nous pouvons modifier les termes du Contrat Client d&apos;Oreonyx
              de temps à autre en mettant à jour les termes et conditions sur le
              site Internet ou en vous adressant une notification écrite
              directe. Si une modification est importante, comme le détermine
              raisonnablement Oreonyx à sa seule discrétion, nous ferons des
              efforts commercialement raisonnables pour vous notifier le
              changement. La poursuite de l&apos;utilisation des services
              d&apos;Oreonyx vaudra acceptation du nouveau contrat client
              d&apos;Oreonyx. Si vous n&apos;acceptez pas les conditions mises à
              jour du Contrat client d&apos;Oreonyx, vous devez immédiatement
              cesser d&apos;utiliser les services d&apos;Oreonyx et vous assurer
              que vos utilisateurs cessent également d&apos;utiliser les
              services d&apos;Oreonyx.
            </p>
            <h4>1. Definitions</h4>
            <h5>
              1.1. Les mots et expressions suivants auront la signification
              suivante :
            </h5>
            <p>
              <strong>&apos;App Marketplace &apos;</strong> désigne un
              référentiel en ligne d&apos;applications détenu et contrôlé par
              Oreonyx ou qui a été approuvé par Oreonyx comme étant adapté à la
              publication d&apos;une application d&apos;intégration dont la
              publication a été approuvée par Oreonyx ;
            </p>
            <p>
              <strong>&apos;Développeur agréé&apos;</strong> désigne une partie
              qui a été approuvée par Oreonyx pour participer au Programme pour
              développeurs ;
            </p>
            <p>
              <strong>&apos;Conditions d&apos;utilisation&apos;</strong> désigne
              toutes les conditions d&apos;utilisation d&apos;une application
              d&apos;intégration qu&apos;un utilisateur d&apos;application est
              tenu d&apos;accepter avant que l&apos;utilisateur
              d&apos;application n&apos;ait accès à l&apos;utilisation de
              l&apos;application d&apos;intégration et qui doivent au minimum
              contenir des dispositions au moins aussi restrictives que celles
              énoncées dans la Clause 5.3 du présent Contrat client
              d&apos;Oreonyx ;
            </p>
            <p>
              <strong>&apos;Utilisateur de l&apos;application&apos;</strong>{" "}
              désigne un utilisateur utilisant l&apos;application
              d&apos;intégration pour transférer ses données entre Oreonyx et
              une plate-forme tierce ;
            </p>
            <p>
              <strong>&apos;API d&apos;Oreonyx&apos;</strong> désigne
              l&apos;interface de programmation d&apos;applications développée
              et activée par Oreonyx qui vous permet, ainsi qu&apos;à vos
              utilisateurs, d&apos;accéder et d&apos;utiliser certaines
              fonctionnalités fournies par les services d&apos;Oreonyx, sous
              réserve du présent Contrat Client d&apos;Oreonyx et de la
              Documentation ;
            </p>
            <p>
              <strong>&apos;Applications d&apos;Oreonyx&apos;</strong> désigne
              l&apos;application web et/ou les applications mobiles
              d&apos;Oreonyx par l&apos;intermédiaire desquelles les services
              d&apos;Oreonyx sont fournis, y compris tout logiciel qu&apos;elles
              contiennent ;
            </p>
            <p>
              <strong>&apos;Contenu d&apos;Oreonyx&apos;</strong> désigne
              l&apos;ensemble des données, informations et matériels appartenant
              à Oreonyx ou concédés sous licence à Oreonyx et compris dans les
              services d&apos;Oreonyx et sur les applications d&apos;Oreonyx, à
              l&apos;exclusion des données du client ;
            </p>
            <p>
              <strong>&apos;Services d&apos;Oreonyx&apos;</strong> désigne les
              outils et services de CRM mis à disposition via les Applications
              d&apos;Oreonyx, y compris l&apos;accès à l&apos;API d&apos;Oreonyx
              le cas échéant et tout matériel connexe fourni par Oreonyx pour
              votre utilisation dans le cadre des Services d&apos;Oreonyx, tel
              que prévu dans toute Documentation ;
            </p>
            <p>
              <strong>&apos;CCPA &apos;</strong> désigne la loi californienne de
              2018 sur la protection de la vie privée des consommateurs ;
            </p>
            <p>
              <strong>&apos;Informations confidentielle&apos;</strong> toutes
              les informations (quel que soit leur mode d&apos;enregistrement ou
              de conservation) divulguées par une partie, que ce soit avant ou
              après la date d&apos;entrée en vigueur, y compris toutes les
              informations marquées comme confidentielles ou qui ont été
              indiquées d&apos;une autre manière comme étant confidentielles, ou
              (i) les informations relatives aux activités, aux affaires, aux
              clients, aux donneurs de licence, aux fournisseurs, aux nouveaux
              produits, aux plans, à la recherche, aux intentions ou aux
              opportunités de marché de la partie qui les divulgue (ou de tout
              membre du groupe d&apos;entreprises auquel appartient la partie
              qui les divulgue) ; et (ii) les informations relatives aux
              opérations, processus, informations sur les produits, idées,
              formules, code source, données, droits de propriété intellectuelle
              ou logiciels de la partie divulgatrice (ou de tout membre du
              groupe de sociétés auquel appartient la partie divulgatrice ou, en
              ce qui concerne Oreonyx, de l&apos;un de ses concédants de licence
              tiers) ;
            </p>
            <p>
              <strong>&apos;Client&apos;</strong> désigne un entrepreneur
              individuel, une personne morale ou une organisation, autre
              qu&apos;un développeur agréé, qui conclut le contrat client
              d&apos;Oreonyx avec Oreonyx
            </p>
            <p>
              <strong>&apos;Données du Client&apos;</strong> désigne
              l&apos;ensemble des données, informations et matériels que vous
              et/ou vos utilisateurs saisissez ou téléchargez sur les Services
              d&apos;Oreonyx ou transmettez par l&apos;intermédiaire des
              Services d&apos;Oreonyx et/ou de toute Application
              d&apos;Intégration, y compris les Données Personnelles. Pour
              éviter toute ambiguïté, les Données du Client incluront toutes les
              données, informations et matériels reçus d&apos;un tiers qui sont
              partagés avec Oreonyx au moyen d&apos;une Application
              d&apos;Intégration ;
            </p>
            <p>
              <strong>
                &apos;Législation sur la protection des données&apos;
              </strong>{" "}
              désigne le GDPR de l&apos;UE, la directive européenne 2002/58/CE,
              le DPA 2018 du Royaume-Uni, le CCPA et toute autre législation
              et/ou réglementation qui les met en œuvre ou qui en découle, ou
              qui modifie, remplace, réadopte ou consolide l&apos;une
              d&apos;entre elles, ainsi que toutes les autres lois applicables
              relatives au traitement des Données à caractère personnel et à la
              protection de la vie privée qui peuvent exister dans toute
              juridiction concernée ;
            </p>
            <p>
              <strong>&apos;Programme de développement&apos;</strong> désigne un
              programme de développement d&apos;applications fourni par Oreonyx
              dans le cadre duquel Oreonyx fournit à un développeur agréé tout
              ou partie des services d&apos;Oreonyx, sous réserve des
              restrictions et limitations définies dans le présent contrat
              client d&apos;Oreonyx, et dans le cadre duquel le développeur peut
              développer une application d&apos;intégration ;
            </p>
            <p>
              <strong>&apos;Documentation&apos;</strong> désigne tout guide de
              l&apos;utilisateur et autre documentation relative aux services
              d&apos;Oreonyx qu&apos;Oreonyx met à la disposition des clients et
              des développeurs de temps à autre, y compris, sans limitation, la
              documentation relative à l&apos;API d&apos;Oreonyx disponible à
              l&apos;adresse https://oreonyx.live/docs et
              https://developers.oreonyx.live/#introduction ;
            </p>
            <p>
              <strong>&apos;Date d&apos;entrée en vigueur &apos;</strong>{" "}
              désigne la date à laquelle vous accédez aux Services
              d&apos;Oreonyx et commencez à les utiliser et/ou acceptez le
              présent Contrat client d&apos;Oreonyx, y compris dans le cadre
              d&apos;un Essai gratuit ou du Programme pour développeurs, date à
              laquelle les conditions du présent Contrat client d&apos;Oreonyx
              s&apos;appliqueront ;
            </p>
            <p>
              désigne le Règlement général sur la protection des données
              2016/679 ;
            </p>
            <p>
              <strong>&apos;App Marketplace &apos;</strong> désigne un
              référentiel en ligne d&apos;applications détenu et contrôlé par
              Oreonyx ou qui a été approuvé par Oreonyx comme étant adapté à la
              publication d&apos;une application d&apos;intégration dont la
              publication a été approuvée par Oreonyx ;
            </p>
            <p>
              <strong>&apos;Frais&apos;</strong> désigne les frais que vous
              devez payer pour les services d&apos;Oreonyx conformément au Plan
              ;
            </p>
            <p>
              <strong>&apos;Essai gratuit&apos;</strong> désigne une période
              potentiellement limitée au cours de laquelle Oreonyx peut offrir
              tout ou partie des services d&apos;Oreonyx sans frais et sous
              réserve de restrictions d&apos;utilisation, telles que déterminées
              par Oreonyx à sa seule discrétion. A l&apos;expiration de
              l&apos;essai gratuit, vous serez redevable de tous les frais
              définis dans le plan choisi. En l&apos;absence de date
              d&apos;expiration d&apos;un essai gratuit, vous pouvez continuer à
              recevoir tout ou partie des services d&apos;Oreonyx jusqu&apos;à
              ce qu&apos;Oreonyx (à sa seule discrétion) vous demande de passer
              à un plan payant ou supprime, suspende ou mette fin à votre accès
              aux services d&apos;Oreonyx, pour quelque raison que ce soit et
              sans préavis ;
            </p>
            <p>
              <strong>&apos;Durée initiale&apos;</strong>désigne la durée fixe
              qui suit immédiatement votre acceptation du Contrat Client ou,
              lorsqu&apos;un essai gratuit a été proposé, l&apos;expiration ou
              la fin de cet essai gratuit, pendant laquelle vous acceptez de
              recevoir les services d&apos;Oreonyx et de payer les frais, soit
              un (1) mois ou douze (12) mois, et telle que définie dans le Plan
              ;
            </p>
            <p>
              <strong>&apos;Application d&apos;intégration&apos;</strong>{" "}
              désigne une application développée par un développeur ou un
              utilisateur agréé pour son propre compte et risquant
              d&apos;utiliser l&apos;API d&apos;Oreonyx, qui peut utiliser un
              flux OAuth, permettant l&apos;interopérabilité entre une
              plateforme tierce et les services d&apos;Oreonyx ;
            </p>
            <p>
              <strong>&apos;Droits de propriété intellectuelle&apos;</strong>
              désigne les brevets, les droits brevetables, les droits
              d&apos;auteur, les droits de conception, les droits sur les
              logiciels informatiques, les modèles d&apos;utilité, les marques
              (qu&apos;elles soient ou non déposées), les noms commerciaux, les
              droits sur les noms de domaine, les droits sur les inventions, les
              droits sur les données, les droits sur les bases de données, les
              droits sur l&apos;habillage, le fonds de commerce, les droits
              d&apos;intenter une action en passing off ou en concurrence
              déloyale, et les droits de préserver la confidentialité des
              informations (y compris le savoir-faire et les secrets
              commerciaux), ainsi que tous les autres droits de propriété
              intellectuelle et industrielle, y compris toutes les demandes (et
              les droits de demander et d&apos;obtenir), renouvellements ou
              extensions de ces droits et les droits de revendiquer la priorité
              de ces droits, ainsi que tous les droits ou formes de protection
              similaires ou équivalents qui existent ou existeront, actuellement
              ou à l&apos;avenir, dans n&apos;importe quelle partie du monde ;
            </p>
            <p>
              <strong>&apos;Logiciel malveillant&apos;</strong> tout virus,
              logiciel malveillant, cheval de Troie ou tout autre logiciel
              nuisible similaire ;
            </p>
            <p>
              <strong>&apos;Données personnelles&apos;</strong> a la
              signification qui lui est attribuée dans la législation applicable
              en matière de protection des données ;
            </p>
            <p>
              <strong>&apos;Plan&apos;</strong> désigne le plan
              d&apos;abonnement incorporant le niveau de support fourni, les
              fonctionnalités et les limites de données pertinentes qui sont
              mises à disposition dans le cadre des services d&apos;Oreonyx et
              telles que vous les avez choisies au cours de la procédure
              d&apos;inscription ou telles que vous les avez modifiées dans la
              section de votre compte ou manuellement par Oreonyx à la suite de
              votre demande ;
            </p>
            <p>
              <strong>&apos;Période de renouvellement&apos;</strong> désigne la
              durée fixe suivant immédiatement la période initiale au cours de
              laquelle vous avez le droit d&apos;accéder aux services
              d&apos;Oreonyx et de payer les frais, et qui est d&apos;une durée
              égale à celle de la période initiale ;
            </p>
            <p>
              <strong>&apos;Sièges&apos;</strong> désigne le nombre maximum de
              sièges disponibles pour les Utilisateurs autorisés à utiliser les
              Services d&apos;Oreonyx mis à disposition par Oreonyx de temps à
              autre en vertu du Contrat Client d&apos;Oreonyx et conformément au
              Plan ;
            </p>
            <p>
              <strong>&apos;Durée &apos;</strong> désigne la durée du Contrat
              Client d&apos;Oreonyx telle que définie à l&apos;Article 3 ;
            </p>
            <p>
              <strong>&apos;Plateforme tierce&apos;</strong> désigne une
              plateforme ou un logiciel fourni et hébergé par un tiers ;
            </p>
            <p>
              <strong>&apos;UK DPA 2018&apos;</strong> désigne la loi
              britannique sur la protection des données de 2018 ;
            </p>
            <p>
              <strong>&apos;Utilisateur&apos;</strong> désigne : (a) lorsque
              vous êtes un Développeur Agréé, le Développeur Agréé ou vos
              Utilisateurs ; et (b) lorsque vous êtes un Client, une personne
              physique autorisée par le Client à utiliser les Services Oreonyx
              jusqu&apos;à concurrence du nombre de Sièges achetés conformément
              au Plan ;
            </p>
            <p>
              <strong>&apos;Vous &apos; &apos; Votre&apos;</strong> désigne le
              client ou le développeur agréé qui conclut le contrat de client
              d&apos;Oreonyx, selon le cas.
            </p>
            <h5>1.2. Dans le présent Contrat client d&apos;Oreonyx :</h5>
            <p>a) les mots au singulier incluent le pluriel ;</p>
            <p>
              b) la référence à une personne inclut une personne morale (telle
              qu&apos;une société à responsabilité limitée) ainsi qu&apos;une
              personne physique ;
            </p>
            <p>
              c) une référence à une &apos;partie&apos; désignera soit Oreonyx,
              soit le client, et &apos;parties&apos; désignera à la fois Oreonyx
              et le client ;
            </p>
            <p>
              d) les titres des clauses sont uniquement destinés à faciliter la
              lecture et n&apos;affecteront pas l&apos;interprétation du présent
              Contrat Client d&apos;Oreonyx ;
            </p>
            <p>
              e) la référence à &apos;y compris&apos; ou à tout autre terme
              similaire dans le présent contrat client d&apos;Oreonyx sera
              traitée à titre d&apos;exemple et ne limitera pas
              l&apos;applicabilité générale des termes précédents ; et
            </p>
            <p>
              f) toute référence à une législation s&apos;appliquera à cette
              législation telle qu&apos;amendée, étendue ou réadoptée de temps à
              autre, ainsi qu&apos;à toute disposition subordonnée prise dans le
              cadre de cette législation.
            </p>
            <h4>2. Prestation des services d&apos;Oreonyx</h4>
            <h5>
              2.1. Sous réserve du présent contrat client d&apos;Oreonyx et du
              paiement intégral et dans les délais de tous les frais
              applicables, ou dans le cas d&apos;un essai gratuit, de votre
              acceptation du présent contrat client d&apos;Oreonyx, Oreonyx
              s&apos;engage à vous fournir les services d&apos;Oreonyx
              conformément au plan convenu au cours de la procédure
              d&apos;inscription ou tel qu&apos;il peut être convenu de temps à
              autre dans le cadre des applications d&apos;Oreonyx.
            </h5>
            <h5>
              2.2. Vous reconnaissez et acceptez qu&apos;Oreonyx a le droit
              exclusif de décider comment développer les services d&apos;Oreonyx
              ou toute partie de ceux-ci, y compris les applications
              d&apos;Oreonyx et l&apos;API d&apos;Oreonyx. Oreonyx peut, à sa
              seule discrétion, supprimer ou ajouter des fonctionnalités aux
              services d&apos;Oreonyx à tout moment sans que vous puissiez
              prétendre à une quelconque indemnisation ou à un quelconque autre
              recours.
            </h5>
            <h4>3. Durée de validité</h4>
            <h5>
              3.1. Le présent Contrat Client d&apos;Oreonyx s&apos;appliquera à
              votre utilisation et à celle de vos Utilisateurs des Services
              d&apos;Oreonyx à compter de la Date d&apos;entrée en vigueur.
            </h5>
            <h5>
              3.2. Sauf résiliation anticipée conformément à la clause 15, le
              présent contrat client d&apos;Oreonyx se poursuivra pour la durée
              initiale et ensuite à perpétuité pour des périodes de
              renouvellement successives qui s&apos;appliqueront
              automatiquement, sauf si l&apos;une des parties demande la
              résiliation au moins quatorze (14) jours avant la fin de la durée
              initiale ou de la période de renouvellement en cours, selon le
              cas.
            </h5>
            <h4>
              4. Octroi de la licence et étendue de l&apos;utilisation autorisée
            </h4>
            <p>
              4.1. Sous réserve du présent Contrat client d&apos;Oreonyx et en
              contrepartie du paiement intégral, dans les délais impartis, de
              tous les frais applicables par vous à Oreonyx ou, dans le cas
              d&apos;un essai gratuit, de votre acceptation du présent Contrat
              client d&apos;Oreonyx, Oreonyx vous accorde par les présentes,
              sous réserve i) du nombre de sièges que vous avez achetés dans le
              cadre du Plan alors en vigueur, le cas échéant, ii) des conditions
              et de toutes les limitations (y compris les restrictions)
              relatives à l&apos;utilisation des services d&apos;Oreonyx ; ii)
              des conditions et des limitations (y compris, mais sans s&apos;y
              limiter, les limites de stockage de données, d&apos;appels API et
              d&apos;enrichissement de données) de ce Plan ou de toute autre
              condition fixée par Oreonyx de temps à autre à sa seule discrétion
              ; iii) des conditions du présent Contrat client d&apos;Oreonyx et
              de toute Documentation, une licence limitée, non transférable, non
              exclusive, non sous-licenciable et révocable pendant la Durée de
              validité afin de :
            </p>
            <p>
              a) d&apos;accéder et d&apos;utiliser les services d&apos;Oreonyx
              et (sauf dans le cadre du programme pour développeurs) de
              permettre à vos utilisateurs d&apos;accéder aux services
              d&apos;Oreonyx, en vue uniquement, dans un format non
              téléchargeable, uniquement pour un usage professionnel interne et
              toujours sous réserve d&apos;une utilisation raisonnable telle que
              déterminée par Oreonyx à sa seule discrétion ; et
            </p>
            <p>
              b) accéder à l&apos;API d&apos;Oreonyx et l&apos;utiliser pour
              développer et, sous réserve de l&apos;approbation exclusive
              d&apos;Oreonyx, publier une application d&apos;intégration
              destinée à être utilisée par les utilisateurs en relation avec les
              services d&apos;Oreonyx uniquement, et pour commercialiser et
              fournir l&apos;application d&apos;intégration par
              l&apos;intermédiaire d&apos;une place de marché
              d&apos;applications (App Marketplace).
            </p>
            <p>
              4.2. Vous accordez à Oreonyx une licence non exclusive, mondiale,
              entièrement payée, libre de redevances, irrévocable et pouvant
              faire l&apos;objet d&apos;une sous-licence, pour la durée de la
              Période :
            </p>
            <p>
              a) d&apos;utiliser vos Données Client sous quelque forme ou de
              quelque manière que ce soit, uniquement dans la mesure où cela est
              nécessaire pour vous fournir les Services d&apos;Oreonyx
              conformément aux termes du présent Contrat Client d&apos;Oreonyx ;
            </p>
            <p>
              b) et en outre après la Durée, d&apos;héberger, d&apos;utiliser,
              de distribuer, d&apos;exécuter, d&apos;exécuter ou d&apos;afficher
              publiquement, de traduire et de créer des œuvres dérivées de votre
              application d&apos;intégration à toute fin commerciale en rapport
              avec l&apos;exploitation, la fourniture ou l&apos;amélioration des
              services d&apos;Oreonyx ou de l&apos;API d&apos;Oreonyx, et y
              compris, mais sans s&apos;y limiter, le droit d&apos;encadrer
              votre application d&apos;intégration ou de créer un lien vers
              celle-ci, et d&apos;analyser votre application d&apos;intégration
              (y compris pour évaluer votre conformité avec le Contrat Client
              d&apos;Oreonyx) ; et
            </p>
            <p>
              c) et, en outre, après la Durée, d&apos;utiliser votre nom et
              autre marque, ainsi que le nom et autre marque de
              l&apos;application d&apos;intégration (ensemble, votre &apos;
              marque d&apos;application &apos;) uniquement dans la mesure où
              cela est nécessaire pour permettre à Oreonyx d&apos;exécuter ses
              obligations et d&apos;exercer les droits accordés en vertu du
              Contrat Client d&apos;Oreonyx, y compris, sans s&apos;y limiter,
              la mise à disposition de votre application d&apos;intégration sur
              la Place de marché pour applications.
            </p>
            <p>
              4.3. Vous ne pouvez pas concéder en sous-licence le droit
              d&apos;accès et/ou d&apos;utilisation des services d&apos;Oreonyx
              à un tiers. Tous les droits relatifs aux Services d&apos;Oreonyx
              (y compris le Contenu d&apos;Oreonyx mais à l&apos;exclusion des
              Données du Client) et aux Applications d&apos;Oreonyx sont
              réservés à Oreonyx.
            </p>
            <p>
              4.4. Vous ne devez pas, et vous devez faire en sorte que vos
              utilisateurs ne le fassent pas (que ce soit directement ou par
              l&apos;intermédiaire d&apos;un tiers) :
            </p>
            <p>
              a) faire de l&apos;ingénierie inverse, décompiler, désassembler ou
              tenter de toute autre manière de découvrir le code source, le code
              objet ou la structure sous-jacente, les idées, le savoir-faire ou
              les algorithmes relatifs aux services d&apos;Oreonyx ou aux
              applications d&apos;Oreonyx, à moins qu&apos;une telle restriction
              ne soit pas autorisée par la loi ;
            </p>
            <p>
              b) fournir ou revendre les services d&apos;Oreonyx par
              l&apos;intermédiaire d&apos;une application d&apos;intégration ou
              d&apos;une autre manière ;
            </p>
            <p>
              c) modifier, traduire ou créer des œuvres dérivées basées sur les
              services Oreonyx ou toute application Oreonyx ;
            </p>
            <p>
              d) tenter de dépasser ou de contourner toute limitation expresse
              ou implicite sur l&apos;utilisation des services d&apos;Oreonyx, y
              compris, mais sans s&apos;y limiter, en ce qui concerne le nombre
              d&apos;appels à l&apos;API d&apos;Oreonyx ou l&apos;utilisation
              qui en est faite, le stockage et la fonctionnalité
              d&apos;enrichissement des données, tels qu&apos;établis par
              Oreonyx de temps à autre et à sa seule discrétion, et où ces
              limitations peuvent dépendre du type de Plan acheté ou souscrit ;
            </p>
            <p>
              e) utiliser les services ou les applications d&apos;Oreonyx à des
              fins de multipropriété ou de bureau de services ou autrement au
              profit d&apos;un tiers ;
            </p>
            <p>
              f) supprimer tout avis ou étiquette de propriété de la
              documentation, des services Oreonyx et/ou des applications Oreonyx
              ;
            </p>
            <p>
              g) permettre ou faciliter à un tiers l&apos;accès ou
              l&apos;utilisation des services Oreonyx ou leur utilisation pour
              le compte d&apos;un tiers (ce qui inclut l&apos;exploitation de
              toute forme d&apos;installation pour le compte d&apos;un tiers ou
              l&apos;exploitation d&apos;un bureau de logiciels ou d&apos;un
              service similaire) ;
            </p>
            <p>
              h) sauf autorisation expresse aux fins d&apos;une application
              d&apos;intégration et conformément au présent contrat client
              d&apos;Oreonyx, ou autorisation écrite d&apos;Oreonyx, créer des
              &apos; liens &apos; Internet vers les services d&apos;Oreonyx ou
              les applications d&apos;Oreonyx, ou &apos; encadrer &apos; ou
              &apos; refléter &apos; tout contenu d&apos;Oreonyx sur tout autre
              serveur ou appareil sans fil ou basé sur Internet ;
            </p>
            <p>
              i) tenter de contourner les mécanismes de sécurité, de contrôle
              des licences ou d&apos;autres mécanismes de protection, ou
              falsifier, sonder, scanner, tester la vulnérabilité, pirater ou
              perturber de toute autre manière les services d&apos;Oreonyx ou
              les applications d&apos;Oreonyx ou tout site Internet, système
              informatique, serveur, routeur ou tout autre dispositif connecté à
              Internet associé, y compris, sans s&apos;y limiter, en le ou les
              surchargeant de données ou d&apos;appels à l&apos;API ;
            </p>
            <p>
              j) utiliser tout matériel, logiciel, dispositif ou technique pour
              regrouper les connexions ou réduire le nombre d&apos;appareils ou
              d&apos;utilisateurs qui accèdent directement aux services
              d&apos;Oreonyx ou les utilisent (parfois appelé &apos;
              virtualisation &apos;, &apos; multiplexage &apos; ou &apos;
              regroupement &apos;) afin de contourner toute restriction sur
              l&apos;étendue de l&apos;utilisation autorisée contenue dans le
              présent contrat client d&apos;Oreonyx ;
            </p>
            <p>
              k) télécharger, stocker, afficher, envoyer par courrier
              électronique, transmettre ou mettre à disposition par quelque
              moyen que ce soit (y compris, mais sans s&apos;y limiter, par
              l&apos;intermédiaire de l&apos;application d&apos;intégration)
              tout logiciel malveillant ;
            </p>
            <p>
              l) télécharger, stocker, afficher, envoyer par courrier
              électronique, transmettre ou mettre à disposition par tout autre
              moyen (y compris, mais sans s&apos;y limiter, par
              l&apos;intermédiaire de l&apos;application d&apos;intégration)
              tout contenu (y compris, mais sans s&apos;y limiter, toute donnée
              client) qui enfreint tout droit de propriété intellectuelle ou
              tout droit relatif à la protection des données, au respect de la
              vie privée ou tout autre droit de toute autre personne, est
              diffamatoire ou en violation de tout devoir contractuel ou de
              toute obligation de confiance, est obscène, menaçant, incitant à
              la violence ou à la haine, blasphématoire, discriminatoire (pour
              quelque motif que ce soit), sciemment faux ou trompeur, ou qui
              n&apos;est pas conforme à toutes les lois et réglementations
              applicables ou qui est autrement répréhensible ou interdit ;
            </p>
            <p>
              m) usurper l&apos;identité d&apos;une personne ou d&apos;une
              entité ou présenter de manière erronée votre relation avec une
              personne ou une entité ;
            </p>
            <p>
              n) s&apos;engager dans une activité frauduleuse ou poursuivre un
              but frauduleux ;
            </p>
            <p>o) fournir de fausses informations d&apos;identité</p>
            <p>
              p) tenter d&apos;obtenir ou de permettre un accès non autorisé aux
              services d&apos;Oreonyx, aux applications d&apos;Oreonyx ou à ses
              systèmes ou réseaux connexes, et ne permettre à aucun tiers de
              faire ce qui précède ;
            </p>
            <p>
              q) développer ou utiliser une application d&apos;intégration pour
              fournir des produits ou services qui entrent en conflit ou en
              concurrence avec les services d&apos;Oreonyx ; et/ou
            </p>
            <p>
              r) développer ou utiliser une application d&apos;intégration pour
              accéder à l&apos;API d&apos;Oreonyx ou l&apos;utiliser dans le but
              de contrôler la disponibilité, les performances ou la fonction des
              services d&apos;Oreonyx, ou de recueillir des informations sur les
              services d&apos;Oreonyx à quelque titre que ce soit (y compris,
              mais sans s&apos;y limiter, à des fins d&apos;analyse
              comparative).
            </p>
            <p>
              4.5. Si vous êtes un Développeur Agréé, les restrictions
              supplémentaires suivantes s&apos;appliquent :
            </p>
            <p>
              a) Vous ne devez pas exécuter de processus commerciaux réels ou
              utiliser des Données Client réelles en utilisant les Services
              Oreonyx, à moins que vous n&apos;ayez accès à Oreonyx autrement
              que par le biais du Programme pour Développeurs ; et
            </p>
            <p>
              b) Vous ne devez pas dépasser les limites de stockage de données
              ou toutes autres limites d&apos;utilisation qui peuvent vous être
              applicables, telles que fixées par Oreonyx à sa seule discrétion,
              ou en l&apos;absence de telles limites expresses, des limites
              raisonnables de stockage et d&apos;utilisation telles que
              déterminées par Oreonyx à sa seule discrétion.
            </p>
            <p>
              4.6. Pour éviter toute ambiguïté, Oreonyx se réserve le droit de
              contrôler l&apos;utilisation des services d&apos;Oreonyx et, de
              temps à autre et à sa seule discrétion, de mettre en œuvre des
              restrictions et limitations supplémentaires sur votre utilisation
              et celle de vos utilisateurs des services d&apos;Oreonyx sans
              préavis, y compris, mais sans s&apos;y limiter, en ce qui concerne
              les limites de stockage des données, les appels d&apos;API, les
              fonctionnalités d&apos;enrichissement des données ou, de manière
              générale, votre accès à tout ou partie des services
              d&apos;Oreonyx.
            </p>
            <p>
              4.7. Vous reconnaissez et acceptez que lorsque vous ou votre
              utilisateur développez une application d&apos;intégration, vous
              serez entièrement responsable de l&apos;application
              d&apos;intégration, y compris, mais sans s&apos;y limiter, de son
              développement, de son contenu et de sa maintenance. Oreonyx
              n&apos;aura aucune obligation de fournir une assistance aux
              utilisateurs d&apos;applications ou à vous-même pour l&apos;accès,
              l&apos;utilisation, le développement ou la livraison des
              applications d&apos;intégration.
            </p>
            <p>
              4.8. Vous vous assurerez que vous disposez, et que les
              Utilisateurs disposent, d&apos;un service Internet et d&apos;un
              matériel, de services de télécommunications et de logiciels
              appropriés nécessaires pour accéder aux Applications
              d&apos;Oreonyx et recevoir les Services d&apos;Oreonyx sur
              Internet, conformément aux recommandations d&apos;Oreonyx de temps
              à autre. Oreonyx n&apos;accepte aucune responsabilité quant aux
              performances de ces matériels, services de télécommunications,
              logiciels ou services Internet, ni quant aux performances ou à la
              disponibilité de l&apos;Internet lui-même.
            </p>
            <p>
              4.9. Vous autoriserez Oreonyx et ses conseillers désignés à
              inspecter et à accéder à tous les locaux et matériels dans
              lesquels ou sur lesquels les services d&apos;Oreonyx sont accédés
              ou utilisés, et à accéder à tous les dossiers conservés en rapport
              avec le Contrat Client d&apos;Oreonyx, dans le but de
              s&apos;assurer que vous et vos Utilisateurs êtes en conformité
              avec le présent Contrat Client d&apos;Oreonyx. Vous garantissez
              que vous fournirez toute la coopération, l&apos;accès et
              l&apos;assistance raisonnables dans le cadre de chaque audit et
              que vous obtiendrez la même chose des utilisateurs. Oreonyx
              s&apos;efforcera de vous avertir dans un délai raisonnable de tout
              audit effectué en vertu de la présente clause 4.9.
            </p>
            <p>
              4.10. Vous devrez à tout moment vous conformer à la documentation
              d&apos;assistance d&apos;Oreonyx et à la documentation de
              l&apos;API d&apos;Oreonyx disponibles respectivement sur
              https://oreonyx.live/docs et
              https://developers.oreonyx.live/#introduction. Toute utilisation
              des marques, noms, logos et actifs d&apos;Oreonyx doit être
              approuvée au préalable par Oreonyx par écrit ; veuillez contacter
              Oreonyx à l&apos;adresse brand@oreonyx.live pour obtenir cet
              accord avant toute utilisation.
            </p>
            <h4>
              5. Approbation et publication des applications d&apos;intégration
            </h4>
            <p>
              5.1. Vous ne publierez pas et ferez en sorte que votre (vos)
              utilisateur(s) ne publie(nt) pas ou ne mette(nt) pas à
              disposition, par quelque moyen que ce soit, une quelconque
              application d&apos;intégration, à moins que l&apos;application
              d&apos;intégration et une Place de marché d&apos;applications pour
              sa publication n&apos;aient été préalablement approuvées par
              Oreonyx (cette approbation étant laissée à la seule discrétion
              d&apos;Oreonyx) à l&apos;issue de toute procédure
              d&apos;approbation qu&apos;Oreonyx pourrait entreprendre à sa
              seule discrétion.
            </p>
            <p>
              5.2. Nous pouvons vérifier les informations que vous nous
              fournissez au cours de tout examen ou processus d&apos;approbation
              que nous pouvons entreprendre, et vous devez à tout moment
              maintenir ces informations à jour, complètes et exactes.
            </p>
            <p>
              5.3. Vous ne devez pas et vous devez faire en sorte que votre
              (vos) utilisateur(s) ne mette(nt) pas à disposition une
              application d&apos;intégration accessible par un utilisateur
              d&apos;application à moins que vous ne fournissiez des
              informations claires et précises aux utilisateurs
              d&apos;application concernant l&apos;utilisation de
              l&apos;application d&apos;intégration et tout traitement des
              informations fournies par l&apos;utilisateur d&apos;application,
              et que l&apos;utilisateur d&apos;application accepte d&apos;abord
              les conditions d&apos;application qui doivent, au minimum :
            </p>
            <p>
              a) indiquer clairement que l&apos;utilisation de
              l&apos;application d&apos;intégration nécessite qu&apos;un
              utilisateur de l&apos;application soit un utilisateur et
              n&apos;accorde que les droits d&apos;accès aux services
              d&apos;Oreonyx strictement nécessaires pour que l&apos;utilisateur
              de l&apos;application puisse accéder à ses propres données client,
              à condition qu&apos;il ait le droit de le faire conformément aux
              termes du contrat client d&apos;Oreonyx ;
            </p>
            <p>
              b) inclure les divulgations, y compris un lien vers votre avis de
              confidentialité, nécessaires pour que vous puissiez obtenir le
              consentement ou l&apos;autorisation de l&apos;utilisateur de
              l&apos;application pour traiter les informations fournies par
              l&apos;utilisateur de l&apos;application ;
            </p>
            <p>
              c) indiquer clairement à l&apos;utilisateur de l&apos;application
              que l&apos;application d&apos;intégration est créée et mise à
              disposition par le développeur ou l&apos;utilisateur agréé, selon
              le cas, et non par Oreonyx, et qu&apos;Oreonyx n&apos;a aucune
              obligation de fournir une maintenance ou une assistance pour
              l&apos;application d&apos;intégration à vous ou à
              l&apos;utilisateur de l&apos;application, ou de corriger toute
              erreur ou tout défaut dans l&apos;application d&apos;intégration ;
            </p>
            <p>
              d) interdire à l&apos;utilisateur de l&apos;application de
              procéder à une ingénierie inverse, de décompiler, de désassembler
              ou de tenter de découvrir le code source, le code objet ou la
              structure sous-jacente, les idées, le savoir-faire ou les
              algorithmes relatifs à l&apos;application d&apos;intégration, aux
              services d&apos;Oreonyx, aux applications d&apos;Oreonyx et/ou à
              l&apos;API d&apos;Oreonyx, à moins qu&apos;une telle restriction
              ne soit pas autorisée par la loi ;
            </p>
            <p>
              e) n&apos;accorder que le droit d&apos;accès strictement
              nécessaire à l&apos;utilisation de l&apos;application
              d&apos;intégration pour accéder à ses propres données client
              s&apos;il est un client ou un utilisateur de services
              d&apos;Oreonyx payants ;
            </p>
            <p>
              f) ne pas accorder de droit ou de licence au contenu ou au code
              source de l&apos;application d&apos;intégration qui donnerait à
              cet utilisateur d&apos;application un droit ou une licence sur le
              contenu d&apos;Oreonyx et/ou sur les droits de propriété
              intellectuelle d&apos;Oreonyx ; et
            </p>
            <p>
              g) inclure toutes les restrictions et limitations nécessaires pour
              préserver les droits et obligations d&apos;Oreonyx en vertu du
              Contrat Client d&apos;Oreonyx.
            </p>
            <p>
              5.4. Vous serez responsable de la protection de la vie privée et
              des droits légaux des utilisateurs de votre application
              d&apos;intégration. Vous fournirez des avis de confidentialité
              légalement adéquats à vos utilisateurs de l&apos;application et
              entreprendrez toute démarche de conformité en matière de
              protection des données pouvant être exigée par la législation sur
              la protection des données. Si un ou plusieurs utilisateurs de
              l&apos;application vous fournissent des informations, y compris
              des données à caractère personnel, vous devez informer ce ou ces
              utilisateurs de l&apos;application que ces informations seront
              mises à la disposition d&apos;Oreonyx. Si vous avez connaissance
              d&apos;une violation des conditions des clauses 4.3 et/ou 4.4 par
              les utilisateurs de votre application d&apos;intégration, vous
              devez immédiatement mettre fin à l&apos;accès de cet utilisateur à
              l&apos;application d&apos;intégration.
            </p>
            <p>
              5.5. Vous reconnaissez et acceptez qu&apos;Oreonyx sera en droit
              d&apos;effectuer elle-même, ou par l&apos;intermédiaire d&apos;un
              tiers autorisé, tout audit, test ou évaluation (y compris, mais
              sans s&apos;y limiter, tout test de pénétration) sur toute
              application d&apos;intégration (chacun un &apos; Test
              d&apos;application &apos;), et vous devrez et ferez en sorte que
              vos utilisateurs coopèrent pleinement avec Oreonyx dans le cadre
              de la réalisation de tout Test d&apos;application, y compris en
              fournissant toute assistance ou information raisonnablement
              demandée par Oreonyx ou tout tiers autorisé par Oreonyx à réaliser
              un Test d&apos;application. Sans préjudice des autres droits ou
              recours d&apos;Oreonyx, si un test d&apos;application révèle un
              manquement de votre part ou de la part de vos utilisateurs à toute
              obligation en vertu du contrat client d&apos;Oreonyx, vous devrez
              rapidement et à vos propres frais rectifier un tel manquement et
              payer les coûts d&apos;Oreonyx pour la conduite d&apos;un tel test
              d&apos;application. Vous devrez immédiatement retirer toute
              application d&apos;intégration mise à disposition par vous sur
              instruction d&apos;Oreonyx.
            </p>
            <p>
              5.6. Oreonyx peut, à sa seule discrétion, suspendre ou mettre fin
              à votre accès et/ou à celui de votre application
              d&apos;intégration aux services d&apos;Oreonyx et/ou à l&apos;API
              d&apos;Oreonyx à tout moment, avec ou sans préavis, si Oreonyx
              estime (à sa seule discrétion) que vous ou vos utilisateurs êtes
              en infraction avec le Contrat Client d&apos;Oreonyx ou qu&apos;une
              telle action est nécessaire pour protéger Oreonyx de toute
              responsabilité légale ou réglementaire ou pour protéger les
              intérêts légitimes d&apos;Oreonyx.
            </p>
            <h4>6. Administrateur et utilisateurs</h4>
            <p>
              6.1. Vous désignerez une (1) ou plusieurs personnes physiques
              comme responsable de la communication avec Oreonyx, de
              l&apos;annulation ou de la modification du plan, et de
              l&apos;ajout ou de la suppression d&apos;utilisateurs
              (l&apos;&apos; administrateur &apos;). Vous garantissez et
              déclarez que l&apos;Administrateur aura le pouvoir d&apos;engager
              le Client, sauf qu&apos;un autre représentant dûment autorisé du
              Client peut changer l&apos;Administrateur en le notifiant à
              Oreonyx par courrier électronique ou, le cas échéant, en
              attribuant le rôle à un Utilisateur dûment autorisé au sein des
              Applications d&apos;Oreonyx.
            </p>
            <p>
              6.2. L&apos;Administrateur peut ajouter ou supprimer des
              Utilisateurs en invitant des collègues au cours de la procédure
              d&apos;inscription en ligne qui implique de fournir à Oreonyx
              leur(s) adresse(s) électronique(s) ou en ajoutant des collègues
              dans la section Paramètres de votre compte, là encore en
              fournissant à Oreonyx leur(s) adresse(s) électronique(s). En
              ajoutant des utilisateurs, vous nous donnez l&apos;instruction de
              contacter ces utilisateurs pour les informer des services
              d&apos;Oreonyx afin qu&apos;ils puissent accéder à tout ou partie
              de ces services d&apos;Oreonyx. Vous nous garantissez
              qu&apos;avant d&apos;ajouter un utilisateur, vous avez informé cet
              utilisateur et obtenu son consentement pour qu&apos;Oreonyx le
              contacte à cet égard, et vous garantissez en outre que vous lui
              avez fourni la politique de confidentialité d&apos;Oreonyx sur
              laquelle se fonde son consentement. Vous vous engagez à ne fournir
              qu&apos;aux collègues des adresses électroniques professionnelles
              et jamais d&apos;adresses électroniques personnelles ou
              d&apos;informations de contact concernant une personne à
              l&apos;égard de laquelle vous n&apos;avez pas respecté les
              obligations précédentes.
            </p>
            <p>
              6.3. Vous vous assurez que l&apos;Administrateur n&apos;ajoutera
              ou ne supprimera que des Utilisateurs conformément au Plan,
              jusqu&apos;à concurrence du nombre de Sièges payés et à tout
              moment conformément au présent Contrat Client d&apos;Oreonyx et à
              vos instructions légales. Pour éviter toute ambiguïté, si votre
              Plan ne couvre qu&apos;un seul siège, vous serez
              l&apos;Administrateur et ne serez pas en mesure d&apos;ajouter ou
              de supprimer des utilisateurs sans passer à un Plan payant.
            </p>
            <p>
              6.4. Vous ferez lire à tous les utilisateurs le présent contrat
              client d&apos;Oreonyx et leur ferez prendre conscience en
              particulier des restrictions qui y sont énoncées et ferez en sorte
              qu&apos;ils acceptent la politique d&apos;utilisation acceptable
              avant d&apos;utiliser l&apos;un quelconque des services
              d&apos;Oreonyx.
            </p>
            <p>
              6.5. Vous devrez, et vous vous assurerez que les utilisateurs le
              feront, notifier immédiatement à Oreonyx si vous ou un utilisateur
              avez connaissance d&apos;une quelconque violation du présent
              Contrat d&apos;utilisation d&apos;Oreonyx.
            </p>
            <p>
              6.6. Vous serez responsable de tout accès aux services
              d&apos;Oreonyx et de leur utilisation par vos utilisateurs. Vous
              serez responsable de la sécurité et de la confidentialité de tous
              les identifiants de connexion, y compris les noms
              d&apos;utilisateur, les clés API et les mots de passe, attribués
              ou créés par vous ou l&apos;un de vos utilisateurs afin
              d&apos;accéder aux services d&apos;Oreonyx ou de les utiliser.
              Vous reconnaissez et acceptez en outre que vous demeurerez
              responsable de toutes les activités qui se produisent sous tout
              compte d&apos;utilisateur et de toute activité relative à
              l&apos;API d&apos;Oreonyx à laquelle vous accédez par
              l&apos;intermédiaire de votre clé API.
            </p>
            <p>
              6.7. Vous tiendrez des registres complets et précis des
              utilisateurs et les présenterez à Oreonyx sur demande périodique.
            </p>
            <p>
              6.8. Vous informerez rapidement Oreonyx dès que vous aurez
              connaissance d&apos;un accès ou d&apos;une utilisation non
              autorisé(e) des services d&apos;Oreonyx et vous fournirez toute
              l&apos;assistance raisonnable à Oreonyx pour empêcher un tel accès
              ou une telle utilisation non autorisé(e).
            </p>
            <p>
              6.9. Oreonyx peut utiliser des outils logiciels pour collecter des
              informations et des données, y compris des Données Personnelles,
              relatives à la manière dont les Utilisateurs utilisent les
              Services d&apos;Oreonyx et les Applications d&apos;Oreonyx, y
              compris des données concernant les flux de clics, les durées de
              sessions et les volumes de données accessibles, et conservera et
              traitera les informations et les données, y compris les Données
              Personnelles, dans le but de détecter et de prévenir les
              violations de la sécurité du réseau d&apos;Oreonyx, des lois
              applicables, du présent Contrat Client d&apos;Oreonyx et de la
              Politique de Confidentialité, et d&apos;améliorer son logiciel.
            </p>
            <h4>7. Facturation et paiement</h4>
            <p>
              7.1. Tous les frais sont dus et payables par le client à
              l&apos;avance, soit annuellement, soit mensuellement, conformément
              au plan choisi.
            </p>
            <p>
              7.2. Nous pouvons ne pas exiger de paiement tant que vous
              participez à un essai gratuit ou que vous êtes autrement autorisé
              à accéder à certains des services d&apos;Oreonyx dans le cadre du
              programme pour développeurs. Vous n&apos;avez pas le droit de
              participer à un essai gratuit ou de rejoindre le programme pour
              développeurs et Oreonyx se réserve le droit de commencer et de
              mettre fin à tout essai gratuit ou programme pour développeurs à
              sa seule discrétion. Il ne peut y avoir qu&apos;un seul essai
              gratuit par client.
            </p>
            <p>
              7.3. Oreonyx propose les services d&apos;Oreonyx selon différents
              plans qui donnent accès à différentes fonctionnalités et varient
              dans le montant des frais payables pour ce plan. Certaines
              fonctionnalités sont réservées aux abonnés d&apos;un Plan
              spécifique. Vous pouvez choisir un Plan lors de votre première
              inscription aux services d&apos;Oreonyx et, par la suite, vous
              pouvez changer de Plan conformément aux conditions suivantes :
            </p>
            <p>
              a) les changements vers une formule plus chère peuvent être
              effectués à tout moment au cours de la période initiale ou par la
              suite et les changements prendront effet immédiatement ; ou
            </p>
            <p>
              b) les modifications apportées à un plan à prix réduit ne peuvent
              prendre effet qu&apos;à tout moment après la période initiale et
              au plus tôt au début de la première période de renouvellement.
            </p>
            <p>
              7.4. Vous pouvez demander une modification de votre Plan sous
              réserve des conditions énoncées à l&apos;article 7.3 ci-dessus,
              soit par le biais de la page de gestion de compte dans les
              applications d&apos;Oreonyx, soit en contactant l&apos;équipe
              d&apos;assistance à la clientèle d&apos;Oreonyx à l&apos;adresse
              support@oreonyx.live.
            </p>
            <p>
              7.5. Les utilisateurs auront accès aux services d&apos;Oreonyx
              conformément au plan choisi et payé par le client. Un développeur
              agréé aura accès aux services d&apos;Oreonyx conformément au plan
              du programme pour développeurs.
            </p>
            <p>
              7.6. Le paiement est exigible immédiatement et vous êtes tenu de
              régler toutes les factures immédiatement. Si vous nous communiquez
              les détails de paiement d&apos;une carte de crédit, d&apos;une
              carte de débit, d&apos;un prélèvement automatique ou d&apos;une
              autre méthode de paiement similaire (collectivement, &apos; carte
              de crédit &apos;), vous autorisez par les présentes Oreonyx à
              débiter automatiquement la carte de crédit, y compris toutes les
              taxes applicables, pour régler toutes les factures en suspens, y
              compris les frais relatifs à toute condition de renouvellement.
              Vous reconnaissez que certaines cartes de crédit peuvent facturer
              des frais de transaction à l&apos;étranger ou d&apos;autres frais
              qu&apos;il vous incombera de payer.
            </p>
            <p>
              7.7. Si le nombre d&apos;Utilisateurs que vous autorisez à
              utiliser les Services Oreonyx dépasse le nombre de Sièges que vous
              avez achetés ou nécessite autrement le paiement de Frais
              supplémentaires, vous acceptez d&apos;être facturé pour cette
              utilisation et d&apos;être automatiquement facturé pour les Frais
              supplémentaires.
            </p>
            <p>
              7.8. Sous réserve de la clause 15.4, tous les frais ne sont pas
              remboursables. Par exemple, si vous avez souscrit aux services
              d&apos;Oreonyx avec dix (10) sièges pour une durée initiale
              d&apos;un (1) an et que, deux mois après le début de la durée
              initiale, vous souhaitez réduire le nombre de sièges à six (6),
              Oreonyx ne sera pas tenu de vous rembourser les frais payés pour
              les quatre (4) sièges dont vous n&apos;avez plus besoin. Le nombre
              de Sièges souscrits ne sera réduit à six (6) qu&apos;au début de
              la Période de renouvellement, sous réserve de toute autre
              modification effectuée avant cette date.
            </p>
            <p>
              7.9. Oreonyx se réserve le droit de modifier les Frais moyennant
              un préavis de trente (30) jours (qui peut être envoyé par courrier
              électronique). Toute modification des frais prendra effet à la fin
              de la période initiale ou de la période de renouvellement en
              cours.
            </p>
            <p>
              7.10. Si des frais ne sont pas réglés avec succès pour quelque
              raison que ce soit, vous resterez responsable de tous les montants
              qui n&apos;ont pas été versés à Oreonyx. Si la facturation
              automatique échoue pour quelque raison que ce soit, Oreonyx peut
              tenter de débiter la carte de crédit une (1) ou plusieurs fois. Si
              le paiement continue d&apos;échouer, Oreonyx peut, sans
              responsabilité à votre égard :
            </p>
            <p>
              a) suspendre les services d&apos;Oreonyx ou toute partie de
              ceux-ci ; et/ou
            </p>
            <p>
              b) facturer des intérêts sur le montant en souffrance au taux de
              huit (8) % par an au-dessus du taux de base de la Banque
              d&apos;Angleterre (ces intérêts s&apos;accumuleront
              quotidiennement jusqu&apos;à la date du paiement effectif et
              seront composés à la fin de chaque mois civil).
            </p>
            <p>
              7.11. Tous les frais s&apos;entendent hors TVA ou toute taxe de
              vente locale pertinente, dont vous serez responsable conformément
              à la législation applicable.
            </p>
            <h4>8. Clause de non-responsabilité</h4>
            <p>
              8.1. Les services d&apos;Oreonyx sont fournis &apos; en
              l&apos;état &apos; et &apos; tels que disponibles &apos;. Nous ne
              fournissons aucune garantie d&apos;aucune sorte, qu&apos;elle soit
              expresse ou implicite, y compris, mais sans s&apos;y limiter, les
              garanties implicites de qualité marchande, d&apos;adéquation à un
              usage particulier, d&apos;absence de contrefaçon ou de
              performance.
            </p>
            <p>
              8.2. Oreonyx ne garantit pas que les services d&apos;Oreonyx, y
              compris l&apos;API d&apos;Oreonyx, et/ou les applications
              d&apos;Oreonyx seront ininterrompus, sûrs, disponibles à tout
              moment ou exempts d&apos;erreurs ; elle ne donne pas non plus de
              garantie quant aux résultats qui peuvent être obtenus par
              l&apos;utilisation des services d&apos;Oreonyx, y compris en ce
              qui concerne toute application d&apos;intégration développée par
              vous. Nous ne sommes pas responsables des dommages causés à votre
              système informatique ou à celui de tout utilisateur, de la perte
              ou de la corruption de données, ou de tout autre dommage résultant
              de votre accès ou de celui de tout utilisateur aux services
              d&apos;Oreonyx ou à toute application d&apos;intégration, ou de
              leur utilisation. Aucune information ou conseil obtenu par vous
              auprès d&apos;Oreonyx, y compris les formulaires de diligence
              raisonnable des vendeurs, les messages et les informations, ne
              créera de garantie non expressément stipulée dans le présent
              Contrat Client d&apos;Oreonyx.
            </p>
            <p>
              8.3. Si, pour des raisons techniques, juridiques ou
              opérationnelles, Oreonyx n&apos;est plus en mesure de respecter
              une disposition du présent Contrat Client d&apos;Oreonyx, Oreonyx
              peut, à sa seule discrétion, déclarer que ladite disposition
              n&apos;est plus contraignante. Le seul et unique recours pour vous
              dans un tel scénario sera de résilier le présent contrat avec un
              préavis de trente (30) jours, bien qu&apos;aucun dommage ne soit
              dû et qu&apos;aucun remboursement ne soit accordé.
            </p>
            <h4>9. Droits de propriété intellectuelle</h4>
            <p>
              9.1. Rien dans le présent Contrat Client d&apos;Oreonyx
              n&apos;entraînera le transfert à l&apos;autre partie de la
              propriété de tout droit de propriété intellectuelle appartenant à
              l&apos;une des parties, à l&apos;exception de ce qui est prévu à
              la clause 9.5.
            </p>
            <p>
              9.2. Oreonyx et/ou ses concédants de licence resteront, entre les
              parties, propriétaires de tous les droits de propriété
              intellectuelle sur les marques, les marques commerciales et les
              logos d&apos;Oreonyx, les services d&apos;Oreonyx (y compris le
              contenu d&apos;Oreonyx mais à l&apos;exclusion des données du
              client) et les applications d&apos;Oreonyx. Sauf autorisation
              écrite expresse entre les parties ou disposition contraire dans le
              présent Contrat Client d&apos;Oreonyx, vous n&apos;utiliserez pas
              et ne ferez pas en sorte que les Utilisateurs n&apos;utilisent pas
              les droits de propriété intellectuelle d&apos;Oreonyx sans
              l&apos;accord écrit préalable d&apos;Oreonyx.
            </p>
            <p>
              9.3. Si vous avez connaissance ou si vous soupçonnez une
              utilisation inappropriée ou illicite de l&apos;un des droits de
              propriété intellectuelle d&apos;Oreonyx, vous informerez
              rapidement Oreonyx par écrit de toutes les circonstances relatives
              à cette utilisation inappropriée ou illicite. Vous aiderez Oreonyx
              à prendre toutes les mesures nécessaires pour défendre les droits
              de propriété intellectuelle d&apos;Oreonyx, mais vous
              n&apos;engagerez pas de poursuites judiciaires de votre propre
              chef.
            </p>
            <p>
              9.4. Vous resterez, entre les parties, le propriétaire de tous les
              droits de propriété intellectuelle sur les données du client. Vous
              garantissez que vous êtes propriétaire des Données du Client et/ou
              que vous avez le droit d&apos;accorder la licence susmentionnée et
              que la fourniture des Données du Client à Oreonyx et
              l&apos;exercice de tout droit par Oreonyx en rapport avec les
              Données du Client n&apos;enfreindront pas les droits de tiers, y
              compris les droits de propriété intellectuelle. Si le présent
              Contrat Client d&apos;Oreonyx est résilié, la licence
              susmentionnée sera automatiquement résiliée.
            </p>
            <p>
              9.5. Si vous ou des utilisateurs fournissez à Oreonyx un retour
              d&apos;information, des commentaires, des suggestions, des
              améliorations, des recommandations ou d&apos;autres données
              concernant les services d&apos;Oreonyx ou une partie de ceux-ci
              (collectivement, le &apos; retour d&apos;information &apos;), vous
              cédez par la présente et/ou vous faites en sorte que les
              utilisateurs cèdent à Oreonyx tous les droits, titres et intérêts
              relatifs au retour d&apos;information, et vous acceptez et
              comprenez qu&apos;Oreonyx est libre d&apos;utiliser le retour
              d&apos;information sans paiement, attribution ou restriction.
            </p>
            <p>
              9.6. Dans la mesure où vous ou un utilisateur créez une
              application d&apos;intégration, les parties conserveront chacune
              la propriété des droits de propriété intellectuelle qu&apos;elles
              détiennent et qui alimentent l&apos;application
              d&apos;intégration. Oreonyx accordera une licence limitée et
              révocable pour l&apos;utilisation des droits de propriété
              intellectuelle d&apos;Oreonyx qui font partie de toute application
              d&apos;intégration, sous réserve des conditions de l&apos;accord
              client d&apos;Oreonyx. Oreonyx sera toujours libre de restreindre,
              retirer ou limiter l&apos;accès ou l&apos;utilisation de l&apos;un
              quelconque de ses droits de propriété intellectuelle à tout
              moment, sans que sa responsabilité ne soit engagée à votre égard
              ou à l&apos;égard de tout utilisateur.
            </p>
            <h4>10. Garanties</h4>
            <p>
              10.1. Vous (pour votre propre compte et au nom de tout
              utilisateur) déclarez, garantissez et vous engagez auprès
              d&apos;Oreonyx à ce que :
            </p>
            <p>
              a) vous disposez de tous les droits, pouvoirs et autorités
              nécessaires pour accorder des droits dans le cadre du présent
              Contrat Client d&apos;Oreonyx ;
            </p>
            <p>
              b) le développement, la fourniture et l&apos;utilisation des
              Données Client et de votre (vos) Application(s)
              d&apos;Intégration, ainsi que l&apos;octroi de tout droit par vous
              en vertu du présent Contrat Client d&apos;Oreonyx, seront
              conformes à toutes les lois applicables et n&apos;enfreindront pas
              les droits d&apos;un tiers ;
            </p>
            <p>
              c) Vous vous conformerez à toutes les lois applicables, et vous
              avez obtenu et vous vous engagez à conserver tous les
              consentements, licences et autorisations nécessaires à
              l&apos;octroi des droits et à l&apos;exécution de toutes les
              obligations en vertu du Contrat Client d&apos;Oreonyx ;
            </p>
            <p>
              d) Vous n&apos;insérerez ni n&apos;inclurez, ni ne permettrez ni
              ne provoquerez l&apos;insertion ou l&apos;inclusion dans les
              services d&apos;Oreonyx ou dans toute application
              d&apos;intégration, de tout logiciel malveillant ou de toute autre
              chose qui pourrait être raisonnablement préjudiciable à la
              réputation ou à l&apos;activité d&apos;Oreonyx ;
            </p>
            <p>
              e) Vous utiliserez un logiciel anti-virus à jour et accepté par
              l&apos;industrie pour vérifier et empêcher l&apos;introduction de
              tout logiciel malveillant dans les services d&apos;Oreonyx ou dans
              toute application d&apos;intégration ; et
            </p>
            <p>
              f) vous coopérerez avec Oreonyx pour atténuer l&apos;effet de tout
              logiciel malveillant découvert dans toute application
              d&apos;intégration développée par vous ou votre utilisateur.
            </p>
            <p>
              10.2. Vous (pour votre propre compte et au nom de tout
              Utilisateur) déclarez, garantissez et vous engagez auprès
              d&apos;Oreonyx à ce que, en ce qui concerne toute application
              d&apos;intégration que vous ou votre Utilisateur développez,
              l&apos;application d&apos;intégration soit :
            </p>
            <p>
              a) sera d&apos;une qualité satisfaisante, exempte de tout défaut
              matériel et adaptée à l&apos;usage auquel elle est destinée ;
            </p>
            <p>
              b) sera conforme à toutes les exigences prévues par le contrat
              client d&apos;Oreonyx et telles qu&apos;elles vous sont notifiées
              de temps à autre par Oreonyx ;
            </p>
            <p>
              c) se conformer aux conditions de la plateforme tierce à laquelle
              l&apos;application d&apos;intégration se connecte, ainsi qu&apos;à
              toutes les lois applicables ;
            </p>
            <p>
              d) ne pas dégrader la fonctionnalité ou les performances des
              services d&apos;Oreonyx ou de l&apos;API d&apos;Oreonyx ;
            </p>
            <p>e) ne pas contenir ou inclure de logiciel malveillant ;</p>
            <p>
              f) ne pas modifier, divulguer ou utiliser, et vous ou votre
              utilisateur ne le ferez pas, les données du client, sauf dans la
              mesure où cela est nécessaire pour que l&apos;application
              d&apos;intégration fonctionne et soit performante conformément aux
              autorisations fournies à l&apos;application d&apos;intégration par
              l&apos;utilisateur de l&apos;application ou lorsque la loi
              applicable l&apos;exige ; et
            </p>
            <p>
              g) avoir des Conditions d&apos;utilisation, qu&apos;un Utilisateur
              de l&apos;Application doit expressément accepter avant que
              l&apos;Utilisateur de l&apos;Application ne puisse utiliser
              l&apos;Application d&apos;Intégration.
            </p>
            <h4>
              11. Indemnisation Vous indemniserez Oreonyx contre toute perte ou
              tout dommage qu&apos;Oreonyx encourt ou subit, quelle qu&apos;en
              soit la cause, du fait ou en relation avec votre utilisation ou
              celle de vos utilisateurs des services d&apos;Oreonyx, de toute
              application d&apos;intégration que vous ou votre/vos
              utilisateur(s) pouvez créer, des données du client, et de la
              violation par vous et/ou vos utilisateurs du présent contrat
              client d&apos;Oreonyx.
            </h4>
            <h4>12. Responsabilité</h4>
            <p>
              12.1. Rien dans le présent Contrat du client d&apos;Oreonyx ne
              limite ou n&apos;exclut la responsabilité de l&apos;une ou
              l&apos;autre des parties :
            </p>
            <p>
              a) en cas de décès ou de dommages corporels causés par sa
              négligence ;
            </p>
            <p>
              b) en cas de déclaration frauduleuse ou de tout autre acte ou
              omission frauduleux ;
            </p>
            <p>
              c) pour le paiement des sommes dûment dues à l&apos;autre partie
              dans le cadre de l&apos;exécution normale du présent Contrat
              Client d&apos;Oreonyx ; et/ou
            </p>
            <p>
              d) pour toute autre responsabilité qui ne peut être légalement
              exclue ou limitée.
            </p>
            <p>
              12.2. Sous réserve de l&apos;article 12.1, en aucun cas Oreonyx,
              ses directeurs, employés, partenaires, agents, fournisseurs ou
              affiliés ne seront responsables (que ce soit en raison d&apos;une
              rupture de contrat, d&apos;un délit civil (y compris la
              négligence), d&apos;un manquement à une obligation statutaire ou
              autre) de toute :
            </p>
            <p>
              a) perte de profit, perte de ventes, de chiffre d&apos;affaires,
              de revenus ou d&apos;affaires ;
            </p>
            <p>b) la perte de clients, de contrats ou d&apos;opportunités ;</p>
            <p>
              c) la perte ou l&apos;atteinte à la réputation ou à la bonne
              volonté
            </p>
            <p>d) la perte d&apos;économies anticipées</p>
            <p>e) la perte de tout logiciel ou de toute donnée</p>
            <p>
              f) la perte d&apos;utilisation du matériel, des logiciels ou des
              données
            </p>
            <p>
              g) la perte ou le gaspillage du temps de la direction ou
              d&apos;autres membres du personnel
            </p>
            <p>
              h) les dommages indirects, accessoires, consécutifs, spéciaux ou
              punitifs (y compris les interruptions de service, les dommages
              informatiques ou les pannes de système) découlant de ou liés à
              votre accès ou celui de vos utilisateurs aux services
              d&apos;Oreonyx ou à leur utilisation, ou à l&apos;impossibilité
              d&apos;y accéder ou de les utiliser, en tout ou partie ; à
              l&apos;utilisation ou à l&apos;impossibilité d&apos;accéder ou
              d&apos;utiliser toute application d&apos;intégration ; à votre
              création, développement ou livraison, ou à l&apos;impossibilité de
              le faire, de toute application d&apos;intégration ; à la conduite
              ou au contenu de tout tiers sur les services d&apos;Oreonyx et/ou
              sur les applications d&apos;Oreonyx ; tout contenu obtenu à partir
              des services d&apos;Oreonyx ; tout comportement ou contenu de tout
              utilisateur ; et tout accès, utilisation ou modification non
              autorisés de vos transmissions ou contenus ou de ceux de vos
              utilisateurs, y compris les données du client, que ce soit sur la
              base d&apos;une garantie, d&apos;un contrat, d&apos;un délit civil
              (y compris la négligence) ou de toute autre théorie juridique et
              que vous ayez été ou non informé de la possibilité de telles
              pertes.
            </p>
            <p>
              12.3. Sous réserve des clauses 12.1 et 12.2, la responsabilité
              totale d&apos;Oreonyx découlant du présent Contrat client
              d&apos;Oreonyx ou de son objet, ou s&apos;y rapportant, et de tout
              ce qu&apos;il a fait ou n&apos;a pas fait en rapport avec celui-ci
              (que ce soit en raison d&apos;une rupture de contrat, d&apos;un
              délit civil (y compris la négligence), d&apos;un manquement à une
              obligation légale ou autre) sera limitée au montant total des
              frais effectivement payés par vous au cours des douze (12) mois
              précédant l&apos;événement à l&apos;origine de la réclamation.
            </p>
            <h4>13. Confidentialité</h4>
            <p>13.1. Sous réserve de la clause 13.2, chaque partie :</p>
            <p>
              a) garder confidentielles toutes les Informations confidentielles
              de l&apos;autre partie qu&apos;elle reçoit dans le cadre de la
              fourniture ou de la réception des Services d&apos;Oreonyx ;
            </p>
            <p>
              b) appliquer à ces informations confidentielles des mesures de
              sécurité et un degré de soin non inférieurs à ceux qu&apos;elle
              prend pour protéger ses propres informations confidentielles et,
              en tout état de cause, non inférieurs à ceux qu&apos;une personne
              ou une entreprise raisonnable prendrait pour protéger ces mêmes
              informations ;
            </p>
            <p>
              c) n&apos;utiliser ces Informations confidentielles que dans la
              mesure strictement nécessaire à l&apos;exécution ou à
              l&apos;exercice de ses droits dans le cadre du présent Contrat
              client d&apos;Oreonyx ;
            </p>
            <p>
              d) ne pas divulguer ces Informations Confidentielles à des tiers
              (autres que ses conseillers professionnels, dirigeants, employés,
              agents, contractants et sous-traitants sur la base du &apos;
              besoin de savoir &apos; strictement nécessaire conformément au
              présent Contrat Client d&apos;Oreonyx et sous réserve que chacune
              de ces personnes soit liée par une obligation de confidentialité
              qui ne soit pas moins favorable que la présente Clause 13 ; et
            </p>
            <p>
              e) retourner rapidement, sur demande et, en tout état de cause, à
              la résiliation du Contrat Client d&apos;Oreonyx (pour quelque
              raison que ce soit), à l&apos;autre partie tous les documents
              (sous quelque forme que ce soit) incorporant, incorporant ou
              enregistrant ces Informations Confidentielles en sa possession ou
              sous son contrôle et, à la demande de l&apos;autre partie,
              certifier par écrit qu&apos;il l&apos;a fait.
            </p>
            <p>
              13.2. Les informations confidentielles ne comprennent pas les
              informations dont le destinataire peut établir qu&apos;elles
            </p>
            <p>
              a) qu&apos;elles étaient connues du public et généralement
              disponibles dans le domaine public avant leur divulgation ;
            </p>
            <p>
              b) qu&apos;elles sont devenues publiquement connues et
              généralement disponibles après leur divulgation sans qu&apos;il y
              ait eu violation du présent Contrat Client d&apos;Oreonyx ou de
              toute autre obligation contractuelle ;
            </p>
            <p>
              c) sont déjà connues du destinataire ou légalement en sa
              possession au moment de la divulgation ; et/ou
            </p>
            <p>
              d) est légalement divulguée au destinataire, sans aucune
              obligation de confidentialité de la part d&apos;un tiers.
            </p>
            <p>
              13.3. Chaque partie peut divulguer les informations
              confidentielles de l&apos;autre partie dans la mesure où la loi ou
              une cour, un tribunal, un régulateur ou toute autre autorité
              compétente l&apos;exige (mais uniquement dans la mesure où cette
              exigence est satisfaite).
            </p>
            <p>
              13.4. Vous reconnaissez et acceptez que les services
              d&apos;Oreonyx (y compris le contenu d&apos;Oreonyx mais à
              l&apos;exclusion des données du client) et les applications
              d&apos;Oreonyx ainsi que les conditions du présent contrat client
              d&apos;Oreonyx, y compris, en particulier, la tarification,
              constituent des informations confidentielles d&apos;Oreonyx.
              Oreonyx reconnaît et accepte que les Données du Client constituent
              vos Informations Confidentielles.
            </p>
            <p>
              13.5. Nonobstant toute disposition contraire, Oreonyx aura le
              droit de collecter et d&apos;analyser des données et autres
              informations relatives à la fourniture, à l&apos;utilisation et
              aux performances de divers aspects des services d&apos;Oreonyx et
              des systèmes et technologies connexes (y compris, sans s&apos;y
              limiter, les informations concernant les Données du Client et les
              données qui en sont dérivées), et Oreonyx sera libre de :
            </p>
            <p>
              a) utiliser ces informations et données pour améliorer les
              services d&apos;Oreonyx et à d&apos;autres fins de développement,
              de diagnostic et de correction en rapport avec les services
              d&apos;Oreonyx et d&apos;autres offres d&apos;Oreonyx ; et
            </p>
            <p>
              b) de divulguer ces données uniquement sous forme agrégée ou sous
              une autre forme dépersonnalisée.
            </p>
            <h4>14. Protection des données</h4>
            <p>
              14.1. Dans la présente Clause 14, les termes &apos; processus
              &apos;, &apos; contrôleur de données &apos;, &apos; fournisseur de
              services &apos; et &apos; processeur de données &apos; auront les
              mêmes significations que celles définies dans la Législation sur
              la protection des données.
            </p>
            <p>
              14.2. Les parties conviennent qu&apos;en vertu de la législation
              applicable en matière de protection des données, Oreonyx est le
              responsable du traitement des données du client qui constituent
              des données à caractère personnel, et que vous êtes le responsable
              du traitement des données. Pour éviter toute ambiguïté, lorsque le
              CCPA est applicable, Oreonyx agit en tant que prestataire de
              services pour votre entreprise.
            </p>
            <p>
              14.3. En tant que responsable du traitement des données, vous
              garantissez et déclarez que vous avez le droit de partager les
              Données à caractère personnel contenues dans les Données du client
              avec les Services d&apos;Oreonyx et/ou toute Application
              d&apos;intégration et d&apos;autoriser leur utilisation dans le
              cadre de la fourniture et de la réception des Services
              d&apos;Oreonyx pour vous et vos Utilisateurs.
            </p>
            <p>
              14.4. Dans la mesure où Oreonyx traite des Données à caractère
              personnel dans le cadre de la fourniture des Services Oreonyx ou
              dans le but de faciliter l&apos;utilisation de toute Application
              d&apos;intégration, Oreonyx :
            </p>
            <p>
              a) traitera les Données à caractère personnel uniquement dans le
              but de fournir les Services d&apos;Oreonyx ou autrement sur vos
              instructions écrites, qui peuvent être des instructions
              spécifiques ou de nature générale, et y compris afin de se
              conformer à ses obligations en vertu du présent Contrat du client
              d&apos;Oreonyx ;
            </p>
            <p>
              b) traiter les Données à caractère personnel uniquement dans le
              but de fournir les services d&apos;Oreonyx et non à ses propres
              fins, et pour la durée de la Période initiale et de toute Période
              de renouvellement, le cas échéant ;
            </p>
            <p>
              c) mettre en œuvre et maintenir des mesures techniques et
              organisationnelles appropriées pour protéger les données à
              caractère personnel contre un traitement non autorisé ou illégal
              et contre la perte, la destruction, l&apos;endommagement, le vol
              ou la divulgation accidentels, compte tenu du préjudice qui
              pourrait résulter de tout traitement non autorisé ou illégal, de
              la perte, de la destruction, de l&apos;endommagement ou du vol
              accidentels des données à caractère personnel et compte tenu de la
              nature des données à caractère personnel qui doivent être
              protégées ;
            </p>
            <p>
              d) à votre demande et selon votre choix, vous remettre ou
              supprimer les données à caractère personnel de ses systèmes lors
              de la résiliation des services d&apos;Oreonyx ;
            </p>
            <p>
              e) prendre des mesures raisonnables pour garantir la fiabilité du
              personnel qui a accès aux Données à caractère personnel en vertu
              du présent Contrat client d&apos;Oreonyx et s&apos;assurer que ce
              personnel qui traite les Données à caractère personnel pour
              Oreonyx est soumis à un devoir de confidentialité par rapport aux
              Données à caractère personnel et comprend ses obligations
              lorsqu&apos;il traite les Données à caractère personnel
              conformément à la présente Clause 14 ;
            </p>
            <p>
              f) vous aider à respecter vos obligations de répondre aux demandes
              des personnes concernées exerçant leurs droits, à respecter vos
              obligations légales en matière de sécurité du traitement des
              données à caractère personnel et à entreprendre des évaluations de
              l&apos;impact de la protection des données ;
            </p>
            <p>
              g) Vous notifier sans retard injustifié toute violation de données
              à caractère personnel et Vous fournir, lorsqu&apos;elles sont
              connues, des informations sur la source et la nature de la
              violation de données, le type de données ayant fait l&apos;objet
              de la violation et l&apos;identité des personnes concernées ;
            </p>
            <p>
              h) se soumettre aux audits et inspections d&apos;un tiers certifié
              choisi par Oreonyx et mettre à disposition le rapport de synthèse
              afin de s&apos;assurer qu&apos;Oreonyx se conforme à ses
              obligations en vertu de la présente Clause 14 ; et
            </p>
            <p>
              i) vous notifier si, de l&apos;avis raisonnable d&apos;Oreonyx,
              vos instructions concernant tout traitement de données à caractère
              personnel par Oreonyx sont illégales.
            </p>
            <p>
              14.5. L&apos;assistance qu&apos;Oreonyx vous fournit conformément
              à l&apos;article 12.4 ci-dessus sera fournie en tant que service
              payant conformément à l&apos;article 6.
            </p>
            <p>
              14.6. Vous acceptez qu&apos;afin de fournir les Services
              d&apos;Oreonyx, Oreonyx puisse engager des sous-traitants de temps
              à autre pour traiter les Données à caractère personnel. À votre
              demande, Oreonyx fournira les détails de ces sous-traitants
              secondaires et de toute modification de l&apos;identité d&apos;un
              sous-traitant secondaire. Oreonyx engagera des sous-traitants dans
              le cadre d&apos;un accord écrit prévoyant des protections
              adéquates pour les personnes concernées, au moins équivalentes à
              celles prévues par la présente Clause 14. Oreonyx peut engager des
              sous-traitants qui sont basés en dehors du Royaume-Uni et de
              l&apos;Union européenne, ce à quoi vous consentez par la présente
              et ce à quoi vous vous assurez que les Utilisateurs consentent.
              Dans ces cas, Oreonyx ne le fera que si le sous-traitant est situé
              dans un pays qui a été identifié comme offrant une protection
              adéquate des Données Personnelles ou à un tiers où il existe un
              mécanisme de transfert approuvé en place pour protéger les Données
              Personnelles - c&apos;est-à-dire en concluant l&apos;Accord{" "}
              <a className="text-blue-500" href="#">
                international de transfert de données du Royaume-Uni
              </a>{" "}
              (&apos; IDTA &apos;) et/ou l&apos;Addendum IDTA (selon le cas) ou
              les Clauses Contractuelles Standard de la Commission européenne.
              Chaque fois qu&apos;Oreonyx utilise des sous-traitants
              conformément à la présente clause 14.6, il restera responsable
              envers vous de leur conformité à la législation applicable en
              matière de protection des données.
            </p>
            <p>
              14.7. Les parties conviennent de ne faire aucune déclaration ni de
              publier aucun dépôt, communication, avis, communiqué de presse ou
              rapport concernant toute violation de la législation sur la
              protection des données affectant les services d&apos;Oreonyx.
            </p>
            <h4>15. Résiliation et effet de la résiliation</h4>
            <p>
              15.1. Sans préjudice de tout autre droit ou recours à sa
              disposition, Oreonyx ou vous pouvez résilier le présent contrat
              client d&apos;Oreonyx avec effet immédiat en adressant une
              notification écrite à l&apos;autre partie si :
            </p>
            <p>
              a) l&apos;autre partie ne paie pas tout montant dû en vertu du
              présent Contrat client d&apos;Oreonyx à la date d&apos;échéance du
              paiement et reste en défaut pas moins de quatorze (14) jours après
              avoir été informée par écrit d&apos;effectuer ce paiement ;
            </p>
            <p>
              b) l&apos;autre partie commet une violation substantielle du
              présent contrat client d&apos;Oreonyx qui est irrémédiable ou qui,
              si elle est remédiable, n&apos;est pas corrigée dans un délai de
              quatorze (14) jours après avoir été notifiée par écrit de la
              violation ; ou
            </p>
            <p>
              c) l&apos;autre partie devient insolvable, conclut un concordat
              avec ses créanciers, fait nommer un administrateur judiciaire ou
              un administrateur de son entreprise ou de la totalité ou
              d&apos;une partie substantielle de ses actifs, ou fait
              l&apos;objet d&apos;une ordonnance ou d&apos;une résolution
              effective en vue de son administration, de sa mise sous séquestre,
              de sa liquidation ou de toute autre procédure similaire, ou fait
              l&apos;objet d&apos;une saisie-arrêt, une saisie, une exécution
              forcée ou un autre acte de procédure à l&apos;encontre de la
              totalité ou d&apos;une partie substantielle de ses actifs (qui
              n&apos;est pas acquitté, payé, retiré ou supprimé dans les
              vingt-huit (28) jours), ou fait l&apos;objet d&apos;une procédure
              équivalente ou substantiellement similaire à l&apos;une des
              procédures susmentionnées dans toute juridiction applicable, ou
              cesse d&apos;exercer ses activités ou menace de le faire.
            </p>
            <p>
              15.2. En cas de résiliation, vous paierez l&apos;intégralité des
              services d&apos;Oreonyx jusqu&apos;au dernier jour de fourniture
              des services d&apos;Oreonyx inclus. En cas de résiliation, Oreonyx
              mettra à votre disposition l&apos;ensemble des Données Client pour
              une récupération électronique pendant une période de trente (30)
              jours, après quoi Oreonyx pourra, sans y être obligé, supprimer
              les Données Client stockées.
            </p>
            <p>
              15.3. Toutes les sections du présent Contrat Client d&apos;Oreonyx
              qui, de par leur nature, devraient survivre à la résiliation,
              survivront à la résiliation, y compris, mais sans s&apos;y
              limiter, les droits de paiement accumulés, les obligations de
              confidentialité, les exclusions de garantie et les limitations de
              responsabilité.
            </p>
            <p>
              15.4. Oreonyx peut résilier le présent Contrat du client
              d&apos;Oreonyx à tout moment et sans préavis. En cas de
              résiliation immédiate sans motif par Oreonyx, Oreonyx vous
              remboursera la partie payée mais non utilisée des frais pour le
              reste de la période initiale ou de la période de renouvellement,
              selon le cas.
            </p>
            <p>
              15.5. Sans préjudice des clauses 15.1, 15.2 ou 15.4, Oreonyx peut,
              en outre, et sans responsabilité, résilier le présent Contrat du
              client d&apos;Oreonyx ou, alternativement, suspendre l&apos;accès
              et l&apos;utilisation des Services d&apos;Oreonyx ou de toute
              partie de ceux-ci, en vous adressant une notification en cas de
              manquement à l&apos;une des dispositions du présent Contrat du
              client d&apos;Oreonyx.
            </p>
            <h4>16. Force majeure</h4>
            <p>
              Aucune des parties ne sera responsable envers l&apos;autre de tout
              manquement ou retard dans l&apos;exécution de ses obligations en
              vertu du présent Contrat Client d&apos;Oreonyx, à l&apos;exception
              de vos obligations de paiement, qui survient en raison de toute
              circonstance qu&apos;elle ne peut raisonnablement pas contrôler
              (ce qui inclut les cas de force majeure, les pandémies, les
              explosions, les inondations, les tempêtes, les incendies ou les
              accidents, les guerres ou menaces de guerre, les sabotages, les
              insurrections, les troubles civils ou les réquisitions, les actes,
              les restrictions, les réglementations, les arrêtés, les
              interdictions ou les mesures de toute nature de la part de toute
              autorité gouvernementale, parlementaire ou locale, les grèves, les
              lock-out ou autres actions industrielles ou conflits commerciaux
              (qu&apos;ils impliquent le personnel d&apos;Oreonyx ou un tiers),
              parlementaire ou locale, des réglementations ou embargos sur
              l&apos;importation ou l&apos;exportation, des grèves, lock-out ou
              autres actions industrielles ou conflits commerciaux (qu&apos;ils
              impliquent le personnel d&apos;Oreonyx ou un tiers), des
              difficultés à obtenir des matières premières, de la
              main-d&apos;œuvre, du carburant, des pièces ou des machines ou des
              pannes de machines, ou l&apos;interruption ou la défaillance
              d&apos;Internet ou de tout réseau, des télécommunications, de
              l&apos;alimentation électrique ou de l&apos;infrastructure, ou de
              tout fournisseur de ce qui précède, mais n&apos;inclura pas la
              pénurie ou le manque de fonds disponibles de votre part), à
              condition qu&apos;il :
            </p>
            <p>
              a) notifie par écrit à l&apos;autre partie, dès que cela est
              raisonnablement possible, la nature et l&apos;étendue des
              circonstances et des effets probables ;
            </p>
            <p>
              b) s&apos;efforce raisonnablement d&apos;atténuer les effets des
              circonstances afin de minimiser ou d&apos;éviter tout impact
              négatif sur l&apos;autre partie ; et
            </p>
            <p>
              c) s&apos;efforce raisonnablement de reprendre ses activités dès
              que cela est raisonnablement possible.
            </p>
            <h4>17. Publicité</h4>
            <p>
              Vous acceptez qu&apos;Oreonyx utilise votre nom ou votre logo pour
              vous présenter comme un client d&apos;Oreonyx sur son site
              Internet et dans d&apos;autres supports marketing.
            </p>
            <h4>18. Généralités</h4>
            <p>
              18.1. Sauf si les parties en conviennent expressément par écrit,
              si une partie :
            </p>
            <p>
              a) n&apos;exerce pas, retarde l&apos;exercice ou n&apos;exerce que
              partiellement tout droit ou recours prévu dans le cadre du présent
              Contrat de Client d&apos;Oreonyx ou par la loi ; ou
            </p>
            <p>
              b) accepte de ne pas exercer ou de retarder l&apos;exercice
              d&apos;un droit ou d&apos;un recours prévu par le présent contrat
              client d&apos;Oreonyx ou par la loi ;
            </p>
            <p>
              cette partie ne sera pas réputée avoir renoncé et ne sera pas
              empêchée ou limitée dans l&apos;exercice ultérieur de ce droit ou
              de tout autre droit ou recours.
            </p>
            <p>
              18.2. Aucune agence, aucun partenariat, aucune coentreprise ni
              aucun emploi n&apos;est créé du fait du présent contrat client
              d&apos;Oreonyx et ni le client ni Oreonyx n&apos;auront aucune
              autorité de quelque nature que ce soit pour lier l&apos;autre
              partie à quelque titre que ce soit.
            </p>
            <p>
              18.3. Si une disposition du présent Accord du client
              d&apos;Oreonyx est jugée inapplicable ou invalide, cette
              disposition sera limitée ou éliminée dans la mesure minimale
              nécessaire pour que le présent Accord du client d&apos;Oreonyx
              reste par ailleurs pleinement en vigueur et applicable.
            </p>
            <p>
              18.4. Vous ne pouvez pas céder, transférer ou concéder en
              sous-licence vos droits en vertu du présent Contrat Client
              d&apos;Oreonyx, sauf avec le consentement écrit préalable
              d&apos;Oreonyx. Oreonyx peut transférer et céder l&apos;un
              quelconque de ses droits et obligations en vertu du présent
              Contrat de Client d&apos;Oreonyx sans votre consentement.
            </p>
            <p>
              18.5. Sauf disposition expresse dans les présentes, une personne
              qui n&apos;est pas partie au présent contrat client d&apos;Oreonyx
              n&apos;aura aucun droit en vertu ou en relation avec celui-ci, que
              ce soit en vertu du Contracts (Rights of Third Parties) Act 1999
              ou autrement.
            </p>
            <p>
              18.6. Chaque partie veillera à tout moment à se conformer aux
              dispositions du Bribery Act 2010 et à ne pas commettre (ou faire
              commettre) d&apos;infraction à cette loi.
            </p>
            <p>
              18.7. Le présent Contrat client d&apos;Oreonyx constitue la
              déclaration complète et exclusive de l&apos;accord mutuel des
              parties et remplace et annule tous les accords, communications et
              autres accords écrits et oraux antérieurs relatifs à son objet, y
              compris, mais sans s&apos;y limiter, les informations relatives à
              la diligence raisonnable du vendeur qu&apos;Oreonyx peut avoir
              fournies. Toutes les renonciations et modifications du présent
              Contrat Client d&apos;Oreonyx doivent faire l&apos;objet d&apos;un
              écrit signé par les deux parties, sauf disposition contraire dans
              le présent document. Sous réserve que rien dans la présente clause
              18.7 n&apos;ait pour effet de limiter ou d&apos;exclure toute
              responsabilité en cas de fraude ou de fausse déclaration
              frauduleuse, aucune autre déclaration ou condition ne
              s&apos;appliquera ou ne fera partie du présent Contrat client
              d&apos;Oreonyx et chaque partie reconnaît qu&apos;elle n&apos;a
              pas été influencée pour accepter le présent Contrat client
              d&apos;Oreonyx par, et n&apos;aura aucun droit ou recours (autre
              que pour rupture de contrat) concernant tout ce que l&apos;autre
              partie a dit, fait ou s&apos;est engagée à faire, à
              l&apos;exception de ce qui est expressément consigné dans le
              présent document.
            </p>
            <p>
              18.8. Le présent Contrat client d&apos;Oreonyx est régi par les
              lois de l&apos;Angleterre et du Pays de Galles. Toutes les parties
              se soumettent à la juridiction exclusive des tribunaux anglais
              pour tout litige découlant de ou en rapport avec le présent
              Contrat Client d&apos;Oreonyx ou son objet, mais Oreonyx est
              également en droit de s&apos;adresser à tout tribunal dans le
              monde entier pour obtenir des mesures injonctives ou autres afin
              de protéger ou de faire respecter ses droits de propriété
              intellectuelle. Nonobstant ce qui précède, si vous êtes situé aux
              États-Unis, le Contrat client d&apos;Oreonyx est régi par les lois
              de l&apos;État du Delaware et vous acceptez expressément
              l&apos;arbitrage obligatoire suivant en cas de litige :
            </p>
            <p>
              a) Le présent Contrat client d&apos;Oreonyx et tout contrat séparé
              par lequel nous vous fournissons des services d&apos;Oreonyx,
              ainsi que tout litige entre vous et nous, seront régis et
              interprétés conformément aux lois de l&apos;État du Delaware, sans
              tenir compte des principes de conflits de lois qui entraîneraient
              l&apos;application de la loi de toute autre juridiction, à
              l&apos;exception de la Loi fédérale sur l&apos;arbitrage qui
              régira l&apos;interprétation et l&apos;application des
              dispositions relatives à l&apos;arbitrage énoncées ci-dessous.
              Sauf accord contraire entre vous et nous, dans le cas où la
              présente clause 18.8 s&apos;avérerait ne pas s&apos;appliquer à
              vous ou à une réclamation ou un litige particulier, soit en raison
              de votre décision de ne pas participer aux procédures
              d&apos;arbitrage, soit en raison d&apos;une décision de
              l&apos;arbitre ou d&apos;une décision de justice, vous acceptez
              que toute réclamation ou tout litige survenu ou susceptible de
              survenir entre vous et nous soit résolu exclusivement par un
              tribunal d&apos;État ou fédéral situé dans l&apos;État du
              Delaware, à l&apos;exception du fait que vous ou nous sommes
              autorisés à : (i) intenter des actions en petites créances devant
              un tribunal d&apos;État dans le comté où Vous résidez si ce
              tribunal dispose d&apos;une procédure de petites créances et si ce
              tribunal est situé aux États-Unis d&apos;Amérique ; (ii) intenter
              des actions en injonction devant tout tribunal compétent pour les
              Parties ; ou (iii) demander l&apos;exécution d&apos;un jugement
              devant tout tribunal compétent pour les Parties. Dans la mesure
              permise par la loi, vous et nous acceptons de renoncer à un procès
              avec jury dans toute procédure judiciaire ;
            </p>
            <p>
              b) Sauf si vous vous désengagez ou pour les litiges relatifs à vos
              ou nos droits de propriété intellectuelle, vous acceptez que tous
              les litiges entre vous et nous (qu&apos;un tel litige implique ou
              non un tiers) découlant de ou liés au présent contrat client
              d&apos;Oreonyx, aux services d&apos;Oreonyx et/ou à notre
              politique de confidentialité soient définitivement résolus par
              arbitrage devant un arbitre unique en langue anglaise dans
              l&apos;État du Delaware, aux États-Unis, conformément aux règles
              d&apos;arbitrage commercial de l&apos;American Arbitration
              Association (&apos; AAA &apos;) et vous et nous renonçons
              expressément par la présente à un procès devant jury. Vous et nous
              nommerons comme arbitre unique une personne convenue entre vous et
              nous ou, si vous et nous ne parvenons pas à nous mettre
              d&apos;accord dans les trente (30) jours suivant la demande
              d&apos;arbitrage de l&apos;une des parties, cet arbitre unique
              sera choisi par l&apos;AAA à la demande de l&apos;une ou
              l&apos;autre des parties. Les parties supportent à parts égales le
              coût de l&apos;arbitrage (sauf que la partie gagnante a droit à
              des honoraires d&apos;avocat raisonnables encourus dans le cadre
              de l&apos;arbitrage, dont le montant peut être déterminé par
              l&apos;arbitre). Toutes les décisions de l&apos;arbitre sont
              définitives et contraignantes pour les deux parties et sont
              exécutoires devant tout tribunal compétent. Nonobstant ce qui
              précède, il peut être demandé à tout tribunal d&apos;accepter la
              sentence ou d&apos;ordonner son exécution. En aucun cas,
              l&apos;arbitre ne sera autorisé à accorder des dommages-intérêts,
              des réparations ou des sentences qui entrent en conflit avec le
              présent Contrat Client d&apos;Oreonyx ;
            </p>
            <p>
              c) Toute réclamation introduite par Vous ou Nous doit l&apos;être
              à titre individuel et non en tant que plaignant ou membre
              d&apos;un groupe dans le cadre d&apos;une prétendue procédure
              collective ou représentative. Vous acceptez et reconnaissez que ni
              vous ni nous ne participerons à une action collective ou à un
              arbitrage collectif pour toute réclamation couverte par le présent
              Contrat client d&apos;Oreonyx. Vous renoncez par la présente à
              tout droit d&apos;introduire des réclamations liées aux présentes
              conditions et/ou à notre Politique de confidentialité en tant que
              plaignant ou membre d&apos;un groupe dans le cadre d&apos;une
              prétendue procédure collective ou représentative. Vous comprenez
              et acceptez que vous ne puissiez déposer des réclamations
              qu&apos;en votre nom propre ;
            </p>
            <p>
              d) Vous pouvez vous retirer de la présente convention
              d&apos;arbitrage. Dans ce cas, ni vous ni nous ne pouvons exiger
              de l&apos;autre qu&apos;il participe à une procédure
              d&apos;arbitrage. Pour ce faire, vous devez nous en informer par
              écrit dans les trente (30) jours suivant la date à laquelle vous
              avez été soumis pour la première fois à la présente clause
              d&apos;arbitrage. La notification d&apos;exclusion doit indiquer
              que vous n&apos;acceptez pas la convention d&apos;arbitrage et
              doit inclure votre nom, votre adresse, votre numéro de téléphone,
              les informations relatives à votre compte, le cas échéant,
              auxquelles l&apos;exclusion s&apos;applique, ainsi qu&apos;une
              déclaration claire indiquant que vous souhaitez vous soustraire à
              la présente convention d&apos;arbitrage. Vous devez signer la
              notification d&apos;exclusion pour qu&apos;elle prenne effet.
              Cette procédure est la seule façon de vous désengager de la
              convention d&apos;arbitrage. Vous devez utiliser cette adresse
              pour vous désinscrire : Oreonyx Ltd, Suite 25.03, 25 Easton
              Street, Londres, WC1X 0DS, Royaume-Uni, et l&apos;adresse
              électronique support@oreonyx.live.
            </p>
            <p>
              e) Nonobstant toute disposition contraire du présent Contrat
              client d&apos;Oreonyx, vous et nous convenons que si nous
              apportons une modification aux Procédures d&apos;arbitrage (autre
              qu&apos;une modification de l&apos;adresse de notification ou du
              lien vers le site Internet fournis dans les présentes) à
              l&apos;avenir, cette modification ne s&apos;appliquera pas à toute
              réclamation qui a été déposée dans le cadre d&apos;une procédure
              judiciaire à notre encontre avant la date d&apos;entrée en vigueur
              de la modification. En outre, si nous cherchons à supprimer les
              procédures d&apos;arbitrage du présent contrat client
              d&apos;Oreonyx, cette suppression ne sera effective que trente
              (30) jours après que la version du contrat client d&apos;Oreonyx
              ne contenant pas les procédures d&apos;arbitrage aura été publiée
              sur notre site web et ne sera pas effective pour toute réclamation
              déposée dans le cadre d&apos;une procédure judiciaire à notre
              encontre avant la date d&apos;entrée en vigueur de la suppression
              ; et
            </p>
            <p>
              f) Le présent accord d&apos;arbitrage survivra à la fin de votre
              relation avec nous.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer />
    </div>
  );
}
