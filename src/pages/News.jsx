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
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-lavender p-4 rounded-full hover:bg-lavender-light hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-lavender p-4 rounded-full hover:bg-lavender-light hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-lavender p-4 rounded-full hover:bg-lavender-light hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok text-2xl"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-lavender p-4 rounded-full hover:bg-lavender-light hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
