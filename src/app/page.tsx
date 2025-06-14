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
