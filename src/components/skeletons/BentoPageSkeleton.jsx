import React from "react";

import { styles } from "../../styles";
import SkeletonBlock from "./SkeletonBlock";

const BentoPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="border-b border-white/6 bg-primary/90">
        <div className={`${styles.paddingX} mx-auto flex max-w-7xl items-center justify-between py-6`}>
          <SkeletonBlock className="h-10 w-44 rounded-full" />
          <div className="hidden gap-4 sm:flex">
            <SkeletonBlock className="h-8 w-20 rounded-full" />
            <SkeletonBlock className="h-8 w-24 rounded-full" />
            <SkeletonBlock className="h-8 w-20 rounded-full" />
          </div>
        </div>
      </div>

      <header className={`${styles.paddingX} mx-auto max-w-7xl pt-24 pb-14`}>
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-2 shadow-2xl">
          <div className="overflow-hidden rounded-[24px] bg-black/50 p-8 md:p-12">
            <div className="flex flex-wrap gap-3">
              <SkeletonBlock className="h-7 w-24 rounded-full" />
              <SkeletonBlock className="h-7 w-28 rounded-full" />
              <SkeletonBlock className="h-7 w-24 rounded-full" />
            </div>
            <SkeletonBlock className="mt-8 h-14 w-[640px] max-w-full" />
            <SkeletonBlock className="mt-4 h-14 w-[560px] max-w-full" />
            <div className="mt-6 space-y-3">
              <SkeletonBlock className="h-4 w-full max-w-2xl" />
              <SkeletonBlock className="h-4 w-[88%] max-w-2xl" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <SkeletonBlock className="h-11 w-44 rounded-full" />
              <SkeletonBlock className="h-11 w-48 rounded-full" />
            </div>
          </div>
        </div>
      </header>

      <main className={`${styles.paddingX} mx-auto max-w-7xl space-y-10 pb-20`}>
        <div className="grid gap-8 lg:grid-cols-[1.7fr,1.3fr]">
          <div className="rounded-3xl bg-white p-6">
            <div className="flex gap-3 overflow-hidden">
              {Array.from({ length: 5 }).map((_, index) => (
                <SkeletonBlock key={index} className="h-16 w-24 shrink-0" />
              ))}
            </div>
            <SkeletonBlock className="mt-5 h-64 w-full" />
            <SkeletonBlock className="mt-5 h-8 w-56 max-w-full" />
            <div className="mt-4 space-y-3">
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-[92%]" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
            <SkeletonBlock className="h-8 w-56 max-w-full" />
            <div className="mt-5 flex flex-wrap gap-3">
              <SkeletonBlock className="h-8 w-28 rounded-full" />
              <SkeletonBlock className="h-8 w-28 rounded-full" />
              <SkeletonBlock className="h-8 w-24 rounded-full" />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <SkeletonBlock className="h-40 w-full" />
                  <SkeletonBlock className="mt-4 h-5 w-24" />
                  <SkeletonBlock className="mt-3 h-6 w-36 max-w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
          <div className="rounded-3xl bg-white p-6">
            <SkeletonBlock className="h-[220px] w-full" />
            <div className="mt-6 space-y-3">
              <SkeletonBlock className="h-5 w-32" />
              <SkeletonBlock className="h-8 w-64 max-w-full" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-[90%]" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
            <SkeletonBlock className="h-5 w-28" />
            <SkeletonBlock className="mt-4 h-8 w-72 max-w-full" />
            <div className="mt-6 space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <SkeletonBlock className="h-6 w-44 max-w-full" />
                  <div className="mt-3 space-y-3">
                    <SkeletonBlock className="h-4 w-full" />
                    <SkeletonBlock className="h-4 w-[85%]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BentoPageSkeleton;
