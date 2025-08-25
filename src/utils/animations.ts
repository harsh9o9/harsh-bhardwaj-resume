/**
 * Easing function type definition
 */
export type EasingFunction = (t: number) => number;

/**
 * Maps precision values for smooth video scrubbing
 * @param value - The input value
 * @returns The mapped precision value
 */
export function mapPrecision(value: number): number {
  const integerPart = Math.floor(value);
  const precisionPart = Math.round((value - integerPart) * 10); // Extracts precision (0-99)

  // Map precision range from [0, 99] to [0, 1]
  const newPrecision = Math.round((precisionPart * 1) / 9);

  return parseFloat(`${integerPart}.${newPrecision}`);
}

/**
 * Easing functions for smooth animations
 */
export const easing: Record<string, EasingFunction> = {
  // Linear easing
  linear: (t: number): number => t,

  // Ease in cubic
  easeInCubic: (t: number): number => t * t * t,

  // Ease out cubic
  easeOutCubic: (t: number): number => 1 - Math.pow(1 - t, 3),

  // Ease in out cubic
  easeInOutCubic: (t: number): number =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,

  // Ease in quad
  easeInQuad: (t: number): number => t * t,

  // Ease out quad
  easeOutQuad: (t: number): number => 1 - (1 - t) * (1 - t),

  // Ease in out quad
  easeInOutQuad: (t: number): number => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
} as const;
