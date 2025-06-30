import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhatIs from '@/components/WhatIs';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <h1 className="sr-only">Deltarune Online - Play Deltarune RPG Adventure</h1>
      <main>
        <Hero />
        <Features />
        <WhatIs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
