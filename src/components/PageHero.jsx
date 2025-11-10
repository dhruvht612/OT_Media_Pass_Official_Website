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

  const renderActions = () => {
    if (!actions.length) return null;

    return (
      <div className={`mt-8 flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        {actions.map((action, index) => {
          const baseClasses =
            'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';
          const variantClasses =
            action.variant === 'secondary'
              ? 'bg-white/10 text-white hover:bg-white/20 focus:ring-white/40'
              : 'bg-lavender text-black hover:bg-lavender-light focus:ring-lavender';

          const content = (
            <>
              <span>{action.label}</span>
              {action.icon && <span className="ml-2">{action.icon}</span>}
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
      className={`relative overflow-hidden bg-black py-28 px-6 md:px-10 lg:px-16 ${className}`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#120012] via-[#220022] to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(238,136,238,0.25),transparent_55%)]" />
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`flex flex-col ${containerAlignment}`}>
          {eyebrow && (
            <span className="uppercase tracking-[0.4em] text-xs md:text-sm text-white/60 mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-3xl text-base md:text-lg text-white/80 leading-relaxed">
              {description}
            </p>
          )}
          {renderActions()}
          {children && <div className="mt-10 w-full">{children}</div>}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default PageHero;

