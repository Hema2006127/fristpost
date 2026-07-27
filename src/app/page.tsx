'use client';

import { useState } from 'react';
import IntroScreen   from '@/components/IntroScreen';
import Hero          from '@/components/Hero';
import Story         from '@/components/Story';
import Gallery       from '@/components/Gallery';
import Timeline      from '@/components/Timeline';
import Location      from '@/components/Location';
import RSVP          from '@/components/RSVP';
import WishesWall    from '@/components/WishesWall';
import FAQ           from '@/components/FAQ';
import Footer        from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* ── Cinematic intro with wooden doors ── */}
      <IntroScreen onComplete={() => setIntroComplete(true)} />

      {/* ── Main invitation (fades in after intro) ── */}
      <div style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 1.2s ease' }}>
        <Hero />
        <Story />
        <Gallery />
        <Timeline />
        <section id="location"><Location /></section>
        <section id="rsvp"><RSVP /></section>
        <WishesWall />
        <FAQ />
        <Footer />
      </div>

      {/* ── Floating WhatsApp button (always visible after intro) ── */}
      {introComplete && <WhatsAppFloat />}
    </main>
  );
}
