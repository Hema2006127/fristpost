'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockWishes = [
  { id: 1, name: 'Emily & James', avatar: 'E', message: 'Wishing you both a lifetime of love, laughter and endless happiness! You make a truly magical couple. ✨', likes: 12 },
  { id: 2, name: 'Mohammed Al-Rashid', avatar: 'M', message: 'May your love story be filled with joy and blessings. So happy for you both! 🌹', likes: 8 },
  { id: 3, name: 'Sophie Chen', avatar: 'S', message: 'The most beautiful couple I know — inside and out. Congratulations! Your wedding is going to be absolutely stunning. 💛', likes: 15 },
  { id: 4, name: 'David & Layla', avatar: 'D', message: 'To many adventures, deep love, and a beautiful life together. We are so honoured to be part of your day! 🥂', likes: 10 },
];

export default function WishesWall() {
  const [wishes, setWishes] = useState(mockWishes);
  const [name, setName]     = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setWishes(prev => [{
      id: Date.now(),
      name,
      avatar: name[0].toUpperCase(),
      message,
      likes: 0,
    }, ...prev]);
    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section style={{
      padding: '8rem 2rem',
      background: 'linear-gradient(160deg, #0d0d0d 0%, #1a1200 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: 'var(--primary-gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>
            From the heart
          </p>
          <h2 style={{ color: 'var(--ivory)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'var(--font-english)', marginBottom: '1rem' }}>
            Wishes Wall
          </h2>
          <p style={{ color: 'var(--champagne)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Leave a message for the happy couple and share in their joy.
          </p>
        </motion.div>

        {/* Submit Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(212,175,55,0.04)',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '24px',
            padding: '2.5rem',
            marginBottom: '4rem',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
              required
              style={{
                padding: '1rem 1.2rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,175,55,0.25)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                fontFamily: 'inherit',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(212,175,55,0.5)', fontSize: '0.85rem', paddingLeft: '0.5rem' }}>
              ✍️ Your wish will appear on the wall after you submit
            </div>
          </div>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Write your wish for Sarah & Ahmed…"
            required
            rows={3}
            style={{
              padding: '1rem 1.2rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(212,175,55,0.25)',
              borderRadius: '12px',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              resize: 'vertical',
              fontFamily: 'inherit',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <AnimatePresence>
              {submitted && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  style={{ color: '#4caf50', fontSize: '0.9rem' }}
                >
                  ✓ Your wish has been added!
                </motion.span>
              )}
            </AnimatePresence>
            <button
              type="submit"
              style={{
                marginLeft: 'auto',
                padding: '0.9rem 2.5rem',
                background: 'linear-gradient(135deg, var(--primary-gold), var(--primary-gold-dark))',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500,
                boxShadow: '0 6px 20px rgba(212,175,55,0.3)',
              }}
            >
              Send Wish 💛
            </button>
          </div>
        </motion.form>

        {/* Masonry cards grid */}
        <div style={{
          columns: 'auto 320px',
          columnGap: '1.5rem',
        }}>
          <AnimatePresence>
            {wishes.map((w, i) => (
              <WishCard key={w.id} wish={w} delay={i * 0.08} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function WishCard({ wish, delay }: { wish: any; delay: number }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(wish.likes);

  const handleLike = () => {
    if (liked) { setLikes((l: number) => l - 1); setLiked(false); }
    else        { setLikes((l: number) => l + 1); setLiked(true);  }
  };

  const colors = ['#D4AF37','#EAC7C7','#a8d5ba','#9bb7d4'];
  const bg = colors[wish.id % colors.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay }}
      style={{
        breakInside: 'avoid',
        marginBottom: '1.5rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        padding: '1.5rem',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Avatar + Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1rem' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: `${bg}33`,
          border: `2px solid ${bg}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: bg, fontWeight: 700, fontSize: '1.1rem',
          flexShrink: 0,
        }}>
          {wish.avatar}
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>{wish.name}</div>
        </div>
      </div>

      {/* Message */}
      <p style={{ color: 'var(--champagne)', lineHeight: 1.7, fontSize: '0.95rem', margin: '0 0 1.2rem' }}>
        {wish.message}
      </p>

      {/* Like button */}
      <button
        onClick={handleLike}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          background: liked ? 'rgba(212,175,55,0.15)' : 'transparent',
          border: `1px solid ${liked ? 'var(--primary-gold)' : 'rgba(255,255,255,0.1)'}`,
          borderRadius: '999px',
          padding: '0.4rem 1rem',
          color: liked ? 'var(--primary-gold)' : 'rgba(255,255,255,0.4)',
          cursor: 'pointer',
          fontSize: '0.85rem',
          transition: 'all 0.25s ease',
        }}
      >
        <motion.span
          animate={{ scale: liked ? [1, 1.4, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          ♥
        </motion.span>
        {likes}
      </button>
    </motion.div>
  );
}
