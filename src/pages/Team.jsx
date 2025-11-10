import { teamMembers } from '../data/team';
import TeamCard from '../components/TeamCard';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const Team = () => {
  return (
    <div className="pt-24 text-white bg-gradient-to-b from-black via-[#120012] to-black">
      <PageHero
        eyebrow="Creative Crew"
        title="Meet the People Behind the Lens"
        description="Our team blends technical skills with storytelling instincts to capture the essence of campus life. Each member brings a unique perspective that fuels the Media Pass vision."
        align="center"
        actions={[
          { label: 'About the Collective', to: '/about' },
          {
            label: 'Join the Team',
            to: '/join',
            variant: 'secondary'
          }
        ]}
      >
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-around">
          <div className="text-center md:text-left">
            <div className="text-sm uppercase tracking-[0.3em] text-white/50">Disciplines</div>
            <p className="mt-2 text-white/80">Photography · Videography · Editing · Marketing · Operations</p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-sm uppercase tracking-[0.3em] text-white/50">Open Roles</div>
            <Link
              to="/join"
              className="mt-2 inline-flex items-center text-lavender hover:text-lavender-light transition"
            >
              View current positions →
            </Link>
          </div>
        </div>
      </PageHero>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#e8e] mb-12">Our Creative Crew</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

