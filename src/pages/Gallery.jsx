import { useState, useEffect } from 'react';
import { galleryItems } from '../data/gallery';
import GalleryItem from '../components/GalleryItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PageHero from '../components/PageHero';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Photos', 'Videos'];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter.toLowerCase());

  useEffect(() => {
    // Initialize AOS if needed
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <div className="pt-16 text-white bg-gradient-to-b from-black via-[#120012] to-black">
      <PageHero
        eyebrow="Visual Archive"
        title="Gallery Showcase"
        description="Experience Ontario Tech through our collaborative lens. Dive into curated highlights from campus events, creative shoots, and documentary projects produced by the Media Pass crew."
        actions={[
          { label: 'Request Coverage', to: '/contact' },
          { label: 'Upcoming Events', to: '/events/upcoming', variant: 'secondary' }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-widest text-white/60">
          <span className="px-4 py-2 border border-white/20 rounded-full">Photos</span>
          <span className="px-4 py-2 border border-white/20 rounded-full">Videos</span>
          <span className="px-4 py-2 border border-white/20 rounded-full">Reels</span>
          <span className="px-4 py-2 border border-white/20 rounded-full">Behind the Scenes</span>
        </div>
      </PageHero>

      {/* Filter Buttons */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-[#e8e] mb-6">Our Work</h2>
        <div className="flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`font-semibold px-5 py-2 rounded-full transition ${
                filter === category
                  ? 'bg-[#e8e] text-black'
                  : 'bg-[#e8e] text-black hover:bg-[#d4d]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Event Gallery Section */}
      <section id="event-gallery" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#e8e] mb-10">Event Gallery</h2>

          {/* Gallery Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="event-card bg-gray-950/60 border border-[#e8e]/30 rounded-2xl p-4 transition transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(232,136,232,0.3)]"
              >
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={item.images.length > 1}
                    pagination={{ clickable: true }}
                    navigation={item.images.length > 1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="mySwiper"
                  >
                    {item.images.map((imageSrc, index) => (
                      <SwiperSlide key={`${item.id}-${index}`}>
                        <img
                          src={imageSrc}
                          alt={`${item.title} ${index + 1}`}
                          className="w-full h-72 object-cover rounded-lg border-2 border-[#e8e]/50"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <h3 className="text-2xl font-semibold text-[#e8e] mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">{item.category}</p>
                <p className="text-gray-300 text-sm mb-3">Captured by {item.photographer}</p>
                {item.description && <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
