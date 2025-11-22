import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! We\'ll keep you updated with our latest content.');
    setEmail('');
  };

  const socialLinks = [
    { 
      href: 'https://instagram.com', 
      label: 'Instagram', 
      color: 'hover:text-pink-400',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.6 102.7-9 132.1z"/>
        </svg>
      )
    },
    { 
      href: 'https://tiktok.com', 
      label: 'TikTok', 
      color: 'hover:text-black',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
          <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0h88a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
        </svg>
      )
    },
    { 
      href: 'https://youtube.com', 
      label: 'YouTube', 
      color: 'hover:text-red-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-5 h-5">
          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
        </svg>
      )
    },
    { 
      href: 'https://www.linkedin.com/in/wingcheungho', 
      label: 'LinkedIn', 
      color: 'hover:text-blue-400',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
          <path d="M100.28 448H7.4V148.9h92.88zM53.84 108C24.13 108 0 83.87 0 54.09A54.09 54.09 0 0 1 53.84 0a54.12 54.12 0 0 1 54.45 54.09c0 29.78-24.13 53.91-54.45 53.91zM447.9 448h-92.68V302.4c0-34.7-.7-79.24-48.31-79.24-48.38 0-55.79 37.8-55.79 76.9V448h-92.68V148.9h88.96v40.8h1.28c12.4-23.5 42.68-48.31 87.84-48.31 93.84 0 111.08 61.76 111.08 142.3V448z"/>
        </svg>
      )
    },
  ];

  const quickLinks = [
    { 
      path: '/', 
      label: 'Home', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-4 h-4">
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-17 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
        </svg>
      )
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
        </svg>
      )
    },
    { 
      path: '/events/upcoming', 
      label: 'Events', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4">
          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
        </svg>
      )
    },
    { 
      path: '/team', 
      label: 'Team', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="w-4 h-4">
          <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.2 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7V320c0 11.4-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
        </svg>
      )
    },
    { 
      path: '/gallery', 
      label: 'Gallery', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-4 h-4">
          <path d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.2-6.4-12.4-9.2-20.1-7.3l-60.8 15.2-48.2-72.3c-4.2-6.3-12.3-8.7-19.1-5.8l-96 40c-7.8 3.3-12.6 11.2-11.7 19.6l7.3 58.3L160 320V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
        </svg>
      )
    },
    { 
      path: '/join', 
      label: 'Join', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="w-4 h-4">
          <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20 8.6-31.2v-8.2c0-60.7-27.1-115.2-69.9-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-70.7-57.3-128-128-128S128 57.3 128 128c0 35.6 11.6 68.5 31.3 95.1C139 243.4 111 256 80 256c-26.5 0-48-21.5-48-48c0-8.9 2.5-17.1 6.6-24.3C7.1 169.1 0 150.2 0 128C0 57.3 57.3 0 128 0s128 57.3 128 128c0 22.2-7.1 41.1-18.6 55.7c4.1 7.2 6.6 15.4 6.6 24.3c0 26.5-21.5 48-48 48zm48-64a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"/>
        </svg>
      )
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4">
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-t from-black via-[#0a000a] to-black py-20 px-6">
      {/* Animated Background Layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a000a] to-black" />
        {/* Pulsing gradient orbs */}
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-lavender/10 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-lavender-light/8 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(238,136,238,0.15),transparent_70%)] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(199,160,255,0.1),transparent_60%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          
          {/* Branding */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="OT Media Pass logo"
                  className="h-14 w-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm object-contain p-1 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(232,136,232,0.4)] group-hover:border-lavender/30 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </div>
              <div>
                <h3 className="text-lavender font-bold text-2xl group-hover:text-lavender-light transition-colors">
                  Ontario Tech Media Pass
                </h3>
                <p className="uppercase tracking-[0.4em] text-[10px] text-white/40">
                  Student Media Collective
                </p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Student-led media team capturing the stories that define Ontario Tech University — through photography,
              videography, and creative storytelling.
            </p>
            <Link
              to="/join"
              className="group inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full bg-lavender text-black font-bold text-sm tracking-wide hover:bg-lavender-light transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lavender focus:ring-offset-black shadow-[0_0_25px_rgba(232,136,232,0.35)] hover:shadow-[0_0_35px_rgba(232,136,232,0.5)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="w-4 h-4">
                <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20 8.6-31.2v-8.2c0-60.7-27.1-115.2-69.9-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-70.7-57.3-128-128-128S128 57.3 128 128c0 35.6 11.6 68.5 31.3 95.1C139 243.4 111 256 80 256c-26.5 0-48-21.5-48-48c0-8.9 2.5-17.1 6.6-24.3C7.1 169.1 0 150.2 0 128C0 57.3 57.3 0 128 0s128 57.3 128 128c0 22.2-7.1 41.1-18.6 55.7c4.1 7.2 6.6 15.4 6.6 24.3c0 26.5-21.5 48-48 48zm48-64a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"/>
              </svg>
              <span>Join the Creative Crew</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-3 h-3 group-hover:translate-x-1 transition-transform">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lavender font-bold mb-6 text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" className="w-4 h-4 text-lavender">
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1 14 14 11.3-11.3c17.9-17.9 46.8-17.9 64.7 0l89.4 89.4c17.9 17.9 17.9 46.8 0 64.7l-28.1 28.1-40.1-40.1c-5.5-5.5-14.3-5.5-19.8 0s-5.5 14.3 0 19.8l40.1 40.1L512 293.3l-40.1-40.1c-5.5-5.5-14.3-5.5-19.8 0s-5.5 14.3 0 19.8l40.1 40.1-28.1 28.1c-17.9 17.9-46.8 17.9-64.7 0l-11.3-11.3-11.3 11.3c-17.9 17.9-46.8 17.9-64.7 0l-89.4-89.4c-17.9-17.9-17.9-46.8 0-64.7l11.3-11.3-11.3-11.3c-17.9-17.9-17.9-46.8 0-64.7l15.6-15.6C296.4 55 217.4 49 167.4 99c-56.5 56.5-56.5 148 0 204.5l171.5 171.5c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-50 50-56.5 128.8-15.4 186.3l1.1 1.6L41 428l-11.3 11.3c-17.9 17.9-46.8 17.9-64.7 0l-89.4-89.4c-17.9-17.9-17.9-46.8 0-64.7l28.1-28.1 40.1 40.1c5.5 5.5 14.3 5.5 19.8 0s5.5-14.3 0-19.8L-81.4 218.7 53.3 84l40.1 40.1c5.5 5.5 14.3 5.5 19.8 0s5.5-14.3 0-19.8L53.3 64.2l11.3-11.3c17.9-17.9 46.8-17.9 64.7 0l11.3 11.3L151.9 64c17.9-17.9 46.8-17.9 64.7 0l89.4 89.4c17.9 17.9 17.9 46.8 0 64.7l-11.3 11.3 11.3 11.3c17.9 17.9 17.9 46.8 0 64.7l-15.6 15.6c55.3 60.2 134.3 66.2 184.3 16.2c56.5-56.5 56.5-148 0-204.5L60.2 244.3z"/>
              </svg>
              Quick Links
            </h3>
            <ul className="space-y-3 text-white/70 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-3 hover:text-lavender transition-all duration-300 hover:translate-x-1 group"
                  >
                    <span className="text-lavender/50 group-hover:text-lavender transition-colors">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lavender font-bold mb-6 text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512" className="w-4 h-4 text-lavender">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
              Visit & Connect
            </h3>
            <ul className="space-y-5 text-sm text-white/70">
              <li className="flex items-start space-x-4 group">
                <span className="mt-1 text-lavender group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512" className="w-5 h-5">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                  </svg>
                </span>
                <span className="leading-relaxed group-hover:text-white transition-colors">
                  Ontario Tech University<br />
                  2000 Simcoe Street North<br />
                  Oshawa, ON L1G 0C5
                </span>
              </li>
              <li className="flex items-start space-x-4 group">
                <span className="mt-1 text-lavender group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                  </svg>
                </span>
                <a
                  href="mailto:otmediapass@gmail.com"
                  className="hover:text-lavender transition-all duration-300 hover:underline"
                >
                  otmediapass@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-4 group">
                <span className="mt-1 text-lavender group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5">
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                  </svg>
                </span>
                <span className="leading-relaxed group-hover:text-white transition-colors">
                  Monday – Friday: 10:00 AM – 4:00 PM<br />
                  Weekends: By appointment
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-lavender font-bold mb-6 text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4 text-lavender">
                <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
              </svg>
              Stay in the Loop
            </h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Follow our latest shoots, workshops, and campus spotlights. Drop your email to get monthly highlights right in your inbox.
            </p>
            <form
              className="w-full bg-white/5 backdrop-blur-xl border border-lavender/30 rounded-full p-1 flex mb-6 transition-all duration-300 focus-within:border-lavender focus-within:shadow-[0_0_20px_rgba(232,136,232,0.3)]"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                name="newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 bg-transparent text-white/80 text-sm px-4 py-2 focus:outline-none placeholder:text-white/40"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="group px-5 py-2 text-xs font-bold uppercase tracking-wide bg-lavender text-black rounded-full hover:bg-lavender-light transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(232,136,232,0.25)] hover:shadow-[0_0_25px_rgba(232,136,232,0.4)] flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform">
                  <path d="M498.1 5.6c10.1 7 15.4 18.7 13.5 30.3l-64 416c-1.5 9.7-7.4 18.2-16 23s-20.2 5.4-29.8 .8l-85.2-40.2L202 505.1c-5.9 3.2-12.6 4.2-19.2 3.1s-12.8-3.8-17.8-8.9L38.7 363.7c-6.2-6.2-9.4-14.8-8.7-23.6s5.1-16.8 12.2-22l280-194c8.8-6.1 20.3-6.8 29.8-1.7s16.5 12.4 18 22.6l32 208c1.1 7.2 6.4 13.3 13.5 15.8s15.2 1.3 21.4-3.4l64-48c5.1-3.8 8.1-9.8 8.6-16.2s-2-12.9-6.4-17.7l-144-135.7L407 55.1c6.9-5.1 10.8-13.1 10.2-21.4s-5.7-15.9-14.4-19.4l-256-96c-8.7-3.3-18.3-1.9-25.4 3.6s-11.5 14-11.5 23.1l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16V76.5l202.1 75.8 23.3-17.5L48.4 35.3c-3.1-1.4-6.7-1.4-9.8 0s-5.5 3.7-7.1 6.8L1.1 64.3c-2.8 5.8-2.2 12.7 1.5 17.9s9.8 8.5 16.1 8.5l448 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L50.2 58.1l18.1-25.2L498.1 5.6z"/>
                </svg>
                Subscribe
              </button>
            </form>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 transition-all duration-300 hover:scale-110 hover:border-lavender/50 hover:bg-white/10 ${social.color} hover:shadow-[0_0_15px_rgba(232,136,232,0.3)]`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:text-left max-w-7xl mx-auto">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Ontario Tech Media Pass. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <p>
                Crafted by Ontario Tech students. Spot a missed beat?{' '}
                <Link 
                  to="/contact" 
                  className="text-lavender hover:text-lavender-light transition-all duration-300 hover:underline"
                >
                  Let us know
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-lavender/40 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-lavender-light/30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-32 left-20 w-2 h-2 rounded-full bg-lavender/50 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-20 right-10 w-2 h-2 rounded-full bg-lavender-light/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
    </footer>
  );
};

export default Footer;
