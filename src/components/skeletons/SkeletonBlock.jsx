import React from "react";

const SkeletonBlock = ({ className = "", roundedClassName = "rounded-2xl" }) => {
  return (
    <div
      aria-hidden="true"
      className={`skeleton-block ${roundedClassName} ${className}`}
    />
  );
};

export default SkeletonBlock;
