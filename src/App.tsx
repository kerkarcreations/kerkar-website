import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import ServicesScroll from './sections/ServicesScroll';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <WhatWeDo />
        <ServicesScroll />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
