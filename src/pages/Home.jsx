import { Link } from 'react-router-dom';
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512" className="w-5 h-5">
                      <path d="M381.2 172.8C377.1 164.9 368.9 160 360 160h-156.6l50.84-127.1c2.25-5.66 2.156-11.95-.344-17.59C250.1 10.95 242.5 6.125 234.4 6.125H24C10.75 6.125 0 16.88 0 30.05S10.75 54 24 54h118.4l-50.84 127.1c-2.25 5.656-2.156 11.95 .3438 17.59C95.88 213.1 103.5 218 111.6 218H268.2l-50.84 127.1c-2.25 5.656-2.156 11.95 .3438 17.59C221.9 381.1 229.5 386 237.6 386H360c13.25 0 24-10.75 24-24s-10.75-24-24-24H255.8l50.84-127.1C309.1 229.2 309.2 222.9 306.7 217.3L381.2 172.8z"/>
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex justify-center">
            <div className="flex flex-col items-center text-white/50 animate-bounce">
              <span className="text-xs uppercase tracking-[0.4em]">Scroll</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4 mt-2 text-lavender">
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
              </svg>
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
                  {stat.icon === 'fa-calendar-star' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
                      <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm305.1 97.1c-4.2-8.2-12.4-13.1-21.5-13.1s-17.3 4.9-21.5 13.1L240 352l-57.1-63.9c-4.2-8.2-12.4-13.1-21.5-13.1s-17.3 4.9-21.5 13.1l-22.4 44.8c-5.4 10.8 2.1 23.9 13.9 23.9H208v48c0 17.7 14.3 32 32 32s32-14.3 32-32V416h64c11.8 0 19.3-13.1 13.9-23.9l-22.4-44.8z"/>
                    </svg>
                  )}
                  {stat.icon === 'fa-users' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="w-6 h-6">
                      <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.2 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7V320c0 11.4-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                    </svg>
                  )}
                  {stat.icon === 'fa-camera-retro' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-6 h-6">
                      <path d="M220.6 121.2L271.1 96 448 96v320H271.1l-50.5-25.2L64 376V280l156.5-78.3L220.6 121.2zM48 141.1l192 96v94.9l-192-96V141.1zM464 64H336l-33.6 44.8L368 128l-33.3 44.4L368 216l33.3-44.4L464 216V64zM48 64v80l128-64L48 64z"/>
                    </svg>
                  )}
                  {stat.icon === 'fa-clapperboard' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-6 h-6">
                      <path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128H96l-64 64V384c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V160z"/>
                    </svg>
                  )}
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
                  {feature.icon === 'fa-video' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-6 h-6">
                      <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
                    </svg>
                  )}
                  {feature.icon === 'fa-bullhorn' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-6 h-6">
                      <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"/>
                    </svg>
                  )}
                  {feature.icon === 'fa-lightbulb' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512" className="w-6 h-6">
                      <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>
                    </svg>
                  )}
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
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-white/60">Our Process</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
            How We Bring Your Vision to Life
          </h2>
          <p className="mt-4 text-white/70">
            From initial consultation to final delivery, we work with you every step of the way to ensure your event or project gets the media coverage it deserves.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: '01',
              title: 'Book & Plan',
              description: 'Reach out through our contact form or email. We\'ll schedule a consultation to understand your vision, timeline, and requirements.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-8 h-8">
                  <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/>
                </svg>
              )
            },
            {
              step: '02',
              title: 'Shoot & Capture',
              description: 'Our team arrives on-site with professional equipment. We document your event with photos, videos, and behind-the-scenes content.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-8 h-8">
                  <path d="M220.6 121.2L271.1 96 448 96v320H271.1l-50.5-25.2L64 376V280l156.5-78.3L220.6 121.2zM48 141.1l192 96v94.9l-192-96V141.1zM464 64H336l-33.6 44.8L368 128l-33.3 44.4L368 216l33.3-44.4L464 216V64zM48 64v80l128-64L48 64z"/>
                </svg>
              )
            },
            {
              step: '03',
              title: 'Edit & Enhance',
              description: 'We carefully curate and edit your content, applying color grading, audio mixing, and post-production polish to match your brand.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-8 h-8">
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                </svg>
              )
            },
            {
              step: '04',
              title: 'Deliver & Share',
              description: 'Receive your high-resolution files via secure download. Content is ready for social media, websites, and promotional materials.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-8 h-8">
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H64zM432 456a24 24 0 1 1 0-48 24 24 0 1 1 0 48z"/>
                </svg>
              )
            }
          ].map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-6 h-full transition hover:-translate-y-2 hover:border-lavender hover:shadow-[0_0_35px_rgba(232,136,232,0.25)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-lavender/30">{item.step}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender/20 text-lavender">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-0 w-8 h-0.5 bg-lavender/30 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4 absolute -right-2 top-1/2 transform -translate-y-1/2 text-lavender/50">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a001a] via-[#250026] to-[#1a001a] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.35em] text-white/60">What People Say</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
              Trusted by Ontario Tech Clubs & Departments
            </h2>
            <p className="mt-4 text-white/70">
              See what our partners have to say about working with OT Media Pass.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: 'OT Media Pass captured our annual gala with incredible attention to detail. The photos and videos perfectly captured the energy of the night, and we received everything within days. Highly professional team!',
                author: 'Sarah Chen',
                role: 'Event Coordinator',
                organization: 'Student Union',
                rating: 5
              },
              {
                quote: 'Working with Media Pass was seamless from start to finish. They understood our vision for the campaign and delivered content that exceeded our expectations. The quality is outstanding!',
                author: 'Marcus Johnson',
                role: 'Marketing Director',
                organization: 'Athletics Department',
                rating: 5
              },
              {
                quote: 'The team\'s creativity and professionalism shine through in every project. They\'ve become our go-to media partner for all major events. The turnaround time is impressive!',
                author: 'Emily Rodriguez',
                role: 'Club President',
                organization: 'Cultural Society',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:border-lavender hover:shadow-[0_0_35px_rgba(232,136,232,0.25)]"
              >
                <div className="absolute top-6 left-6 text-6xl font-bold text-lavender/10 leading-none">"</div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-4 h-4 text-lavender">
                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed relative z-10">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                    <div className="text-xs text-lavender/80 mt-1">{testimonial.organization}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview removed */}

      {/* CTA Section removed */}
    </div>
  );
};

export default Home;
