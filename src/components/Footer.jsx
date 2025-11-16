import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-t from-black via-black/80 to-transparent py-16 px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,136,232,0.12),transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Branding */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="OT Media Pass logo"
              className="h-12 w-12 rounded-full border border-white/10 bg-white/5 object-contain"
            />
            <div>
              <h3 className="text-lavender font-bold text-2xl">Ontario Tech Media Pass</h3>
              <p className="uppercase tracking-[0.4em] text-[10px] text-white/40">Student Media Collective</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Student-led media team capturing the stories that define Ontario Tech University — through photography,
            videography, and creative storytelling.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full bg-lavender text-black font-semibold text-sm tracking-wide hover:bg-lavender-light transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lavender focus:ring-offset-black shadow-[0_0_25px_rgba(232,136,232,0.35)]"
          >
            Join the Creative Crew
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lavender font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-lavender transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-lavender transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/events/upcoming" className="hover:text-lavender transition">
                Events
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-lavender transition">
                Team
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-lavender transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/join" className="hover:text-lavender transition">
                Join
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-lavender transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lavender font-semibold mb-3">Visit & Connect</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <span className="mt-1 text-lavender">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>
                Ontario Tech University<br />
                2000 Simcoe Street North<br />
                Oshawa, ON L1G 0C5
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="mt-1 text-lavender">
                <i className="fas fa-envelope"></i>
              </span>
              <a
                href="mailto:otmediapass@gmail.com"
                className="hover:text-lavender transition"
              >
                otmediapass@gmail.com
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <span className="mt-1 text-lavender">
                <i className="fas fa-clock"></i>
              </span>
              <span>
                Monday – Friday: 10:00 AM – 4:00 PM<br />
                Weekends: By appointment
              </span>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="flex flex-col items-center md:items-start lg:items-end text-center md:text-left lg:text-right">
          <h3 className="text-lavender font-semibold mb-3">Stay in the Loop</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-xs">
            Follow our latest shoots, workshops, and campus spotlights. Drop your email to get monthly highlights right in your inbox.
          </p>
          <form
            className="w-full max-w-xs bg-white/5 border border-lavender/30 rounded-full p-1 flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              name="newsletter"
              placeholder="you@example.com"
              className="flex-1 bg-transparent text-gray-200 text-sm px-4 py-2 focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wide bg-lavender text-black rounded-full hover:bg-lavender-light transition"
            >
              Notify Me
            </button>
          </form>
          <div className="flex space-x-4 text-2xl mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lavender transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lavender transition"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lavender transition"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lavender transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:text-left max-w-7xl mx-auto px-4">
          <p>&copy; {currentYear} Ontario Tech Media Pass. All rights reserved.</p>
          <p className="text-xs text-gray-500">
            Crafted by Ontario Tech students. Spot a missed beat?{' '}
            <Link to="/contact" className="text-lavender hover:text-lavender-light transition">
              Let us know
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
