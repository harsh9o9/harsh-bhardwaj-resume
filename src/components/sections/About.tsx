'use client';
import { motion, useTransform, MotionValue } from 'motion/react';
import { useAboutAnimations } from '../../hooks/useScrollAnimations';
import ScrollSection from '../layout/ScrollSection';
import HoverUnderline from '../ui/HoverUnderline';
import type { ScrollAnimationProps } from '../../types/common';

const imageSources = [
  '/images/paper-crumple-1.avif',
  '/images/paper-crumple-2.avif',
  '/images/paper-crumple-3.avif',
  '/images/paper-crumple-4.avif',
  '/images/paper-crumple-5.avif',
  '/images/paper-crumple-6.avif',
  '/images/paper-crumple-7.avif',
  '/images/paper-crumple-8.avif',
];

/**
 * Custom hook to map scroll progress to an image's opacity within a section range.
 * The last image stays visible (opacity 1) beyond its segment.
 */
function useStepOpacityWithinRange(
  scrollYProgress: MotionValue<number>,
  index: number,
  total: number,
  start: number,
  end: number,
): MotionValue<number> {
  // Map global scrollYProgress to a normalized 0 → 1 for this section only
  const sectionProgress = useTransform(scrollYProgress, [start, end], [0, 1], { clamp: true });

  // Divide into equal steps for each image
  const step = 1 / total;
  const input = [
    index * step - 0.001,
    index * step,
    (index + 1) * step - 0.001,
    (index + 1) * step,
  ];

  // For the last image, keep the opacity 1 after its range ends
  const isLast = index === total - 1;
  const output = isLast ? [0, 1, 1, 1] : [0, 1, 1, 0];

  return useTransform(sectionProgress, input, output);
}

export default function About({ scrollYProgress }: ScrollAnimationProps): React.JSX.Element {
  const { start, end } = useAboutAnimations();

  // Create all opacity values for each image at the top level - call hooks outside of map
  const imageOpacity0 = useStepOpacityWithinRange(
    scrollYProgress,
    0,
    imageSources.length,
    start,
    end,
  );
  const imageOpacity1 = useStepOpacityWithinRange(
    scrollYProgress,
    1,
    imageSources.length,
    start,
    end,
  );
  const imageOpacity2 = useStepOpacityWithinRange(
    scrollYProgress,
    2,
    imageSources.length,
    start,
    end,
  );
  const imageOpacity3 = useStepOpacityWithinRange(
    scrollYProgress,
    3,
    imageSources.length,
    start,
    end,
  );
  const imageOpacity4 = useStepOpacityWithinRange(
    scrollYProgress,
    4,
    imageSources.length,
    start,
    end,
  );
  const imageOpacity5 = useStepOpacityWithinRange(
    scrollYProgress,
    5,
    imageSources.length,
    start,
    end,
  );
  const imageOpacity6 = useStepOpacityWithinRange(
    scrollYProgress,
    6,
    imageSources.length,
    start,
    end,
  );
  const imageOpacity7 = useStepOpacityWithinRange(
    scrollYProgress,
    7,
    imageSources.length,
    start,
    end,
  );

  const imageOpacities = [
    imageOpacity0,
    imageOpacity1,
    imageOpacity2,
    imageOpacity3,
    imageOpacity4,
    imageOpacity5,
    imageOpacity6,
    imageOpacity7,
  ];

  const lastIndex = imageSources.length - 1;
  const lastImageOpacity = imageOpacities[lastIndex];

  return (
    <ScrollSection className="overflow-hidden px-4 sm:px-8">
      {imageSources.map((src, index) => {
        const opacity = imageOpacities[index];

        return (
          <motion.img
            key={src}
            src={src}
            alt={`paper image ${index + 1}`}
            className="absolute top-1/2 left-1/2 w-auto max-w-[90%] -translate-x-1/2 -translate-y-1/2 scale-150 transform sm:max-w-full sm:scale-125 md:scale-100"
            style={{ opacity }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
        );
      })}

      {/*
          Show the overlay div only when the last image opacity is almost fully visible (greater than 0.95)
          This avoids flickering on partial visibility
        */}
      {lastImageOpacity && (
        <motion.div
          style={{ opacity: lastImageOpacity }}
          className="bg-opacity-90 font-plex-mono absolute top-1/2 left-1/2 flex w-[70%] max-w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg p-3 text-center tracking-tight sm:w-[80%] sm:p-4 md:w-[28rem] md:p-6"
        >
          <div className="border-dashed-custom mb-2 w-full space-y-2 pb-3 text-left sm:mb-4 sm:pb-4">
            <p className="xs:text-base text-sm leading-tight text-black sm:text-lg md:text-xl lg:text-2xl">
              I turn business goals and user needs into smooth, functional, and enjoyable software
              experiences. Welcome to a day in my life.
            </p>
          </div>
          <div className="flex w-full flex-col gap-0 space-y-2 text-left sm:gap-2">
            <p className="m-0 text-[10px] tracking-[3px] text-gray-700 sm:text-[11px] sm:tracking-[4px] md:text-[13px] md:tracking-[5.2px]">
              CONTACT
            </p>
            <p className="xs:text-base m-0 text-sm break-all text-black sm:text-xl sm:break-normal md:text-2xl">
              hbhardwaj454@gmail.com
            </p>
            <span>
              <HoverUnderline
                underlineColor={'bg-purple-700'}
                className="xs:text-base m-0 cursor-pointer bg-transparent text-sm text-purple-700 sm:text-xl md:text-2xl"
              >
                Book a call
              </HoverUnderline>
            </span>
          </div>
        </motion.div>
      )}
    </ScrollSection>
  );
}
