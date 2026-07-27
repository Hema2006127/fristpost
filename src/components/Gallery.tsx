'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1583939008711-d0b2f518e38d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section 
      style={{
        padding: 'var(--spacing-xl) var(--spacing-md)',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '1rem' }}>Moments</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A glimpse into our beautiful journey.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
          gridAutoFlow: 'dense'
        }}>
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(src)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                aspectRatio: index % 3 === 0 ? '1 / 1' : '3 / 4',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <motion.img 
                src={src} 
                alt={`Gallery ${index}`} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out'
            }}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: 'var(--radius-sm)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
