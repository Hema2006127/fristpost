'use client';

import { motion } from 'framer-motion';

const VENUE_NAME   = 'Armani Hotel Dubai, Burj Khalifa';
const MAPS_EMBED   = 'https://maps.google.com/maps?q=Armani+Hotel+Dubai&output=embed&z=15';
const MAPS_LINK    = 'https://maps.google.com/maps?q=Armani+Hotel+Dubai';

export default function Location() {
  return (
    <section
      style={{
        padding: 'var(--spacing-xl) var(--spacing-md)',
        backgroundColor: 'var(--black)',
        color: 'var(--white)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

        {/* ── Venue ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ color: 'var(--primary-gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.8rem' }}>
            The Venue
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: 'var(--ivory)', fontFamily: 'var(--font-english)', marginBottom: '0.6rem' }}>
            Armani Hotel Dubai
          </h2>
          <p style={{ color: 'var(--champagne)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Burj Khalifa · Downtown Dubai · UAE
          </p>

          {/* Map container — responsive height */}
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(212,175,55,0.25)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              width: '100%',
              paddingTop: 'clamp(250px, 45vw, 420px)',  /* fluid aspect-ratio without breaking on mobile */
              backgroundColor: '#1a1a1a',
            }}
          >
            <iframe
              src={MAPS_EMBED}
              title="Armani Hotel Dubai"
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                border: 0,
                filter: 'grayscale(80%) contrast(1.1) brightness(0.9)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Open in maps button */}
          <div style={{ marginTop: '1.8rem' }}>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.9rem 2.2rem',
                background: 'linear-gradient(135deg, var(--primary-gold), #9a7820)',
                color: '#fff',
                borderRadius: '999px',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-english-sans)',
                boxShadow: '0 6px 20px rgba(212,175,55,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(212,175,55,0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212,175,55,0.3)';
              }}
            >
              📍 Open in Google Maps
            </a>
          </div>
        </motion.div>

        {/* ── Dress Code ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ color: 'var(--primary-gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.8rem' }}>
            Dress Code
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: 'var(--ivory)', fontFamily: 'var(--font-english)', marginBottom: '0.6rem' }}>
            Black Tie Optional
          </h2>
          <p style={{ color: 'var(--champagne)', maxWidth: '550px', margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.6 }}>
            We invite our guests to dress in elegant formal attire to match the grandeur of the evening.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { title: '👔 Gentlemen', desc: 'Tuxedo or a formal dark suit with tie.' },
              { title: '👗 Ladies',    desc: 'Evening gown or a formal cocktail dress.' },
            ].map(card => (
              <motion.div
                key={card.title}
                whileHover={{ y: -4 }}
                style={{
                  padding: '2rem',
                  flex: '1',
                  minWidth: '240px',
                  maxWidth: '360px',
                  background: 'rgba(212,175,55,0.04)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--primary-gold)', fontFamily: 'var(--font-english)' }}>{card.title}</h3>
                <p style={{ color: 'var(--champagne)', lineHeight: 1.7, fontSize: '0.95rem' }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Color dots */}
          <div style={{ marginTop: '2.5rem' }}>
            <p style={{ color: 'var(--champagne)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              Recommended Colors
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {['#0d0d0d', '#1A2A3A', '#2C1810', '#D4AF37'].map((color, i) => (
                <div
                  key={i}
                  title={['Black','Navy Blue','Dark Brown','Gold Accents'][i]}
                  style={{
                    width: 40, height: 40,
                    borderRadius: '50%',
                    backgroundColor: color,
                    border: '2px solid rgba(255,255,255,0.15)',
                    boxShadow: `0 4px 12px ${color}66`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
