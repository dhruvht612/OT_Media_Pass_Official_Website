import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { upcomingEvents, pastEvents, plannedEvents } from '../../data/events';
import PageHero from '../../components/PageHero';

const buildEvent = (event, status) => {
  const base = {
    id: `${status}-${event.id}`,
    title: event.title,
    description: event.description,
    image: event.image,
    category: event.category || 'other',
    status,
  };

  if (status === 'planned') {
    return {
      ...base,
      dateLabel: event.targetMonth,
      time: event.focus,
      location: event.location,
      involvement: event.needs,
    };
  }

  return {
    ...base,
    dateLabel: event.date,
    time: event.time,
    location: event.location,
    recap: event.recap,
  };
};

const Overview = () => {
  const location = useLocation();
  const combinedEvents = useMemo(
    () => [
      ...upcomingEvents.map((event) => buildEvent(event, 'upcoming')),
      ...plannedEvents.map((event) => buildEvent(event, 'planned')),
      ...pastEvents.map((event) => buildEvent(event, 'past')),
    ],
    []
  );

  const categories = useMemo(() => {
    const unique = Array.from(new Set(combinedEvents.map((event) => event.category)));
    return ['all', ...unique];
  }, [combinedEvents]);

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'all') {
      return combinedEvents;
    }
    return combinedEvents.filter((event) => event.category === activeCategory);
  }, [activeCategory, combinedEvents]);

  return (
    <div className="pt-16 text-white bg-gradient-to-b from-black via-[#120012] to-black">
      <PageHero
        eyebrow="Events & Highlights"
        title="Capturing Every Moment on Campus"
        description="From concerts to hackathons, we document the stories that unite the Ontario Tech community. Explore upcoming opportunities, future plans, and the highlights we have already delivered."
        actions={[
          { label: 'Explore Events', href: '#events-gallery' },
          { label: 'Request Coverage', to: '/contact', variant: 'secondary' }
        ]}
        className="pb-32"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
          <span className="rounded-full border border-white/20 px-4 py-2">Workshops</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Performances</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Sporting Events</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Community Impact</span>
        </div>
      </PageHero>

      {/* Navigation Tabs */}
      <section className="bg-white/5 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:space-x-4 justify-center sm:justify-start">
            {[
              { to: '/events', label: 'Overview' },
              { to: '/events/upcoming', label: 'Upcoming' },
              { to: '/events/planned', label: 'Future Plans' },
              { to: '/events/past', label: 'Past Events' },
            ].map((link) => {
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

      {/* Filter Section */}
      <section className="text-center py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-lavender to-white bg-clip-text text-transparent">
            Browse Our Highlights
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const label = category === 'all' ? 'All' : category.replace(/\b\w/g, (char) => char.toUpperCase());
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full border border-lavender/40 font-medium transition ${
                    isActive
                      ? 'bg-lavender text-black'
                      : 'text-white hover:bg-lavender hover:text-black'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section id="events-gallery" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <article
              key={event.id}
              className="event-card bg-black border border-lavender/30 rounded-2xl shadow-[0_0_20px_rgba(232,136,232,0.1)] hover:shadow-[0_0_35px_rgba(232,136,232,0.3)] transition transform hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover border-b border-lavender/30"
                />
                <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider bg-black/70 px-3 py-1 rounded-full border border-lavender/50">
                  {event.status}
                </span>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-lavender flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-lavender"></span>
                  {event.title}
                </h3>
                <p className="text-white/60 text-sm uppercase tracking-wide mb-4">{event.category}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{event.description}</p>

                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                  {event.dateLabel && (
                    <li>
                      <span className="text-white font-semibold">Date:</span> {event.dateLabel}
                    </li>
                  )}
                  {event.time && (
                    <li>
                      <span className="text-white font-semibold">Time:</span> {event.time}
                    </li>
                  )}
                  {event.location && (
                    <li>
                      <span className="text-white font-semibold">Location:</span> {event.location}
                    </li>
                  )}
                </ul>

                {event.recap && (
                  <div className="mt-auto bg-black/40 border border-lavender/20 rounded-lg p-4">
                    <p className="text-sm text-white/70 leading-relaxed">
                      <span className="font-semibold text-lavender">Recap:</span> {event.recap}
                    </p>
                  </div>
                )}

                {event.involvement && (
                  <div className="mt-auto bg-black/40 border border-lavender/20 rounded-lg p-4">
                    <p className="text-sm text-white/70 leading-relaxed">
                      <span className="font-semibold text-lavender">How to Get Involved:</span> {event.involvement}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-[#1a001a] to-[#330033] border-t border-lavender/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-lavender mb-6">Have An Idea We Should Cover?</h2>
          <p className="text-lg text-white/80 mb-8">
            We love partnering early with student groups and campus departments. Share your concept and we&apos;ll help turn
            it into a fully produced experience.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-lavender hover:bg-lavender-light text-black font-semibold py-3 px-8 rounded-full transition transform hover:scale-105"
          >
            Pitch Your Event
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Overview;

