import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { collaborationPoints } from "../constants/collaboration";
import { useLanguage } from "../i18n/languageCore";

const MotionDiv = motion.div;

const CollaborationCard = ({ index, label, title, description }) => {
  const { t } = useLanguage();

  return (
    <MotionDiv
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
        {t(label)}
      </span>
      <h3 className="mt-6 text-[22px] font-bold text-white">{t(title)}</h3>
      <p className="mt-4 text-[16px] leading-7 text-white/80">
        {t(description)}
      </p>
    </MotionDiv>
  );
};

const Feedbacks = () => {
  const { t } = useLanguage();

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <MotionDiv variants={textVariant()}>
          <p className={styles.sectionSubText}>
            {t({ en: "Working Style", fr: "Méthode de travail" })}
          </p>
          <h2 className={styles.sectionHeadText}>
            {t({ en: "How I Build.", fr: "Ma façon de construire." })}
          </h2>
        </MotionDiv>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {collaborationPoints.map((item, index) => (
          <CollaborationCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const FeedbacksSection = SectionWrapper(Feedbacks, "approach");

export default FeedbacksSection;
