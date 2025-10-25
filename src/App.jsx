import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white antialiased">
      <Header />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}
