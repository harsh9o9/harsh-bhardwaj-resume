/**
 * Maps precision values for smooth video scrubbing
 * @param {number} value - The input value
 * @returns {number} - The mapped precision value
 */
export function mapPrecision(value) {
  let integerPart = Math.floor(value);
  let precisionPart = Math.round((value - integerPart) * 10); // Extracts precision (0-99)

  // Map precision range from [0, 99] to [0, 1]
  let newPrecision = Math.round((precisionPart * 1) / 9);

  return parseFloat(`${integerPart}.${newPrecision}`);
}

/**
 * Easing functions for smooth animations
 */
export const easing = {
  // Linear easing
  linear: (t) => t,

  // Ease in cubic
  easeInCubic: (t) => t * t * t,

  // Ease out cubic
  easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),

  // Ease in out cubic
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),

  // Ease in quad
  easeInQuad: (t) => t * t,

  // Ease out quad
  easeOutQuad: (t) => 1 - (1 - t) * (1 - t),

  // Ease in out quad
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
};

/**
 * Clamps a value between min and max
 * @param {number} value - The value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - The clamped value
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Maps a value from one range to another
 * @param {number} value - The value to map
 * @param {number} inMin - Input range minimum
 * @param {number} inMax - Input range maximum
 * @param {number} outMin - Output range minimum
 * @param {number} outMax - Output range maximum
 * @returns {number} - The mapped value
 */
export function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
