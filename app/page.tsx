import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Approach } from '@/components/Approach';
import { Work } from '@/components/Work';
import { Vita } from '@/components/Vita';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Approach />
        <Work projects={projects} />
        <Vita />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
