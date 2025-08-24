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
          className="font-technology flex h-screen w-screen items-center justify-center text-9xl font-bold text-white/60 select-none"
          style={{ opacity: funOpacity }}
        >
          <h2>Fun</h2>
        </motion.div>
      </ScrollSection>
      <div className="relative z-10">
        <div
          id="netflix"
          className="flex h-screen w-screen flex-col items-center justify-center gap-4"
        >
          <UpwardAnimated>
            <StaggeredText
              text="I like to unwind by watching something good on Netflix with my friend or family - if we ever actually get past searching for what to watch."
              className="font-plex-mono mt-16 w-[380px] text-2xl font-light text-white"
              staggerDelay={0.05}
              initialDelay={0.2}
            />
          </UpwardAnimated>
          <UpwardAnimated className="mt-16 flex justify-center">
            <ImageTransition
              outlineSrc="/images/netflix-chill-outline.avif"
              fillSrc="/images/netflix-chill-fill.avif"
              alt="shelf"
              className="w-[677px]"
              width={1068}
              height={747}
            />
          </UpwardAnimated>
        </div>
        <div className="border-dashed-custom-white mx-auto my-48 w-3xl"></div>
        <div className="flex flex-col items-center justify-center gap-96 text-white">
          <UpwardAnimated>
            <StaggeredText
              text="Thanks for hanging with me today. I love meeting people and working on cool projects, so
          reach out! 👇"
              className="font-plex-mono mt-16 w-[380px] text-2xl font-light"
              staggerDelay={0.05}
              initialDelay={0.2}
            />
          </UpwardAnimated>
          <div
            className="mb-96 flex flex-col items-center justify-center gap-4"
            id="copy-email-section"
          >
            <CopyEmailButton email="hbhardwaj454@gmail.com" />
            <p className="font-plex-mono font-light">
              <Link href="mailto:hbhardwaj454@gmail.com">hbhardwaj454@gmail.com</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
