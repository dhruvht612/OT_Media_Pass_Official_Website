import { useState } from 'react';
import PageHero from '../components/PageHero';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend - just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-16 text-white bg-gradient-to-b from-black via-[#120012] to-black">
      <PageHero
        eyebrow="Let's Collaborate"
        title="Get in Touch with OT Media Pass"
        description="Booking an event, pitching a creative idea, or curious about joining the team? Reach out and we’ll respond within two business days."
        actions={[
          { label: 'Book a Project', to: '/events/upcoming' },
          { label: 'View FAQs', to: '/about', variant: 'secondary' }
        ]}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: 'Response Time', value: 'Within 48 hours' },
            { label: 'Office Hours', value: 'Mon – Fri · 10 AM – 4 PM' },
            { label: 'Location', value: 'Ontario Tech · North Oshawa' }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-sm">
              <div className="text-sm uppercase tracking-[0.3em] text-white/50">{item.label}</div>
              <div className="mt-2 text-lg font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-950/60 border border-lavender/30 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-lavender mb-6">
                SEND US A MESSAGE
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold text-white/80 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold text-white/80 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-semibold text-white/80 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender text-white"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-black border border-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender text-white resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lavender hover:bg-lavender-light text-black font-semibold py-4 rounded-full transition hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gray-950/60 border border-lavender/30 p-8 rounded-lg mb-6">
                <h2 className="text-3xl font-bold text-lavender mb-6">
                  CONTACT INFO
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lavender rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-black text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Email</h3>
                      <a href="mailto:otmediapass@gmail.com" className="text-white/70 hover:text-lavender transition">
                        otmediapass@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lavender rounded-full flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-black text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Location</h3>
                      <p className="text-white/70">
                        Ontario Tech University<br />
                        2000 Simcoe Street North<br />
                        Oshawa, ON L1G 0C5
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lavender rounded-full flex items-center justify-center">
                      <i className="fas fa-clock text-black text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Office Hours</h3>
                      <p className="text-white/70">
                        Monday - Friday: 10:00 AM - 4:00 PM<br />
                        Weekend: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-r from-[#1a001a] to-[#330033] border border-lavender/30 p-8 rounded-lg text-white">
                <h2 className="text-2xl font-bold mb-4">FOLLOW US</h2>
                <p className="mb-6 text-white/80">
                  Stay connected with us on social media for the latest updates, photos, and behind-the-scenes content.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-lavender p-3 rounded-full hover:bg-lavender-light hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-lavender p-3 rounded-full hover:bg-lavender-light hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-lavender p-3 rounded-full hover:bg-lavender-light hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="TikTok"
                  >
                    <i className="fab fa-tiktok text-xl"></i>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-lavender p-3 rounded-full hover:bg-lavender-light hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
