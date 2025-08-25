import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface UpwardAnimatedProps {
  children: React.ReactNode;
  className?: string;
  margin?: string;
}

export default function UpwardAnimated({
  children,
  className,
  margin = '-100px',
}: UpwardAnimatedProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: margin as any });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
