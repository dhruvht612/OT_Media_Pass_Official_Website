import { Link, useLocation } from 'react-router-dom';
import { upcomingEvents } from '../../data/events';
import EventCard from '../../components/EventCard';
import PageHero from '../../components/PageHero';

const Upcoming = () => {
  const location = useLocation();
  const navLinks = [
    { to: '/events', label: 'Overview' },
    { to: '/events/upcoming', label: 'Upcoming' },
    { to: '/events/planned', label: 'Future Plans' },
    { to: '/events/past', label: 'Past Events' },
  ];

  return (
    <div className="pt-16 text-white bg-gradient-to-b from-black via-[#120012] to-black">
      <PageHero
        eyebrow="Next on the Calendar"
        title="Upcoming Events"
        description="Secure your spot at our next shoot, workshop, or collaborative project. We’re gearing up to cover the biggest moments on campus and we want you there."
        actions={[
          { label: 'Submit an Event', to: '/contact' },
          { label: 'View Overview', to: '/events', variant: 'secondary' }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
          <span className="rounded-full border border-white/20 px-4 py-2">Open to Members</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Workshops</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Campus Events</span>
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

      {/* Events Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(238,136,238,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6">
                <p className="text-xl text-white/80">
                  No upcoming events at the moment. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,160,255,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white via-lavender-light to-white bg-clip-text text-transparent">
              WANT US TO COVER YOUR EVENT?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            We provide professional photography and videography services for student organizations
            and campus events. Reach out to discuss your needs!
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-lavender hover:bg-lavender-light text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-110 shadow-[0_0_25px_rgba(232,136,232,0.35)] hover:shadow-[0_0_35px_rgba(232,136,232,0.5)]"
          >
            <i className="fas fa-calendar-check" />
            <span>Contact Us</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Upcoming;
