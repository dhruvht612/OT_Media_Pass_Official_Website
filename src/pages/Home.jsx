import { Link } from 'react-router-dom';
import { upcomingEvents } from '../data/events';
import { teamMembers } from '../data/team';
import teamPhoto from '../assets/Team_Pictures/Team_Pic.jpg';
import logo from '../assets/Logo.png';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#120012] to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#100010] via-[#250026] to-black opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(238,136,238,0.35),transparent_55%)]" />
          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-lavender/10 blur-3xl" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-lavender/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-28 md:pb-36">
          <div className="grid gap-12 lg:grid-cols-[2fr,1.4fr] items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-black/40 border border-white/15 px-4 py-2">
                <img
                  src={logo}
                  alt="OT Media Pass logo"
                  className="h-8 w-8 rounded-full border border-white/10 object-contain"
                />
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Ontario Tech Media Pass
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Capturing Campus Moments, Crafting Lasting Memories.
              </h1>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
                We are the student media crew documenting Ontario Tech University. From headline events to spontaneous
                moments, our photographers, filmmakers, and storytellers turn campus life into cinematic experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center rounded-full bg-lavender px-6 py-3 text-sm font-semibold text-black transition hover:bg-lavender-light hover:scale-105 shadow-[0_0_25px_rgba(232,136,232,0.35)]"
                >
                  Explore Gallery
                </Link>
                <Link
                  to="/join"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-lavender hover:text-lavender"
                >
                  Join the Crew
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">Highlights</p>
                    <p className="mt-2 text-2xl font-semibold text-white">This Month with Media Pass</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lavender/20 text-lavender">
                    <i className="fas fa-bolt"></i>
                  </span>
                </div>
                <div className="mt-6 space-y-4 text-sm text-white/80">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lavender"></span>
                    <p>Covering <span className="font-semibold text-white">3 major events</span> including Ridgebacks Game Night and Ignite Conference.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lavender"></span>
                    <p>Launching a new <span className="font-semibold text-white">portrait studio series</span> for club showcases.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lavender"></span>
                    <p>Recruiting creatives for <span className="font-semibold text-white">editing & marketing</span> roles — join us!</p>
                  </div>
                </div>
                <Link
                  to="/events/overview"
                  className="mt-8 inline-flex items-center justify-between w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-sm font-semibold text-white transition hover:border-lavender hover:text-lavender"
                >
                  Upcoming Coverage
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lavender/20 text-lavender">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex justify-center">
            <div className="flex flex-col items-center text-white/50 animate-bounce">
              <span className="text-xs uppercase tracking-[0.4em]">Scroll</span>
              <i className="fas fa-chevron-down mt-2 text-lavender"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="relative py-16">
        <div className="absolute inset-x-10 -top-12 -bottom-12 rounded-3xl border border-white/10 bg-white/5 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: '50+', label: 'Events Covered', icon: 'fa-calendar-star' },
              { value: '30+', label: 'Creative Contributors', icon: 'fa-users' },
              { value: '10K+', label: 'Photos Delivered', icon: 'fa-camera-retro' },
              { value: '100+', label: 'Videos Produced', icon: 'fa-clapperboard' }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lavender/20 text-lavender mb-4">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] text-white/60">What We Deliver</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
            Full-service production for Ontario Tech clubs, teams, and departments.
          </h2>
          <p className="mt-4 text-white/70">
            Every project is supported by students who understand campus culture. We plan, shoot, and edit with an
            in-house team ready to collaborate at every stage.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Event Coverage',
              description: 'Dynamic photo & video coverage for concerts, athletics, and student showcases.',
              icon: 'fa-video'
            },
            {
              title: 'Creative Campaigns',
              description: 'Content strategy, storyboarding, and multi-platform rollout for your initiatives.',
              icon: 'fa-bullhorn'
            },
            {
              title: 'Studio Sessions',
              description: 'Portrait, product, and promo shoots with professional lighting and direction.',
              icon: 'fa-lightbulb'
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-lavender hover:shadow-[0_0_35px_rgba(232,136,232,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender/20 text-lavender">
                  <i className={`fas ${feature.icon} text-lg`}></i>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={teamPhoto} 
              alt="Media Team"
              className="rounded-2xl shadow-lg hover:shadow-lavender/40 transition hover:scale-105"
            />
            <div className="absolute -top-5 -left-5 flex items-center gap-2 rounded-full bg-black/70 border border-white/10 px-3 py-1 shadow-[0_0_25px_rgba(232,136,232,0.4)]">
              <img
                src={logo}
                alt="OT Media Pass logo"
                className="h-8 w-8 rounded-full border border-white/10 object-contain"
              />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 hidden sm:inline">
                Media Pass Team
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-lavender mb-4">About Ontario Tech Media Pass</h2>
            <p className="text-white/80 mb-4">
              We are a student-led organization dedicated to capturing and sharing the spirit of Ontario Tech
              University. Our creative team produces professional-level media showcasing events, people, and stories
              that shape our community.
            </p>
            <p className="text-white/80 mb-6">
              Whether it's concerts, cultural nights, or galas — we bring the lens that tells your story with passion
              and precision.
            </p>
            <Link
              to="/about"
              className="inline-block bg-lavender hover:bg-white text-black font-semibold py-2 px-6 rounded-full transition hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Team Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-lavender mb-8 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.slice(0, 5).map((member) => (
              <div key={member.id} className="text-center group cursor-pointer">
                <div className="mb-3 relative overflow-hidden rounded-full w-24 h-24 mx-auto border-2 border-lavender/30 group-hover:border-lavender transition">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <h4 className="text-lavender font-semibold text-sm">{member.name}</h4>
                <p className="text-white/60 text-xs">{member.role}</p>
              </div>
            ))}
            <div className="text-center group cursor-pointer">
              <Link to="/team" className="flex flex-col items-center">
                <div className="mb-3 relative overflow-hidden rounded-full w-24 h-24 mx-auto border-2 border-dashed border-lavender/30 group-hover:border-lavender transition flex items-center justify-center">
                  <i className="fas fa-plus text-lavender text-2xl"></i>
                </div>
                <h4 className="text-lavender font-semibold text-sm">View All</h4>
                <p className="text-white/60 text-xs">Full Team</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-lavender mb-10">Recent Events</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-lavender hover:shadow-[0_0_35px_rgba(232,136,232,0.25)]"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={event.image} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" alt={event.title} />
                </div>
                <div className="p-6 text-left">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-white/50">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-calendar"></i>
                      {event.date}
                    </span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{event.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{event.description}</p>
                  <Link
                    to="/events/upcoming"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lavender transition hover:text-lavender-light"
                  >
                    Event Details <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/events/upcoming"
            className="mt-10 inline-block bg-lavender hover:bg-lavender-light text-black font-semibold py-3 px-6 rounded-full transition hover:scale-105"
          >
            View All Events
          </Link>
        </div>
      </section>

      {/* Gallery Preview removed */}

      {/* CTA Section removed */}
    </div>
  );
};

export default Home;
