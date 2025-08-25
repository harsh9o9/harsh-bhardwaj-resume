import { motion } from 'motion/react';

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  initialDelay?: number;
}

export default function StaggeredText({ 
  text, 
  className = "",
  staggerDelay = 0.1,
  duration = 0.5,
  initialDelay = 0
}: StaggeredTextProps): React.JSX.Element {
  const words = text.split(' ');
  
  return (
    <motion.div className={className}>
      {words.map((word: string, index: number) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: initialDelay + (index * staggerDelay),
            duration,
            ease: "easeOut"
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
