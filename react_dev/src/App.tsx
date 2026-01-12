// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Coureser from './Coureser';
import ZoomIn from './components/zoomin';
import PortfolioVideo from './components/video';
import WhatsAppChat from './components/whatappicon';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Coureser/>
      <Footer/>
      <ZoomIn/>
      <WhatsAppChat/>
    </BrowserRouter>
  );
}

export default App;

