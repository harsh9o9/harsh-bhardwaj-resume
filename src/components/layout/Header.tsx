import Link from 'next/link';
import HoverUnderline from '../ui/HoverUnderline';
import Image from 'next/image';

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex min-h-fit justify-between bg-transparent px-2 sm:px-4">
      <Image
        src="/images/harsh_bhardwaj.avif"
        alt="Harsh Bhardwaj"
        width={100}
        height={100}
        loading="lazy"
      />
      <div className="hidden sm:block">
        <div className="font-technology bg-neutral-500/90 px-6 py-4 text-lg text-white italic sm:px-8 sm:py-5 sm:text-xl lg:px-11 lg:py-6">
          <HoverUnderline underlineColor="bg-neutral-500/90">
            <Link href={'#'}>RESUME</Link>
          </HoverUnderline>
        </div>
      </div>
    </header>
  );
}
