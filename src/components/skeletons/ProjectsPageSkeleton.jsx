import React from "react";

import { styles } from "../../styles";
import SkeletonBlock from "./SkeletonBlock";

const ProjectsPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="border-b border-white/6 bg-primary/90">
        <div className={`${styles.paddingX} mx-auto flex max-w-7xl items-center justify-between py-6`}>
          <SkeletonBlock className="h-10 w-44 rounded-full" />
          <div className="hidden gap-4 sm:flex">
            <SkeletonBlock className="h-8 w-20 rounded-full" />
            <SkeletonBlock className="h-8 w-20 rounded-full" />
            <SkeletonBlock className="h-8 w-24 rounded-full" />
          </div>
        </div>
      </div>

      <header className={`${styles.paddingX} mx-auto max-w-7xl pt-24 pb-14`}>
        <SkeletonBlock className="h-4 w-28" />
        <SkeletonBlock className="mt-5 h-14 w-[460px] max-w-full" />
        <div className="mt-6 space-y-4">
          <SkeletonBlock className="h-4 w-full max-w-3xl" />
          <SkeletonBlock className="h-4 w-[88%] max-w-3xl" />
        </div>
      </header>

      <section className={`${styles.paddingX} mx-auto max-w-7xl pb-20`}>
        <div className="grid gap-8 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-tertiary/75 p-6 shadow-card"
            >
              <div className="flex items-center justify-between gap-4">
                <SkeletonBlock className="h-7 w-24 rounded-full" />
                <SkeletonBlock className="h-7 w-28 rounded-full" />
              </div>
              <SkeletonBlock className="mt-5 h-8 w-56 max-w-full" />
              <div className="mt-4 space-y-3">
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-[90%]" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <SkeletonBlock className="h-6 w-16 rounded-full" />
                <SkeletonBlock className="h-6 w-20 rounded-full" />
                <SkeletonBlock className="h-6 w-24 rounded-full" />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <SkeletonBlock className="h-4 w-40" />
                <SkeletonBlock className="h-10 w-28 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPageSkeleton;
