import React from "react";

import SkeletonBlock from "./SkeletonBlock";

const CanvasSkeleton = ({ variant = "panel", className = "" }) => {
  if (variant === "orb") {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <SkeletonBlock
          roundedClassName="rounded-full"
          className="h-full w-full border border-white/10 bg-white/6"
        />
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <SkeletonBlock className="h-full w-full border-0 bg-white/4" />
        <SkeletonBlock
          roundedClassName="rounded-full"
          className="absolute bottom-14 left-1/2 h-56 w-56 -translate-x-1/2 bg-white/8 blur-3xl"
        />
        <SkeletonBlock className="absolute bottom-20 right-[10%] hidden h-44 w-36 rounded-[32px] border border-white/10 bg-white/8 md:block" />
      </div>
    );
  }

  if (variant === "background") {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <SkeletonBlock
          roundedClassName="rounded-none"
          className="h-full w-full border-0 bg-white/4"
        />
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full ${className}`}>
      <SkeletonBlock className="h-full w-full border border-white/10 bg-white/6" />
      <SkeletonBlock
        roundedClassName="rounded-full"
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-white/8"
      />
    </div>
  );
};

export default CanvasSkeleton;
