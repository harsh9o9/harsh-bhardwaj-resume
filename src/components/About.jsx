import { motion, useTransform } from 'motion/react';

const About = ({ scrollYProgress }) => {
  // First div (Hero section) transformations
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1.2, 0.7]); // Shrinks from 1 → 0
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Fades from 1 → 0

  // Second div (Intro section) transformations
  const introOpacity = useTransform(scrollYProgress, [0.19, 0.4], [0, 1]); // Fades in
  const introScale = useTransform(scrollYProgress, [0.19, 0.4], [3, 1.2]); // Shrinks from 2 → 1
  return (
    <div className="relative h-full min-h-screen w-full">
      <div className="relative min-h-screen w-full"></div>
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        src="/images/paper-crumple-1.avif"
        alt="paper image 1"
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        src="/images/paper-crumple-2.avif"
        alt="paper image 2"
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        src="/images/paper-crumple-3.avif"
        alt="paper image 3"
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        src="/images/paper-crumple-4.avif"
        alt="paper image 4"
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        src="/images/paper-crumple-5.avif"
        alt="paper image 5"
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        src="/images/paper-crumple-6.avif"
        alt="paper image 6"
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        src="/images/paper-crumple-7.avif"
        alt="paper image 7"
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        src="/images/paper-crumple-8.avif"
        alt="paper image 8"
      />
    </div>
  );
};

export default About;
