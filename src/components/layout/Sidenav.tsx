'use client';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import HoverUnderline from '@/components/ui/HoverUnderline';
import HamburgerIcon from '@/components/icons/HamburgerIcon';
import { useResponsiveMenu } from '@/hooks/useResponsiveMenu';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
}

function NavLink({ href, children, external = false, onClick }: NavLinkProps): React.JSX.Element {
  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <HoverUnderline underlineColor="bg-white/50">
      <Link href={href} onClick={onClick} {...linkProps}>
        {children}
      </Link>
    </HoverUnderline>
  );
}

export default function Sidenav(): React.JSX.Element {
  const { isOpen, isMobile, toggleMenu, closeMenu } = useResponsiveMenu();
  const menuRef = useRef<HTMLElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !target.closest('button[aria-controls="mobile-navigation"]')
      ) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeMenu]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isOpen || !isMobile) return;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen, isMobile]);

  const NavContent = ({ className = '' }: { className?: string }) => (
    <nav
      className={`font-technology flex h-full flex-col justify-center text-xl text-white/50 ${className}`}
    >
      <ul className="flex flex-col gap-4 border-b border-white/50 pb-6" role="list">
        <li role="listitem">
          <NavLink href="#intro" onClick={closeMenu}>
            intro
          </NavLink>
        </li>
        <li role="listitem">
          <NavLink href="#work" onClick={closeMenu}>
            work
          </NavLink>
        </li>
        <li role="listitem">
          <NavLink href="#copy-email-section" onClick={closeMenu}>
            Contact Me
          </NavLink>
        </li>
      </ul>

      <ul className="flex flex-col gap-4 border-t border-white/50 pt-6" role="list">
        <li role="listitem">
          <NavLink href="https://github.com/harsh9o9" external onClick={closeMenu}>
            Github
          </NavLink>
        </li>
        <li role="listitem">
          <NavLink href="https://www.linkedin.com/in/harsh9o9" external onClick={closeMenu}>
            LinkedIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile Hamburger Button */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-50 md:hidden">
          <HamburgerIcon
            isOpen={isOpen}
            onClick={toggleMenu}
            className="rounded-full bg-black/20 p-1 backdrop-blur-sm transition-colors hover:bg-black/30 focus:ring-2 focus:ring-white/50 focus:outline-none"
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className="bg-transparent px-4" role="navigation" aria-label="Main navigation">
          <NavContent />
        </aside>
      )}

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Slide-out Menu */}
            <motion.aside
              ref={menuRef}
              id="mobile-navigation"
              className="fixed top-0 left-0 z-50 h-full w-64 bg-black/90 px-6 py-20 shadow-2xl backdrop-blur-md md:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              role="dialog"
              aria-label="Mobile navigation"
              aria-modal="true"
            >
              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
