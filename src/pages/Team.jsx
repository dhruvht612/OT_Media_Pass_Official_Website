import { teamMembers } from '../data/team';
import TeamCard from '../components/TeamCard';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useEffect } from 'react';

const Team = () => {
  // Organize team members by role/team
  const organizeTeam = () => {
    const organized = {
      presidents: [],
      marketing: [],
      outreach: [],
      events: [],
      tech: [],
      finance: [],
      other: []
    };

    teamMembers.forEach((member) => {
      const role = member.role.toLowerCase();
      
      // Check for Co-President or President first
      if (role.includes('co-president') || (role.includes('president') && !role.includes('vice'))) {
        organized.presidents.push(member);
      }
      // Check for Tech (including VP Tech)
      else if (role.includes('tech')) {
        organized.tech.push(member);
      }
      // Check for Finance (including VP Finance and Finance Executive)
      else if (role.includes('finance') || role.includes('treasurer')) {
        organized.finance.push(member);
      }
      // Check for Marketing (including Marketing Executive)
      else if (role.includes('marketing')) {
        organized.marketing.push(member);
      }
      // Check for Outreach (including VP Outreach and Outreach Coordinator)
      else if (role.includes('outreach')) {
        organized.outreach.push(member);
      }
      // Check for Events (including VP Events and Events Executive)
      else if (role.includes('events')) {
        organized.events.push(member);
      }
      // Everything else goes to Other
      else {
        organized.other.push(member);
      }
    });

    return organized;
  };

  const organizedTeam = organizeTeam();
  
  // Calculate total team members
  const totalMembers = teamMembers.length;
  const totalTeams = Object.values(organizedTeam).filter(team => team.length > 0).length;

  useEffect(() => {
    // Initialize AOS if available
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  const TeamSection = ({ title, members, description, icon }) => {
    if (members.length === 0) return null;
    
    return (
      <section className="mb-20 relative">
        {/* Section divider with gradient */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-lavender/50 to-transparent mb-12" />
        
        <div className="container mx-auto px-6 pt-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              {icon && (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lavender/20 to-[#e8e]/20 flex items-center justify-center border border-lavender/30">
                  {icon}
                </div>
              )}
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#e8e] via-lavender to-[#e8e] bg-clip-text text-transparent">
                {title}
              </h2>
            </div>
            {description && (
              <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed text-center">
                {description}
              </p>
            )}
            <div className="mt-4 text-sm text-gray-500 text-center">
              {members.length} {members.length === 1 ? 'member' : 'members'}
            </div>
          </div>
          <div 
            className="flex flex-wrap justify-center gap-8"
            data-aos="fade-up"
          >
            {members.map((member, index) => (
              <div
                key={member.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

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

      {/* Team Stats */}
      <section className="relative py-16 border-y border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(238,136,238,0.1),transparent_70%)]" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: totalMembers, label: 'Team Members' },
              { value: totalTeams, label: 'Departments' },
              { value: organizedTeam.marketing.length + organizedTeam.outreach.length + organizedTeam.events.length, label: 'Creative Roles' },
              { value: '100%', label: 'Student-Led' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-lavender/50 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,136,232,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-lavender mb-2 group-hover:text-lavender-light transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organized Team Sections */}
      <div className="py-16">
        <TeamSection 
          title={organizedTeam.presidents.length > 1 ? "Co-Presidents" : "President"}
          members={organizedTeam.presidents}
          description="Leading the vision and direction of OT Media Pass"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6 text-lavender">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
            </svg>
          }
        />
        
        <TeamSection 
          title="Marketing Team"
          members={organizedTeam.marketing}
          description="Building our brand and connecting with the community through strategic campaigns and creative content"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-6 h-6 text-lavender">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
            </svg>
          }
        />
        
        <TeamSection 
          title="Outreach Team"
          members={organizedTeam.outreach}
          description="Expanding our network and building partnerships across campus and beyond"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="w-6 h-6 text-lavender">
              <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-29.2 20.5-47.8 20.5H464c-12.1 0-23.2-6.8-28.6-17.7l-12.5-25.1c-5.4-10.9-16.5-17.7-28.6-17.7H416c-5.1 0-9.2-4.1-9.2-9.2V144c0-8.8-7.2-16-16-16H344c-8.8 0-16 7.2-16 16v32.6c0 5.1-4.1 9.2-9.2 9.2H304c-12.1 0-23.2 6.8-28.6 17.7l-12.5 25.1c-5.4 10.9-16.5 17.7-28.6 17.7H235.9c-18.6 0-36.4-7.4-47.8-20.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6zM320 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 16a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
            </svg>
          }
        />
        
        <TeamSection 
          title="Events Team"
          members={organizedTeam.events}
          description="Planning and executing memorable campus events that bring our community together"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6 text-lavender">
              <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/>
            </svg>
          }
        />
        
        <TeamSection 
          title="Tech Team"
          members={organizedTeam.tech}
          description="Building and maintaining our technical infrastructure and digital platforms"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="w-6 h-6 text-lavender">
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
            </svg>
          }
        />
        
        <TeamSection 
          title="Finance Team"
          members={organizedTeam.finance}
          description="Managing finances and resources to ensure sustainable growth and operations"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-6 h-6 text-lavender">
              <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm80 224H208v48c0 8.8 7.2 16 16 16s16-7.2 16-16V288h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16V288h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-17.7-14.3-32-32-32H176c-17.7 0-32 14.3-32 32v32z"/>
            </svg>
          }
        />
        
        <TeamSection 
          title="Team Members"
          members={organizedTeam.other}
          description="Contributing their skills and passion to our mission of capturing campus life"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="w-6 h-6 text-lavender">
              <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C64 220.2 84.2 200 109.7 200c14.5 0 27.8 6.5 36.8 17.7l43.7 59.1c4.3 5.8 11.1 9.2 18.4 9.2h48.2c9.3 0 17.8-5.2 22-13.5l19.8-39.6c4.9-9.8 15.1-16.1 26.2-16.1H464c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H309.3c-8.5 0-16.6 3.4-22.6 9.4L243.5 352H176c-17.7 0-32-14.3-32-32V245.7zM192 448a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm224 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM368 136a56 56 0 1 1 112 0A56 56 0 1 1 368 136zm104.3 64C447.8 200 428 220.2 428 245.7V320H512c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H472.3zM608 88a56 56 0 1 1 112 0A56 56 0 1 1 608 88zM548.3 200C522.8 200 512 220.2 512 245.7V288h64c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H548.3z"/>
            </svg>
          }
        />
      </div>

      {/* Call to Action */}
      <section className="relative py-20 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,160,255,0.1),transparent_70%)]" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-lavender/50 hover:shadow-[0_0_30px_rgba(232,136,232,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-transparent rounded-2xl opacity-50" />
            <div className="relative z-10">
            <h2 className="text-3xl font-bold text-[#e8e] mb-4">Join Our Creative Crew</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Passionate about media, storytelling, or creative production? We're always looking for talented individuals to join our team and help capture the moments that matter.
            </p>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-8 py-4 bg-lavender text-black font-semibold rounded-full hover:bg-lavender-light transition-all duration-300 hover:scale-105 shadow-lg shadow-lavender/30"
            >
              View Open Positions
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

