'use client';

import { motion } from 'framer-motion';

export default function Location() {
  return (
    <section 
      style={{
        padding: 'var(--spacing-xl) var(--spacing-md)',
        backgroundColor: 'var(--black)',
        color: 'var(--white)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Location Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '1rem' }}>The Venue</h2>
          <p style={{ color: 'var(--champagne)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', marginBottom: '3rem' }}>
            Join us at the spectacular Grand Palace for a night of magic and celebration.
          </p>

          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-luxury)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            height: '400px',
            position: 'relative',
            backgroundColor: 'var(--dark-gray)'
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3e5f43348a6d4957%3A0x3f72159160ee6006!2sArmani+Hotel+Dubai!5e0!3m2!1sen!2sae!4v1705929654124!5m2!1sen!2sae"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: 'var(--primary-gold)',
              color: 'var(--white)',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Open in Google Maps
            </button>
          </div>
        </motion.div>

        {/* Dress Code Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '1rem' }}>Dress Code</h2>
          <p style={{ color: 'var(--champagne)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', marginBottom: '3rem' }}>
            Black Tie Optional. We request our guests to dress in formal attire.
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div className="glass-panel" style={{ padding: '2rem', flex: '1', minWidth: '250px', maxWidth: '400px', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-gold)' }}>For Gentlemen</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Tuxedo or a formal dark suit and tie.</p>
            </div>
            <div className="glass-panel" style={{ padding: '2rem', flex: '1', minWidth: '250px', maxWidth: '400px', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-gold)' }}>For Ladies</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Floor-length evening gown or a formal cocktail dress.</p>
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <p style={{ color: 'var(--champagne)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Recommended Colors
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#000000', border: '1px solid rgba(255,255,255,0.2)' }} title="Black" />
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1A2A3A', border: '1px solid rgba(255,255,255,0.2)' }} title="Navy Blue" />
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#D4AF37', border: '1px solid rgba(255,255,255,0.2)' }} title="Gold Accents" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
