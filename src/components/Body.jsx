import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Study from '@/components/sections/Study';
import Work from '@/components/sections/Work';
import Fun from './sections/Fun';

export default function Body({ mainContentRef, scrollYProgress }) {
  return (
    <div ref={mainContentRef} className="relative overflow-y-auto text-gray-800">
      <div>
        <Hero scrollYProgress={scrollYProgress} />
      </div>
      <About scrollYProgress={scrollYProgress} />
      <Study />
      <div>
        <Work scrollYProgress={scrollYProgress} />
      </div>
      {/* <div> */}
      <Fun scrollYProgress={scrollYProgress} />
      {/* </div> */}
    </div>
  );
}
