import { easing } from '@/utils/animations';
import { SCROLL_SECTIONS, VIDEO } from '@/utils/constants';
import { useTransform } from 'motion/react';

export const useHeroAnimations = (scrollYProgress) => {
  const { START, END, INTRO_START, INTRO_END } = SCROLL_SECTIONS.HERO;

  const heroScale = useTransform(scrollYProgress, [START, END], [1.2, 0.7]);
  const heroOpacity = useTransform(scrollYProgress, [START, END], [1, 0]);
  const introOpacity = useTransform(scrollYProgress, [INTRO_START, INTRO_END], [0, 1]);
  const introScale = useTransform(scrollYProgress, [INTRO_START, INTRO_END], [3, 1.2]);

  return { heroScale, heroOpacity, introOpacity, introScale };
};

export const useWorkAnimations = (scrollYProgress, marqueeWidth) => {
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

export const useAboutAnimations = () => {
  const { START, END } = SCROLL_SECTIONS.ABOUT;

  // This hook can be expanded to include more about section animations
  return { start: START, end: END };
};

export const useFunAnimations = (scrollYProgress) => {
  const { FUN_START, FUN_END } = SCROLL_SECTIONS.FUN;

  const funOpacity = useTransform(scrollYProgress, [FUN_START, FUN_END], [1, 0]);
  // const introOpacity = useTransform(scrollYProgress, [INTRO_START, INTRO_END], [0, 1]);
  // const introScale = useTransform(scrollYProgress, [INTRO_START, INTRO_END], [3, 1.2]);

  return { funOpacity };
};
