import { motion, useTransform } from 'motion/react';

export default function ParallaxImage({ 
  src, 
  alt, 
  scrollYProgress, 
  speed = 0.5,
  className = "" 
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      style={{ y }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
