import About from './sections/About';
import Hero from './sections/Hero';
import Study from './sections/Study';
import Work from './sections/Work';
import Fun from './sections/Fun';
import type { ScrollWithRefProps } from '../types/common';
import Image from 'next/image';

export default function Body({
  mainContentRef,
  scrollYProgress,
}: ScrollWithRefProps): React.JSX.Element {
  return (
    <>
      <div ref={mainContentRef} className="relative overflow-y-auto scroll-smooth text-gray-800">
        <div>
          <Hero scrollYProgress={scrollYProgress} />
        </div>
        <About scrollYProgress={scrollYProgress} />
        <Study />
        <div>
          <Work scrollYProgress={scrollYProgress} />
        </div>
        <Fun scrollYProgress={scrollYProgress} />
      </div>
    </>
  );
}
