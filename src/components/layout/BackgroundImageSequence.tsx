'use client';
import { useState } from 'react';
import { motion, useMotionValueEvent, MotionValue } from 'motion/react';
import Image from 'next/image';

interface BackgroundImageSequenceProps {
  scrollYProgress: MotionValue<number>;
}

const TOTAL_FRAMES = 27;

export default function BackgroundImageSequence({
  scrollYProgress,
}: BackgroundImageSequenceProps): React.JSX.Element {
  const [currentFrame, setCurrentFrame] = useState(1);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameNumber = Math.round(latest * (TOTAL_FRAMES - 1)) + 1;
    const clampedFrame = Math.max(1, Math.min(TOTAL_FRAMES, frameNumber));

    if (clampedFrame !== currentFrame) {
      setCurrentFrame(clampedFrame);
    }
  });

  return (
    <div className="fixed inset-0 z-0 h-[100dvh]">
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        {Array.from({ length: TOTAL_FRAMES }, (_, i) => i + 1).map((frameNum) => {
          const isVisible = frameNum === currentFrame;

          return (
            <div
              key={frameNum}
              className="absolute inset-0"
              style={{
                opacity: isVisible ? 1 : 0,
                zIndex: isVisible ? 2 : 1,
              }}
            >
              <Image
                src={`/images/winter-timelapse-avif/${frameNum}.avif`}
                alt={`Timelapse frame ${frameNum}`}
                fill
                className="object-cover object-center sm:object-[50%_50%]"
                priority={frameNum === 1}
                loading={frameNum <= 3 ? 'eager' : 'lazy'}
                quality={85}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>
      <DistortionOverlay />
    </div>
  );
}

function DistortionOverlay() {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black/20">
      <div className="relative h-full w-full overflow-hidden">
        <motion.div
          className="absolute -inset-[200%] h-[400%] w-[400%] scale-125 bg-[url('/images/distortion.png')] opacity-15 will-change-transform"
          animate={{
            x: ['0%', '3%', '-10%', '-1%', '-15%', '7%', '0%'],
            y: ['0%', '35%', '-10%', '5%', '-25%', '25%', '0%'],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
