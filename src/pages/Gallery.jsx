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
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(238,136,238,0.1),transparent_70%)]" />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            <span className="bg-gradient-to-r from-white via-lavender-light to-white bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`group font-bold px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-lavender text-black shadow-[0_0_25px_rgba(232,136,232,0.4)] scale-105'
                    : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-lavender/50 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section id="event-gallery" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a000a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,160,255,0.1),transparent_70%)]" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-4">
            <span className="inline-block uppercase tracking-[0.4em] text-xs md:text-sm text-white/70 bg-black/60 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full font-medium mb-6">
              Visual Archive
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            <span className="bg-gradient-to-r from-white via-lavender-light to-white bg-clip-text text-transparent">
              Event Gallery
            </span>
          </h2>

          {/* Gallery Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden event-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:border-lavender/50 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,136,232,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
