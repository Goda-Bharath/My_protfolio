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
import Carousel from './components/coursel';
import WhatsAppChat from './components/whatappicon';
import ScrollProgress from './components/scroll';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Carousel/>
      <About/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Coureser/>
      <Footer/>
      <ZoomIn/>
      <WhatsAppChat/>
      <ScrollProgress/>
    </BrowserRouter>
  );
}

export default App;

