
import { technologiesList } from './technologies'; // Importez les URL des technologies depuis votre fichier
import { CoverList } from './CoverList'; // Importez les URL des technologies depuis votre fichier

export const projectsList = [
    
    {
        name: 'Kasa',
        id: 1,
        cover: CoverList.kasa,
        description: "Front-End | Création du site d'une agence immobiliére de location.",
        techno: [technologiesList.html , technologiesList.sass , technologiesList.js , technologiesList.reactjs , technologiesList.Github_pages],
        link: "https://alex-der-coder.github.io/kasa/",
        repos : "https://github.com/Alex-Der-coder/kasa",
        contexte : "L’entreprise souhaite faire une refonte totale de leur site pour passer à une stack complète en JavaScript avec NodeJS côté Back-end et React côté Front-end."
    },
    {
        name: 'Hot Takes',
        id: 2,
        cover: CoverList.hottakes,
        description: "Back-end | Création d'une application web afin que les utilisateurs puissent noter des sauces piquantes",
        techno: [technologiesList.js , technologiesList.nodejs , technologiesList.mongodb ],
        link: "https://github.com/Alex-Der-coder/Hot_Takes",
        repos : "https://github.com/Alex-Der-coder/Hot_Takes",
        contexte : "Les sauces piquantes sont de plus en plus populaires, c'est pourquoi la marque de condiments à base de piment Piiquante souhaite développer une application web de critique des sauces piquantes appelée Hot Takes. "
    },
    {
        name: 'Kanap',
        id: 3,
        cover: CoverList.kanap,
        description: "Front-End | Création de la partie front d'un site e-commerce",
        techno: [technologiesList.js],
        link: "https://github.com/Alex-Der-coder/Kanap",
        repos : "https://github.com/Alex-Der-coder/Kanap",
        contexte : "Votre client est Kanap, une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet."
    },
    {
        name: 'La Panthère',
        id: 4,
        cover: CoverList.lapanthere,
        description: "SEO | Amélioration du référencement et de l'accessibilité",
        techno: [technologiesList.html , technologiesList.css , technologiesList.Github_pages],
        link: "https://alex-der-coder.github.io/La_Panthere/",
        repos : "https://github.com/Alex-Der-coder/La_Panthere",
        contexte : "La fondatrice de l’entreprise, Sophie, cherche une solution pour faire repartir l’activité. En tapant “Entreprise web design Lyon” sur Internet, elle s’aperçoit que le site de l’agence apparaît seulement en deuxième page des moteurs de recherche."
    },
    {
        name: 'OhMyFood!',
        id: 5,
        cover: CoverList.ohmyfood,
        description: "Front-End | Création à partir de maquettes d'un site de réservation de menu en ligne",
        techno: [technologiesList.html , technologiesList.css , technologiesList.sass , technologiesList.Github_pages],
        link:"https://alex-der-coder.github.io/Alex-Der-coder.io/",
        repos : "https://github.com/Alex-Der-coder/Alex-Der-coder.io",
        contexte : "Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g."
    },
    {
        name: 'Booki',
        id: 6,
        cover: CoverList.booki,
        description: "Front-End | Création à partir de maquettes d'un site de plannification de vacances",
        techno: [technologiesList.html , technologiesList.css , technologiesList.Github_pages],
        link:"https://alex-der-coder.github.io/Booki/",
        repos : "https://github.com/Alex-Der-coder/Booki",
        contexte : "L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix."
    },
    {
        name: 'React_Booki',
        id: 7,
        cover: CoverList.lmj,
        description: "Front-End | Création à partir de maquettes d'un site de plannification de vacances ",
        techno: [technologiesList.reactjs,technologiesList.sass , technologiesList.Github_pages],
        link: "https://alex-der-coder.github.io/Booki-react/",
        repos : "https://github.com/Alex-Der-coder/Booki-react",
        contexte : "Afin d'intégrer le parcours de Développeur d'application - JavaScript React , j'ai passé l'exament des candidats externe  en attendant mon jury pour le titre RNCP de Développeur Web et ce projet ma servit a obtenir un avis favorable à l'intégration dans la formation en attendant la validation de mon titre. "
    },
    {
        name: 'Ridding Cities',
        id: 8,
        cover: CoverList.typewritter,
        description: "Front-End | refonte graphique du site web",
        techno: [technologiesList.html, technologiesList.css, technologiesList.js , technologiesList.Github_pages],
        link: "https://alex-der-coder.github.io/Ridding-Cities/",
        repos : "https://github.com/Alex-Der-coder/Ridding-Cities",
        contexte : "Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g."
    },
     {
     name: 'GB/GBA DUMPER/WRITER',
       id: 9,
        cover: CoverList.gba,
         description: "Passion | Création et Sauvegarde de cartouche Gameboy et Gameboy Advance",
         techno: [technologiesList.reactjs, technologiesList.sass, technologiesList.cloudinary, ],
         link: "https://github.com/Alex-Der-coder/FlashGBX",
         repos : "https://github.com/Alex-Der-coder/FlashGBX",
         contexte : "Reads and writes Game Boy and Game Boy Advance cartridge data. Supported hardware: GBxCart RW v1.3 and v1.4 by insideGadgets. "
     },
     {
     name: 'Portfolio',
     id: 10,
      cover: CoverList.booki,
       description: "Front-End | Création de mon portfolio",
       techno: [technologiesList.reactjs, technologiesList.sass, technologiesList.cloudinary,technologiesList.Github_pages ],
       link: "https://alex-der-coder.github.io/Portfolio/",
       repos : "https://github.com/Alex-Der-coder/Portfolio",
       contexte : "Création de mon Portefolio de Concepteur d'application , dans le but d'avoir une vitrine de mes accomplissement."
   },
   {
    name: 'FishEye',
    id: 11,
     cover: CoverList.booki,
      description: "Front-End | Créez un site accessible pour une plateforme de photographes",
      techno: [technologiesList.reactjs, technologiesList.sass, technologiesList.cloudinary,technologiesList.Github_pages ],
      link: "https://alex-der-coder.github.io/Front-End-Fisheye/",
      repos : "https://github.com/Alex-Der-coder/Front-End-Fisheye",
      contexte : "FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Ils ont récemment levé des fonds et aimeraient mettre à jour leur site web. "
  },
  {
    name: 'Petit_Plats-2.00',
    id: 12,
     cover: CoverList.booki,
      description: "Front-End | Créez un site accessible pour une plateforme de photographes",
      techno: [technologiesList.sass, technologiesList.cloudinary,technologiesList.Github_pages ],
      link: "https://alex-der-coder.github.io/Petit_Plats-2.00/",
      repos : "https://github.com/Alex-Der-coder/Petit_Plats-2.00/",
      contexte : "Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g."
  }

]
