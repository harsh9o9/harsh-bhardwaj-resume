import { motion } from 'motion/react';
import Link from 'next/link';
import { useFunAnimations } from '../../hooks/useScrollAnimations';
import type { ScrollAnimationProps } from '../../types/common';
import ScrollSection from '../layout/ScrollSection';
import CopyEmailButton from '../ui/CopyEmailButton';
import ImageTransition from '../ui/ImageTransition';
import StaggeredText from '../ui/StaggeredText';
import UpwardAnimated from '../ui/UpwardAnimated';

export default function Fun({ scrollYProgress }: ScrollAnimationProps): React.JSX.Element {
  const { funOpacity } = useFunAnimations(scrollYProgress);

  return (
    <>
      <ScrollSection sticky className="overflow-hidden">
        <motion.div
          id="fun-word"
          className="font-technology flex h-screen w-screen items-center justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white/60 select-none px-4"
          style={{ opacity: funOpacity }}
        >
          <h2>Fun</h2>
        </motion.div>
      </ScrollSection>
      <div className="relative z-10 px-4 sm:px-8">
        <div
          id="netflix"
          className="flex h-screen w-full flex-col items-center justify-center gap-4"
        >
          <UpwardAnimated>
            <StaggeredText
              text="I like to unwind by watching something good on Netflix with my friend or family - if we ever actually get past searching for what to watch."
              className="font-plex-mono mt-8 sm:mt-12 lg:mt-16 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] text-lg sm:text-xl lg:text-2xl font-light text-white text-center"
              staggerDelay={0.05}
              initialDelay={0.2}
            />
          </UpwardAnimated>
          <UpwardAnimated className="mt-8 sm:mt-12 lg:mt-16 flex justify-center">
            <ImageTransition
              outlineSrc="/images/netflix-chill-outline.avif"
              fillSrc="/images/netflix-chill-fill.avif"
              alt="netflix chill"
              className="w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[677px]"
              width={1068}
              height={747}
            />
          </UpwardAnimated>
        </div>
        <div className="border-dashed-custom-white mx-auto my-24 sm:my-32 lg:my-48 w-full max-w-xs sm:max-w-md lg:max-w-3xl"></div>
        <div className="flex flex-col items-center justify-center gap-48 sm:gap-64 lg:gap-96 text-white">
          <UpwardAnimated>
            <StaggeredText
              text="Thanks for hanging with me today. I love meeting people and working on cool projects, so
          reach out! 👇"
              className="font-plex-mono mt-8 sm:mt-12 lg:mt-16 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] text-lg sm:text-xl lg:text-2xl font-light text-center"
              staggerDelay={0.05}
              initialDelay={0.2}
            />
          </UpwardAnimated>
          <div
            className="mb-48 sm:mb-64 lg:mb-96 flex flex-col items-center justify-center gap-4 px-4"
            id="copy-email-section"
          >
            <CopyEmailButton email="hbhardwaj454@gmail.com" className="text-center" />
            <p className="font-plex-mono font-light text-sm sm:text-base text-center break-all sm:break-normal">
              <Link href="mailto:hbhardwaj454@gmail.com">hbhardwaj454@gmail.com</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
