import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
    { href: '#product', label: 'Side Project' },
  ];

  const techStack = ['React', 'TypeScript', 'Vite', 'Tailwind', 'OpenAI'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <a href="#hero" className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
              Shekhar Sharma
            </a>
            {/* Tech Stack Badges - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-gray-500 text-xs">•</span>
              <div className="flex items-center gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded text-xs font-medium text-purple-300 hover:bg-purple-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                <span className="px-2 py-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded text-xs font-medium text-purple-300 flex items-center gap-1 animate-pulse">
                  <Sparkles size={10} />
                  AI-Powered
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/sheksharma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-medium hover:scale-105"
            >
              Connect
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-hover transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-white glass-hover transition-all font-medium rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/sheksharma"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all font-medium text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}