'use client';
import Link from 'next/link';
import HoverUnderline from '@/components/ui/HoverUnderline';

export default function Sidenav() {
  return (
    <aside className="font-technology grid grid-rows-[1fr__auto] items-center bg-transparent px-4 text-xl text-white/50">
      <nav>
        <ul className="flex flex-col gap-4 border-b border-white/50 pb-6">
          <li>
            <HoverUnderline>
              <Link href={'#intro'}>intro</Link>
            </HoverUnderline>
          </li>
          <li>
            <HoverUnderline>
              <Link href={'#work'}>work</Link>
            </HoverUnderline>
          </li>
          <li>
            <HoverUnderline>
              <Link href={'#projects'}>projects</Link>
            </HoverUnderline>
          </li>
        </ul>
      </nav>

      <div>
        <ul className="flex flex-col gap-4 border-t border-white/50 py-6">
          <li>
            <HoverUnderline>
              <Link href={'https://github.com/harsh9o9'}>Github</Link>
            </HoverUnderline>
          </li>
          <li>
            <HoverUnderline>
              <Link href={'www.linkedin.com/in/harsh9o9'}>LinkedIn</Link>
            </HoverUnderline>
          </li>
        </ul>
      </div>
    </aside>
  );
}
