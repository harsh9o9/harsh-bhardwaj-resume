import { MotionValue, useTransform } from 'motion/react';
import { easing } from '../utils/animations';
import { SCROLL_SECTIONS, VIDEO } from '../utils/constants';

/**
 * Hook return types for animation values
 */
interface HeroAnimationValues {
  heroScale: MotionValue<number>;
  heroOpacity: MotionValue<number>;
  introOpacity: MotionValue<number>;
  introScale: MotionValue<number>;
}

interface WorkAnimationValues {
  x: MotionValue<number>;
  workOpacity: MotionValue<number>;
  p1Scale: MotionValue<number>;
  p1Opacity: MotionValue<number>;
  p2Scale: MotionValue<number>;
  p2Opacity: MotionValue<number>;
}

interface AboutAnimationValues {
  start: number;
  end: number;
}

interface FunAnimationValues {
  funOpacity: MotionValue<number>;
}

/**
 * Hook for hero section animations
 * @param scrollYProgress - Scroll progress motion value
 * @returns Hero animation values
 */
export const useHeroAnimations = (scrollYProgress: MotionValue<number>): HeroAnimationValues => {
  const { START, END, INTRO_START, INTRO_END } = SCROLL_SECTIONS.HERO;

  const heroScale = useTransform(scrollYProgress, [START, END], [1.2, 0.7]);
  const heroOpacity = useTransform(scrollYProgress, [START, END], [1, 0]);
  const introOpacity = useTransform(scrollYProgress, [INTRO_START, INTRO_END], [0, 1]);
  const introScale = useTransform(scrollYProgress, [INTRO_START, INTRO_END], [3, 1.2]);

  return { heroScale, heroOpacity, introOpacity, introScale };
};

/**
 * Hook for work section animations
 * @param scrollYProgress - Scroll progress motion value
 * @param marqueeWidth - Optional width for marquee calculations
 * @returns Work animation values
 */
export const useWorkAnimations = (
  scrollYProgress: MotionValue<number>,
  marqueeWidth?: number,
): WorkAnimationValues => {
  const {
    START,
    END,
    FADE_START,
    FADE_END,
    PROJECT1_START,
    PROJECT1_END,
    PROJECT2_START,
    PROJECT2_END,
  } = SCROLL_SECTIONS.WORK;
  const SCROLL_DISTANCE = (marqueeWidth || VIDEO.DEFAULT_MARQUEE_WIDTH) * VIDEO.SPEED_MULTIPLIER;

  const linearProgress = useTransform(scrollYProgress, [START, END], [0, 1], { clamp: true });
  // Using easeOutQuad for more responsive and snappy movement
  const x = useTransform(linearProgress, (t) => -SCROLL_DISTANCE * easing.easeOutQuad(t));

  const workOpacity = useTransform(scrollYProgress, [FADE_START, FADE_END], [1, 0]);

  // Project 1 animations with smoother curves
  const p1Scale = useTransform(scrollYProgress, [PROJECT1_START, PROJECT1_END], [0.8, 1], {
    clamp: true,
  });
  const p1Opacity = useTransform(
    scrollYProgress,
    [PROJECT1_START, PROJECT1_START + 0.05, PROJECT1_END - 0.05, PROJECT1_END],
    [0, 1, 1, 0],
    { clamp: true },
  );

  // Project 2 animations with smoother curves
  const p2Scale = useTransform(scrollYProgress, [PROJECT2_START, PROJECT2_END], [0.8, 1], {
    clamp: true,
  });
  const p2Opacity = useTransform(
    scrollYProgress,
    [PROJECT2_START, PROJECT2_START + 0.05, PROJECT2_END - 0.05, PROJECT2_END],
    [0, 1, 1, 0],
    { clamp: true },
  );

  return { x, workOpacity, p1Scale, p1Opacity, p2Scale, p2Opacity };
};

/**
 * Hook for about section animations
 * @returns About animation values
 */
export const useAboutAnimations = (): AboutAnimationValues => {
  const { START, END } = SCROLL_SECTIONS.ABOUT;

  // This hook can be expanded to include more about section animations
  return { start: START, end: END };
};

/**
 * Hook for fun section animations
 * @param scrollYProgress - Scroll progress motion value
 * @returns Fun animation values
 */
export const useFunAnimations = (scrollYProgress: MotionValue<number>): FunAnimationValues => {
  const { FUN_START, FUN_END } = SCROLL_SECTIONS.FUN;

  const funOpacity = useTransform(scrollYProgress, [FUN_START, FUN_END], [1, 0]);

  return { funOpacity };
};
