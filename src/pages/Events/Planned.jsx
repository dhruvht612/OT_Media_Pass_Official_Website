import { Link, useLocation } from 'react-router-dom';
import { plannedEvents } from '../../data/events';
import PageHero from '../../components/PageHero';

const Planned = () => {
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
        eyebrow="Future Plans"
        title="What We’re Planning Next"
        description="Here’s a sneak peek at the shoots, campaigns, and collaborations on our radar. Lend your skills early or partner with us to shape the production."
        actions={[
          { label: 'Share Your Idea', to: '/contact' },
          { label: 'Upcoming Events', to: '/events/upcoming', variant: 'secondary' }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
          <span className="rounded-full border border-white/20 px-4 py-2">Pre-Production</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Creative Direction</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Collaboration Ready</span>
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

      {/* Planned Initiatives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {plannedEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plannedEvents.map((plan) => (
                <div
                  key={plan.id}
                  className="flex flex-col h-full bg-gray-950/60 border border-lavender/30 rounded-xl overflow-hidden hover:shadow-[0_0_20px_#ee88ee] transition hover:-translate-y-2"
                >
                  <div className="h-48 bg-black/40 overflow-hidden">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-quicksand font-semibold text-lavender bg-lavender/10 px-3 py-1 rounded-full">
                        {plan.targetMonth}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-white/50">
                        {plan.focus}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-lavender mb-3">{plan.title}</h3>
                    <p className="text-white/80 mb-4">{plan.description}</p>
                    <div className="mt-auto space-y-3">
                      <div className="bg-black/40 border border-lavender/20 rounded-lg p-4">
                        <p className="text-sm font-semibold text-lavender mb-1">Location / Scope</p>
                        <p className="text-white/70 text-sm">{plan.location}</p>
                      </div>
                      <div className="bg-black/40 border border-lavender/20 rounded-lg p-4">
                        <p className="text-sm font-semibold text-lavender mb-1">How To Get Involved</p>
                        <p className="text-white/70 text-sm leading-relaxed">{plan.needs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-white/60">
                We&apos;re finalizing our next big initiatives. Check back soon for details!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-lavender mb-6">HAVE AN IDEA WE SHOULD PLAN?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            We love partnering early with student groups and campus departments. Share your concept and we&apos;ll help
            turn it into a fully produced experience.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-lavender hover:bg-lavender-light text-black font-semibold py-3 px-6 rounded-full transition hover:scale-105"
          >
            Pitch Your Event
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Planned;

