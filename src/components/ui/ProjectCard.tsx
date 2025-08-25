import { motion } from 'motion/react';
import CircularTextRing from '@/components/ui/CircularTextRing';
import PlusIcon from '@/components/icons/PlusIcon';
import UploadIcon from '@/components/icons/UploadIcon';
import Image from 'next/image';

type Position = 'BOTTOM-LEFT' | 'BOTTOM-RIGHT' | 'TOP-LEFT' | 'TOP-RIGHT';

interface ProjectCardData {
  window: {
    domain: string;
    imgPath: string;
    imgAlt: string;
  };
  logo: {
    title: string;
    ringText: string;
    position: Position;
    colors: {
      circle: string;
      ringText: string;
      text: string;
    };
  };
  info: {
    pillTitle: string;
    title: string;
    description: string;
    position: Position;
    colors?: {
      pillBg?: string;
      infoBg?: string;
    };
  };
  projectLink?: string;
}

interface ProjectCardProps {
  data: ProjectCardData;
}

// Sample data prop
// data = {
//   window: {
//     domain: 'chatbuddy.com',
//     imgPath: '/images/chatbuddy-view.png',
//     imgAlt: 'ChatBuddy website view',
//   },
//   logo: {
//     title: 'chatbuddy',
//     ringText: 'CHATBUDDY',
//     position: 'BOTTOM-LEFT',
//     colors: {
//       circle: 'bg-white/40',
//       ringText: '#cad5e2',
//       text: 'text-white',
//     },
//   },
//   info: {
//     pillTitle: 'Project desc.',
//     title: 'ChatBuddy . 2024',
//     description: 'A real time chatting website build using MERN stack and socket.io',
//     position: 'TOP-RIGHT',
//     background: 'bg-gray-200',
//   },
// }

const LOGO_POSITIONS_MAP: Record<Position, string> = Object.freeze({
  'BOTTOM-LEFT': '-left-1/12 -bottom-1/6',
  'BOTTOM-RIGHT': '-right-1/12 -bottom-1/6',
  'TOP-LEFT': 'top-1/6 -left-1/12',
  'TOP-RIGHT': '-top-1/6 -right-1/6',
});

const INFO_POSITIONS_MAP: Record<Position, string> = Object.freeze({
  'BOTTOM-LEFT': '-left-1/6 -bottom-1/6',
  'BOTTOM-RIGHT': '-right-1/12 -bottom-1/4',
  'TOP-LEFT': '-left-1/6 -top-1/4',
  'TOP-RIGHT': '-right-1/12 -top-1/4',
});

export default function ProjectCard({ data }: ProjectCardProps): React.JSX.Element {
  return (
    <motion.a
      className="relative block"
      href={data?.projectLink || '#'}
      target="_blank"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="overflow-hidden rounded-2xl"
        whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
        transition={{ duration: 0.3 }}
      >
        {/* Window controls */}
        <motion.div
          className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-10 bg-neutral-700 px-4 sm:px-6 lg:px-8 py-3 sm:py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex gap-1.5 sm:gap-2">
            <span className={`block h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-400`} />
            <span className={`block h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-400`} />
            <span className={`block h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-400`} />
          </div>
          <div className="w-full max-w-48 sm:max-w-72 lg:max-w-96 rounded-lg border-[1px] border-gray-200/20">
            <p className="py-1 text-center text-xs sm:text-sm text-gray-300">{data?.window?.domain || ''}</p>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-4 sm:gap-6 lg:gap-10">
              <UploadIcon className="h-4 sm:h-5 text-gray-400" />
              <PlusIcon className="h-4 sm:h-5 text-gray-400" />
            </div>
          </div>
        </motion.div>

        {/* Project image */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={data?.window?.imgPath || ''}
            alt={data?.window?.imgAlt || ''}
            className="h-full w-full object-cover"
            width={800}
            height={600}
          />
        </motion.div>
      </motion.div>

      {/* Info with enhanced animations */}
      <motion.div
        className={`absolute ${INFO_POSITIONS_MAP[data?.info?.position || 'BOTTOM-RIGHT']} flex flex-col gap-2 sm:gap-4`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.p
          className={`max-w-fit rounded-xl sm:rounded-2xl ${data?.info?.colors?.pillBg || 'bg-white'} px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold shadow-2xl`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {data?.info?.pillTitle || ''}
        </motion.p>
        <motion.div
          className={`font-plex-mono flex min-h-32 sm:min-h-40 lg:min-h-48 w-48 sm:w-56 lg:w-64 flex-col gap-6 sm:gap-8 lg:gap-11 ${data?.info?.colors?.infoBg || 'bg-green-200'} p-3 sm:p-4 tracking-tight`}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-semibold text-sm sm:text-base">{data?.info?.title || ''}</p>
          <p className="text-xs sm:text-sm lg:text-base">{data?.info?.description || ''}</p>
        </motion.div>
      </motion.div>

      {/* Logo with enhanced animations */}
      <motion.div
        className={`absolute ${LOGO_POSITIONS_MAP[data?.logo?.position || 'TOP-LEFT']}`}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`relative grid aspect-square h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44 grid-cols-2 place-items-center rounded-full ${data?.logo?.colors?.circle || 'bg-white/40'}`}
        >
          <div className="relative -top-2 sm:-top-3 -left-1 sm:-left-2 col-span-full row-span-full">
            <CircularTextRing
              text={data?.logo?.ringText || '*****'}
              repeat={3}
              radius={data?.logo?.position === 'TOP-LEFT' ? 50 : 80}
              height={data?.logo?.position === 'TOP-LEFT' ? 120 : 180}
              width={data?.logo?.position === 'TOP-LEFT' ? 120 : 180}
              fontSize={data?.logo?.position === 'TOP-LEFT' ? 10 : 15}
              color={data?.logo?.colors?.ringText || '#cad5e2'}
            />
          </div>
          <p
            className={`relative -top-1 sm:-top-2 -left-1/8 col-span-full row-span-full rotate-12 [transform:perspective(1200px)_translateZ(72px)] text-2xl sm:text-3xl lg:text-4xl font-bold ${data?.logo?.colors?.text || 'text-white'}`}
          >
            {data?.logo?.title || ''}
          </p>
        </div>
      </motion.div>
    </motion.a>
  );
}
