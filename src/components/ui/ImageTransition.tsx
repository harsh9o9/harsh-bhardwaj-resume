import { motion } from 'motion/react';

interface ImageTransitionProps {
  outlineSrc: string;
  fillSrc: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  duration?: number;
}

export default function ImageTransition({ 
  outlineSrc, 
  fillSrc, 
  alt, 
  className = "",
  width = 512,
  height = 512,
  duration = 0.5
}: ImageTransitionProps): React.JSX.Element {
  return (
    <motion.div
      className={`grid grid-cols-2 w-full h-full ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {},
        hover: {},
      }}
    >
      <motion.img
        src={outlineSrc}
        alt={`${alt}-outline`}
        width={width}
        height={height}
        className="col-span-full row-span-full block h-full w-full object-cover object-center"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0, transition: { duration, ease: 'easeInOut' } },
        }}
      />
      <motion.img
        src={fillSrc}
        alt={`${alt}-fill`}
        width={width}
        height={height}
        className="col-span-full row-span-full block h-full w-full object-cover object-center"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1, transition: { duration, ease: 'easeInOut' } },
        }}
      />
    </motion.div>
  );
}
