import React from 'react';
import { Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 md:px-24 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-serif text-rixos-gold">RIXOS</h2>
          <p className="text-sm opacity-40 leading-relaxed max-w-xs">
            Where sophistication meets the night. Join us for an unforgettable experience of luxury and taste.
          </p>
          <div className="flex space-x-6">
            <Instagram size={20} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
            <Phone size={20} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-[12px] font-semibold uppercase tracking-widest text-rixos-gold">Hours</h4>
          <ul className="space-y-3 text-sm opacity-40">
            <li className="flex justify-between"><span>Opening Daily</span> <span>10:00 AM</span></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[12px] font-semibold uppercase tracking-widest text-rixos-gold">Location</h4>
          <p className="text-sm opacity-40 leading-relaxed">
            Opp OMOOKE Hotel, Bravo, <br />
            Akala Exp Road, <br />
            Ibadan
          </p>
          <button className="text-[10px] uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-rixos-black transition-all">
            Get Directions
          </button>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-20">
          &copy; {new Date().getFullYear()} RIXOS Club & Lounge. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
