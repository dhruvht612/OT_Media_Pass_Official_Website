const NewsCard = ({ article }) => {
  return (
    <div className="bg-gray-950/60 border border-lavender/30 rounded-lg overflow-hidden hover:shadow-[0_0_20px_#ee88ee] transition-all duration-300 hover:-translate-y-2">
      <div className="h-56 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-quicksand font-semibold text-lavender bg-lavender/10 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-sm font-quicksand text-gray-500">{article.date}</span>
        </div>
        <h3 className="text-2xl font-bold text-lavender mb-3">{article.title}</h3>
        <p className="text-white/80 mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-lavender/20">
          <p className="text-sm text-white/60">By {article.author}</p>
          <button className="text-lavender font-semibold hover:text-lavender-light transition-colors">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

