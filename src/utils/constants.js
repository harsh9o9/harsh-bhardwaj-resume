/**
 * Scroll section definitions for consistent timing across components
 */
export const SCROLL_SECTIONS = {
  HERO: {
    START: 0,
    END: 0.1,
    INTRO_START: 0.1,
    INTRO_END: 0.15,
  },
  ABOUT: {
    START: 0.19,
    END: 0.22,
  },
  WORK: {
    START: 0.39,
    END: 0.52, // Reduced from 0.6 to 0.52 for faster animation
    FADE_START: 0.45, // Adjusted to match new timing
    FADE_END: 0.52,
    PROJECT1_START: 0.42, // Earlier start for smoother transition
    PROJECT1_END: 0.62, // Extended duration for smoother animation
    PROJECT2_START: 0.55, // Adjusted timing for better flow
    PROJECT2_END: 0.75, // Extended duration for smoother animation
  },
  FUN: {
    FUN_START: 0.8,
    FUN_END: 0.86,
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
  SPEED_MULTIPLIER: 3.5, // Increased from 2 to 3.5 for faster movement
  DEFAULT_MARQUEE_WIDTH: 800,
};
