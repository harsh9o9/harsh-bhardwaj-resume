import { useRef, useState, useEffect } from 'react';
import { motion, useTransform } from 'motion/react';
import ProjectCard from '@/components/ui/ProjectCard';
import { useWorkAnimations } from '@/hooks/useScrollAnimations';
import ScrollSection from '@/components/layout/ScrollSection';

export default function Work({ scrollYProgress }) {
  const marqueeRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const repeats = 40;

  useEffect(() => {
    const element = marqueeRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMarqueeWidth(entry.contentRect.width / 2);
      }
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, []);

  const { x, workOpacity, p1Scale, p1Opacity, p2Scale, p2Opacity } = useWorkAnimations(
    scrollYProgress,
    marqueeWidth,
  );

  return (
    <>
      <ScrollSection sticky className="grid h-full grid-cols-3 place-items-center overflow-hidden">
        <div className="mask-gradient col-span-full row-span-full">
          <motion.div
            ref={marqueeRef}
            className="font-technology flex w-[800px] text-9xl font-bold text-white select-none"
            style={{ x, opacity: workOpacity }}
          >
            {Array.from({ length: repeats * 2 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <span className="mx-4">WORK</span>
                <span>.</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative col-span-full row-span-full w-2xl"
          style={{ scale: p1Scale, opacity: p1Opacity }}
        >
          <ProjectCard
            projectLink="https://github.com/harsh9o9/chat-buddy-frontend"
            data={{
              window: {
                domain: 'chatbuddy.com',
                imgPath: '/images/chatbuddy-view.png',
                imgAlt: 'ChatBuddy website view',
              },
              logo: {
                title: 'chatbuddy',
                ringText: 'CHATBUDDY',
                position: 'BOTTOM-LEFT',
                colors: {
                  circle: 'bg-white/40',
                  ringText: '#cad5e2',
                  text: 'text-white',
                },
              },
              info: {
                pillTitle: 'Project desc.',
                title: 'ChatBuddy . 2024',
                description: 'A real time chatting website build using MERN stack and socket.io',
                position: 'TOP-RIGHT',
                colors: {
                  pillBg: 'bg-white',
                  infoBg: 'bg-gray-200',
                },
              },
            }}
          />
        </motion.div>
        <motion.div
          className="relative col-span-full row-span-full w-2xl"
          style={{ scale: p2Scale, opacity: p2Opacity }}
        >
          <ProjectCard
            projectLink="https://linkedin.com/mypreferences"
            data={{
              window: {
                domain: 'linkedin.com',
                imgPath: '/images/linkedin-settings.png',
                imgAlt: 'LinkedIn settings view',
              },
              logo: {
                title: 'LinkedIn',
                ringText: 'LINKEDIN',
                position: 'TOP-RIGHT',
                colors: {
                  circle: 'bg-blue-700/40',
                  ringText: '#ffffff',
                  text: 'text-white',
                },
              },
              info: {
                pillTitle: 'Project desc.',
                title: 'LinkedIn . 2023',
                description:
                  'Employment-oriented social networking platform, primarily used for professional networking and career development.',
                position: 'BOTTOM-LEFT',
                colors: {
                  pillBg: 'bg-blue-300',
                  infoBg: 'bg-blue-200',
                },
              },
            }}
          />
        </motion.div>
      </ScrollSection>
      <div className="relative min-h-screen w-full" />
      <div className="relative min-h-screen w-full" />
    </>
  );
}
