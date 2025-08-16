import Link from 'next/link';
import HoverUnderline from '@/components/ui/HoverUnderline';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-auto flex min-h-fit justify-between bg-transparent">
      <p className="font-bastliga ml-3 flex -rotate-[30deg] flex-col gap-1 p-2 text-3xl text-white">
        <span>Harsh</span> <span>Bhardwaj</span>
      </p>
      <div>
        <div className="font-technology bg-neutral-500/90 px-11 py-6 text-xl text-white italic">
          <HoverUnderline>
            <Link href={'#'}>HIRE ME</Link>
          </HoverUnderline>
        </div>
      </div>
    </header>
  );
}
