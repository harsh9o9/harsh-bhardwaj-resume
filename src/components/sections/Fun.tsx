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
          className="font-technology flex h-screen w-screen items-center justify-center px-4 text-4xl font-bold text-white/60 select-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
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
              className="font-plex-mono mt-8 w-full max-w-[320px] text-center text-lg font-light text-white sm:mt-12 sm:max-w-[380px] sm:text-xl lg:mt-16 lg:max-w-[450px] lg:text-2xl"
              staggerDelay={0.05}
              initialDelay={0.2}
            />
          </UpwardAnimated>
          <UpwardAnimated className="mt-8 flex justify-center sm:mt-12 lg:mt-16">
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
        <div className="border-dashed-custom-white mx-auto my-24 w-full max-w-xs sm:my-32 sm:max-w-md lg:my-48 lg:max-w-3xl"></div>
        <div className="flex flex-col items-center justify-center gap-48 text-white sm:gap-64 lg:gap-96">
          <UpwardAnimated>
            <StaggeredText
              text="Thanks for hanging with me today. I love meeting people and working on cool projects, so
          reach out! 👇"
              className="font-plex-mono mt-8 w-full max-w-[320px] text-center text-lg font-light sm:mt-12 sm:max-w-[380px] sm:text-xl lg:mt-16 lg:max-w-[450px] lg:text-2xl"
              staggerDelay={0.05}
              initialDelay={0.2}
            />
          </UpwardAnimated>
          <div
            className="mb-48 flex flex-col items-center justify-center gap-4 px-4 sm:mb-64 lg:mb-96"
            id="copy-email-section"
          >
            <CopyEmailButton email="hbhardwaj454@gmail.com" className="text-center" />
            <p className="font-plex-mono text-center text-sm font-light break-all sm:text-base sm:break-normal">
              <Link href="mailto:hbhardwaj454@gmail.com">hbhardwaj454@gmail.com</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
