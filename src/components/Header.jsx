import Link from 'next/link';
import HoverUnderline from './generic/HoverUnderline';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 flex min-h-fit justify-between bg-transparent">
      {/* <Image src="https://picsum.photos/100/100" width={100} height={100} alt="logo" /> */}
      <p className="font-bastliga ml-3 flex -rotate-[30deg] flex-col gap-1 p-2 text-3xl text-white">
        <span>Harsh</span> <span>Bhardwaj</span>
      </p>
      <div>
        <div className="font-technology flex items-center justify-center bg-neutral-500/90 px-11 py-6 text-xl text-white italic">
          <HoverUnderline>
            <Link href={'#'}>HIRE ME</Link>
          </HoverUnderline>
        </div>
      </div>
    </header>
  );
}
