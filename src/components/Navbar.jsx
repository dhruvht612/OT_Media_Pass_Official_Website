import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { path: '/', label: 'Home', icon: 'fa-home' },
    { path: '/about', label: 'About', icon: 'fa-info-circle' },
    { path: '/team', label: 'Team', icon: 'fa-users' },
    { path: '/events', label: 'Events', icon: 'fa-calendar-alt' },
    { path: '/gallery', label: 'Gallery', icon: 'fa-images' },
    { path: '/news', label: 'News', icon: 'fa-newspaper' },
    { path: '/join', label: 'Join', icon: 'fa-user-plus' },
    { path: '/contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  const linkClasses = (path) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
      isActive(path)
        ? 'text-black bg-lavender shadow-[0_0_25px_rgba(232,136,232,0.5)] scale-105'
        : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'
    }`;

  return (
    <nav className={`fixed top-0 z-50 w-full text-white transition-all duration-300 ${
      isScrolled ? 'shadow-2xl shadow-lavender/20' : ''
    }`}>
      {/* Background Layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute inset-0 backdrop-blur-xl border-b transition-all duration-300 ${
          isScrolled 
            ? 'bg-gradient-to-b from-black/98 via-[#0a000a]/95 to-black/98 border-white/20' 
            : 'bg-gradient-to-b from-black/90 via-[#0a000a]/80 to-black/90 border-white/10'
        }`} />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(238,136,238,0.15),transparent_60%)]" />
        {/* Pulsing gradient orb */}
        <div className={`absolute top-0 right-1/4 h-32 w-32 rounded-full bg-lavender/10 blur-2xl transition-opacity duration-300 ${
          isScrolled ? 'opacity-50' : 'opacity-100 animate-pulse'
        }`} style={{ animationDuration: '4s' }} />
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo/Brand */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Ontario Tech Media Pass logo"
                  className="h-12 w-auto object-contain rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_0_20px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(232,136,232,0.4)] group-hover:border-lavender/30"
                />
                <div className="absolute inset-0 rounded-full bg-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-wide uppercase group-hover:text-lavender transition-colors duration-300">
                  OT Media Pass
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 hidden sm:block">
                  Capture · Create · Connect
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={linkClasses(link.path)}
                  title={link.label}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <i className={`fas ${link.icon} text-xs`} />
                    <span>{link.label}</span>
                  </span>
                  {isActive(link.path) && (
                    <span className="absolute inset-0 rounded-full bg-lavender/30 blur-md animate-pulse" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
              >
                Join Us
                <i className="fas fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lavender px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-lavender-light hover:scale-105 shadow-[0_0_25px_rgba(232,136,232,0.35)] hover:shadow-[0_0_35px_rgba(232,136,232,0.5)]"
              >
                Book Us
                <i className="fas fa-calendar-check text-xs" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lavender text-xl transition-all duration-300 hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lavender/60"
              aria-label="Toggle navigation menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-white/10 bg-gradient-to-b from-black/98 via-[#0a000a]/95 to-black/98 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(238,136,238,0.1),transparent_60%)]" />
            <div className="relative z-10">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-full px-4 py-3 text-sm font-medium transition-all duration-300 transform ${
                    isActive(link.path)
                      ? 'bg-lavender text-black shadow-[0_0_20px_rgba(232,136,232,0.35)] scale-105'
                      : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center gap-3">
                    <i className={`fas ${link.icon} w-5 text-center`} />
                    <span>{link.label}</span>
                  </span>
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-user-plus" />
                    Join the Collective
                  </span>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-lavender px-4 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-lavender-light hover:scale-105 shadow-[0_0_20px_rgba(232,136,232,0.35)]"
                >
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-calendar-check" />
                    Book a Project
                  </span>
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

