'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80', alt: 'Wedding ceremony' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80', alt: 'Wedding flowers' },
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80', alt: 'Wedding couple' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80', alt: 'Wedding rings' },
  { src: 'https://images.unsplash.com/photo-1583939008711-d0b2f518e38d?w=900&q=80', alt: 'Wedding dress' },
  { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=80', alt: 'Wedding reception' },
  { src: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=900&q=80', alt: 'Wedding bouquet' },
  { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&q=80', alt: 'Wedding venue' },
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
          gridAutoFlow: 'dense'
        }}>
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setSelectedImage(img.src)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                aspectRatio: index % 3 === 0 ? '1 / 1' : '3 / 4',
                boxShadow: 'var(--shadow-soft)',
                backgroundColor: '#f0e8d0',
              }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={(e) => {
                  // fallback to a reliable placeholder if image fails
                  (e.target as HTMLImageElement).src =
                    `https://picsum.photos/seed/wedding${index}/600/800`;
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                whileHover={{ scale: 1.06 }}
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
