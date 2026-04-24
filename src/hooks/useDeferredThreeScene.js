import { useEffect, useState } from "react";

const getIsEligible = (minWidthPx) => {
  if (typeof window === "undefined") {
    return false;
  }

  return (
    window.matchMedia(`(min-width: ${minWidthPx}px)`).matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
};

const useDeferredThreeScene = ({ delayMs = 700, minWidthPx = 1024 } = {}) => {
  const [isEligible, setIsEligible] = useState(() => getIsEligible(minWidthPx));
  const [shouldRenderThree, setShouldRenderThree] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const viewportQuery = window.matchMedia(`(min-width: ${minWidthPx}px)`);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEligibility = () => {
      setIsEligible(viewportQuery.matches && !motionQuery.matches);
    };

    viewportQuery.addEventListener("change", updateEligibility);
    motionQuery.addEventListener("change", updateEligibility);

    return () => {
      viewportQuery.removeEventListener("change", updateEligibility);
      motionQuery.removeEventListener("change", updateEligibility);
    };
  }, [minWidthPx]);

  useEffect(() => {
    if (!isEligible || shouldRenderThree || typeof window === "undefined") {
      return undefined;
    }

    if ("requestIdleCallback" in window) {
      const idleCallbackId = window.requestIdleCallback(
        () => {
          setShouldRenderThree(true);
        },
        { timeout: delayMs }
      );

      return () => {
        window.cancelIdleCallback(idleCallbackId);
      };
    }

    const timeoutId = window.setTimeout(() => {
      setShouldRenderThree(true);
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [delayMs, isEligible, shouldRenderThree]);

  return { isEligible, shouldRenderThree };
};

export default useDeferredThreeScene;
