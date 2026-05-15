import portal from "../assets/portal.png";
import youCode from "../assets/youCode.png";
import movieFinder from "../assets/movieFinder.png";

export const projects = [
  {
    name: "3D Portal",
    description: {
      en: "An immersive portal concept focused on motion, strong branding, and spatial storytelling through 3D scenes.",
      fr: "Un concept de portail immersif centré sur le mouvement, une identité forte et une narration spatiale en 3D.",
    },
    tags: [
      {
        name: "threejs",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: portal,
    source_code_link:
      "https://github.com/Yohan-easy-code/threejs2-deploy/tree/main/dist",
  },
  {
    name: "YouCode",
    description: {
      en: "A course platform concept with learner progress, content management, and an admin layer oriented around clarity and growth.",
      fr: "Un concept de plateforme de cours avec suivi des apprenants, gestion de contenu et couche admin pensée pour la clarté et la progression.",
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: youCode,
    source_code_link: "https://github.com/Yohan-easy-code/you-code-project",
  },
  {
    name: "Search Movie",
    description: {
      en: "A lightweight movie search experience built around clean UI states, quick results, and a simpler browsing flow.",
      fr: "Une expérience légère de recherche de films, construite autour d'états d'interface propres, de résultats rapides et d'un parcours simplifié.",
    },
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movieFinder,
    source_code_link: "https://github.com/Yohan-easy-code/Search-movie",
  },
];
