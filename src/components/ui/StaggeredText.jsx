import { motion } from 'motion/react';

export default function StaggeredText({ 
  text, 
  className = "",
  staggerDelay = 0.1,
  duration = 0.5,
  initialDelay = 0
}) {
  const words = text.split(' ');
  
  return (
    <motion.div className={className}>
      {words.map((word, index) => (
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
