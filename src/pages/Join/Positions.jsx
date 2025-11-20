import { Link, useLocation } from 'react-router-dom';
import { openPositions, closedPositions } from '../../data/positions';
import PositionCard from '../../components/PositionCard';
import PageHero from '../../components/PageHero';

const Positions = () => {
  const location = useLocation();
  const navLinks = [
    { to: '/join', label: 'Overview' },
    { to: '/join/positions', label: 'Open Positions' },
  ];

  return (
    <div className="pt-16 text-white bg-gradient-to-b from-black via-[#120012] to-black">
      <PageHero
        eyebrow="Join Our Team"
        title="Open Positions"
        description="Explore opportunities to contribute your skills and passion to OT Media Pass. We're looking for creative individuals who want to make an impact on campus."
        actions={[
          { label: 'Apply Now', to: '/join#member-form' },
          { label: 'Learn More', to: '/join', variant: 'secondary' }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
          <span className="rounded-full border border-white/20 px-4 py-2">Volunteer</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Flexible Hours</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Skill Development</span>
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

      {/* Tech Team Positions */}
      {openPositions.filter(p => p.department === 'Tech').length > 0 && (
        <section className="py-16 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#e8e] mb-4">Tech Team Positions</h2>
              <div className="max-w-4xl mx-auto space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Please select the role that best aligns with your skills, interests, and experience.
                </p>
                <p>
                  Each position plays an important part in keeping OT Media Pass running smoothly — from designing engaging visuals and improving user experience to developing new features and maintaining the website's functionality.
                </p>
                <p>
                  Whether you're a designer with a creative eye or a developer who loves solving problems, we encourage you to choose the role that best reflects where you can make the most impact and continue growing your skills.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {openPositions
                .filter(position => position.department === 'Tech')
                .map((position) => (
                  <PositionCard key={position.id} position={position} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Outreach Team Positions */}
      {openPositions.filter(p => p.department === 'Outreach').length > 0 && (
        <section className="py-16 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#e8e] mb-4">Outreach Team Positions</h2>
              <div className="max-w-4xl mx-auto space-y-4 text-gray-300 leading-relaxed text-center">
                <p>
                  Develop and execute strategic outreach initiatives to expand OT Media Pass's network across campus and beyond. Craft compelling email communications, engage with potential partners through social media platforms, and identify opportunities for meaningful connections.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <span className="px-4 py-2 rounded-full bg-lavender/10 text-lavender text-sm border border-lavender/20">
                    Communication
                  </span>
                  <span className="px-4 py-2 rounded-full bg-lavender/10 text-lavender text-sm border border-lavender/20">
                    Outreach
                  </span>
                  <span className="px-4 py-2 rounded-full bg-lavender/10 text-lavender text-sm border border-lavender/20">
                    Social
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {openPositions
                .filter(position => position.department === 'Outreach')
                .map((position) => (
                  <div key={position.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                    <PositionCard position={position} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {openPositions.filter(p => p.department !== 'Tech' && p.department !== 'Outreach').length > 0 && (
            <>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#e8e] mb-4">Other Available Positions</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  We're currently looking for talented individuals to join our team. Click on any position to view details and requirements.
                </p>
                <div className="mt-6 text-sm text-gray-500">
                  {openPositions.filter(p => p.department !== 'Tech' && p.department !== 'Outreach').length} {openPositions.filter(p => p.department !== 'Tech' && p.department !== 'Outreach').length === 1 ? 'position' : 'positions'} available
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {openPositions
                  .filter(position => position.department !== 'Tech' && position.department !== 'Outreach')
                  .map((position) => (
                    <PositionCard key={position.id} position={position} />
                  ))}
              </div>
            </>
          )}
          {openPositions.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-4">No open positions at this time.</p>
              <p className="text-gray-500 text-sm">
                Check back soon or{' '}
                <Link to="/join" className="text-lavender hover:text-lavender-light">
                  submit a general application
                </Link>
                {' '}to be considered for future opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Closed Positions (Optional - can be hidden) */}
      {closedPositions.length > 0 && (
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-500 mb-4">Recently Filled</h2>
              <p className="text-gray-500 text-sm">
                These positions have been filled, but we may have similar opportunities in the future.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 opacity-60">
              {closedPositions.map((position) => (
                <PositionCard key={position.id} position={position} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-2xl bg-gradient-to-br from-gray-950/80 to-gray-950/60 border border-lavender/30">
            <h2 className="text-3xl font-bold text-[#e8e] mb-4">Don't See a Perfect Fit?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We're always looking for passionate individuals. Submit a general application and let us know how you'd like to contribute!
            </p>
            <Link
              to="/join#member-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-lavender text-black font-semibold rounded-full hover:bg-lavender-light transition-all duration-300 hover:scale-105 shadow-lg shadow-lavender/30"
            >
              Submit General Application
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Positions;

