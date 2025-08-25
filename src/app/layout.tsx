import './globals.css';
import { AnimatePresence } from 'motion/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Harsh Bhardwaj',
  description: 'Software Engineer',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>Harsh Bhardwaj</title>
      </head>
      <body className="bg-white text-black">
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
