import { motion, useTransform } from 'motion/react';

const Hero = ({ scrollYProgress }) => {
  // First div (Hero section) transformations
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1.2, 0.7]); // Shrinks from 1 → 0
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Fades from 1 → 0

  // Second div (Intro section) transformations
  const introOpacity = useTransform(scrollYProgress, [0.19, 0.4], [0, 1]); // Fades in
  const introScale = useTransform(scrollYProgress, [0.19, 0.4], [3, 1.2]); // Shrinks from 2 → 1
  return (
    <>
      <div className="sticky top-0 grid h-full min-h-screen w-full grid-cols-2">
        <motion.div
          className="col-span-full row-span-full flex items-center justify-center"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <p className="font-technology inline-grid text-center text-9xl text-white/60">
            <span>Harsh</span> <span>Bhardwaj</span>
          </p>
        </motion.div>
        <motion.div
          className="col-span-full row-span-full flex items-center justify-center"
          style={{ opacity: introOpacity, scale: introScale }}
        >
          <p className="font-technology text-center text-9xl text-white/60">Intro</p>
        </motion.div>
      </div>
      <div className="relative min-h-screen w-full"></div>
      <div className="relative min-h-screen w-full"></div>
    </>
  );
};

export default Hero;
