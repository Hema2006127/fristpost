'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RSVP() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Mocking an API call
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <section 
      style={{
        padding: 'var(--spacing-xl) var(--spacing-md)',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '1rem' }}>RSVP</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Kindly respond by November 1st, 2026.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-panel"
              style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                backgroundColor: 'rgba(212, 175, 55, 0.05)'
              }}
            >
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-gold)', marginBottom: '1rem' }}>Thank You!</h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Your response has been beautifully recorded.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-panel"
              style={{
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                backgroundColor: 'var(--bg-primary)', // Using solid bg if in light mode for readability, or glass if dark
                boxShadow: 'var(--shadow-luxury)'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name</label>
                  <input required type="text" style={inputStyles} placeholder="Mr. & Mrs. Smith" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone Number</label>
                  <input required type="tel" style={inputStyles} placeholder="+1 234 567 890" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Attendance</label>
                  <select required defaultValue="" style={{ ...inputStyles, appearance: 'none', cursor: 'pointer' }}>
                    <option value="" disabled>Will you attend?</option>
                    <option value="yes">Joyfully Accepts</option>
                    <option value="no">Regretfully Declines</option>
                    <option value="maybe">Maybe</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Number of Guests</label>
                  <input required type="number" min="1" max="5" style={inputStyles} placeholder="1" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Food Notes / Allergies</label>
                <input type="text" style={inputStyles} placeholder="E.g., Vegetarian, No Peanuts" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>A Message for the Couple</label>
                <textarea rows={4} style={{ ...inputStyles, resize: 'vertical' }} placeholder="Leave a wish..." />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  marginTop: '1rem',
                  padding: '1.2rem',
                  backgroundColor: 'var(--primary-gold)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '1rem',
                  cursor: status === 'submitting' ? 'wait' : 'pointer',
                  transition: 'background-color 0.3s ease',
                  opacity: status === 'submitting' ? 0.7 : 1
                }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send RSVP'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const inputStyles = {
  padding: '1rem',
  backgroundColor: 'transparent',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-primary)',
  fontSize: '1rem',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.3s ease',
};
