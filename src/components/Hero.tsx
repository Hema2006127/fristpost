'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY        = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const contentY   = useTransform(scrollYProgress, [0, 1], ['0px', '80px']);
  const opacity    = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  /* live countdown */
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const target = new Date('2026-12-25T18:00:00');
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days:    Math.floor(diff / 86_400_000),
        hours:   Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000)  / 60_000),
        seconds: Math.floor((diff % 60_000)      / 1_000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* Parallax Background */}
      <motion.div style={{
        position: 'absolute', inset: 0, y: bgY,
        backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        scale: 1.15,
      }} />

      {/* Multi-layer overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)',
      }} />

      {/* Thin gold horizontal line across top */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '1px', height: '80px',
        background: 'linear-gradient(to bottom, transparent, var(--primary-gold))',
      }} />

      {/* Content */}
      <motion.div
        style={{ position: 'relative', zIndex: 10, textAlign: 'center', y: contentY, opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        {/* Sub-label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 2, delay: 0.3 }}
          style={{ color: 'var(--primary-gold)', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '2rem', fontFamily: 'var(--font-english-sans)' }}
        >
          Together forever
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontFamily: 'var(--font-english)',
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1,
            marginBottom: '0.4rem',
          }}
        >
          Sarah
          <span style={{ display: 'block', fontSize: '0.25em', color: 'var(--primary-gold)', letterSpacing: '0.2em', margin: '0.5em 0' }}>— ♡ —</span>
          Ahmed
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          style={{ color: 'var(--champagne)', fontSize: '1.1rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '3.5rem' }}
        >
          December 25 · 2026 · Dubai
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem', flexWrap: 'wrap' }}
        >
          {Object.entries(time).map(([label, value]) => (
            <div key={label} style={{
              textAlign: 'center',
              minWidth: '90px',
              padding: '1.2rem 0.8rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(212,175,55,0.3)',
              borderRadius: '16px',
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-english)', color: 'var(--primary-gold)', lineHeight: 1 }}>
                {String(value).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.4rem' }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#rsvp" style={{
            padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, var(--primary-gold), var(--primary-gold-dark))',
            color: '#fff',
            borderRadius: '999px',
            fontFamily: 'var(--font-english-sans)',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            boxShadow: '0 8px 24px rgba(212,175,55,0.35)',
            display: 'inline-block',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(212,175,55,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';   e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,175,55,0.35)'; }}
          >
            RSVP Now
          </a>
          <a href="#location" style={{
            padding: '1rem 2.5rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            borderRadius: '999px',
            fontFamily: 'var(--font-english-sans)',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(8px)',
            display: 'inline-block',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
          >
            View Location
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        }}
      >
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.6))' }} />
        Scroll
      </motion.div>
    </section>
  );
}
