import { motion } from 'motion/react';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function HamburgerIcon({ isOpen, onClick, className = "" }: HamburgerIconProps): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`relative z-50 flex h-12 w-12 flex-col justify-center items-center touch-manipulation ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      type="button"
    >
      <motion.span
        className="block h-0.5 w-6 bg-white origin-center"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -3,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        className="block h-0.5 w-6 bg-white origin-center"
        animate={{
          opacity: isOpen ? 0 : 1,
          scale: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        className="block h-0.5 w-6 bg-white origin-center"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 3,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </button>
  );
}
