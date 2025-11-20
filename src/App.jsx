import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Overview from './pages/Events/Overview';
import Upcoming from './pages/Events/Upcoming';
import Planned from './pages/Events/Planned';
import Past from './pages/Events/Past';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import Join from './pages/Join';
import Positions from './pages/Join/Positions';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleLoad = () => {
      setIsLoading(false);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('load', handleLoad);
      if (document.readyState === 'complete') {
        handleLoad();
      }
    }

    timeoutId = setTimeout(() => setIsLoading(false), 3500);

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleLoad);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Overview />} />
            <Route path="/events/upcoming" element={<Upcoming />} />
            <Route path="/events/planned" element={<Planned />} />
            <Route path="/events/past" element={<Past />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="/join/positions" element={<Positions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
