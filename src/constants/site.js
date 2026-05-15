import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import mobile from "../assets/mobile.png";
import web from "../assets/web.png";

import css from "../assets/tech/css.png";
import docker from "../assets/tech/docker.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";
import typescript from "../assets/tech/typescript.png";

import dsp from "../assets/company/dsp.png";
import bhcompetences from "../assets/company/bh-competences.png";
import agence39 from "../assets/company/agence39.png";
import freelance from "../assets/company/freelance.png";

export const navLinks = [
  {
    id: "about",
    title: { en: "About", fr: "À propos" },
    to: "/#about",
  },
  {
    id: "work",
    title: { en: "Work", fr: "Parcours" },
    to: "/#work",
  },
  {
    id: "projects",
    title: { en: "Projects", fr: "Projets" },
    to: "/projects",
  },
  {
    id: "contact",
    title: { en: "Contact", fr: "Contact" },
    to: "/#contact",
  },
];

export const services = [
  {
    title: { en: "Web Developer", fr: "Développeur web" },
    icon: web,
  },
  {
    title: { en: "React Native Developer", fr: "Développeur React Native" },
    icon: mobile,
  },
  {
    title: { en: "Backend Developer", fr: "Développeur backend" },
    icon: backend,
  },
  {
    title: { en: "3D Creator", fr: "Créateur 3D" },
    icon: creator,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

export const experiences = [
  {
    title: {
      en: "Communication & Digital Marketing Assistant",
      fr: "Assistant communication et marketing digital",
    },
    company_name: "Freelance / Various Roles",
    icon: dsp,
    iconBg: "#383E56",
    date: "2019 - 2022",
    points: [
      {
        en: "Managing social media content and communication strategies for digital products and brand campaigns.",
        fr: "Gestion de contenus social media et de stratégies de communication pour des produits digitaux et des campagnes de marque.",
      },
      {
        en: "Designing and producing a professional printed fanzine including layout and visual direction.",
        fr: "Conception et production d'un fanzine imprimé professionnel, incluant la mise en page et la direction visuelle.",
      },
      {
        en: "Contributing to the marketing and online sales of digital products over multiple years.",
        fr: "Contribution au marketing et à la vente en ligne de produits digitaux sur plusieurs années.",
      },
      {
        en: "Supporting copywriting, content creation, and coordination of digital marketing initiatives.",
        fr: "Soutien à la rédaction, à la création de contenu et à la coordination d'initiatives marketing digitales.",
      },
      {
        en: "Developing a strong understanding of branding, audience targeting, and digital communication.",
        fr: "Développement d'une compréhension solide du branding, du ciblage d'audience et de la communication digitale.",
      },
    ],
  },
  {
    title: { en: "E-Commerce Apprentice", fr: "Apprenti e-commerce" },
    company_name: "Agence 39",
    icon: agence39,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      {
        en: "Creating and managing e-commerce websites using WordPress and WooCommerce.",
        fr: "Création et gestion de sites e-commerce avec WordPress et WooCommerce.",
      },
      {
        en: "Uploading products, organizing categories, and structuring product pages for better conversions.",
        fr: "Mise en ligne de produits, organisation des catégories et structuration des fiches produit pour améliorer la conversion.",
      },
      {
        en: "Implementing banners, visuals, and promotional content based on commercial calendars.",
        fr: "Intégration de bannières, visuels et contenus promotionnels selon les calendriers commerciaux.",
      },
      {
        en: "Conducting QA tests for responsiveness and cross-browser compatibility.",
        fr: "Réalisation de tests QA pour la responsivité et la compatibilité navigateurs.",
      },
      {
        en: "Collaborating with designers and project managers to deliver functional and visually appealing stores.",
        fr: "Collaboration avec designers et chefs de projet pour livrer des boutiques fonctionnelles et visuellement solides.",
      },
    ],
  },
  {
    title: {
      en: "Web Developer & WordPress Apprentice",
      fr: "Apprenti développeur web et WordPress",
    },
    company_name: "BH-Competences",
    icon: bhcompetences,
    iconBg: "#383E56",
    date: "2022 - 2024",
    points: [
      {
        en: "Building and maintaining showcase websites in collaboration with designers and developers.",
        fr: "Création et maintenance de sites vitrines en collaboration avec designers et développeurs.",
      },
      {
        en: "Integrating content, improving layouts, and ensuring visual consistency across digital assets.",
        fr: "Intégration de contenus, amélioration des layouts et maintien d'une cohérence visuelle sur les supports digitaux.",
      },
      {
        en: "Assisting in social media content creation and paid advertising (Google Ads, Facebook Ads).",
        fr: "Participation à la création de contenus social media et aux campagnes payantes Google Ads et Facebook Ads.",
      },
      {
        en: "Supporting UI/UX improvements through better navigation, structure, and responsive elements.",
        fr: "Contribution aux améliorations UI/UX via une meilleure navigation, une structure plus claire et des éléments responsive.",
      },
      {
        en: "Participating in updates, deployments, and the technical maintenance of WordPress websites.",
        fr: "Participation aux mises à jour, déploiements et à la maintenance technique de sites WordPress.",
      },
    ],
  },
  {
    title: {
      en: "Full-stack Developer & AI Automation",
      fr: "Développeur full-stack & automatisation IA",
    },
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: { en: "2024 - Today", fr: "2024 - Aujourd'hui" },
    badges: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Docker CI/CD",
      { en: "AI Automation", fr: "Automatisation IA" },
      { en: "Agent orchestration", fr: "Orchestration d'agents" },
    ],
    points: [
      {
        en: "Designing and developing full-stack web applications with React, Next.js, Node.js, and TypeScript, with a focus on performance, code clarity, and user experience.",
        fr: "Conception et développement d'applications web full-stack avec React, Next.js, Node.js et TypeScript, avec un focus sur la performance, la clarté du code et l'expérience utilisateur.",
      },
      {
        en: "Building modern front-end interfaces with reusable components, modular architecture, clean state management, and robust API integrations.",
        fr: "Mise en place d'interfaces front-end modernes avec composants réutilisables, architecture modulaire, gestion d'état propre et intégrations API robustes.",
      },
      {
        en: "Developing backends, endpoints, business automations, and AI-connected workflows to accelerate production, qualification, support, and operations.",
        fr: "Développement de backends, endpoints, automatisations métier et workflows reliés à l'IA pour accélérer la production, la qualification, le support et les opérations.",
      },
      {
        en: "Orchestrating AI agents and designing automation pipelines to structure complex tasks, industrialize processes, and improve execution speed.",
        fr: "Orchestration d'agents IA et conception de pipelines d'automatisation pour structurer les tâches complexes, industrialiser les process et gagner en vitesse d'exécution.",
      },
      {
        en: "Using Docker, CI/CD, build optimization, software quality practices, and reliable deployments on product-oriented projects.",
        fr: "Containerisation avec Docker, CI/CD, optimisation des builds, qualité logicielle et déploiements fiables sur les projets orientés produit.",
      },
    ],
  },
];
