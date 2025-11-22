import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import teamPhoto from '../assets/Team_Pictures/Team_Pic.jpg';
import logo from '../assets/Logo.png';

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollToNext = useCallback(() => {
    setIsScrolling(true);
    const nextSection = document.querySelector('#core-capabilities');
    if (nextSection) {
      const offset = 80; // Account for navbar
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: window.innerHeight * 1.2, behavior: 'smooth' });
    }

    // Reset scrolling state after animation
    setTimeout(() => setIsScrolling(false), 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Hide button when scrolled past hero section
      if (scrollPosition > heroHeight * 0.8) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (window.scrollY < window.innerHeight * 0.5) {
          e.preventDefault();
          handleScrollToNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleScrollToNext]);

  return (
    <div className="bg-gradient-to-b from-black via-[#120012] to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a000a] via-[#1a001a] to-black" />
          {/* Pulsing gradient orbs */}
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-lavender/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-lavender/10 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 h-72 w-72 rounded-full bg-lavender-light/15 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          {/* Radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(238,136,238,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(199,160,255,0.2),transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 px-5 py-3 animate-fade-in-down opacity-0 animation-delay-100 group hover:border-lavender/50 hover:bg-black/80 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,136,232,0.3)]">
              <div className="relative">
                <img
                  src={logo}
                  alt="OT Media Pass logo"
                  className="h-10 w-10 rounded-full border border-white/20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-lavender/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </div>
              <span className="text-sm uppercase tracking-[0.4em] text-white/70 group-hover:text-lavender transition-colors font-medium">
                Ontario Tech Media Pass
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] mb-6 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="block mb-2 bg-gradient-to-r from-white via-lavender-light to-white bg-clip-text text-transparent">
                Capturing Campus
              </span>
              <span className="block bg-gradient-to-r from-lavender via-white to-lavender bg-clip-text text-transparent">
                Moments, Crafting
              </span>
              <span className="block mt-2 bg-gradient-to-r from-white via-lavender to-white bg-clip-text text-transparent">
                Lasting Memories
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up opacity-0 animation-delay-300">
              We are the student media crew documenting Ontario Tech University. From headline events to spontaneous
              moments, our photographers, filmmakers, and storytellers turn campus life into{' '}
              <span className="text-lavender font-semibold">cinematic experiences</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0 animation-delay-400">
              <Link
                to="/gallery"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-lavender px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:bg-lavender-light hover:scale-110 shadow-[0_0_30px_rgba(232,136,232,0.4)] hover:shadow-[0_0_50px_rgba(232,136,232,0.6)]"
              >
                <i className="fas fa-images text-lg" />
                <span>Explore Gallery</span>
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/join"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-lavender hover:text-lavender hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(232,136,232,0.2)]"
              >
                <i className="fas fa-user-plus text-lg" />
                <span>Join the Crew</span>
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-lavender/50 bg-lavender/10 backdrop-blur-xl px-8 py-4 text-base font-bold text-lavender transition-all duration-300 hover:border-lavender hover:bg-lavender/20 hover:scale-110 hover:shadow-[0_0_30px_rgba(232,136,232,0.3)]"
              >
                <i className="fas fa-calendar-check text-lg" />
                <span>Book Us</span>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up opacity-0 animation-delay-500">
              {[
                { value: '50+', label: 'Events Covered', icon: 'calendar' },
                { value: '30+', label: 'Creative Contributors', icon: 'users' },
                { value: '10K+', label: 'Photos Delivered', icon: 'camera' },
                { value: '100+', label: 'Videos Produced', icon: 'video' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-lavender/50 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_25px_rgba(232,136,232,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lavender/20 text-lavender mb-3 group-hover:scale-110 group-hover:bg-lavender/30 transition-all duration-300">
                      {stat.icon === 'calendar' && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
                          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm305.1 97.1c-4.2-8.2-12.4-13.1-21.5-13.1s-17.3 4.9-21.5 13.1L240 352l-57.1-63.9c-4.2-8.2-12.4-13.1-21.5-13.1s-17.3 4.9-21.5 13.1l-22.4 44.8c-5.4 10.8 2.1 23.9 13.9 23.9H208v48c0 17.7 14.3 32 32 32s32-14.3 32-32V416h64c11.8 0 19.3-13.1 13.9-23.9l-22.4-44.8z"/>
                        </svg>
                      )}
                      {stat.icon === 'users' && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="w-6 h-6">
                          <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.2 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7V320c0 11.4-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                        </svg>
                      )}
                      {stat.icon === 'camera' && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-6 h-6">
                          <path d="M220.6 121.2L271.1 96 448 96v320H271.1l-50.5-25.2L64 376V280l156.5-78.3L220.6 121.2zM48 141.1l192 96v94.9l-192-96V141.1zM464 64H336l-33.6 44.8L368 128l-33.3 44.4L368 216l33.3-44.4L464 216V64zM48 64v80l128-64L48 64z"/>
                        </svg>
                      )}
                      {stat.icon === 'video' && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-6 h-6">
                          <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0h88a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                        </svg>
                      )}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-lavender transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/60 group-hover:text-white/80 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          {showScrollButton && (
            <div className={`mt-16 flex justify-center transition-all duration-500 ${
              showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <button
                onClick={handleScrollToNext}
                onMouseEnter={() => setIsScrolling(false)}
                disabled={isScrolling}
                className="flex flex-col items-center text-white/50 group cursor-pointer transition-all duration-300 hover:text-lavender hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Scroll to next section"
                title="Scroll down or press Arrow Down"
              >
                <span className="text-xs uppercase tracking-[0.4em] mb-3 group-hover:text-lavender transition-colors group-hover:translate-y-[-2px] inline-block">
                  Scroll to explore
                </span>
                <div className={`relative w-6 h-10 rounded-full border-2 border-white/30 group-hover:border-lavender transition-all duration-300 ${
                  isScrolling ? 'scale-95' : ''
                }`}>
                  <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-4 rounded-full bg-lavender/70 group-hover:bg-lavender transition-colors ${
                    isScrolling ? 'animate-none opacity-50' : 'animate-bounce'
                  }`} style={{ animationDuration: '2s' }} />
                </div>
                <div className="mt-2 text-[10px] text-white/30 group-hover:text-white/50 transition-colors">
                  ↓ Press Arrow Down
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-lavender/40 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-lavender-light/30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-2 h-2 rounded-full bg-lavender/50 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-lavender-light/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </section>

      {/* Core Capabilities */}
      <section id="core-capabilities" className="max-w-7xl mx-auto py-24 px-6">
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
