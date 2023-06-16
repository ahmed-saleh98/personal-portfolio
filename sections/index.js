import dynamic from 'next/dynamic';

import Spikes from '@/components/Spikes';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Work = dynamic(() => import('./Work'), {
  ssr: false,
});

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Spikes />
      <About />
      <div className="container px-4 ">
        <Work />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
