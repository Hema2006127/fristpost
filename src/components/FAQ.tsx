'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'Is there parking available?',       a: 'Yes, complimentary valet parking is available for all guests at the Grand Palace entrance.' },
  { q: 'Are children welcome?',             a: 'We love little ones! Children are welcome and a dedicated kids\' corner will be set up.' },
  { q: 'Is there a prayer area?',           a: 'Yes, a designated prayer area is available on the second floor of the venue.' },
  { q: 'Can I take photos?',                a: 'Please enjoy photos during the celebration. We kindly ask guests to be seated during the ceremony.' },
  { q: 'What food will be served?',         a: 'A full fine-dining experience will be served, including vegetarian and gluten-free options.' },
  { q: 'What is the dress code?',           a: 'Black Tie Optional. We encourage formal elegant attire in our wedding color palette.' },
  { q: 'What time should I arrive?',        a: 'Doors open at 5:00 PM. We recommend arriving by 5:30 PM to find your seat.' },
  { q: 'Who can I contact for questions?',  a: 'Please WhatsApp us at +1 (555) 000-0000 and we\'ll be happy to help.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--ivory)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: 'var(--primary-gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Questions & Answers
          </p>
          <h2 style={{ color: 'var(--black)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'var(--font-english)' }}>
            Frequently Asked
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{
                border: open === i ? '1px solid var(--primary-gold)' : '1px solid rgba(0,0,0,0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease',
                background: '#fff',
                boxShadow: open === i ? '0 8px 30px rgba(212,175,55,0.12)' : '0 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              {/* Question row */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '1rem',
                }}
              >
                <span style={{
                  color: 'var(--black)',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-english-sans)',
                }}>
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    flexShrink: 0,
                    width: '28px', height: '28px',
                    borderRadius: '50%',
                    border: '1px solid var(--primary-gold)',
                    color: 'var(--primary-gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', lineHeight: 1,
                  }}
                >
                  +
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      padding: '0 2rem 1.5rem',
                      color: 'var(--dark-gray)',
                      lineHeight: 1.8,
                      fontSize: '0.95rem',
                      borderTop: '1px solid rgba(212,175,55,0.2)',
                      paddingTop: '1rem',
                    }}>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
