import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import ServicesScroll from './sections/ServicesScroll';
import Portfolio from './sections/Portfolio';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <WhatWeDo />
          <ServicesScroll />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
