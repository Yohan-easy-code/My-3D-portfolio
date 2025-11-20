import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  dsp,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  bhcompetences,
  agence39,
  freelance,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
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

const technologies = [
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
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
    title: "Web Developer & WordPress Freelancer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "2024 - Today",
    points: [
      "Designing and developing premium showcase websites using WordPress and modern web technologies.",
      "Creating complete brand identities including graphic charters, commercial brochures, and custom logos.",
      "Producing 3D logos and visual assets using Blender to enhance brand storytelling and web presentation.",
      "Managing Facebook Ads campaigns and generating qualified leads for various clients.",
      "Ensuring responsive design, SEO fundamentals, and performance optimization across all projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
