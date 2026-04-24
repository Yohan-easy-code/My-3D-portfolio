import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {
  BentoPageSkeleton,
  ProjectsPageSkeleton,
  SectionSkeleton,
} from "./components/skeletons";

const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const BentoBoxArchi = lazy(() => import("./pages/BentoBoxArchi"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, pathname]);

  return null;
};

const HomePage = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Suspense fallback={<SectionSkeleton variant="timeline" />}>
      <Experience />
    </Suspense>
    <Suspense fallback={<SectionSkeleton variant="tech" />}>
      <Tech />
    </Suspense>
    <Suspense fallback={<SectionSkeleton variant="works" />}>
      <Works />
    </Suspense>
    <Suspense fallback={<SectionSkeleton variant="approach" />}>
      <Feedbacks />
    </Suspense>
    <div className="relative z-0">
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>
      <Suspense fallback={<SectionSkeleton variant="contact" />}>
        <Contact />
      </Suspense>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <ScrollToHash />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/projects"
        element={
          <Suspense fallback={<ProjectsPageSkeleton />}>
            <Projects />
          </Suspense>
        }
      />
      <Route
        path="/bento-box-archi"
        element={
          <Suspense fallback={<BentoPageSkeleton />}>
            <BentoBoxArchi />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
