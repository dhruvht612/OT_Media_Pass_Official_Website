const EventCard = ({ event, isPast = false }) => {
  return (
    <div className="bg-gray-950/60 border border-lavender/30 rounded-lg overflow-hidden hover:shadow-[0_0_20px_#ee88ee] transition-all duration-300 hover:-translate-y-2">
      <div className="h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-quicksand font-semibold text-lavender bg-lavender/10 px-3 py-1 rounded-full">
            {event.date}
          </span>
          {event.featured && !isPast && (
            <span className="text-sm font-quicksand font-semibold text-brand-black bg-gray-medium px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold text-lavender mb-3">{event.title}</h3>
        {!isPast && event.time && (
          <p className="text-white/70 mb-2">
            <span className="font-semibold">Time:</span> {event.time}
          </p>
        )}
        {!isPast && event.location && (
          <p className="text-white/70 mb-3">
            <span className="font-semibold">Location:</span> {event.location}
          </p>
        )}
        <p className="text-white/80 mb-4">{event.description}</p>
        {isPast && event.recap && (
          <p className="text-lavender font-quicksand font-semibold italic border-l-4 border-lavender pl-3">
            {event.recap}
          </p>
        )}
      </div>
    </div>
  );
};

export default EventCard;

