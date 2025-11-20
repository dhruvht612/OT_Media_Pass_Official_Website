import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';

const MEMBER_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd1sWPgptSVziyFVh5NpdgEZAMiPeiyWlabC2s0KHS328Z9Eg/viewform';

const Join = () => {
  const location = useLocation();
  const navLinks = [
    { to: '/join', label: 'Overview' },
    { to: '/join/positions', label: 'Open Positions' },
  ];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setStatus({ type: 'error', message: 'Please enter an email address.' });
      return;
    }

    setStatus({ type: 'success', message: 'Thanks for subscribing! We will be in touch soon.' });
    setEmail('');
  };

  return (
    <div className="pt-16 text-white bg-gradient-to-b from-black via-[#120012] to-black">
      <PageHero
        eyebrow="Be Part of the Story"
        title="Join OT Media Pass"
        description="From photographers and videographers to designers and producers, we’re building a collaborative media collective. Share your skills, learn new tools, and help bring campus stories to life."
        actions={[
          { label: 'Apply Now', to: '#member-form' },
          { label: 'Upcoming Workshops', to: '/events/overview', variant: 'secondary' }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-5">
          {['Creative Production', 'Event Coverage', 'Marketing & Ops', 'Post-Production'].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60"
            >
              {pill}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Navigation Tabs */}
      <section className="bg-white/5 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:space-x-4 justify-center sm:justify-start">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    isActive
                      ? 'text-lavender border-b-4 border-lavender'
                      : 'text-white/60 hover:text-lavender'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              to="/join/positions"
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-950/80 to-gray-950/60 border border-lavender/30 hover:border-lavender/60 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-lavender/20 flex items-center justify-center border border-lavender/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6 text-lavender">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#e8e] group-hover:text-lavender transition-colors">
                  View Open Positions
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Browse specific roles and positions we're currently hiring for.
              </p>
            </Link>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-950/80 to-gray-950/60 border border-lavender/30">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-lavender/20 flex items-center justify-center border border-lavender/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6 text-lavender">
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zM96 224H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zM64 416c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#e8e]">
                  General Application
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Submit a general application to be considered for any role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Signup */}
      <section id="member-form" className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-lavender mb-3">Become a Member</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Fill out our general member form to let us know your interests and availability. We&apos;ll follow up with details on
              how you can get involved with OT Media Pass.
            </p>
            <p className="text-white/50 text-sm mt-3">
              Or{' '}
              <Link to="/join/positions" className="text-lavender hover:text-lavender-light underline">
                browse specific open positions
              </Link>
              {' '}if you're interested in a particular role.
            </p>
          </div>
          <div className="rounded-3xl border border-lavender/30 bg-black/70 overflow-hidden shadow-[0_0_35px_rgba(232,136,232,0.25)]">
            <iframe
              src={MEMBER_FORM_URL}
              title="OT Media Pass General Member Form"
              className="w-full h-[900px] md:h-[760px]"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-white/50 mt-4 text-center">
            Having trouble with the embed?{' '}
            <a
              href={MEMBER_FORM_URL.replace('?embedded=true', '')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lavender hover:text-lavender-light"
            >
              Open the form in a new tab.
            </a>
          </p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-b from-[#1a001a] via-black to-[#1a001a] border-t border-lavender/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-lavender mb-4">Stay in the Loop</h2>
          <p className="text-white/70 mb-8">
            Subscribe to our newsletter for behind-the-scenes updates, event callouts, and media production tips from the team.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-3 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="your.email@example.com"
              className="w-full md:w-2/3 px-5 py-3 rounded-full bg-black border border-lavender/40 text-white focus:outline-none focus:ring-2 focus:ring-lavender"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 rounded-full bg-lavender text-black font-semibold hover:bg-lavender-light transition transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-sm ${status.type === 'success' ? 'text-lime-400' : 'text-red-400'}`}
            >
              {status.message}
            </p>
          )}
          <p className="mt-6 text-white/50 text-sm">
            We don&apos;t have an automated email service wired up yet, so a team member will follow up manually.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Join;
