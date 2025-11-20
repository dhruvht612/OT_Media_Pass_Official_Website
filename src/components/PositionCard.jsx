import { useState } from 'react';

const PositionCard = ({ position }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-gradient-to-br from-gray-950/80 via-gray-950/60 to-gray-950/80 border border-[#e8e]/30 rounded-2xl shadow-lg p-6 hover:shadow-[0_0_30px_rgba(238,136,238,0.4)] hover:border-[#e8e]/80 transition-all duration-500">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-[#e8e] group-hover:text-lavender transition-colors">
              {position.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              position.status === 'Open' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
            }`}>
              {position.status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
              </svg>
              {position.department}
            </span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4">
                <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H352c53 0 96-43 96-96V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zM128 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm64-64c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM320 192c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zM128 384c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm256 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/>
              </svg>
              {position.type}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{position.description}</p>

      {/* Skills Tags */}
      {position.skills && (
        <div className="flex flex-wrap gap-2 mb-4">
          {position.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-lavender/10 text-lavender text-xs border border-lavender/20"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Expandable Details */}
      {position.status === 'Open' && (position.requirements || position.responsibilities) && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-lavender hover:text-lavender-light transition-colors py-2"
          >
            <span className="font-semibold text-sm">
              {isExpanded ? 'Hide Details' : 'View Details'}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
            </svg>
          </button>

          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-[#e8e]/20 space-y-4 animate-fadeIn">
              {position.requirements && (
                <div>
                  <h4 className="text-sm font-semibold text-[#e8e] mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4">
                      <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                    </svg>
                    Requirements
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-2">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {position.responsibilities && (
                <div>
                  <h4 className="text-sm font-semibold text-[#e8e] mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4">
                      <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 139.6 64 230v70.4c0 49.2-33.7 92.5-31.9 141.4c.5 16.2 5.3 32 12.3 46.5C58.1 511.1 81.9 512 96 512H352c14.1 0 37.9-.9 51.6-13.7c7-14.5 11.8-30.3 12.3-46.5c1.8-48.9-31.9-92.2-31.9-141.4V230c0-90.4-55.5-168.6-128-180.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v42.4c0 15.7 9.8 29.7 24.6 35.2l32.4 13c6.7 2.7 13 7.2 17.9 12.8c-2.1 28.5-11.2 54.3-25.7 76.4H264V192c0-17.7-14.3-32-32-32s-32 14.3-32 32V400H111.7c-14.5-22.1-23.6-47.9-25.7-76.4c4.9-5.6 11.2-10.1 17.9-12.8l32.4-13c14.8-5.5 24.6-19.5 24.6-35.2V230c0-57.4 46.6-104 104-104h8z"/>
                    </svg>
                    Responsibilities
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-2">
                    {position.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href="#member-form"
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-lavender text-black font-semibold rounded-full hover:bg-lavender-light transition-all duration-300 hover:scale-105 text-sm"
              >
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PositionCard;

