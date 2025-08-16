/**
 * Scroll section definitions for consistent timing across components
 */
export const SCROLL_SECTIONS = {
  HERO: {
    START: 0,
    END: 0.15,
    INTRO_START: 0.14,
    INTRO_END: 0.25,
  },
  ABOUT: {
    START: 0.3,
    END: 0.4,
  },
  WORK: {
    START: 0.5,
    END: 0.65,
    FADE_START: 0.7,
    FADE_END: 0.8,
    PROJECT1_START: 0.74,
    PROJECT1_END: 0.8,
    PROJECT2_START: 0.9,
    PROJECT2_END: 1,
  },
};

/**
 * Animation duration constants
 */
export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.5,
  SLOW: 0.8,
  VERY_SLOW: 1.2,
};

/**
 * Performance constants
 */
export const PERFORMANCE = {
  THROTTLE_60FPS: 16, // ~60fps
  THROTTLE_30FPS: 32, // ~30fps
  DEBOUNCE_DEFAULT: 300,
};

/**
 * Video constants
 */
export const VIDEO = {
  SPEED_MULTIPLIER: 2,
  DEFAULT_MARQUEE_WIDTH: 800,
};
