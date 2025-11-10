import { Link, useLocation } from 'react-router-dom';
import { pastEvents } from '../../data/events';
import EventCard from '../../components/EventCard';
import PageHero from '../../components/PageHero';

const Past = () => {
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
        eyebrow="Highlights Archive"
        title="Past Events"
        description="Relive the productions that shaped our community—from orientation celebrations to signature showcases. Scroll through the stories we’ve already captured."
        actions={[
          { label: 'Book Your Event', to: '/contact' },
          { label: 'View Gallery', to: '/gallery', variant: 'secondary' }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
          <span className="rounded-full border border-white/20 px-4 py-2">Recaps</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Highlights</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Community Moments</span>
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-lavender mb-12 text-center">
            EVENT COVERAGE STATISTICS
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-950/60 border border-lavender/30 rounded-lg">
              <div className="text-4xl font-bold text-lavender mb-2">{pastEvents.length}+</div>
              <div className="text-white/70">Events Covered</div>
            </div>
            <div className="text-center p-6 bg-gray-950/60 border border-lavender/30 rounded-lg">
              <div className="text-4xl font-bold text-lavender mb-2">5000+</div>
              <div className="text-white/70">Photos Taken</div>
            </div>
            <div className="text-center p-6 bg-gray-950/60 border border-lavender/30 rounded-lg">
              <div className="text-4xl font-bold text-lavender mb-2">150+</div>
              <div className="text-white/70">Hours of Footage</div>
            </div>
            <div className="text-center p-6 bg-gray-950/60 border border-lavender/30 rounded-lg">
              <div className="text-4xl font-bold text-lavender mb-2">100K+</div>
              <div className="text-white/70">Social Reach</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Past;
