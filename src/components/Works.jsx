// @ts-ignore
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/projects";
import { fadeIn, textVariant } from "../utils/motion";
// @ts-ignore
import github from "../assets/github.png";

const MotionDiv = motion.div;
const MotionP = motion.p;

const ProjectCard = ({
  // @ts-ignore
  index,
  // @ts-ignore
  name,
  // @ts-ignore
  description,
  // @ts-ignore
  tags,
  // @ts-ignore
  image,
  // @ts-ignore
  source_code_link,
}) => {
  return (
    <MotionDiv
      // @ts-ignore
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="h-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex h-full w-full flex-col rounded-2xl bg-tertiary p-5"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={source_code_link}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${name} source code`}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(
            (
              // @ts-ignore
              tag,
            ) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ),
          )}
        </div>
      </Tilt>
    </MotionDiv>
  );
};

const Works = () => {
  return (
    <>
      <MotionDiv
        // @ts-ignore
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </MotionDiv>
      <div className="w-full flex">
        <MotionP
          // @ts-ignore
          variants={fadeIn("", "", 0, 1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A selection of recent concepts and builds that show how I approach
          visual direction, front-end structure, and implementation. Each card
          points to the source repository when it is available.
        </MotionP>
      </div>
      <div className="mt-20 grid items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WorksSection = SectionWrapper(Works, "projects-showcase");

export default WorksSection;
