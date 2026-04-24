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
    title: "About",
    to: "/#about",
  },
  {
    id: "work",
    title: "Work",
    to: "/#work",
  },
  {
    id: "projects",
    title: "Projects",
    to: "/projects",
  },
  {
    id: "contact",
    title: "Contact",
    to: "/#contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Creator",
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
    title: "Communication & Digital Marketing Assistant",
    company_name: "Freelance / Various Roles",
    icon: dsp,
    iconBg: "#383E56",
    date: "2019 - 2022",
    points: [
      "Managing social media content and communication strategies for digital products and brand campaigns.",
      "Designing and producing a professional printed fanzine including layout and visual direction.",
      "Contributing to the marketing and online sales of digital products over multiple years.",
      "Supporting copywriting, content creation, and coordination of digital marketing initiatives.",
      "Developing a strong understanding of branding, audience targeting, and digital communication.",
    ],
  },
  {
    title: "E-Commerce Apprentice",
    company_name: "Agence 39",
    icon: agence39,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Creating and managing e-commerce websites using WordPress and WooCommerce.",
      "Uploading products, organizing categories, and structuring product pages for better conversions.",
      "Implementing banners, visuals, and promotional content based on commercial calendars.",
      "Conducting QA tests for responsiveness and cross-browser compatibility.",
      "Collaborating with designers and project managers to deliver functional and visually appealing stores.",
    ],
  },
  {
    title: "Web Developer & WordPress Apprentice",
    company_name: "BH-Competences",
    icon: bhcompetences,
    iconBg: "#383E56",
    date: "2022 - 2024",
    points: [
      "Building and maintaining showcase websites in collaboration with designers and developers.",
      "Integrating content, improving layouts, and ensuring visual consistency across digital assets.",
      "Assisting in social media content creation and paid advertising (Google Ads, Facebook Ads).",
      "Supporting UI/UX improvements through better navigation, structure, and responsive elements.",
      "Participating in updates, deployments, and the technical maintenance of WordPress websites.",
    ],
  },
  {
    title: "Developpeur full-stack & automatisation IA",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "2024 - Today",
    badges: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Docker CI/CD",
      "Automatisation IA",
      "Orchestration d'agents",
    ],
    points: [
      "Conception et developpement d'applications web full-stack avec React, Next.js, Node.js et TypeScript, en mettant l'accent sur la performance, la clarte du code et l'experience utilisateur.",
      "Mise en place d'interfaces front-end modernes avec composants reutilisables, architecture modulaire, gestion d'etat propre et integrations API robustes.",
      "Developpement de backends, endpoints, automatisations metier et workflows relies a l'IA pour accelerer la production, la qualification, le support et les operations.",
      "Orchestration d'agents IA et conception de pipelines d'automatisation pour structurer les taches complexes, industrialiser les process et gagner en execution.",
      "Containerisation avec Docker, CI/CD, optimisation des builds, qualite logicielle et deploiements fiables sur les projets orientes produit.",
    ],
  },
];
