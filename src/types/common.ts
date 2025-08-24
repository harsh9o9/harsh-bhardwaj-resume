import { MotionValue } from 'motion/react';
import { RefObject, ReactNode } from 'react';

/**
 * Common props for components that use scroll animations
 */
export interface ScrollAnimationProps {
  scrollYProgress: MotionValue<number>;
}

/**
 * Props for components that need a main content reference
 */
export interface MainContentRefProps {
  mainContentRef: RefObject<HTMLDivElement | null>;
}

/**
 * Combined props for components that need both scroll and ref
 */
export interface ScrollWithRefProps extends ScrollAnimationProps, MainContentRefProps {}

/**
 * Standard component props with children
 */
export interface ComponentWithChildren {
  children: ReactNode;
}

/**
 * Props for provider components
 */
export interface ProviderProps extends ComponentWithChildren {
  containerRef?: RefObject<HTMLDivElement | null>;
}

/**
 * Animation state interface
 */
export interface AnimationState {
  isAnimating: boolean;
  progress: number;
  direction: 'up' | 'down';
}

/**
 * Base scroll section configuration
 */
export interface BaseScrollSection {
  START: number;
  END: number;
}

/**
 * Hero section specific configuration
 */
export interface HeroScrollSection extends BaseScrollSection {
  INTRO_START: number;
  INTRO_END: number;
}

/**
 * Work section specific configuration
 */
export interface WorkScrollSection extends BaseScrollSection {
  FADE_START: number;
  FADE_END: number;
  PROJECT1_START: number;
  PROJECT1_END: number;
  PROJECT2_START: number;
  PROJECT2_END: number;
}

/**
 * Fun section specific configuration
 */
export interface FunScrollSection {
  FUN_START: number;
  FUN_END: number;
}

/**
 * Complete scroll sections configuration
 */
export interface ScrollSections {
  HERO: HeroScrollSection;
  ABOUT: BaseScrollSection;
  WORK: WorkScrollSection;
  FUN: FunScrollSection;
}

/**
 * Animation duration configuration
 */
export interface AnimationDurations {
  FAST: number;
  NORMAL: number;
  SLOW: number;
  VERY_SLOW: number;
}

/**
 * Performance configuration
 */
export interface PerformanceConfig {
  THROTTLE_60FPS: number;
}
