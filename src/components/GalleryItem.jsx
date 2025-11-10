import { useState } from 'react';

const GalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-anton text-xl mb-1">{item.title}</h3>
            <p className="font-quicksand text-sm text-gray-300">{item.category}</p>
            <p className="font-quicksand text-xs text-lavender-light mt-1">by {item.photographer}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full">
              <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -top-12 right-0 text-white hover:text-lavender-light transition-colors"
                >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="font-anton text-2xl text-brand-black mb-2">{item.title}</h3>
              <div className="flex items-center justify-between">
                <p className="font-quicksand text-gray-600">{item.category}</p>
                <p className="font-quicksand text-lavender font-semibold">
                  Photographed by {item.photographer}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;

