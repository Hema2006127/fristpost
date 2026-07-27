'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const PHONE = '1234567890'; // ← replace with real number

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  const share = () => {
    const text = encodeURIComponent(
      "🌹 You're invited to Sarah & Ahmed's Wedding!\n📅 December 25, 2026\nView invitation: " + window.location.href
    );
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 8000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.7rem',
      }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              background: '#fff',
              color: '#0d0d0d',
              padding: '0.6rem 1.2rem',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 500,
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              whiteSpace: 'nowrap',
            }}
          >
            Share on WhatsApp 💛
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={share}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' } }}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
        }}
      >
        {/* WhatsApp SVG */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.998-1.41A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.969 7.969 0 01-4.076-1.117l-.292-.173-3.01.849.852-2.932-.19-.301A7.964 7.964 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      </motion.button>
    </div>
  );
}
