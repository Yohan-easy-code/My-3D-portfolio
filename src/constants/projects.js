import portal from "../assets/portal.png";
import youCode from "../assets/youCode.png";
import movieFinder from "../assets/movieFinder.png";

export const projects = [
  {
    name: "3D Portal",
    description:
      "An immersive portal concept focused on motion, strong branding, and spatial storytelling through 3D scenes.",
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
    description:
      "A course platform concept with learner progress, content management, and an admin layer oriented around clarity and growth.",
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
    description:
      "A lightweight movie search experience built around clean UI states, quick results, and a simpler browsing flow.",
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
