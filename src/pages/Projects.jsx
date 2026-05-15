import React from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { getLocalizedPath, useLanguage } from "../i18n/languageCore";

const landingConcepts = [
  {
    title: "Bento Box Archi",
    status: { en: "Live concept", fr: "Concept en ligne" },
    audience: { en: "Architecture studio", fr: "Studio d'architecture" },
    focus: {
      en: "Editorial bento layout with a soft lead capture flow",
      fr: "Layout bento éditorial avec un parcours de contact fluide",
    },
    description: {
      en: "A premium landing concept built to showcase positioning, image-led storytelling, and a clear path to contact.",
      fr: "Un concept de landing page premium conçu pour montrer le positionnement, une narration portée par l'image et un chemin clair vers le contact.",
    },
    stack: [
      "React",
      "Tailwind",
      { en: "Modular sections", fr: "Sections modulaires" },
    ],
    accent: "from-orange-400 via-pink-500 to-purple-600",
    to: "/bento-box-archi",
    available: true,
    ctaLabel: { en: "Open concept", fr: "Ouvrir le concept" },
  },
  {
    title: "Creative Studio",
    status: { en: "Queued", fr: "En attente" },
    audience: { en: "Creative agency", fr: "Agence créative" },
    focus: {
      en: "Bold typography, case study rail, and faster booking funnel",
      fr: "Typographie forte, rail de cas clients et tunnel de réservation plus rapide",
    },
    description: {
      en: "Planned concept for a service-led studio homepage mixing expressive copy with a compact portfolio narrative.",
      fr: "Concept prévu pour une homepage de studio orientée service, mêlant copy expressive et narration portfolio compacte.",
    },
    stack: ["Concept", "Motion", { en: "Booking CTA", fr: "CTA réservation" }],
    accent: "from-emerald-400 via-cyan-400 to-blue-600",
    available: false,
    ctaLabel: { en: "In queue", fr: "En file" },
  },
  {
    title: "Event Drop",
    status: { en: "Wireframe", fr: "Wireframe" },
    audience: { en: "Launch or conference", fr: "Lancement ou conférence" },
    focus: {
      en: "Countdown, speakers, schedule, and registration path",
      fr: "Compte à rebours, intervenants, programme et inscription",
    },
    description: {
      en: "Reserved for a future event-focused landing page with urgency, agenda blocks, and a tighter conversion flow.",
      fr: "Réservé à une future landing page événementielle avec urgence, blocs agenda et parcours de conversion plus direct.",
    },
    stack: [
      { en: "Countdown", fr: "Compte à rebours" },
      "Agenda",
      { en: "Registration", fr: "Inscription" },
    ],
    accent: "from-amber-400 via-red-400 to-rose-500",
    available: false,
    ctaLabel: { en: "Not yet published", fr: "Pas encore publié" },
  },
];

const FoxSplineScene = () => {
  const handleLoad = (spline) => {
    spline.setBackgroundColor?.("rgba(0,0,0,0)");

    const triggerHeartAnimation = () => {
      spline.play?.();
      spline.setGlobalEvents?.(true);

      const heart = spline.findObjectByName?.("heart");
      if (heart?.emitEvent) {
        heart.emitEvent("mouseDown");
      } else if (heart?.uuid) {
        spline.emitEvent("mouseDown", heart.uuid);
      }

      spline.requestRender?.();
    };

    requestAnimationFrame(triggerHeartAnimation);
    window.setTimeout(triggerHeartAnimation, 300);
  };

  return (
    <div
      data-fox-spline
      className="mt-10 aspect-[4/3] w-[300px] max-w-full overflow-hidden bg-transparent sm:w-[420px]"
    >
      <Spline
        scene="/fox/public/scene.splinecode"
        wasmPath="/fox/public/"
        renderOnDemand={false}
        onLoad={handleLoad}
        className="h-full w-full bg-transparent"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

const Projects = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <header
          className={`${styles.paddingX} pt-32 pb-16 max-w-7xl mx-auto text-left`}
        >
          <p className={styles.sectionSubText}>
            {t({ en: "Concept Lab", fr: "Labo de concepts" })}
          </p>
          <h1 className={`${styles.sectionHeadText} text-white`}>
            {t({
              en: "Selected Landing Concepts",
              fr: "Concepts de landing pages sélectionnés",
            })}
          </h1>
          <p className="mt-6 max-w-3xl text-[17px] leading-[30px] text-secondary">
            {t({
              en: "A curated set of landing page directions focused on positioning, storytelling, and clearer conversion paths. Only concepts that are ready to review are clickable.",
              fr: "Une sélection de directions de landing pages centrées sur le positionnement, la narration et des chemins de conversion plus clairs. Seuls les concepts prêts à être revus sont cliquables.",
            })}
          </p>
          <FoxSplineScene />
        </header>
      </div>

      <section className={`${styles.paddingX} pb-20 max-w-7xl mx-auto`}>
        <div className="grid gap-8 md:grid-cols-2">
          {landingConcepts.map((concept) => {
            const cardContent = (
              <article>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="rounded-full border border-white/10 px-3 py-1 uppercase tracking-[0.2em] text-[11px] text-secondary">
                    {t(concept.status)}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    {t(concept.audience)}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-white">
                  {concept.title}
                </h2>
                <p className="mt-3 text-sm font-medium text-white/80">
                  {t(concept.focus)}
                </p>
                <p className="mt-3 text-[15px] leading-[26px] text-secondary">
                  {t(concept.description)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {concept.stack.map((item) => (
                    <span
                      key={typeof item === "string" ? item : item.en}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80"
                    >
                      {t(item)}
                    </span>
                  ))}
                </div>
                <div
                  className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${concept.accent}`}
                />
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm text-secondary">
                    {concept.available
                      ? t({
                          en: "Ready to review in browser",
                          fr: "Prêt à consulter dans le navigateur",
                        })
                      : t({
                          en: "Kept off the live path until it is fully built",
                          fr: "Gardé hors du parcours live tant qu'il n'est pas entièrement construit",
                        })}
                  </span>
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      concept.available
                        ? "bg-white text-black"
                        : "border border-white/15 text-white/70"
                    }`}
                  >
                    {t(concept.ctaLabel)}
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
                to={getLocalizedPath(concept.to, language)}
                className="rounded-2xl border border-white/10 bg-tertiary/80 p-6 shadow-card backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-white/20"
              >
                {cardContent}
              </Link>
            );
          })}

          <article className="flex min-h-[280px] flex-col justify-between rounded-2xl border border-dashed border-white/20 bg-black/40 p-6 shadow-inner">
            <div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                {t({ en: "Next step", fr: "Prochaine étape" })}
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                {t({
                  en: "Turn a concept into a client-ready landing",
                  fr: "Transformer un concept en landing prête pour un client",
                })}
              </h2>
              <p className="mt-3 text-[15px] leading-[26px] text-secondary">
                {t({
                  en: "I can adapt one of these structures to your brand, copy, offer, and conversion flow instead of shipping a generic template.",
                  fr: "Je peux adapter l'une de ces structures à votre marque, votre contenu, votre offre et votre parcours de conversion plutôt que livrer un template générique.",
                })}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={getLocalizedPath("/#contact", language)}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-slate-100"
              >
                {t({ en: "Start a project", fr: "Lancer un projet" })}
              </Link>
              <Link
                to={getLocalizedPath("/", language)}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:text-white"
              >
                {t({ en: "Back to portfolio", fr: "Retour au portfolio" })}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Projects;
