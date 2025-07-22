import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Description from '@/components/Description';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <h1 className="sr-only">Deltarune Online - Play Deltarune RPG Adventure</h1>
      <main>
        <Hero />
        <Description />
      </main>
      <Footer />
    </div>
  );
}