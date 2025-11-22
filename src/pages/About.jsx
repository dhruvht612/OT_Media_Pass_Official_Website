import PageHero from '../components/PageHero';

const About = () => {
  return (
    <div className="pt-16 text-white bg-gradient-to-b from-black via-[#120012] to-black">
      <PageHero
        eyebrow="Our Story"
        title="About Ontario Tech Media Pass"
        description="We are a collective of storytellers documenting the energy, people, and milestones that define Ontario Tech University. From concept to final cut, every project is crafted by students for students."
        actions={[
          { label: 'Meet the Team', to: '/team' },
          { label: 'View Our Gallery', to: '/gallery', variant: 'secondary' }
        ]}
      >
        <div className="grid gap-6 md:gap-10 md:grid-cols-3">
          {[
            { label: 'Creative Collaborators', value: '30+' },
            { label: 'Events Captured', value: '120+' },
            { label: 'Workshops Hosted', value: '20+' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-center backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Mission Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(238,136,238,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <span className="inline-block uppercase tracking-[0.4em] text-xs md:text-sm text-white/70 bg-black/60 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full font-medium mb-6">
                Our Purpose
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
              <span className="bg-gradient-to-r from-white via-lavender-light to-white bg-clip-text text-transparent">
                OUR MISSION
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Ontario Tech Media Pass was founded with a simple yet powerful mission: to capture and
                share the incredible moments that make our university community unique. We believe that
                every event, every achievement, and every student has a story worth telling.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Through professional photography, videography, and content creation, we document the
                vibrant life at Ontario Tech University. From sports games and cultural festivals to
                academic ceremonies and student initiatives, we're committed to preserving these memories
                for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-20 border-y border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,160,255,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="inline-block uppercase tracking-[0.4em] text-xs md:text-sm text-white/70 bg-black/60 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full font-medium mb-6">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
            <span className="bg-gradient-to-r from-white via-lavender-light to-white bg-clip-text text-transparent">
              WHAT WE DO
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'PHOTOGRAPHY',
                description: 'Professional event photography capturing candid moments, portraits, and group shots for campus events and organizations.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'VIDEOGRAPHY',
                description: 'High-quality video production including event coverage, promotional videos, and highlight reels for various campus activities.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                ),
                title: 'CONTENT CREATION',
                description: 'Social media content, graphics, and storytelling that amplifies the voice of Ontario Tech students and organizations.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-lavender/50 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,136,232,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-lavender/20 group-hover:bg-lavender rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-lavender mb-4 text-center group-hover:text-lavender-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-center leading-relaxed group-hover:text-white/80 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(238,136,238,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <span className="inline-block uppercase tracking-[0.4em] text-xs md:text-sm text-white/70 bg-black/60 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full font-medium mb-6">
                Looking Forward
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
              <span className="bg-gradient-to-r from-white via-lavender-light to-white bg-clip-text text-transparent">
                OUR VISION
              </span>
            </h2>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1a001a] via-[#220022] to-[#330033] border border-lavender/30 p-8 md:p-10 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(232,136,232,0.2)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(238,136,238,0.1),transparent_60%)]" />
              <div className="relative z-10 space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  We envision Ontario Tech Media Pass as the premier student media organization in the
                  region, known for our creativity, professionalism, and dedication to excellence.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  Our goal is to provide every student with access to high-quality media services while
                  nurturing the next generation of content creators, photographers, and videographers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,160,255,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="inline-block uppercase tracking-[0.4em] text-xs md:text-sm text-white/70 bg-black/60 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full font-medium mb-6">
              What Drives Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
            <span className="bg-gradient-to-r from-white via-lavender-light to-white bg-clip-text text-transparent">
              OUR VALUES
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'CREATIVITY', description: 'Pushing boundaries and exploring innovative approaches to visual storytelling' },
              { title: 'EXCELLENCE', description: 'Maintaining high standards in every project we undertake' },
              { title: 'COMMUNITY', description: 'Building connections and supporting our fellow students' },
              { title: 'GROWTH', description: 'Continuously learning and developing our skills together' }
            ].map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-center transition-all duration-300 hover:border-lavender/50 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,136,232,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-lavender mb-3 group-hover:text-lavender-light transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/80 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

