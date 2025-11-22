import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! We\'ll keep you updated with our latest content.');
    setEmail('');
  };

  const socialLinks = [
    { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram', color: 'hover:text-pink-400' },
    { href: 'https://tiktok.com', icon: 'fab fa-tiktok', label: 'TikTok', color: 'hover:text-black' },
    { href: 'https://youtube.com', icon: 'fab fa-youtube', label: 'YouTube', color: 'hover:text-red-500' },
    { href: 'https://www.linkedin.com/in/wingcheungho', icon: 'fab fa-linkedin', label: 'LinkedIn', color: 'hover:text-blue-400' },
  ];

  const quickLinks = [
    { path: '/', label: 'Home', icon: 'fa-home' },
    { path: '/about', label: 'About', icon: 'fa-info-circle' },
    { path: '/events/upcoming', label: 'Events', icon: 'fa-calendar-alt' },
    { path: '/team', label: 'Team', icon: 'fa-users' },
    { path: '/gallery', label: 'Gallery', icon: 'fa-images' },
    { path: '/join', label: 'Join', icon: 'fa-user-plus' },
    { path: '/contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-t from-black via-[#0a000a] to-black py-20 px-6">
      {/* Animated Background Layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a000a] to-black" />
        {/* Pulsing gradient orbs */}
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-lavender/10 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-lavender-light/8 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(238,136,238,0.15),transparent_70%)] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(199,160,255,0.1),transparent_60%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          
          {/* Branding */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="OT Media Pass logo"
                  className="h-14 w-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm object-contain p-1 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(232,136,232,0.4)] group-hover:border-lavender/30 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </div>
              <div>
                <h3 className="text-lavender font-bold text-2xl group-hover:text-lavender-light transition-colors">
                  Ontario Tech Media Pass
                </h3>
                <p className="uppercase tracking-[0.4em] text-[10px] text-white/40">
                  Student Media Collective
                </p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Student-led media team capturing the stories that define Ontario Tech University — through photography,
              videography, and creative storytelling.
            </p>
            <Link
              to="/join"
              className="group inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full bg-lavender text-black font-bold text-sm tracking-wide hover:bg-lavender-light transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lavender focus:ring-offset-black shadow-[0_0_25px_rgba(232,136,232,0.35)] hover:shadow-[0_0_35px_rgba(232,136,232,0.5)]"
            >
              <i className="fas fa-user-plus" />
              <span>Join the Creative Crew</span>
              <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lavender font-bold mb-6 text-lg flex items-center gap-2">
              <i className="fas fa-link text-sm" />
              Quick Links
            </h3>
            <ul className="space-y-3 text-white/70 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-3 hover:text-lavender transition-all duration-300 hover:translate-x-1 group"
                  >
                    <i className={`fas ${link.icon} w-5 text-lavender/50 group-hover:text-lavender transition-colors`} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lavender font-bold mb-6 text-lg flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-sm" />
              Visit & Connect
            </h3>
            <ul className="space-y-5 text-sm text-white/70">
              <li className="flex items-start space-x-4 group">
                <span className="mt-1 text-lavender text-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span className="leading-relaxed group-hover:text-white transition-colors">
                  Ontario Tech University<br />
                  2000 Simcoe Street North<br />
                  Oshawa, ON L1G 0C5
                </span>
              </li>
              <li className="flex items-start space-x-4 group">
                <span className="mt-1 text-lavender text-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-envelope"></i>
                </span>
                <a
                  href="mailto:otmediapass@gmail.com"
                  className="hover:text-lavender transition-all duration-300 hover:underline"
                >
                  otmediapass@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-4 group">
                <span className="mt-1 text-lavender text-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-clock"></i>
                </span>
                <span className="leading-relaxed group-hover:text-white transition-colors">
                  Monday – Friday: 10:00 AM – 4:00 PM<br />
                  Weekends: By appointment
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-lavender font-bold mb-6 text-lg flex items-center gap-2">
              <i className="fas fa-bell text-sm" />
              Stay in the Loop
            </h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Follow our latest shoots, workshops, and campus spotlights. Drop your email to get monthly highlights right in your inbox.
            </p>
            <form
              className="w-full bg-white/5 backdrop-blur-xl border border-lavender/30 rounded-full p-1 flex mb-6 transition-all duration-300 focus-within:border-lavender focus-within:shadow-[0_0_20px_rgba(232,136,232,0.3)]"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                name="newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 bg-transparent text-white/80 text-sm px-4 py-2 focus:outline-none placeholder:text-white/40"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="group px-5 py-2 text-xs font-bold uppercase tracking-wide bg-lavender text-black rounded-full hover:bg-lavender-light transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(232,136,232,0.25)] hover:shadow-[0_0_25px_rgba(232,136,232,0.4)]"
              >
                <i className="fas fa-paper-plane mr-1 group-hover:translate-x-0.5 transition-transform" />
                Subscribe
              </button>
            </form>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 text-lg transition-all duration-300 hover:scale-110 hover:border-lavender/50 hover:bg-white/10 ${social.color} hover:shadow-[0_0_15px_rgba(232,136,232,0.3)]`}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:text-left max-w-7xl mx-auto">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Ontario Tech Media Pass. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <p>
                Crafted by Ontario Tech students. Spot a missed beat?{' '}
                <Link 
                  to="/contact" 
                  className="text-lavender hover:text-lavender-light transition-all duration-300 hover:underline"
                >
                  Let us know
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-lavender/40 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-lavender-light/30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-32 left-20 w-2 h-2 rounded-full bg-lavender/50 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-20 right-10 w-2 h-2 rounded-full bg-lavender-light/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
    </footer>
  );
};

export default Footer;
