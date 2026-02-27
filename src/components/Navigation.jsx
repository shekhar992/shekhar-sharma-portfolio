import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Experience' },
    { href: '#product', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-14">
          <a href="#hero" className="text-lg font-semibold text-white hover:text-zinc-400 transition-smooth">
            Shekhar Sharma
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-smooth font-normal"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-800/50 transition-smooth"
          >
            {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-zinc-800/50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-zinc-300 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-smooth font-normal"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}