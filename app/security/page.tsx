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
              <h5 className="text-5xl font-medium">Sureté & Sécurité</h5>
              <h4 className="text-xl">
                La sécurité et la conformité représentent des aspects clés de
                tout produit utilisé par votre équipe. Oreonyx s&apos;engage à
                sécuriser l&apos;accès à vos données, à éliminer les
                vulnérabilités des systèmes et à assurer la continuité de
                l&apos;accès.
              </h4>
              <h6 className="text-lg text-gray-600">
                Dernière mise à jour: Avril 2023
              </h6>
            </div>
          </div>
          <div className="prose lg:prose-xl">
            <p>
              Oreonyx utilise un ensemble de technologies et de services
              industriels pour protéger vos données contre l&apos;accès, la
              divulgation, l&apos;utilisation et la perte non autorisés, et la
              perte.
            </p>
            <p>
              Tous les administrateurs d&apos;Oreonyx font l&apos;objet
              d&apos;une vérification de leurs antécédents et sont régulièrement
              formés aux pratiques de sécurité, à la fois lors de
              l&apos;intégration dans l&apos;entreprise et sur une base
              trimestrielle.
            </p>
            <p>
              La sécurité chez Oreonyx est dirigée par le responsable de
              l&apos;ingénierie d&apos;Oreonyx et maintenue par l&apos;équipe
              interne d&apos;ingénierie de l&apos;infrastructure d&apos;Oreonyx.
            </p>
            <h3>Certifications de conformité</h3>
            <div>
              <h4>ISO 27001</h4>
              <p>Oreonyx est certifié ISO 27001 par LRQA.</p>
            </div>
            <div>
              <h4>GDPR / CCPA</h4>
              <p>
                Oreonyx est conçu pour se conformer à toutes les exigences
                énoncées par le GDPR et le CCPA.
              </p>
              <p>
                Oreonyx est une société immatriculée au Royaume-Uni et est
                enregistrée auprès du UK Information Commissioner&apos;s Office.
              </p>
              <p>
                Dans la mesure du possible, Oreonyx met à la disposition de ses
                clients des outils leur permettant de respecter leurs
                obligations vis-à-vis de cette législation au sein de la
                plateforme.
              </p>
            </div>
            <div>
              <h4>ISO 27001</h4>
              <p>Oreonyx est certifié ISO 27001 par LRQA.</p>
            </div>
            <div>
              <h4>PCI DSS</h4>
              <p>
                Oreonyx utilise Stripe pour traiter les informations relatives
                aux paiements et aux cartes, qui a fait l&apos;objet d&apos;un
                audit par un évaluateur de sécurité qualifié PCI indépendant et
                est certifié en tant que fournisseur de services PCI de niveau
                1. Il s&apos;agit du niveau de certification le plus strict
                disponible dans l&apos;industrie des paiements.
              </p>
              <p>
                Oreonyx ne reçoit généralement pas de données de cartes de
                crédit, ce qui le rend conforme aux normes de sécurité des
                données de l&apos;industrie des cartes de paiement (PCI DSS)
                dans la plupart des cas.
              </p>
              <p>
                Oreonyx lui-même n&apos;est pas conçu pour le stockage de
                données protégées par la norme PCI et les clients doivent
                s&apos;assurer qu&apos;ils n&apos;utilisent pas le système
                d&apos;une manière qui nécessite le stockage d&apos;informations
                relatives aux cartes de crédit.
              </p>
            </div>
            <div>
              <h4>Politique de divulgation des vulnérabilités</h4>
              <p>
                Oreonyx a mis en place un programme public de divulgation des
                vulnérabilités (VDP) à l&apos;adresse suivante :
                https://oreonyx.live/disclosure/policy
              </p>
              <p>
                Nous prenons très au sérieux les divulgations de vulnérabilités.
                Une fois les divulgations reçues, nous vérifions rapidement
                chaque vulnérabilité contenue dans le rapport avant de prendre
                les mesures nécessaires pour contenir le problème et y remédier.
              </p>
              <p>
                Une fois la vérification effectuée, nous enverrons des mises à
                jour régulières au fur et à mesure que les problèmes seront
                résolus et nous nous efforcerons de travailler avec le
                journaliste pour coordonner la divulgation publique si cela est
                souhaité.
              </p>
              <p>
                Oreonyx dispose d&apos;un processus de réponse bien documenté
                pour la détection et la résolution des incidents de sécurité.
              </p>
            </div>
            <div>
              <h4>Sécurité des infrastructures et des réseaux</h4>
              <p>
                La plateforme Oreonyx est hébergée exclusivement sur Google
                Cloud Platform.
              </p>
              <p>
                Google Cloud dispose de certificats ISO 27001 et de rapports SOC
                2/3 qui peuvent être consultés ici.
              </p>
              <p>
                Les centres de données utilisés par Google Cloud Platform sont
                dotés de mesures de sécurité étendues qui s&apos;appuient sur un
                modèle de sécurité à plusieurs niveaux. Ces mesures de
                protection sont les suivantes :
              </p>
              <ul>
                <li>Barrières d&apos;accès aux véhicules</li>
                <li>Clôture périphérique</li>
                <li>Détecteurs de métaux</li>
                <li>Contrôle d&apos;accès biométriquel</li>
                <li>Alarmes</li>
                <li>
                  Cartes de contrôle d&apos;accès électroniques conçues par
                  Google
                </li>
              </ul>
              <p>
                Pour en savoir plus sur la sécurité physique de ces centres de
                données, consultez le livre blanc de Google sur la sécurité.
              </p>
              <p>
                Les employés d&apos;Oreonyx n&apos;ont pas d&apos;accès physique
                aux centres de données, serveurs, équipements de réseau ou
                supports de stockage de Google.
              </p>
            </div>
            <div>
              <h4>Contrôle d&apos;accès logique</h4>
              <p>
                Oreonyx est l&apos;administrateur attitré de son infrastructure
                sur Google Cloud Platform et seul un petit nombre
                d&apos;employés autorisés d&apos;Oreonyx ont accès à la
                configuration de cette infrastructure. Lorsque la configuration
                de l&apos;infrastructure est effectuée, elle l&apos;est en
                fonction des besoins et nécessite une authentification à deux
                facteurs.
              </p>
              <p>
                L&apos;accès direct aux serveurs (tel que SSH) n&apos;est
                effectué qu&apos;en cas de besoin et fait l&apos;objet d&apos;un
                enregistrement d&apos;audit détaillé. Les connexions SSH sont
                protégées par une authentification à deux facteurs et des
                certificats régulièrement renouvelés.
              </p>
              <p>
                Les connexions des administrateurs aux serveurs de production se
                font sur un réseau privé.
              </p>
              <p>
                Les droits d&apos;administration (y compris SSH, accès à la base
                de données et configuration de l&apos;infrastructure) sont
                étroitement contrôlés et limités à un très petit nombre de
                membres de notre équipe.
              </p>
            </div>
            <div>
              <h4>Test de pénétration</h4>
              <p>
                Oreonyx fait l&apos;objet d&apos;un test de pénétration annuel
                par une agence tierce accréditée.
              </p>
              <p>
                Les testeurs de pénétration reçoivent un diagramme de haut
                niveau de l&apos;architecture de l&apos;application et les tests
                sont exécutés dans notre environnement de production hébergé.
              </p>
              <p>
                Les informations sur les vulnérabilités de sécurité exploitées
                avec succès lors des tests de pénétration sont utilisées pour
                définir les priorités en matière d&apos;atténuation et de
                remédiation. Les clients de notre plan Entreprise peuvent
                demander un résumé des résultats de nos derniers tests de
                pénétration en contactant leur gestionnaire de compte.
              </p>
            </div>
            <div>
              <h4>Audit par un tiers</h4>
              <p>Oreonyx est certifié ISO 27001 par LRQA.</p>
            </div>
            <div>
              <h4>Détection et prévention des intrusions</h4>
              <p>
                Oreonyx utilise une combinaison de signaux basés sur
                l&apos;hôte, sur le réseau et sur l&apos;infrastructure pour
                fournir des systèmes de détection et de prévention des
                intrusions (IDS/IPS).
              </p>
              <p>
                Nous utilisons à la fois la sécurité basée sur les signatures et
                la sécurité basée sur les algorithmes pour identifier les
                modèles qui pourraient représenter une méthode d&apos;attaque.
              </p>
              <p>
                Notre stratégie IPS implique un contrôle strict de la surface
                d&apos;attaque, l&apos;utilisation de contrôles de détection
                intelligents et superposés aux points d&apos;entrée des données,
                et le déploiement de technologies qui remédient automatiquement
                aux situations potentiellement dangereuses.
              </p>
              <p>
                Oreonyx n&apos;offre pas à ses clients l&apos;accès aux analyses
                des événements de sécurité, mais continue à leur fournir une
                assistance pendant et après tout temps d&apos;arrêt imprévu.
              </p>
            </div>
            <h3>Continuité des activités et reprise après sinistre</h3>
            <div>
              <h4>Haute disponibilité</h4>
              <p>
                Chaque partie de la plateforme Oreonyx utilise des serveurs
                redondants automatiquement provisionnés pour se prémunir contre
                les pannes.
              </p>
              <p>
                Les serveurs sont régulièrement mis en service et hors service
                tout au long de la journée dans le cadre de nos opérations de
                routine, sans que cela n&apos;affecte la disponibilité.
              </p>
            </div>
            <div>
              <h4>Reprise après sinistre</h4>
              <p>
                Oreonyx dessert principalement un trafic provenant d&apos;une
                seule région géographique répartie sur plusieurs zones de
                disponibilité.
              </p>
              <p>
                Dans le cas improbable d&apos;une panne régionale prolongée,
                nous maintenons une procédure documentée pour le provisionnement
                de notre environnement de déploiement dans une région distincte.
              </p>
              <p>
                Oreonyx dispose d&apos;un processus de réponse aux incidents
                largement documenté qui comprend des procédures documentées pour
                la continuité des activités et la reprise après sinistre.
              </p>
            </div>
            <h3>Flux de données</h3>
            <div>
              <h4>Données provenant des clients</h4>
              <p>
                Toutes les données des clients sont envoyées à Oreonyx via HTTPS
                en utilisant TLS 1.2 ou supérieur.
              </p>
              <p>
                Tous les systèmes d&apos;Oreonyx sont configurés pour rejeter
                les connexions utilisant une version TLS inférieure à 1.2 ou
                celles utilisant des suites de chiffrement potentiellement non
                sécurisées.
              </p>
              <p>
                Oreonyx exploite un réseau de confiance zéro, ce qui signifie
                que tout le trafic réseau, même à l&apos;intérieur du périmètre
                de notre propre réseau, est crypté.
              </p>
              <p>
                Oreonyx teste régulièrement la disponibilité et la sécurité de
                sa configuration SSL à l&apos;aide de SSL Labs Reporting. Le
                dernier rapport peut être consulté ici.
              </p>
              <p>
                Toutes les demandes adressées au système sont enregistrées et
                surveillées à l&apos;aide d&apos;une combinaison de systèmes
                basés sur des règles et des anomalies.
              </p>
            </div>
            <div>
              <h4>Données quittant le système</h4>
              <p>
                Oreonyx permet à ses clients d&apos;accéder aux données stockées
                dans Oreonyx par le biais de plusieurs méthodes, notamment :
              </p>
              <ul>
                <li>
                  Notre application web hébergée à l&apos;adresse suivante :
                  https://app.oreonyx.live
                </li>
                <li>Nos applications mobiles pour Android et iOS</li>
                <li>
                  Notre API REST pour les développeurs est hébergée à
                  l&apos;adresse suivante : https://api.oreonyx.live
                </li>
              </ul>
              <p>
                Toutes les méthodes que nous fournissons à nos clients pour
                accéder à leurs données garantissent le cryptage en transit à
                l&apos;aide de TLS 1.2 ou supérieur.
              </p>
            </div>
            <h3>Sécurité de l&apos;application</h3>
            <div>
              <h4>Connexion par code temporaire</h4>
              <p>
                Oreonyx offre aux utilisateurs la possibilité de se connecter à
                l&apos;aide de mots de passe temporaires.
              </p>
              <p>
                Les mots de passe temporaires sont valables pendant une heure
                après leur émission et disposent de plusieurs défenses
                automatisées contre les attaques par force brute.
              </p>
            </div>
            <div>
              <h4>Authentification à deux facteurs</h4>
              <p>
                Oreonyx offre aux utilisateurs la possibilité d&apos;ajouter une
                couche de sécurité supplémentaire à leur compte Oreonyx en
                utilisant des mots de passe à usage unique basés sur le temps
                (TOTP).
              </p>
              <p>
                Une fois activée, l&apos;authentification à deux facteurs
                s&apos;applique à toutes les méthodes d&apos;authentification, y
                compris l&apos;authentification unique.
              </p>
            </div>
            <div>
              <h4>Se connecter avec Google</h4>
              <p>
                Oreonyx permet aux utilisateurs de se connecter en utilisant
                leur compte Google ou GSuite for Business.
              </p>
              <p>
                Oreonyx participe au programme d&apos;évaluation de la sécurité
                de Google, ce qui signifie que notre flux de connexion avec
                Google est évalué chaque année en termes de sécurité et de
                confidentialité par un auditeur tiers désigné par Google.
              </p>
            </div>
            <div>
              <h4>SAML 2.0</h4>
              <p>
                Les clients qui bénéficient de nos plans Business ou Enterprise
                peuvent activer l&apos;authentification basée sur SAML.
              </p>
              <p>
                Les espaces de travail ont la possibilité de forcer tous leurs
                utilisateurs à s&apos;authentifier à l&apos;aide de SAML 2.0
                pour s&apos;aligner sur leurs propres exigences en matière
                d&apos;authentification.
              </p>
            </div>
            <div>
              <h4>Authentification API REST (clé API)</h4>
              <p>
                Oreonyx fournit une API REST complète qui permet à nos clients
                d&apos;accéder à leurs données par le biais d&apos;intégrations
                avec d&apos;autres plateformes.
              </p>
              <p>
                Les clés API ont été conçues pour résister aux attaques par
                force brute.
              </p>
              <p>
                Les clients sont en mesure d&apos;émettre, de modifier et de
                révoquer les clés API via la page Paramètres de l&apos;espace de
                travail.
              </p>
            </div>
            <div>
              <h3>Développement d&apos;applications sécurisées (ADL / SDLC)</h3>
              <p>
                Oreonyx utilise un modèle d&apos;intégration et de déploiement
                continus, ce qui signifie que toutes nos modifications de code
                sont enregistrées dans un dépôt de code source, révisées,
                testées et expédiées à nos clients dans un ordre rapide.
              </p>
              <p>
                Au cours d&apos;une journée de travail typique, nous déployons
                entre une et vingt versions d&apos;Oreonyx à nos clients.
              </p>
              <p>
                Notre modèle de développement par itération rapide améliore
                considérablement notre temps de réponse aux bogues, aux
                vulnérabilités et aux incidents de sécurité.
              </p>
              <p>
                Oreonyx ne fournit pas de notes de version à ses clients pour
                chaque version de l&apos;application que nous déployons.
              </p>
            </div>
            <div>
              <h3>Sécurité de l&apos;entreprise</h3>
              <p>
                Oreonyx estime qu&apos;une bonne sécurité s&apos;applique aussi
                bien à notre équipe qu&apos;à notre plate-forme.
              </p>
            </div>
            <div>
              <h4>Protection contre les logiciels malveillants</h4>
              <p>
                Oreonyx maintient un système complet de protection contre les
                logiciels malveillants soutenu par Malware Bytes et Apple
                GateKeeper.
              </p>
            </div>
            <div>
              <h4>Sécurité et configuration des points d&apos;extrémité</h4>
              <p>
                Oreonyx utilise Fleetsmith pour la gestion de l&apos;inventaire
                et la configuration.
              </p>
              <p>
                Tous les terminaux d&apos;Oreonyx utilisent le chiffrement
                intégral du disque, le verrouillage de l&apos;écran,
                l&apos;effacement à distance et des mots de passe forts.
              </p>
            </div>
            <div>
              <h4>Gestion des risques</h4>
              <p>
                Oreonyx utilise un processus documenté d&apos;évaluation et de
                traitement des risques.
              </p>
              <p>
                Oreonyx utilise une combinaison d&apos;évaluations des risques
                basées sur les actifs et les scénarios.
              </p>
              <p>
                Tous les déploiements d&apos;Oreonyx font l&apos;objet d&apos;un
                examen par les pairs, de tests automatisés et d&apos;un
                processus de déploiement automatisé qui met à jour
                l&apos;environnement de production.
              </p>
              <p>
                Oreonyx effectue régulièrement une gestion et un traitement des
                risques de tous les systèmes et applications.
              </p>
            </div>
            <div>
              <h4>Plan d&apos;urgence</h4>
              <p>
                Oreonyx place la disponibilité et la confidentialité de sa
                plate-forme en tête de ses priorités.
              </p>
              <p>
                Oreonyx maintient un processus complet de réponse aux incidents
                qui comprend des plans de reprise après sinistre et de
                communication avec les clients.
              </p>
              <p>
                Nous testons tous nos processus de réponse aux incidents tous
                les trimestres et examinons minutieusement les résultats de nos
                tests pour détecter les lacunes.
              </p>
              <p>
                Nous mettons à jour notre processus de réponse aux incidents au
                moins une fois par an.
              </p>
            </div>
            <div>
              <h4>Vérifications des antécédents</h4>
              <p>
                AAttio effectue des vérifications d&apos;antécédents en
                utilisant le service britannique Disclosure and Barring pour les
                membres de notre équipe qui ont un accès administrateur à notre
                infrastructure.
              </p>
            </div>
            <div>
              <h4>Formation à la sécurité</h4>
              <p>
                Tous les employés d&apos;Oreonyx reçoivent une formation à la
                sécurité lors de leur arrivée dans l&apos;équipe et tous les
                trimestres par la suite.
              </p>
              <p>
                Les membres de l&apos;équipe d&apos;ingénieurs d&apos;Oreonyx
                reçoivent régulièrement une formation supplémentaire qui couvre
                les pratiques de développement sécurisé, telles que le Top 10 de
                l&apos;OWASP, en plus de nos politiques internes.
              </p>
            </div>
            <div>
              <h4>Politique de réponse aux incidents</h4>
              <p>
                Lorsqu&apos;un incident de sécurité affecte la confidentialité
                des données du client, Oreonyx contacte les administrateurs
                enregistrés de l&apos;espace de travail.
              </p>
              <p>
                Oreonyx tient à jour une page d&apos;état publique à
                l&apos;adresse https://status.oreonyx.live qui rend compte des
                problèmes opérationnels.
              </p>
              <p>
                Toute personne peut s&apos;abonner aux mises à jour par courrier
                électronique à partir de la page d&apos;état.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer />
    </div>
  );
}
