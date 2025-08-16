import './globals.css';
import { AnimatePresence } from 'motion/react';

export const metadata = {
  title: 'Harsh Bhardwaj',
  description: 'Software Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Harsh Bhardwaj</title>
      </head>
      <body className="bg-white text-black">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
