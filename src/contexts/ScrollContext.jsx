import { createContext, useContext } from 'react';
import { useScroll } from 'motion/react';

const ScrollContext = createContext();

export function ScrollProvider({ children, containerRef }) {
  const { scrollYProgress } = useScroll({ container: containerRef });

  return <ScrollContext.Provider value={{ scrollYProgress }}>{children}</ScrollContext.Provider>;
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within ScrollProvider');
  }
  return context;
}
