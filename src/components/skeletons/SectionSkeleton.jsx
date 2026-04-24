import React from "react";

import { styles } from "../../styles";
import SkeletonBlock from "./SkeletonBlock";

const SectionHeader = () => (
  <div className="space-y-4">
    <SkeletonBlock className="h-4 w-32" />
    <SkeletonBlock className="h-12 w-72 max-w-full" />
  </div>
);

const SectionSkeleton = ({ variant = "default" }) => {
  const containerClassName = `${styles.padding} max-w-7xl mx-auto relative z-0`;

  if (variant === "timeline") {
    return (
      <section className={containerClassName}>
        <SectionHeader />
        <div className="mt-20 space-y-6">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-black-100/40 p-6"
            >
              <SkeletonBlock className="h-6 w-56 max-w-full" />
              <SkeletonBlock className="mt-3 h-4 w-32" />
              <div className="mt-6 space-y-3">
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-[92%]" />
                <SkeletonBlock className="h-4 w-[84%]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "tech") {
    return (
      <section className={containerClassName}>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonBlock
              key={index}
              roundedClassName="rounded-full"
              className="h-28 w-28"
            />
          ))}
        </div>
      </section>
    );
  }

  if (variant === "works") {
    return (
      <section className={containerClassName}>
        <SectionHeader />
        <div className="mt-6 space-y-4">
          <SkeletonBlock className="h-4 w-full max-w-3xl" />
          <SkeletonBlock className="h-4 w-[90%] max-w-3xl" />
        </div>
        <div className="mt-20 grid gap-7 lg:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-tertiary p-5"
            >
              <SkeletonBlock className="h-[230px] w-full" />
              <SkeletonBlock className="mt-5 h-7 w-40" />
              <div className="mt-4 space-y-3">
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-[88%]" />
              </div>
              <div className="mt-5 flex gap-2">
                <SkeletonBlock className="h-6 w-16 rounded-full" />
                <SkeletonBlock className="h-6 w-16 rounded-full" />
                <SkeletonBlock className="h-6 w-20 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "approach") {
    return (
      <section className={containerClassName}>
        <div className="mt-12 rounded-[20px] bg-black-100">
          <div className={`rounded-2xl bg-tertiary ${styles.padding} min-h-[300px]`}>
            <SectionHeader />
          </div>
          <div className={`-mt-20 pb-14 ${styles.paddingX} grid gap-7 lg:grid-cols-3`}>
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-black-200 p-10"
              >
                <SkeletonBlock className="h-6 w-24 rounded-full" />
                <SkeletonBlock className="mt-6 h-7 w-44 max-w-full" />
                <div className="mt-4 space-y-3">
                  <SkeletonBlock className="h-4 w-full" />
                  <SkeletonBlock className="h-4 w-[93%]" />
                  <SkeletonBlock className="h-4 w-[78%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "contact") {
    return (
      <section className={containerClassName}>
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex-[0.75] rounded-2xl bg-black-100 p-8">
            <SectionHeader />
            <div className="mt-12 space-y-6">
              <SkeletonBlock className="h-14 w-full" />
              <SkeletonBlock className="h-14 w-full" />
              <SkeletonBlock className="h-44 w-full" />
              <SkeletonBlock className="h-4 w-72 max-w-full" />
              <SkeletonBlock className="h-12 w-32" />
            </div>
          </div>
          <div className="h-[350px] rounded-2xl bg-black-100 md:h-[550px] xl:flex-1 xl:h-auto">
            <SkeletonBlock className="h-full w-full" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={containerClassName}>
      <SectionHeader />
      <div className="mt-8 space-y-3">
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-[90%]" />
        <SkeletonBlock className="h-4 w-[80%]" />
      </div>
    </section>
  );
};

export default SectionSkeleton;
