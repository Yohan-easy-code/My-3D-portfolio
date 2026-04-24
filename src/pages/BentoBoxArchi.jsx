import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { styles } from "../styles";
import heroMain from "../assets/projectImg/bento-box/yv5djpopniti04dzsoatonewithnatureth.jpg";
import heroHighlight from "../assets/projectImg/bento-box/0_7Hn1w-JbQlQGRUkp.jpg";
import thumbExterior from "../assets/projectImg/bento-box/batiment-moderne-avec-un-mur-vivant-plantes-arbres-verre-exterieur-jour-ensoleille-optimized.jpg";
import thumbGarden from "../assets/projectImg/bento-box/beau-jardin-japonais-optimized.jpg";
import thumbAirport from "../assets/projectImg/bento-box/interieur-d-un-aeroport-avec-fenetres-optimized.jpg";
import thumbPark from "../assets/projectImg/bento-box/arbre-au-point-de-repere-de-fort-canning-singapour-optimized.jpg";
import thumbUpward from "../assets/projectImg/bento-box/faible-angle-de-vue-d-un-arbre-et-exterieur-du-batiment-optimized.jpg";
import cardBranch from "../assets/projectImg/bento-box/branche-d-arbre-nature-flore-concept-optimized.jpg";

const heroTags = [
  "Concept preview",
  "Architecture studio",
  "Bento layout",
  "Lead capture",
];

const gallerySlides = [
  {
    src: heroHighlight,
    alt: "Warm interior moodboard",
    title: "Hero moodboard frame",
    note: "A secondary focal point that adds depth without fighting the main headline.",
  },
  {
    src: thumbExterior,
    alt: "Green exterior facade",
    title: "Exterior-led credibility",
    note: "Useful when the studio wants to lead with built work instead of a generic service list.",
  },
  {
    src: thumbGarden,
    alt: "Japanese inspired garden",
    title: "Quiet luxury atmosphere",
    note: "A softer frame that slows the rhythm and works well between denser sections.",
  },
  {
    src: thumbAirport,
    alt: "Bright interior hall",
    title: "Large-scale interior cue",
    note: "Helps the concept stretch from boutique residential to hospitality or public space work.",
  },
  {
    src: thumbPark,
    alt: "Urban park passage",
    title: "Nature-forward transition",
    note: "Bridges architecture, landscape, and wellbeing narratives in a single visual.",
  },
];

const conceptFacts = [
  { label: "Audience", value: "Architecture or hospitality studio" },
  { label: "Goal", value: "Present the offer clearly and trigger qualified inquiries" },
  { label: "Build type", value: "Single-page concept with reusable sections" },
];

const moduleCards = [
  {
    title: "Hero + insight capsule",
    category: "Acquisition",
    image: heroHighlight,
    description:
      "Large emotional image, compact proof card, and immediate CTA above the fold.",
  },
  {
    title: "Project grid",
    category: "Portfolio",
    image: thumbExterior,
    description:
      "A modular area for featured sectors, project types, or service categories.",
  },
  {
    title: "Editorial break",
    category: "Narrative",
    image: cardBranch,
    description:
      "A lighter card that resets the reading pace and gives room for positioning copy.",
  },
  {
    title: "Contact-ready closing section",
    category: "Conversion",
    image: thumbGarden,
    description:
      "A bottom block reserved for offer summary, trust signals, and a cleaner inquiry CTA.",
    wide: true,
  },
];

const rationalePoints = [
  {
    title: "Clear visual hierarchy",
    body: "The layout puts the promise, image mood, and next action in the first viewport without overloading it.",
  },
  {
    title: "Reusable section rhythm",
    body: "Dark cards, white editorial blocks, and image-led modules create contrast while staying cohesive.",
  },
  {
    title: "Adaptable to real client data",
    body: "The structure can absorb case studies, testimonials, process steps, or a booking flow without redesigning the page.",
  },
];

const conceptNotes = [
  {
    title: "What this page is",
    body: "A working landing concept used to validate hierarchy, mood, and CTA placement before client copy and proof are added.",
  },
  {
    title: "What should be replaced",
    body: "Project names, service labels, brand voice, trust signals, and contact mechanics should all be swapped for real client content.",
  },
  {
    title: "Best next iteration",
    body: "Add genuine case studies, lighter mobile image crops, and a final contact section tied to a real lead workflow.",
  },
];

const launchChecklist = [
  "Replace concept copy with brand-specific messaging and service names.",
  "Swap visual placeholders for real project imagery or renders.",
  "Connect the CTA to a live inquiry form or booking flow.",
];

const BentoBoxArchi = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = gallerySlides[activeSlideIndex];

  const goToPreviousSlide = () => {
    setActiveSlideIndex((currentIndex) =>
      currentIndex === 0 ? gallerySlides.length - 1 : currentIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlideIndex((currentIndex) =>
      currentIndex === gallerySlides.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <header
          className={`${styles.paddingX} pt-32 pb-14 max-w-7xl mx-auto text-left`}
        >
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-2 shadow-2xl">
            <div className="relative overflow-hidden rounded-[24px] bg-black/50">
              <img
                src={heroMain}
                alt="Calm architectural interior"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/35" />

              <div className="relative z-10 flex flex-col gap-8 px-8 py-10 md:px-12 md:py-16">
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                  {heroTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="max-w-3xl space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/65">
                    Bento Box Archi
                  </p>
                  <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-[44px] md:leading-[52px]">
                    A premium landing concept for architecture teams that need
                    calmer storytelling and a clearer path to contact.
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-white/75">
                    This concept explores how a nature-first visual direction
                    and modular bento sections can present services, featured
                    work, and conversion prompts without feeling templated.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#concept-notes"
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:bg-slate-100"
                  >
                    Review concept notes
                  </a>
                  <Link
                    to="/#contact"
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Discuss a client adaptation
                  </Link>
                </div>
              </div>

              <div className="relative z-10 ml-8 mr-8 mb-8 max-w-[280px] rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-4 text-white shadow-xl backdrop-blur md:ml-auto">
                <p className="text-sm font-semibold">Design direction</p>
                <p className="mt-1 text-xs text-white/80">
                  Nature-first studio landing
                </p>
                <div className="mt-3 h-28 overflow-hidden rounded-xl">
                  <img
                    src={heroHighlight}
                    alt="Architecture moodboard crop"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    Hero narrative
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    Gallery rail
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    Contact CTA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className={`${styles.paddingX} pb-20 max-w-7xl mx-auto space-y-10`}>
        <div className="grid gap-8 lg:grid-cols-[1.7fr,1.3fr]">
          <section className="rounded-3xl bg-white text-slate-900 shadow-2xl">
            <div className="p-6 pb-2">
              <div className="flex gap-3 overflow-x-auto pb-2">
                {gallerySlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`Show ${slide.title}`}
                    className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border transition ${
                      index === activeSlideIndex
                        ? "border-slate-900"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => setActiveSlideIndex(index)}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>
                  {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
                  {String(gallerySlides.length).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Show previous slide"
                    className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 transition hover:bg-slate-50"
                    onClick={goToPreviousSlide}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Show next slide"
                    className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 transition hover:bg-slate-50"
                    onClick={goToNextSlide}
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="mt-4 h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{activeSlide.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                {activeSlide.note}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600 sm:grid-cols-3">
                {conceptFacts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-slate-900">
                      {fact.label}
                    </span>
                    <span>{fact.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#concept-notes"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Read implementation notes
                </a>
                <Link
                  to="/#contact"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Request a tailored version
                </Link>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-white/70">Reusable blocks</p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Sections that can be adapted to a real studio offer
                </h2>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                {moduleCards.length} modules
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full bg-white/15 px-4 py-2">
                Image-led hero
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                Project grid
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                Editorial section
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                Contact prompt
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {moduleCards.map((card) => (
                <article
                  key={card.title}
                  className={`rounded-2xl border border-white/10 bg-white/5 p-4 text-white shadow-lg ${
                    card.wide ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="h-40 overflow-hidden rounded-xl">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-white/70">{card.category}</p>
                    <p className="text-lg font-semibold">{card.title}</p>
                    <p className="text-sm leading-6 text-white/75">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
          <section className="rounded-3xl bg-white text-slate-900 shadow-2xl">
            <div className="h-[220px] overflow-hidden rounded-t-3xl">
              <img
                src={thumbPark}
                alt="Landscape transition section"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Why it works
              </p>
              <h2 className="text-2xl font-semibold leading-tight">
                The concept keeps the page premium without hiding the offer.
              </h2>
              <div className="space-y-3">
                {rationalePoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {point.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {point.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="concept-notes"
            className="rounded-3xl border border-white/10 bg-black/60 p-6 text-white shadow-xl"
          >
            <p className="text-sm text-white/70">Concept notes</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight">
              What should happen before this becomes a live client page
            </h2>
            <div className="mt-6 space-y-4">
              {conceptNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner"
                >
                  <p className="text-sm font-semibold">{note.title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {note.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-3xl border border-white/10 bg-black/70 p-8 text-white shadow-2xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-sm text-white/70">Launch path</p>
              <h2 className="mt-2 text-2xl font-semibold">
                From concept preview to client-ready landing page
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                {launchChecklist.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-slate-100"
                >
                  Back to projects
                </Link>
                <Link
                  to="/#contact"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:text-white"
                >
                  Start from this concept
                </Link>
              </div>
            </div>
            <div className="h-48 overflow-hidden rounded-2xl">
              <img
                src={thumbUpward}
                alt="Architecture detail crop"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BentoBoxArchi;
