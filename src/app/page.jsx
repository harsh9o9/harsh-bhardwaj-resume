'use client';
import Body from '@/components/Body';
import Header from '@/components/Header';
import Sidenav from '@/components/Sidenav';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useRef } from 'react';

function mapPrecision(value) {
  let integerPart = Math.floor(value);
  let precisionPart = Math.round((value - integerPart) * 10); // Extracts precision (0-99)

  // Map precision range from [0, 99] to [0, 1]
  let newPrecision = Math.round((precisionPart * 1) / 9);

  return parseFloat(`${integerPart}.${newPrecision}`);
}

export default function Home() {
  const videoRef = useRef(null);
  const mainContentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: mainContentRef,
  });
  let animationFrameId = null;

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const video = videoRef.current;

    if (video && video.duration) {
      // Cancel previous frame to avoid unnecessary updates
      // if (animationFrameId) cancelAnimationFrame(animationFrameId);

      // Commenting animation frame for smoothness
      animationFrameId = requestAnimationFrame(() => {
        // Step 1: Get the exact time to set based on total video size and current scroll position (0 - 1).
        const rawCurrentTime = parseFloat((progress * video.duration).toFixed(1));

        // Step 2: Get only the precision part and covert it to 0 - 1. i.e 1 fps in video
        const currentTimeMapedPerFps = mapPrecision(rawCurrentTime);

        // Step 3: Update the current time of video
        video.currentTime = currentTimeMapedPerFps;
      });
    }
  });

  return (
    <>
      <div className="fixed inset-0 z-0 h-[100dvh]">
        <div className="absolute top-0 left-0 h-full w-full">
          <video
            src="/videos/timelapse-bg.mp4"
            ref={videoRef}
            loop=""
            preload="metadata"
            poster="/images/timelapse-poster.avif"
            playsInline=""
            className="block h-full w-full cursor-auto rounded-none object-cover object-[50%_50%]"
          ></video>
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="relative h-full w-full overflow-hidden">
            <motion.div
              className="absolute -inset-[200%] h-[400%] w-[400%] scale-125 bg-[url('/images/distortion.png')] opacity-20 will-change-transform"
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
      </div>
      <div className="absolute min-h-screen w-full">
        <Header />
        <div className="grid h-[100dvh] grid-cols-[auto__1fr]">
          <Sidenav />
          <Body mainContentRef={mainContentRef} scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </>
  );
}
