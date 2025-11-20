import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path.startsWith('/events')) {
      return location.pathname.startsWith('/events');
    }
    if (path.startsWith('/join')) {
      return location.pathname.startsWith('/join');
    }
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Team' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/news', label: 'News' },
    { path: '/join', label: 'Join' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkClasses = (path) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
      isActive(path)
        ? 'text-black bg-lavender shadow-[0_0_25px_rgba(232,136,232,0.35)]'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/85 backdrop-blur-xl border-b border-white/10" />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Ontario Tech Media Pass logo"
                className="h-12 w-auto object-contain rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_0_20px_rgba(0,0,0,0.35)]"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-wide uppercase">OT Media Pass</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 hidden sm:block">
                  Capture · Create · Connect
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className={linkClasses(link.path)}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/20"
              >
                Join Us
                <i className="fas fa-arrow-right text-[10px]" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lavender px-5 py-2 text-sm font-semibold text-black transition hover:bg-lavender-light shadow-[0_0_25px_rgba(232,136,232,0.35)]"
              >
                Book Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lavender text-xl focus:outline-none focus:ring-2 focus:ring-lavender/60"
              aria-label="Toggle navigation menu"
            >
              <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive(link.path)
                      ? 'bg-lavender text-black shadow-[0_0_20px_rgba(232,136,232,0.35)]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/20"
                >
                  Join the Collective
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-lavender px-4 py-2 text-sm font-semibold text-black transition hover:bg-lavender-light"
                >
                  Book a Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

