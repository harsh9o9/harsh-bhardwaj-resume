import { motion, useTransform } from 'motion/react';
import { useHeroAnimations } from '@/hooks/useScrollAnimations';
import ScrollSection from '@/components/layout/ScrollSection';

const Hero = ({ scrollYProgress }) => {
  const { heroScale, heroOpacity, introOpacity, introScale } = useHeroAnimations(scrollYProgress);

  return (
    <>
      <ScrollSection sticky className="grid h-full grid-cols-2 overflow-hidden">
        <motion.div
          className="col-span-full row-span-full flex items-center justify-center"
          style={{ scale: heroScale, opacity: heroOpacity }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.p
            className="font-technology inline-grid text-center text-9xl text-white/60"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Harsh
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Bhardwaj
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          className="col-span-full row-span-full flex items-center justify-center"
          id="intro"
          style={{ opacity: introOpacity, scale: introScale }}
        >
          <motion.p
            className="font-technology text-center text-9xl text-white/60"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Intro
          </motion.p>
        </motion.div>
      </ScrollSection>
      <div className="relative min-h-screen w-full" />
      <div className="relative min-h-screen w-full" />
    </>
  );
};

export default Hero;
