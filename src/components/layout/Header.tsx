import Link from 'next/link';
import HoverUnderline from '../ui/HoverUnderline';

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex min-h-fit justify-between bg-transparent px-2 sm:px-4">
      <p className="font-bastliga ml-1 sm:ml-3 flex -rotate-[30deg] flex-col gap-1 p-2 text-xl sm:text-2xl lg:text-3xl text-white">
        <span>Harsh</span> 
        <span>Bhardwaj</span>
      </p>
      <div className="hidden sm:block">
        <div className="font-technology bg-neutral-500/90 px-6 sm:px-8 lg:px-11 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl text-white italic">
          <HoverUnderline underlineColor="bg-neutral-500/90">
            <Link href={'#'}>RESUME</Link>
          </HoverUnderline>
        </div>
      </div>
    </header>
  );
}
