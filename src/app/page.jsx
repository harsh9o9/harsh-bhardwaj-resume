'use client';
import Body from '@/components/Body';
import Header from '@/components/layout/Header';
import Sidenav from '@/components/layout/Sidenav';
import BackgroundVideo from '@/components/layout/BackgroundVideo';
import { useScroll } from 'motion/react';
import { useRef } from 'react';

export default function Home() {
  const mainContentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: mainContentRef,
  });

  return (
    <>
      <BackgroundVideo scrollYProgress={scrollYProgress} />
      <div className="absolute min-h-screen w-full">
        <Header />
        <div className="grid h-[100dvh] grid-cols-[auto__1fr]">
          <Sidenav />
          <Body mainContentRef={mainContentRef} scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </>
  );
}
