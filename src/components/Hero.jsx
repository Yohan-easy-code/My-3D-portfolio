import { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { CanvasSkeleton } from "./skeletons";
import useDeferredThreeScene from "../hooks/useDeferredThreeScene";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));
const MotionDiv = motion.div;
const heroSignals = [
  "Landing pages",
  "Portfolio websites",
  "3D art direction",
];

const HeroStaticVisual = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 bottom-24 flex justify-center px-6"
  >
    <div className="relative h-[220px] w-full max-w-xl overflow-hidden rounded-[36px] border border-white/10 bg-black/20 backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(145,94,255,0.22),transparent_40%)]" />
      <div className="absolute -left-6 top-8 h-20 w-20 rounded-[28px] border border-white/10 bg-white/8" />
      <div className="absolute right-6 top-6 h-16 w-32 rounded-full border border-white/10 bg-white/8" />
      <div className="absolute bottom-[-14px] right-[-10px] h-28 w-28 rounded-full bg-[#915eff]/20 blur-2xl" />
      <div className="absolute bottom-8 left-8 flex gap-3">
        <div className="h-3 w-24 rounded-full bg-white/20" />
        <div className="h-3 w-16 rounded-full bg-white/10" />
      </div>
      <div className="absolute bottom-12 right-8 h-24 w-24 rounded-[28px] border border-white/10 bg-white/8" />
    </div>
  </div>
);

const Hero = () => {
  const [hideOffice3D, setHideOffice3D] = useState(false);
  const { isEligible, shouldRenderThree } = useDeferredThreeScene({
    delayMs: 650,
    minWidthPx: 1024,
  });

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Yohan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />{" "}
            interfaces and web applications
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {heroSignals.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-slate-100"
            >
              Explore concepts
            </Link>
            <Link
              to="/#contact"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
      {hideOffice3D ? (
        <HeroStaticVisual />
      ) : isEligible ? (
        shouldRenderThree ? (
          <Suspense fallback={<CanvasSkeleton variant="hero" />}>
            <ComputersCanvas />
          </Suspense>
        ) : (
          <CanvasSkeleton variant="hero" />
        )
      ) : (
        <HeroStaticVisual />
      )}

      <div className="absolute xs:bottom-10 bottom-32 z-30 w-full flex justify-center items-center gap-4 px-6">
        <a href="#about">
          <div className="w-[35px] h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <MotionDiv
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
        <button
          type="button"
          aria-pressed={hideOffice3D}
          onClick={() => setHideOffice3D((current) => !current)}
          className={`rounded-full border px-5 py-3 text-sm font-semibold shadow-lg backdrop-blur transition ${
            hideOffice3D
              ? "border-[#915eff] bg-[#915eff] text-white shadow-[#915eff]/30"
              : "border-white/20 bg-white text-black hover:bg-slate-100"
          }`}
        >
          hide 3D Office
        </button>
      </div>
    </section>
  );
};

export default Hero;
