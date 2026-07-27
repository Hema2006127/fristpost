'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<'idle' | 'opening' | 'card'>('idle');
  const [exiting, setExiting] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 4,
      }))
    );
    const t1 = setTimeout(() => setStage('opening'), 900);
    const t2 = setTimeout(() => setStage('card'), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleOpen = () => {
    setExiting(true);
    setTimeout(onComplete, 1100);
  };

  const flapOpen = stage === 'opening' || stage === 'card';

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'radial-gradient(ellipse at center, #1e1000 0%, #0a0700 60%, #000 100%)',
            overflow: 'hidden',
          }}
        >
          {/* Gold dust particles */}
          {particles.map(p => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 0.7, 0], y: -70 }}
              transition={{ duration: 4 + p.delay, repeat: Infinity, delay: p.delay, ease: 'linear' }}
              style={{
                position: 'absolute',
                left: `${p.x}%`, top: `${p.y}%`,
                width: p.size, height: p.size,
                borderRadius: '50%',
                background: 'var(--primary-gold)',
                boxShadow: `0 0 ${p.size * 4}px var(--primary-gold)`,
                pointerEvents: 'none',
              }}
            />
          ))}

          {/* Ambient glow */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 50% 60%, rgba(212,175,55,0.09) 0%, transparent 60%)',
          }} />

          {/* ═══════════════════════════════════
              ENVELOPE SCENE
          ═══════════════════════════════════ */}
          <motion.div
            initial={{ scale: 0.75, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'relative',
              width: 440,
              maxWidth: '88vw',
              perspective: '900px',
            }}
          >
            {/* ── Envelope wrapper ── */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1.6 / 1',
                filter: 'drop-shadow(0 30px 70px rgba(0,0,0,0.85))',
              }}
            >
              {/* ── Envelope body (parchment) ── */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 8,
                  background: 'linear-gradient(160deg, #f5e8c8 0%, #e8d49e 100%)',
                  border: '1.5px solid #c8a84b',
                  overflow: 'hidden',
                }}
              >
                {/* Left triangle fold */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0,
                  width: 0, height: 0,
                  borderStyle: 'solid',
                  borderWidth: '0 0 9999px 9999px',
                  borderColor: 'transparent transparent #d4b96a transparent',
                  opacity: 0.45,
                  pointerEvents: 'none',
                }} />
                {/* Right triangle fold */}
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: 0, height: 0,
                  borderStyle: 'solid',
                  borderWidth: '0 9999px 9999px 0',
                  borderColor: 'transparent #bfa055 transparent transparent',
                  opacity: 0.45,
                  pointerEvents: 'none',
                }} />
                {/* Bottom V fold */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '55%',
                  clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
                  background: 'linear-gradient(to bottom, #c8a848, #e0c87a)',
                  opacity: 0.5,
                  pointerEvents: 'none',
                }} />
              </div>

              {/* ── TOP FLAP (rotates on Y pivot at top edge) ── */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '55%',
                  transformOrigin: 'top center',
                  transform: flapOpen ? 'rotateX(-178deg)' : 'rotateX(0deg)',
                  transition: 'transform 1.6s cubic-bezier(0.65, 0, 0.35, 1)',
                  zIndex: 10,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Flap front face (visible when closed) */}
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                    background: 'linear-gradient(160deg, #d4af37 0%, #f5e0a0 50%, #c8a84b 100%)',
                    border: '1.5px solid #c8a84b',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {/* Wax seal — front of flap */}
                  {!flapOpen && (
                    <div style={{
                      position: 'absolute',
                      bottom: '22%', left: '50%',
                      transform: 'translateX(-50%)',
                      width: 52, height: 52,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at 38% 35%, #c0392b, #7b0000)',
                      border: '2px solid rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 3px 12px rgba(0,0,0,0.5)',
                      color: 'rgba(255,255,255,0.9)',
                      fontFamily: 'Georgia, serif',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '-0.5px',
                    }}>
                      S&amp;A
                    </div>
                  )}
                </div>

                {/* Flap back face (shown when fully opened/rotated) */}
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                    background: 'linear-gradient(160deg, #e8d49e 0%, #f5e8c8 100%)',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateX(180deg)',
                  }}
                />
              </div>

              {/* ── Invitation card slides up from inside ── */}
              <AnimatePresence>
                {stage === 'card' && (
                  <motion.div
                    className="intro-card"
                    initial={{ y: '30%', opacity: 0 }}
                    animate={{ y: '-22%', opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '8%',
                      right: '8%',
                      zIndex: 20,
                      background: 'linear-gradient(160deg, #fdfaf2 0%, #f5e8c8 100%)',
                      border: '1px solid #c8a84b',
                      borderRadius: 6,
                      padding: '2rem 2rem 1.8rem',
                      textAlign: 'center',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,168,75,0.3)',
                    }}
                  >
                    {/* Top ornament */}
                    <div className="intro-ornament" style={{ color: '#c8a84b', fontSize: '0.9rem', letterSpacing: '0.4em', marginBottom: '0.6rem' }}>✦ ✦ ✦</div>

                    <p className="intro-lead" style={{
                      fontFamily: 'var(--font-english-sans)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.35em',
                      textTransform: 'uppercase',
                      color: '#9a7c3a',
                      marginBottom: '0.8rem',
                    }}>
                      Together with their families
                    </p>

                    <div className="intro-line" style={{ height: '1px', background: 'linear-gradient(to right, transparent, #c8a84b, transparent)', margin: '0 10% 1rem' }} />

                    <h2 className="intro-title" style={{
                      fontFamily: 'var(--font-english)',
                      fontSize: 'clamp(1.5rem, 4.5vw, 2.2rem)',
                      color: '#2a1500',
                      fontWeight: 400,
                      lineHeight: 1.15,
                      margin: 0,
                    }}>
                      Sarah
                    </h2>
                    <div className="intro-heart" style={{ color: '#c8a84b', fontSize: '1.2rem', margin: '0.3rem 0' }}>♡</div>
                    <h2 className="intro-title" style={{
                      fontFamily: 'var(--font-english)',
                      fontSize: 'clamp(1.5rem, 4.5vw, 2.2rem)',
                      color: '#2a1500',
                      fontWeight: 400,
                      lineHeight: 1.15,
                      marginBottom: '1rem',
                    }}>
                      Ahmed
                    </h2>

                    <div className="intro-line" style={{ height: '1px', background: 'linear-gradient(to right, transparent, #c8a84b, transparent)', margin: '0 10% 0.9rem' }} />

                    <p className="intro-date" style={{
                      fontFamily: 'var(--font-english-sans)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#7a5c20',
                      marginBottom: '1.4rem',
                    }}>
                      December 25 · 2026 · Dubai
                    </p>

                    <button
                      className="intro-btn"
                      onClick={handleOpen}
                      style={{
                        padding: '0.7rem 2rem',
                        background: 'linear-gradient(135deg, #c8a84b 0%, #8a6820 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '999px',
                        fontSize: '0.7rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-english-sans)',
                        boxShadow: '0 6px 20px rgba(160,120,30,0.4)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 28px rgba(160,120,30,0.55)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(160,120,30,0.4)';
                      }}
                    >
                      Open Invitation
                    </button>

                    <div style={{ color: '#c8a84b', fontSize: '0.9rem', letterSpacing: '0.4em', marginTop: '1.1rem' }}>✦ ✦ ✦</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
