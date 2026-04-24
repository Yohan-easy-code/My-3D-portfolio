import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { styles } from "../styles";

const landingConcepts = [
  {
    title: "Bento Box Archi",
    status: "Live concept",
    audience: "Architecture studio",
    focus: "Editorial bento layout with a soft lead capture flow",
    description:
      "A premium landing concept built to showcase positioning, image-led storytelling, and a clear path to contact.",
    stack: ["React", "Tailwind", "Modular sections"],
    accent: "from-orange-400 via-pink-500 to-purple-600",
    to: "/bento-box-archi",
    available: true,
    ctaLabel: "Open concept",
  },
  {
    title: "Creative Studio",
    status: "Queued",
    audience: "Creative agency",
    focus: "Bold typography, case study rail, and faster booking funnel",
    description:
      "Planned concept for a service-led studio homepage mixing expressive copy with a compact portfolio narrative.",
    stack: ["Concept", "Motion", "Booking CTA"],
    accent: "from-emerald-400 via-cyan-400 to-blue-600",
    available: false,
    ctaLabel: "In queue",
  },
  {
    title: "Event Drop",
    status: "Wireframe",
    audience: "Launch or conference",
    focus: "Countdown, speakers, schedule, and registration path",
    description:
      "Reserved for a future event-focused landing page with urgency, agenda blocks, and a tighter conversion flow.",
    stack: ["Countdown", "Agenda", "Registration"],
    accent: "from-amber-400 via-red-400 to-rose-500",
    available: false,
    ctaLabel: "Not yet published",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <header
          className={`${styles.paddingX} pt-32 pb-16 max-w-7xl mx-auto text-left`}
        >
          <p className={styles.sectionSubText}>Concept Lab</p>
          <h1 className={`${styles.sectionHeadText} text-white`}>
            Selected Landing Concepts
          </h1>
          <p className="mt-6 max-w-3xl text-[17px] leading-[30px] text-secondary">
            A curated set of landing page directions focused on positioning,
            storytelling, and clearer conversion paths. Only concepts that are
            ready to review are clickable.
          </p>
        </header>
      </div>

      <section className={`${styles.paddingX} pb-20 max-w-7xl mx-auto`}>
        <div className="grid gap-8 md:grid-cols-2">
          {landingConcepts.map((concept) => {
            const cardContent = (
              <article>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="rounded-full border border-white/10 px-3 py-1 uppercase tracking-[0.2em] text-[11px] text-secondary">
                    {concept.status}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    {concept.audience}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-white">
                  {concept.title}
                </h2>
                <p className="mt-3 text-sm font-medium text-white/80">
                  {concept.focus}
                </p>
                <p className="mt-3 text-[15px] leading-[26px] text-secondary">
                  {concept.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {concept.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div
                  className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${concept.accent}`}
                />
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm text-secondary">
                    {concept.available
                      ? "Ready to review in browser"
                      : "Kept off the live path until it is fully built"}
                  </span>
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      concept.available
                        ? "bg-white text-black"
                        : "border border-white/15 text-white/70"
                    }`}
                  >
                    {concept.ctaLabel}
                  </span>
                </div>
              </article>
            );

            if (!concept.available) {
              return (
                <div
                  key={concept.title}
                  aria-disabled="true"
                  className="rounded-2xl border border-white/10 bg-tertiary/70 p-6 shadow-card opacity-85"
                >
                  {cardContent}
                </div>
              );
            }

            return (
              <Link
                key={concept.title}
                to={concept.to}
                className="rounded-2xl border border-white/10 bg-tertiary/80 p-6 shadow-card backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-white/20"
              >
                {cardContent}
              </Link>
            );
          })}

          <article className="flex min-h-[280px] flex-col justify-between rounded-2xl border border-dashed border-white/20 bg-black/40 p-6 shadow-inner">
            <div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                Next step
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                Turn a concept into a client-ready landing
              </h2>
              <p className="mt-3 text-[15px] leading-[26px] text-secondary">
                I can adapt one of these structures to your brand, copy, offer,
                and conversion flow instead of shipping a generic template.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/#contact"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-slate-100"
              >
                Start a project
              </Link>
              <Link
                to="/"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:text-white"
              >
                Back to portfolio
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Projects;
