import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT ME', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-brand-blue/90 backdrop-blur-sm text-white shadow-md">
      <div className="text-2xl font-black tracking-tighter">
        Igal<span className="text-brand-yellow">.Emona</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-brand-yellow transition-colors">
            {item.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <a
          href="#contact"
          className="bg-brand-yellow text-brand-blue font-bold px-6 py-2 rounded-full hover:bg-white hover:text-brand-blue transition-all transform hover:scale-105 shadow-lg"
        >
          SAY HELLO ↗
        </a>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-blue border-t border-white/10 flex flex-col items-center py-8 space-y-6 md:hidden shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-bold hover:text-brand-yellow"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-yellow text-brand-blue font-bold px-8 py-3 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            SAY HELLO ↗
          </a>
        </div>
      )}
    </nav>
  );
};