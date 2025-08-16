import { useTransform } from 'motion/react';
import { SCROLL_SECTIONS, VIDEO, easing } from '@/utils';

export const useHeroAnimations = (scrollYProgress) => {
  const { START, END, INTRO_START, INTRO_END } = SCROLL_SECTIONS.HERO;
  
  const heroScale = useTransform(scrollYProgress, [START, END], [1.2, 0.7]);
  const heroOpacity = useTransform(scrollYProgress, [START, END], [1, 0]);
  const introOpacity = useTransform(scrollYProgress, [INTRO_START, INTRO_END], [0, 1]);
  const introScale = useTransform(scrollYProgress, [INTRO_START, INTRO_END], [3, 1.2]);

  return { heroScale, heroOpacity, introOpacity, introScale };
};

export const useWorkAnimations = (scrollYProgress, marqueeWidth) => {
  const { START, END, FADE_START, FADE_END, PROJECT1_START, PROJECT1_END, PROJECT2_START, PROJECT2_END } = SCROLL_SECTIONS.WORK;
  const SCROLL_DISTANCE = (marqueeWidth || VIDEO.DEFAULT_MARQUEE_WIDTH) * VIDEO.SPEED_MULTIPLIER;

  const linearProgress = useTransform(scrollYProgress, [START, END], [0, 1], { clamp: false });
  const x = useTransform(linearProgress, (t) => -SCROLL_DISTANCE * easing.easeInOutCubic(t));

  const workOpacity = useTransform(scrollYProgress, [FADE_START, FADE_END], [1, 0]);
  const p1Scale = useTransform(scrollYProgress, [PROJECT1_START, PROJECT1_END], [0.7, 1]);
  const p1Opacity = useTransform(scrollYProgress, [PROJECT1_START, PROJECT1_END, 0.9], [0, 1, 0]);
  const p2Scale = useTransform(scrollYProgress, [PROJECT2_START, PROJECT2_END], [0.7, 1]);
  const p2Opacity = useTransform(scrollYProgress, [0.85, PROJECT2_END], [0, 1]);

  return { x, workOpacity, p1Scale, p1Opacity, p2Scale, p2Opacity };
};

export const useAboutAnimations = (scrollYProgress) => {
  const { START, END } = SCROLL_SECTIONS.ABOUT;
  
  // This hook can be expanded to include more about section animations
  return { start: START, end: END };
};
