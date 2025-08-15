import { motion } from 'motion/react';
import UpwardAnimated from './generic/UpwardAnimated';

export default function Study() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="flex justify-center">
        <UpwardAnimated>
          <p className="font-plex-mono mt-16 w-[380px] text-2xl font-light text-white">
            I like to start my day with my morning routine and some study or learning
          </p>
        </UpwardAnimated>
      </div>

      <UpwardAnimated className="mt-16 flex justify-center">
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
      </UpwardAnimated>
      <div className="mt-16 flex justify-center">
        <UpwardAnimated>
          <p className="font-plex-mono w-[380px] text-2xl font-light text-white">
            Then I have my breakfast which (unapologetically) is usually OatMeal or Muesli bowl -
            the only healthy recipe I've mastered.
          </p>
        </UpwardAnimated>
      </div>
      <UpwardAnimated className="mt-14 flex justify-center">
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
      </UpwardAnimated>
    </div>
  );
}
