import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import AnimatedParagraph from './generic/AnimatedParagraph';

export default function Study({ scrollYProgress }) {
  // Reference for the <p> tag to trigger in-view animation
  const paragraphRef = useRef(null);
  const mealRef = useRef(null);
  const isInView = useInView(paragraphRef, { margin: '-100px' });
  const mealIsInView = useInView(mealRef, { margin: '-100px' });

  return (
    <div className="relative min-h-screen w-full">
      <div className="flex justify-center">
        <AnimatedParagraph className="font-plex-mono w-[380px] text-2xl font-light text-white">
          I like to start my day with my morning routine and some study or learning
        </AnimatedParagraph>
      </div>

      <div className="mt-16 flex justify-center">
        <motion.div
          className="grid w-[677px] grid-cols-2"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: {},
            hover: {},
          }}
        >
          <motion.img
            decoding="async"
            width={1068}
            height={747}
            sizes="677px"
            srcSet={`
              /images/shelf-outline-512.avif 512w,
              /images/shelf-outline-1024.avif 1024w,
              /images/shelf-outline-1068.webp 1068w
            `}
            src="/images/shelf-outline-1024.avif"
            alt="shelf-outline"
            className="col-span-full row-span-full block h-full w-full border-inherit object-cover object-center"
            variants={{
              rest: { opacity: 1 },
              hover: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
            }}
          />
          <motion.img
            decoding="async"
            width={1068}
            height={747}
            sizes="677px"
            srcSet={`
              /images/shelf-fill-512.avif 512w,
              /images/shelf-fill-1024.avif 1024w,
              /images/shelf-fill-1068.webp 1068w
            `}
            src="/images/shelf-fill-1024.avif"
            alt="shelf-fill"
            className="col-span-full row-span-full block h-full w-full border-inherit object-cover object-center"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
            }}
          />
        </motion.div>
      </div>
      <div className="mt-16 flex justify-center">
        <AnimatedParagraph className="font-plex-mono w-[380px] text-2xl font-light text-white">
          Then I have my breakfast which (unapologetically) is usually OatMeal or Muesli bowl - the
          only healthy recipe I've mastered.
        </AnimatedParagraph>
      </div>
      <div className="mt-14 flex justify-center">
        <motion.div
          className="grid w-[677px] grid-cols-2 place-items-center"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: {},
            hover: {},
          }}
        >
          <motion.img
            decoding="async"
            width={512}
            height={512}
            src="/images/oatmeal-outline.png"
            alt="oatmeal-outline"
            className="col-span-full row-span-full block h-[512px] w-[512px] border-inherit object-cover object-center brightness-200"
            variants={{
              rest: { opacity: 1 },
              hover: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
            }}
          />
          <motion.img
            decoding="async"
            width={512}
            height={512}
            src="/images/oatmeal-fill.png"
            alt="oatmeal-fill"
            className="col-span-full row-span-full block h-[512px] w-[570px] border-inherit object-cover object-center"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
