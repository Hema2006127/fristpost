'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaRegCalendarAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer 
      style={{
        padding: 'var(--spacing-xl) var(--spacing-md)',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ fontFamily: 'var(--font-english)', fontSize: '2.5rem', color: 'var(--primary-gold)', marginBottom: '1rem' }}>
            We Can't Wait To Celebrate With You
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Your presence is the greatest gift of all.
          </p>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <button className="glass-panel" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--primary-gold)',
              borderRadius: 'var(--radius-pill)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--primary-gold)';
              e.currentTarget.style.color = 'var(--white)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            >
              <FaWhatsapp size={20} />
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Share on WhatsApp</span>
            </button>

            <button className="glass-panel" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--primary-gold)',
              borderRadius: 'var(--radius-pill)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--primary-gold)';
              e.currentTarget.style.color = 'var(--white)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            >
              <FaRegCalendarAlt size={20} />
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Add to Calendar</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <a href="#" style={{ color: 'var(--primary-gold)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--primary-gold)'}>
              <FaInstagram size={24} />
            </a>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} Sarah & Ahmed. All Rights Reserved.<br/>
            Designed with love.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
