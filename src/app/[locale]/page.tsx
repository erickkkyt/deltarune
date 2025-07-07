import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhatIs from '@/components/WhatIs';
import WhyPlay from '@/components/WhyPlay';
import HowToPlay from '@/components/HowToPlay';
import UserReviews from '@/components/UserReviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <h1 className="sr-only">Deltarune Online - Play Deltarune RPG Adventure</h1>
      <main>
        <Hero />
        <Features />
        <WhatIs />
        <WhyPlay />
        <HowToPlay />
        <UserReviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
} 