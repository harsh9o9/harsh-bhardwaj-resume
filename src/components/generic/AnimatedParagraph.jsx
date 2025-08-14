import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function AnimatedParagraph({ children, className, margin = '-100px' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.p>
  );
}
