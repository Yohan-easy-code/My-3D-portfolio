import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants/site";
import { SectionWrapper } from "../hoc";
import { useLanguage } from "../i18n/languageCore";
import { textVariant } from "../utils/motion";

const MotionDiv = motion.div;

const ExperienceCard = ({ experience }) => {
  const { t } = useLanguage();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={t(experience.date)}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain bg-amber-50 rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {t(experience.title)}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {experience.badges?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.badges.map((badge) => (
            <span
              key={typeof badge === "string" ? badge : badge.en}
              className="rounded-full border border-[#915eff]/30 bg-[#915eff]/10 px-3 py-1 text-[12px] font-semibold tracking-[0.08em] text-[#d4c7ff]"
            >
              {t(badge)}
            </span>
          ))}
        </div>
      ) : null}

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {t(point)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useLanguage();

  return (
    <>
      <MotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t({
            en: "What I have done so far",
            fr: "Ce que j'ai réalisé jusqu'ici",
          })}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t({ en: "Work Experience.", fr: "Expérience professionnelle." })}
        </h2>
      </MotionDiv>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const ExperienceSection = SectionWrapper(Experience, "work");

export default ExperienceSection;
