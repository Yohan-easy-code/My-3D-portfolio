export const triggerSplineAnimations = (spline, eventNames = ["start"]) => {
  const run = () => {
    spline.play();
    spline.setGlobalEvents(true);

    const events = spline.getSplineEvents?.() ?? {};
    const targetsByEvent = eventNames.map((eventName) => {
      const targets = new Set([
        ...Object.keys(events[eventName] ?? {}),
        ...Object.keys(
          events[eventName.charAt(0).toUpperCase() + eventName.slice(1)] ?? {}
        ),
      ]);

      if (targets.size === 0) {
        spline.getAllObjects?.().forEach((object) => {
          if (object.uuid) targets.add(object.uuid);
        });
      }

      return { eventName, targets };
    });

    targetsByEvent.forEach(({ eventName, targets }) => {
      targets.forEach((target) => {
        try {
          spline.emitEvent(eventName, target);
        } catch {
          // Objects without that event are ignored by Spline.
        }
      });
    });

    spline.requestRender();
  };

  requestAnimationFrame(run);
  window.setTimeout(run, 300);
};

export const triggerSplineStartAnimations = (spline) => {
  triggerSplineAnimations(spline, ["start"]);
};
