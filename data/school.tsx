import { SchoolTypes } from "@/types/SchoolTypes";

export const school: SchoolTypes[] = [
    {
      name: "Université Catholique de l'Afrique de l'Ouest - Unité Universitaire du Togo",
      urlRouting: "ucao",
      logo: '/logo/ucao-logo.png',
      acronym: "UCAO-UUT",
      type: "Université Privée",
      address: "Zanguera, Lomé-Togo",
      googleMap: "https://goo.gl/maps/xZdmP451K4TypUjB9",
      email: "ucao-uuit@ucao.tg",
      website: "www.ucao-uut.tg/",
      phone: "+222890318830",
      about: `
      <p>L'UCAO-UUT est une institution d'enseignement supérieur située au Togo. Elle fait partie du réseau de l'Université Catholique de l'Afrique de l'Ouest (UCAO), qui regroupe plusieurs universités catholiques dans la région de l'Afrique de l'Ouest.</p>
      <p>Nous offrons une variété de programmes académiques dans divers domaines, notamment les sciences sociales, les sciences humaines, les sciences de la santé, les sciences économiques et de gestion, le droit, les sciences de l'ingénieur, etc. L'université vise à fournir une éducation de qualité et à promouvoir les valeurs chrétiennes dans son enseignement et sa mission éducative.</p>
      `,
      description:`
        <h2>Programme - Energies Renouvelables et Développement Durable</h2>
        <h3>Description du Programme :</h3>
        <p>Le programme "Energies Renouvelables et Développement Durable" vise à former des professionnels compétents dans le domaine des énergies renouvelables et du développement durable. Les étudiants acquerront une compréhension approfondie des sources d'énergie renouvelable, des technologies de pointe et des pratiques de durabilité. Ils seront préparés à jouer un rôle essentiel dans la transition vers un avenir énergétique plus propre et plus durable.</p>
        
            <p>Ce programme mettra l'accent sur les domaines clés suivants :</p>
            <ul>
                <li>Les sources d'énergie renouvelable, telles que l'énergie solaire, éolienne, hydraulique et biomasse.</li>
                <li>Les technologies émergentes pour la production et le stockage d'énergie renouvelable.</li>
                <li>Les politiques environnementales et énergétiques.</li>
                <li>Les pratiques de gestion durable des ressources.</li>
            </ul>
            <p>Les étudiants auront l'occasion de travailler sur des projets concrets et de collaborer avec des experts de l'industrie. À la fin du programme, ils seront prêts à contribuer de manière significative à la promotion de l'énergie propre et du développement durable dans divers secteurs.</p>
        
            <h3>Conditions d'Admission :</h3>
            <p>Pour être admis dans le programme "Energies Renouvelables et Développement Durable", les candidats doivent satisfaire aux conditions suivantes :</p>
            <ol>
                <li>Avoir obtenu un diplôme de premier cycle (Baccalauréat ou équivalent) dans un domaine connexe, tel que l'ingénierie, les sciences environnementales, ou l'économie.</li>
                <li>Soumettre un relevé de notes académiques démontrant un bon dossier scolaire.</li>
                <li>Fournir des lettres de recommandation de professeurs ou de professionnels dans le domaine.</li>
                <li>Réussir un entretien d'admission.</li>
            </ol>
            <p>Le processus d'admission est compétitif, et les candidats seront sélectionnés en fonction de leur dossier académique, de leurs compétences et de leur motivation à contribuer au développement durable.</p>
      `,
      degree: [
        { 
          name: "Licence", 
          path: [
              { 
                name: "Energies renouvelables et développement durable"
              },
              { name: "enseignement et sa mission éducative." }
          ]
        },
        { 
          name: "Master", 
          path: [
              { name: "Dadi" }
          ]
        },
        { 
          name: "Doctorat", 
          path: [
              { name: "Dodo" }
          ]
        }
      ]
    },
  ];