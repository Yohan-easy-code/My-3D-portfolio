import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { getLocalizedPath, useLanguage } from "../i18n/languageCore";
import heroMain from "../assets/projectImg/bento-box/yv5djpopniti04dzsoatonewithnatureth.jpg";
import heroHighlight from "../assets/projectImg/bento-box/0_7Hn1w-JbQlQGRUkp.jpg";
import thumbExterior from "../assets/projectImg/bento-box/batiment-moderne-avec-un-mur-vivant-plantes-arbres-verre-exterieur-jour-ensoleille-optimized.jpg";
import thumbGarden from "../assets/projectImg/bento-box/beau-jardin-japonais-optimized.jpg";
import thumbAirport from "../assets/projectImg/bento-box/interieur-d-un-aeroport-avec-fenetres-optimized.jpg";
import thumbPark from "../assets/projectImg/bento-box/arbre-au-point-de-repere-de-fort-canning-singapour-optimized.jpg";
import thumbUpward from "../assets/projectImg/bento-box/faible-angle-de-vue-d-un-arbre-et-exterieur-du-batiment-optimized.jpg";
import cardBranch from "../assets/projectImg/bento-box/branche-d-arbre-nature-flore-concept-optimized.jpg";

const heroTags = [
  { en: "Concept preview", fr: "Aperçu concept" },
  { en: "Architecture studio", fr: "Studio d'architecture" },
  { en: "Bento layout", fr: "Layout bento" },
  { en: "Lead capture", fr: "Capture de leads" },
];

const gallerySlides = [
  {
    src: heroHighlight,
    alt: {
      en: "Warm interior moodboard",
      fr: "Moodboard d'intérieur chaleureux",
    },
    title: { en: "Hero moodboard frame", fr: "Cadre moodboard du hero" },
    note: {
      en: "A secondary focal point that adds depth without fighting the main headline.",
      fr: "Un point focal secondaire qui ajoute de la profondeur sans concurrencer le titre principal.",
    },
  },
  {
    src: thumbExterior,
    alt: { en: "Green exterior facade", fr: "Façade extérieure végétalisée" },
    title: {
      en: "Exterior-led credibility",
      fr: "Crédibilité portée par l'extérieur",
    },
    note: {
      en: "Useful when the studio wants to lead with built work instead of a generic service list.",
      fr: "Utile quand le studio veut mettre en avant des réalisations plutôt qu'une liste de services générique.",
    },
  },
  {
    src: thumbGarden,
    alt: { en: "Japanese inspired garden", fr: "Jardin d'inspiration japonaise" },
    title: { en: "Quiet luxury atmosphere", fr: "Atmosphère de luxe discret" },
    note: {
      en: "A softer frame that slows the rhythm and works well between denser sections.",
      fr: "Un cadre plus doux qui ralentit le rythme et fonctionne bien entre des sections plus denses.",
    },
  },
  {
    src: thumbAirport,
    alt: { en: "Bright interior hall", fr: "Hall intérieur lumineux" },
    title: {
      en: "Large-scale interior cue",
      fr: "Signal d'intérieur grande échelle",
    },
    note: {
      en: "Helps the concept stretch from boutique residential to hospitality or public space work.",
      fr: "Aide le concept à couvrir aussi bien le résidentiel premium que l'hôtellerie ou les espaces publics.",
    },
  },
  {
    src: thumbPark,
    alt: { en: "Urban park passage", fr: "Passage dans un parc urbain" },
    title: {
      en: "Nature-forward transition",
      fr: "Transition orientée nature",
    },
    note: {
      en: "Bridges architecture, landscape, and wellbeing narratives in a single visual.",
      fr: "Relie architecture, paysage et bien-être dans un seul visuel.",
    },
  },
];

const conceptFacts = [
  {
    label: { en: "Audience", fr: "Audience" },
    value: {
      en: "Architecture or hospitality studio",
      fr: "Studio d'architecture ou d'hôtellerie",
    },
  },
  {
    label: { en: "Goal", fr: "Objectif" },
    value: {
      en: "Present the offer clearly and trigger qualified inquiries",
      fr: "Présenter l'offre clairement et déclencher des demandes qualifiées",
    },
  },
  {
    label: { en: "Build type", fr: "Type de build" },
    value: {
      en: "Single-page concept with reusable sections",
      fr: "Concept one-page avec sections réutilisables",
    },
  },
];

const moduleCards = [
  {
    title: { en: "Hero + insight capsule", fr: "Hero + capsule insight" },
    category: { en: "Acquisition", fr: "Acquisition" },
    image: heroHighlight,
    description: {
      en: "Large emotional image, compact proof card, and immediate CTA above the fold.",
      fr: "Grande image émotionnelle, carte de preuve compacte et CTA immédiat au-dessus de la ligne de flottaison.",
    },
  },
  {
    title: { en: "Project grid", fr: "Grille projets" },
    category: { en: "Portfolio", fr: "Portfolio" },
    image: thumbExterior,
    description: {
      en: "A modular area for featured sectors, project types, or service categories.",
      fr: "Une zone modulaire pour secteurs mis en avant, types de projets ou catégories de services.",
    },
  },
  {
    title: { en: "Editorial break", fr: "Respiration éditoriale" },
    category: { en: "Narrative", fr: "Narration" },
    image: cardBranch,
    description: {
      en: "A lighter card that resets the reading pace and gives room for positioning copy.",
      fr: "Une carte plus légère qui réinitialise le rythme de lecture et laisse de la place au positionnement.",
    },
  },
  {
    title: {
      en: "Contact-ready closing section",
      fr: "Section finale prête pour le contact",
    },
    category: { en: "Conversion", fr: "Conversion" },
    image: thumbGarden,
    description: {
      en: "A bottom block reserved for offer summary, trust signals, and a cleaner inquiry CTA.",
      fr: "Un bloc de fin réservé au résumé de l'offre, aux signaux de confiance et à un CTA de demande plus clair.",
    },
    wide: true,
  },
];

const rationalePoints = [
  {
    title: { en: "Clear visual hierarchy", fr: "Hiérarchie visuelle claire" },
    body: {
      en: "The layout puts the promise, image mood, and next action in the first viewport without overloading it.",
      fr: "Le layout place la promesse, l'ambiance visuelle et l'action suivante dans le premier viewport sans le surcharger.",
    },
  },
  {
    title: { en: "Reusable section rhythm", fr: "Rythme de sections réutilisable" },
    body: {
      en: "Dark cards, white editorial blocks, and image-led modules create contrast while staying cohesive.",
      fr: "Cartes sombres, blocs éditoriaux blancs et modules guidés par l'image créent du contraste tout en restant cohérents.",
    },
  },
  {
    title: {
      en: "Adaptable to real client data",
      fr: "Adaptable à de vraies données client",
    },
    body: {
      en: "The structure can absorb case studies, testimonials, process steps, or a booking flow without redesigning the page.",
      fr: "La structure peut absorber cas clients, témoignages, étapes de process ou parcours de réservation sans redessiner la page.",
    },
  },
];

const conceptNotes = [
  {
    title: { en: "What this page is", fr: "Ce qu'est cette page" },
    body: {
      en: "A working landing concept used to validate hierarchy, mood, and CTA placement before client copy and proof are added.",
      fr: "Un concept de landing page fonctionnel utilisé pour valider la hiérarchie, l'ambiance et le placement des CTA avant d'ajouter la preuve et le contenu client.",
    },
  },
  {
    title: { en: "What should be replaced", fr: "Ce qui doit être remplacé" },
    body: {
      en: "Project names, service labels, brand voice, trust signals, and contact mechanics should all be swapped for real client content.",
      fr: "Les noms de projets, labels de services, ton de marque, preuves de confiance et mécaniques de contact doivent être remplacés par du contenu client réel.",
    },
  },
  {
    title: { en: "Best next iteration", fr: "Meilleure prochaine itération" },
    body: {
      en: "Add genuine case studies, lighter mobile image crops, and a final contact section tied to a real lead workflow.",
      fr: "Ajouter de vrais cas clients, des crops image plus légers sur mobile et une section contact reliée à un vrai workflow de leads.",
    },
  },
];

const launchChecklist = [
  {
    en: "Replace concept copy with brand-specific messaging and service names.",
    fr: "Remplacer le contenu concept par un message de marque et des noms de services spécifiques.",
  },
  {
    en: "Swap visual placeholders for real project imagery or renders.",
    fr: "Remplacer les visuels placeholder par de vraies images projet ou des rendus.",
  },
  {
    en: "Connect the CTA to a live inquiry form or booking flow.",
    fr: "Connecter le CTA à un formulaire de demande ou à un parcours de réservation réel.",
  },
];

const BentoBoxArchi = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { language, t } = useLanguage();
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
                alt={t({
                  en: "Calm architectural interior",
                  fr: "Intérieur architectural apaisé",
                })}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/35" />

              <div className="relative z-10 flex flex-col gap-8 px-8 py-10 md:px-12 md:py-16">
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                  {heroTags.map((tag) => (
                    <span
                      key={tag.en}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1"
                    >
                      {t(tag)}
                    </span>
                  ))}
                </div>

                <div className="max-w-3xl space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/65">
                    Bento Box Archi
                  </p>
                  <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-[44px] md:leading-[52px]">
                    {t({
                      en: "A premium landing concept for architecture teams that need calmer storytelling and a clearer path to contact.",
                      fr: "Un concept de landing page premium pour les équipes d'architecture qui veulent une narration plus calme et un chemin de contact plus clair.",
                    })}
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-white/75">
                    {t({
                      en: "This concept explores how a nature-first visual direction and modular bento sections can present services, featured work, and conversion prompts without feeling templated.",
                      fr: "Ce concept explore comment une direction visuelle orientée nature et des sections bento modulaires peuvent présenter les services, les réalisations clés et les appels à l'action sans effet template.",
                    })}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#concept-notes"
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:bg-slate-100"
                  >
                    {t({
                      en: "Review concept notes",
                      fr: "Voir les notes du concept",
                    })}
                  </a>
                  <Link
                    to={getLocalizedPath("/#contact", language)}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    {t({
                      en: "Discuss a client adaptation",
                      fr: "Discuter d'une adaptation client",
                    })}
                  </Link>
                </div>
              </div>

              <div className="relative z-10 ml-8 mr-8 mb-8 max-w-[280px] rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-4 text-white shadow-xl backdrop-blur md:ml-auto">
                <p className="text-sm font-semibold">
                  {t({ en: "Design direction", fr: "Direction design" })}
                </p>
                <p className="mt-1 text-xs text-white/80">
                  {t({
                    en: "Nature-first studio landing",
                    fr: "Landing de studio orientée nature",
                  })}
                </p>
                <div className="mt-3 h-28 overflow-hidden rounded-xl">
                  <img
                    src={heroHighlight}
                    alt={t({
                      en: "Architecture moodboard crop",
                      fr: "Crop moodboard architecture",
                    })}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    {t({ en: "Hero narrative", fr: "Narration hero" })}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    {t({ en: "Gallery rail", fr: "Rail galerie" })}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    {t({ en: "Contact CTA", fr: "CTA contact" })}
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
                    key={slide.title.en}
                    type="button"
                    aria-label={`${t({
                      en: "Show",
                      fr: "Afficher",
                    })} ${t(slide.title)}`}
                    className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border transition ${
                      index === activeSlideIndex
                        ? "border-slate-900"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => setActiveSlideIndex(index)}
                  >
                    <img
                      src={slide.src}
                      alt={t(slide.alt)}
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
                    aria-label={t({
                      en: "Show previous slide",
                      fr: "Afficher la slide précédente",
                    })}
                    className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 transition hover:bg-slate-50"
                    onClick={goToPreviousSlide}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label={t({
                      en: "Show next slide",
                      fr: "Afficher la slide suivante",
                    })}
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
                  alt={t(activeSlide.alt)}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">
                {t(activeSlide.title)}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                {t(activeSlide.note)}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600 sm:grid-cols-3">
                {conceptFacts.map((fact) => (
                  <div key={fact.label.en} className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-slate-900">
                      {t(fact.label)}
                    </span>
                    <span>{t(fact.value)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#concept-notes"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  {t({
                    en: "Read implementation notes",
                    fr: "Lire les notes d'implémentation",
                  })}
                </a>
                <Link
                  to={getLocalizedPath("/#contact", language)}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
                >
                  {t({
                    en: "Request a tailored version",
                    fr: "Demander une version sur mesure",
                  })}
                </Link>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-white/70">
                  {t({ en: "Reusable blocks", fr: "Blocs réutilisables" })}
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  {t({
                    en: "Sections that can be adapted to a real studio offer",
                    fr: "Des sections adaptables à une vraie offre de studio",
                  })}
                </h2>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                {moduleCards.length} {t({ en: "modules", fr: "modules" })}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full bg-white/15 px-4 py-2">
                {t({ en: "Image-led hero", fr: "Hero guidé par l'image" })}
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                {t({ en: "Project grid", fr: "Grille projets" })}
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                {t({ en: "Editorial section", fr: "Section éditoriale" })}
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                {t({ en: "Contact prompt", fr: "Invitation au contact" })}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {moduleCards.map((card) => (
                <article
                  key={card.title.en}
                  className={`rounded-2xl border border-white/10 bg-white/5 p-4 text-white shadow-lg ${
                    card.wide ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="h-40 overflow-hidden rounded-xl">
                    <img
                      src={card.image}
                      alt={t(card.title)}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-white/70">{t(card.category)}</p>
                    <p className="text-lg font-semibold">{t(card.title)}</p>
                    <p className="text-sm leading-6 text-white/75">
                      {t(card.description)}
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
                alt={t({
                  en: "Landscape transition section",
                  fr: "Section de transition paysagère",
                })}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                {t({ en: "Why it works", fr: "Pourquoi ça fonctionne" })}
              </p>
              <h2 className="text-2xl font-semibold leading-tight">
                {t({
                  en: "The concept keeps the page premium without hiding the offer.",
                  fr: "Le concept garde une perception premium sans cacher l'offre.",
                })}
              </h2>
              <div className="space-y-3">
                {rationalePoints.map((point) => (
                  <div
                    key={point.title.en}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {t(point.title)}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {t(point.body)}
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
            <p className="text-sm text-white/70">
              {t({ en: "Concept notes", fr: "Notes du concept" })}
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight">
              {t({
                en: "What should happen before this becomes a live client page",
                fr: "Ce qu'il faut faire avant d'en faire une vraie page client",
              })}
            </h2>
            <div className="mt-6 space-y-4">
              {conceptNotes.map((note) => (
                <article
                  key={note.title.en}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner"
                >
                  <p className="text-sm font-semibold">{t(note.title)}</p>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {t(note.body)}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-3xl border border-white/10 bg-black/70 p-8 text-white shadow-2xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-sm text-white/70">
                {t({ en: "Launch path", fr: "Chemin de lancement" })}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                {t({
                  en: "From concept preview to client-ready landing page",
                  fr: "Du concept preview à la landing page prête pour un client",
                })}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                {launchChecklist.map((item) => (
                  <li key={item.en} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {t(item)}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={getLocalizedPath("/projects", language)}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-slate-100"
                >
                  {t({ en: "Back to projects", fr: "Retour aux projets" })}
                </Link>
                <Link
                  to={getLocalizedPath("/#contact", language)}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:text-white"
                >
                  {t({
                    en: "Start from this concept",
                    fr: "Partir de ce concept",
                  })}
                </Link>
              </div>
            </div>
            <div className="h-48 overflow-hidden rounded-2xl">
              <img
                src={thumbUpward}
                alt={t({
                  en: "Architecture detail crop",
                  fr: "Détail architectural recadré",
                })}
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
