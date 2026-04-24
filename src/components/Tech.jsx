import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/site";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="group flex w-[112px] flex-col items-center gap-4"
        >
          <div className="relative grid h-28 w-28 place-items-center overflow-hidden rounded-full border border-white/10 bg-black-100/70 shadow-card transition duration-300 group-hover:-translate-y-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(145,94,255,0.22),transparent_45%)]" />
            <div className="absolute inset-[10px] rounded-full border border-white/10 bg-black/25" />
            <img
              src={technology.icon}
              alt={technology.name}
              loading="lazy"
              className="relative z-10 h-12 w-12 object-contain"
            />
          </div>
          <span className="text-center text-xs leading-5 text-secondary">
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};

const TechSection = SectionWrapper(Tech, "tech");

export default TechSection;
