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

function App() {
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
