import { newsArticles } from '../data/news';
import NewsCard from '../components/NewsCard';
import PageHero from '../components/PageHero';

const News = () => {
  return (
    <div className="pt-16 text-white bg-gradient-to-b from-black via-[#120012] to-black">
      <PageHero
        eyebrow="News & Updates"
        title="Latest from OT Media Pass"
        description="Catch up on project highlights, behind-the-scenes coverage, and milestone announcements from our growing creative community."
        actions={[
          { label: 'Submit a Story', to: '/contact' },
          { label: 'Follow on Instagram', href: 'https://instagram.com', isExternal: true, variant: 'secondary' }
        ]}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {['Project Spotlights', 'Campus Collaborations', 'Member Wins'].map((tag) => (
            <div
              key={tag}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center text-xs uppercase tracking-[0.35em] text-white/60"
            >
              {tag}
            </div>
          ))}
        </div>
      </PageHero>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1a001a] to-[#330033] border border-lavender/30 p-12 rounded-2xl text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              STAY IN THE LOOP
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Want to receive updates about our latest projects, events, and opportunities?
              Follow us on social media to stay connected!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white text-lavender rounded-full hover:bg-lavender hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-7 h-7">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.6 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white text-lavender rounded-full hover:bg-lavender hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-7 h-7">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white text-lavender rounded-full hover:bg-lavender hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-7 h-7">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0h88a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white text-lavender rounded-full hover:bg-lavender hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-7 h-7">
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white text-lavender rounded-full hover:bg-lavender hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-7 h-7">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.84 108C24.13 108 0 83.87 0 54.09A54.09 54.09 0 0 1 53.84 0a54.12 54.12 0 0 1 54.45 54.09c0 29.78-24.13 53.91-54.45 53.91zM447.9 448h-92.68V302.4c0-34.7-.7-79.24-48.31-79.24-48.38 0-55.79 37.8-55.79 76.9V448h-92.68V148.9h88.96v40.8h1.28c12.4-23.5 42.68-48.31 87.84-48.31 93.84 0 111.08 61.76 111.08 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
