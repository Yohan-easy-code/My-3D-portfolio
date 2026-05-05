import Spline from "@splinetool/react-spline";

import { triggerSplineStartAnimations } from "../../utils/spline";

const ComputersCanvas = () => {
  const handleLoad = (spline) => {
    spline.setBackgroundColor("rgba(0,0,0,0)");
    triggerSplineStartAnimations(spline);
  };

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-transparent">
      <Spline
        scene="/avatar/public/scene.splinecode"
        wasmPath="/avatar/public/"
        renderOnDemand={false}
        onLoad={handleLoad}
        className="h-full w-full origin-center translate-y-20 scale-[0.68] bg-transparent sm:translate-y-0 sm:scale-100"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default ComputersCanvas;
