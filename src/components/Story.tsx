'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const storyEvents = [
  {
    year: '2021',
    title: 'First Meeting',
    description: 'A serendipitous encounter at a local coffee shop changed our lives forever.',
    align: 'left'
  },
  {
    year: '2022',
    title: 'The Proposal',
    description: 'Under the starry night in Paris, a promise was made to last a lifetime.',
    align: 'right'
  },
  {
    year: '2023',
    title: 'Engagement',
    description: 'Celebrating our commitment with our closest family and friends.',
    align: 'left'
  },
  {
    year: '2026',
    title: 'The Wedding',
    description: 'The beginning of our forever. We can’t wait to celebrate with you.',
    align: 'right'
  }
];

export default function Story() {
  return (
    <section 
      style={{
        padding: 'var(--spacing-xl) var(--spacing-md)',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '1rem' }}>Our Story</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Every love story is beautiful, but ours is our favorite. Here are the milestones that led us to this day.
          </p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'var(--primary-gold)',
            opacity: 0.3,
            transform: 'translateX(-50%)'
          }} />

          {storyEvents.map((event, index) => (
            <StoryItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryItem({ event, index }: { event: any, index: number }) {
  const isLeft = event.align === 'left';
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Center Dot */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '16px',
        height: '16px',
        backgroundColor: 'var(--primary-gold)',
        borderRadius: '50%',
        boxShadow: '0 0 10px var(--primary-gold)'
      }} />

      <div className="glass-panel" style={{
        width: '45%',
        padding: '2rem',
        textAlign: isLeft ? 'right' : 'left',
        position: 'relative'
      }}>
        <div style={{ 
          fontFamily: 'var(--font-english)', 
          color: 'var(--primary-gold)', 
          fontSize: '1.5rem',
          marginBottom: '0.5rem'
        }}>
          {event.year}
        </div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{event.title}</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{event.description}</p>
      </div>
    </motion.div>
  );
}
