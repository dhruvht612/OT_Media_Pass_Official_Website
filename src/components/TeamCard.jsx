const TeamCard = ({ member }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-950/80 via-gray-950/60 to-gray-950/80 border border-[#e8e]/30 rounded-2xl shadow-lg p-6 text-center hover:shadow-[0_0_30px_rgba(238,136,238,0.4)] hover:border-[#e8e]/80 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender/0 via-lavender/0 to-lavender/0 group-hover:from-lavender/5 group-hover:via-lavender/10 group-hover:to-lavender/5 transition-all duration-500 rounded-2xl" />
      
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-lavender/0 via-[#e8e]/0 to-lavender/0 group-hover:from-lavender/20 group-hover:via-[#e8e]/30 group-hover:to-lavender/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div className="relative z-10">
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-lavender/30 to-[#e8e]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="relative w-32 h-32 object-cover rounded-full mx-auto border-2 border-[#e8e]/50 group-hover:border-[#e8e] transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-lavender/30"
            />
          ) : (
            <div className="relative w-32 h-32 rounded-full mx-auto border-2 border-[#e8e]/50 group-hover:border-[#e8e] transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-lavender/30 bg-gradient-to-br from-lavender/20 to-[#e8e]/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-lavender">{member.name.charAt(0).toUpperCase()}</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-[#e8e] mb-1 group-hover:text-lavender transition-colors duration-300">{member.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{member.role}</p>
        <p className="text-gray-500 text-xs mb-3">{member.program}</p>
        <p className="text-gray-300 text-sm mt-3 italic leading-relaxed min-h-[3rem]">{member.bio}</p>
        
        {/* Social Links */}
        {member.socials && (
          <div className="flex justify-center space-x-4 mt-5 pt-4 border-t border-[#e8e]/10 group-hover:border-[#e8e]/30 transition-colors duration-300">
          {member.socials.linkedin && (
            <a 
              href={member.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
                <path d="M100.28 448H7.4V148.9h92.88zM53.84 108C24.13 108 0 83.87 0 54.09A54.09 54.09 0 0 1 53.84 0a54.12 54.12 0 0 1 54.45 54.09c0 29.78-24.13 53.91-54.45 53.91zM447.9 448h-92.68V302.4c0-34.7-.7-79.24-48.31-79.24-48.38 0-55.79 37.8-55.79 76.9V448h-92.68V148.9h88.96v40.8h1.28c12.4-23.5 42.68-48.31 87.84-48.31 93.84 0 111.08 61.76 111.08 142.3V448z" />
              </svg>
            </a>
          )}
          {member.socials.instagram && (
            <a 
              href={member.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-pink-400"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.6 102.7-9 132.1z" />
              </svg>
            </a>
          )}
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-gray-300"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512" className="w-6 h-6">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9.3-5.2-1.3-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9-.3 5.2 1.3 5.2 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 3 .7 6-.3 6.7-2.3.7-2-1.3-4.3-4.3-4.9-3-.7-6 .3-6.7 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-2-3-3.3-5.9-2.9zm64.6-343.7C114.9 47.9 0 173 0 313.3c0 118.5 76.8 219.1 183.2 254.5 13.4 2.3 18.3-5.6 18.3-12.3 0-6.1-.3-26.2-.3-47.7-74.5 16.4-90.2-32.3-90.2-32.3-12.2-31.1-29.5-39.4-29.5-39.4-24.1-16.4 1.8-16.1 1.8-16.1 26.6 1.8 40.6 27.1 40.6 27.1 23.7 40.6 62.1 28.9 77.3 22 2.3-17.2 9.2-28.9 16.7-35.5-59.5-6.7-122-29.5-122-131.1 0-28.9 10.1-52.5 26.6-71.1-2.6-6.7-11.6-33.7 2.6-70.2 0 0 21.8-7 71.4 27.1 20.8-5.9 43-8.9 65.2-9.2 22.1.3 44.4 3.3 65.2 9.2 49.6-34.1 71.4-27.1 71.4-27.1 14.2 36.5 5.2 63.5 2.6 70.2 16.4 18.6 26.6 42.2 26.6 71.1 0 101.9-62.8 124.3-122.6 131.1 9.5 8.2 17.7 24.2 17.7 49v72.6c0 6.7 4.9 14.6 18.6 12.3C419.2 532.4 496 431.8 496 313.3 496 173 381.1 47.9 241.3 47.5z" />
              </svg>
            </a>
          )}
          {member.socials.tiktok && (
            <a
              href={member.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-pink-500"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0h88a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </a>
          )}
          {member.socials.youtube && (
            <a
              href={member.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-red-500"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-6 h-6">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </a>
          )}
        </div>
      )}
      </div>
    </div>
  );
};

export default TeamCard;

