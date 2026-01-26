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
import InitiativesSection from './components/initiatives';
import ShareButton from './components/sharebutton';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Carousel/>
      <About/>
      <Skills/>
      <Projects/>
      <InitiativesSection/>
      <Resume/>
      <Coureser/>
      <Footer/>
      <ZoomIn/>
      <ShareButton/>
      <WhatsAppChat/>
      <ScrollProgress/>
    </BrowserRouter>
  );
}

export default App;

