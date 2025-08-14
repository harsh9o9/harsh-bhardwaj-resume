'use client';
import { motion, useTransform } from 'motion/react';

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
function useStepOpacityWithinRange(scrollYProgress, index, total, start, end) {
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

export default function About({ scrollYProgress }) {
  /**
   * Define the global scroll progress range where the About section is active.
   */
  const start = 0.45;
  const end = 0.55;

  // Determine opacity for the last image separately to control text appearance
  const lastIndex = imageSources.length - 1;
  const lastImageOpacity = useStepOpacityWithinRange(
    scrollYProgress,
    lastIndex,
    imageSources.length,
    start,
    end,
  );

  return (
    <div className="relative h-full min-h-screen w-full">
      {imageSources.map((src, index) => {
        const opacity = useStepOpacityWithinRange(
          scrollYProgress,
          index,
          imageSources.length,
          start,
          end,
        );

        return (
          <motion.img
            key={src}
            src={src}
            alt={`paper image ${index + 1}`}
            className="absolute top-1/2 left-1/2 w-auto max-w-full -translate-x-1/2 -translate-y-1/2 transform"
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
          className="bg-opacity-90 font-plex-mono absolute top-1/2 left-1/2 flex w-[28rem] max-w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg p-6 text-center tracking-tight"
        >
          <div className="border-dashed-custom mb-4 w-full space-y-2 pb-4 text-left">
            <p className="text-2xl text-black">
              I convert business visions and customer needs into enjoyable experiences. Welcome to a
              day in my life.
            </p>
          </div>
          <div className="w-full space-y-2 text-left">
            <p className="text-[13px] tracking-[5.2px] text-gray-700">CONTACT</p>
            <p className="text-2xl text-black">hbhardwaj454@gmail.com</p>
            <button className="cursor-pointer bg-transparent text-2xl text-purple-700">
              Book a call
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
