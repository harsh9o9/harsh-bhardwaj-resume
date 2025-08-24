'use client';
import { useRef, useCallback } from 'react';
import { motion, useMotionValueEvent, MotionValue } from 'motion/react';
import { throttle } from '../../utils/throttle';
import { mapPrecision } from '../../utils/animations';
import { PERFORMANCE } from '../../utils/constants';

interface BackgroundVideoProps {
  scrollYProgress: MotionValue<number>;
}

export default function BackgroundVideo({ scrollYProgress }: BackgroundVideoProps): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  const throttledVideoUpdate = useCallback(
    throttle((progress: number) => {
      const video = videoRef.current;
      if (video?.duration) {
        const rawCurrentTime = progress * video.duration;
        const currentTimeMapedPerFps = mapPrecision(rawCurrentTime);
        video.currentTime = currentTimeMapedPerFps;
      }
    }, PERFORMANCE.THROTTLE_60FPS),
    [],
  );

  useMotionValueEvent(scrollYProgress, 'change', throttledVideoUpdate);

  return (
    <div className="fixed inset-0 z-0 h-[100dvh]">
      <div className="absolute top-0 left-0 h-full w-full">
        <video
          ref={videoRef}
          src="/videos/original-timelapse.mp4"
          loop
          preload="metadata"
          poster="/images/timelapse-poster.avif"
          playsInline
          className="block h-full w-full cursor-auto rounded-none object-cover object-[50%_50%]"
        />
      </div>
      <DistortionOverlay />
    </div>
  );
}

function DistortionOverlay() {
  return (
    <div className="absolute top-0 left-0 h-full w-full">
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
