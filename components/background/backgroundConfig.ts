export const DEBUG_BACKGROUND = false;

const motionMultiplier = DEBUG_BACKGROUND ? 2 : 1;
const opacityMultiplier = DEBUG_BACKGROUND ? 2 : 1;

export const backgroundMotion = {
  gridDriftX: 15 * motionMultiplier,
  gridDriftY: 40 * motionMultiplier,
  gridParallaxY: 30 * motionMultiplier,
  schematicParallaxX: -45 * motionMultiplier,
  schematicParallaxY: 80 * motionMultiplier,
  schematicScale: DEBUG_BACKGROUND ? 1.1 : 1.05
};

export const backgroundOpacity = {
  grid: Math.min(0.72, 0.46 * opacityMultiplier),
  schematicQuiet: DEBUG_BACKGROUND ? "opacity-100" : "opacity-80",
  schematicActive: DEBUG_BACKGROUND ? "opacity-100" : "opacity-100",
  schematicReduced: DEBUG_BACKGROUND ? "opacity-70" : "opacity-35"
};
