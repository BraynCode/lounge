"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const activeMenu = pathname.includes('restaurant') ? 'restaurant' : 'lounge';
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-500 ${
      isScrolled 
        ? 'bg-rixos-black/40 backdrop-blur-xl border-b border-white/5 py-4' 
        : 'bg-transparent py-8'
    }`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl font-serif tracking-widest text-white"
      >
        <Link href="/">RIXOS</Link>
      </motion.div>
      
      <div className="flex space-x-6">
        <Link 
          href="/lounge"
          className={`text-[13px] font-medium uppercase tracking-widest transition-all ${activeMenu === 'lounge' ? 'text-rixos-gold' : 'text-white/50 hover:text-white'}`}
        >
          Lounge
        </Link>
        <Link 
          href="/restaurant"
          className={`text-[13px] font-medium uppercase tracking-widest transition-all ${activeMenu === 'restaurant' ? 'text-rixos-gold' : 'text-white/50 hover:text-white'}`}
        >
          Restaurant
        </Link>
      </div>
    </nav>
  );
};
