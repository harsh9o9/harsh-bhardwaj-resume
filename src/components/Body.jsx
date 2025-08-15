import About from './About';
import Hero from './Hero';
import Study from './Study';
import Work from './Work';

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
    </div>
  );
}
