import { Link } from 'react-router-dom';

const PageHero = ({
  eyebrow,
  title,
  description,
  align = 'center',
  actions = [],
  backgroundImage,
  children,
  overlayOpacity = 0.5,
  className = ''
}) => {
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  };

  const containerAlignment = alignmentClasses[align] || alignmentClasses.center;
  const isCentered = align === 'center';

  const renderActions = () => {
    if (!actions.length) return null;

    return (
      <div className={`mt-10 flex flex-wrap gap-4 ${isCentered ? 'justify-center' : 'justify-start'}`}>
        {actions.map((action, index) => {
          const baseClasses =
            'group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black hover:scale-110';
          
          let variantClasses = '';
          if (action.variant === 'secondary') {
            variantClasses = 'border-2 border-white/30 bg-white/5 backdrop-blur-xl text-white hover:border-lavender hover:text-lavender hover:bg-white/10 hover:shadow-[0_0_30px_rgba(232,136,232,0.2)]';
          } else if (action.variant === 'tertiary') {
            variantClasses = 'border-2 border-lavender/50 bg-lavender/10 backdrop-blur-xl text-lavender hover:border-lavender hover:bg-lavender/20 hover:shadow-[0_0_30px_rgba(232,136,232,0.3)]';
          } else {
            variantClasses = 'bg-lavender text-black hover:bg-lavender-light shadow-[0_0_30px_rgba(232,136,232,0.4)] hover:shadow-[0_0_50px_rgba(232,136,232,0.6)]';
          }

          const getIcon = (label) => {
            const lowerLabel = label.toLowerCase();
            if (lowerLabel.includes('gallery') || lowerLabel.includes('view') || lowerLabel.includes('explore')) return 'fa-images';
            if (lowerLabel.includes('join') || lowerLabel.includes('apply')) return 'fa-user-plus';
            if (lowerLabel.includes('contact') || lowerLabel.includes('book') || lowerLabel.includes('submit')) return 'fa-calendar-check';
            if (lowerLabel.includes('about') || lowerLabel.includes('learn')) return 'fa-info-circle';
            if (lowerLabel.includes('team') || lowerLabel.includes('meet')) return 'fa-users';
            if (lowerLabel.includes('events') || lowerLabel.includes('upcoming')) return 'fa-calendar-alt';
            if (lowerLabel.includes('follow') || lowerLabel.includes('social')) return 'fa-external-link-alt';
            return 'fa-arrow-right';
          };

          const content = (
            <>
              {action.icon ? (
                <i className={`fas ${action.icon} text-lg`} />
              ) : (
                <i className={`fas ${getIcon(action.label)} text-lg`} />
              )}
              <span>{action.label}</span>
              <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
            </>
          );

          if (action.href) {
            return (
              <a
                key={index}
                href={action.href}
                target={action.isExternal ? '_blank' : undefined}
                rel={action.isExternal ? 'noopener noreferrer' : undefined}
                className={`${baseClasses} ${variantClasses}`}
              >
                {content}
              </a>
            );
          }

          return (
            <Link key={index} to={action.to || '#'} className={`${baseClasses} ${variantClasses}`}>
              {content}
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <section
      className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black py-20 px-6 md:px-10 lg:px-16 ${className}`}
    >
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
        
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                opacity: 0.45
              }}
            />
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: overlayOpacity }}
            />
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className={`flex flex-col ${containerAlignment}`}>
          {eyebrow && (
            <div className={`mb-6 ${isCentered ? 'mx-auto' : ''} animate-fade-in-down opacity-0 animation-delay-100`}>
              <span className="inline-block uppercase tracking-[0.4em] text-xs md:text-sm text-white/70 bg-black/60 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full font-medium">
                {eyebrow}
              </span>
            </div>
          )}
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 animate-fade-in-up opacity-0 animation-delay-200 ${isCentered ? 'mx-auto' : ''}`}>
            {isCentered ? (
              <span className="bg-gradient-to-r from-white via-lavender-light to-white bg-clip-text text-transparent">
                {title}
              </span>
            ) : (
              <span className="bg-gradient-to-r from-white to-lavender-light bg-clip-text text-transparent">
                {title}
              </span>
            )}
          </h1>
          
          {description && (
            <p className={`mt-4 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed animate-fade-in-up opacity-0 animation-delay-300 ${isCentered ? 'mx-auto' : ''}`}>
              {description}
            </p>
          )}
          
          <div className="animate-fade-in-up opacity-0 animation-delay-400">
            {renderActions()}
          </div>
          
          {children && (
            <div className={`mt-12 w-full animate-fade-in-up opacity-0 animation-delay-500 ${isCentered ? 'mx-auto' : ''}`}>
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-lavender/40 animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-lavender-light/30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-2 h-2 rounded-full bg-lavender/50 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-lavender-light/40 animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Bottom Border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default PageHero;

