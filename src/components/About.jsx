import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/site";
import { useLanguage } from "../i18n/languageCore";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const MotionDiv = motion.div;
const MotionP = motion.p;

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <MotionDiv
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-0.5 rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </MotionDiv>
    </Tilt>
  );
};

const capabilityHighlights = [
  {
    en: "Landing pages that frame the offer clearly",
    fr: "Landing pages qui cadrent clairement l'offre",
  },
  {
    en: "Portfolio and brand sites with stronger visual direction",
    fr: "Portfolios et sites de marque avec une direction visuelle plus forte",
  },
  {
    en: "React or WordPress builds shaped for real client handoff",
    fr: "Développements React ou WordPress pensés pour une vraie livraison client",
  },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <MotionDiv variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {t({ en: "Introduction", fr: "Introduction" })}
        </p>
        <h2 className={styles.sectionHeadText}>
          {t({ en: "Overview", fr: "Vue d'ensemble" })}
        </h2>
      </MotionDiv>

      <MotionP
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t({
          en: "I build branded web experiences for service businesses, studios, and personal brands that need a sharper digital presence. My work combines front-end implementation, landing page structure, WordPress or React delivery, and 3D direction when it adds real depth to the experience.",
          fr: "Je construis des expériences web de marque pour les entreprises de service, les studios et les marques personnelles qui ont besoin d'une présence digitale plus nette. Mon travail combine intégration front-end, structure de landing page, livraison WordPress ou React, et direction 3D quand elle ajoute une vraie profondeur à l'expérience.",
        })}
      </MotionP>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {capabilityHighlights.map((item) => (
          <div
            key={item.en}
            className="rounded-2xl border border-white/10 bg-black-100/60 px-4 py-4 text-sm leading-6 text-white/80"
          >
            {t(item)}
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title.en}
            index={index}
            title={t(service.title)}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, "about");

export default AboutSection;
