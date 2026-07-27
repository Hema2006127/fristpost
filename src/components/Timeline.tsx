'use client';

import { motion } from 'framer-motion';

const events = [
  { time: '5:00 PM',  icon: '🚗', title: 'Guest Arrival',      desc: 'Guests are welcomed with champagne and canapés.'       },
  { time: '6:00 PM',  icon: '💍', title: 'Ceremony',           desc: 'The wedding ceremony begins in the Grand Hall.'         },
  { time: '7:30 PM',  icon: '🍽️', title: 'Dinner',             desc: 'A fine-dining experience curated for our guests.'      },
  { time: '9:00 PM',  icon: '🎂', title: 'Wedding Cake',       desc: 'The ceremonial cutting of the wedding cake.'            },
  { time: '9:30 PM',  icon: '💃', title: 'First Dance',        desc: 'The couple takes the floor for their first dance.'     },
  { time: '10:00 PM', icon: '🎉', title: 'Celebration',        desc: 'Music, dancing and celebration until the early hours.' },
];

export default function Timeline() {
  return (
    <section style={{
      padding: '8rem 2rem',
      background: 'linear-gradient(160deg, var(--dark-gray) 0%, #110a00 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ color: 'var(--primary-gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>
            The Big Day
          </p>
          <h2 style={{ color: 'var(--ivory)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'var(--font-english)' }}>
            Wedding Schedule
          </h2>
        </motion.div>

        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: '50%', top: '160px', bottom: '40px',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, var(--primary-gold), transparent)',
          transform: 'translateX(-50%)',
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {events.map((ev, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 60px 1fr',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                {/* Left slot */}
                <div style={{ textAlign: 'right', paddingRight: '1.5rem', ...(isLeft ? {} : { visibility: 'hidden' }) }}>
                  {isLeft && <EventCard ev={ev} />}
                </div>

                {/* Center dot */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    border: '1px solid var(--primary-gold)',
                    background: 'rgba(212,175,55,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                    backdropFilter: 'blur(8px)',
                  }}>
                    {ev.icon}
                  </div>
                  <span style={{ color: 'var(--primary-gold)', fontSize: '0.75rem', whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
                    {ev.time}
                  </span>
                </div>

                {/* Right slot */}
                <div style={{ textAlign: 'left', paddingLeft: '1.5rem', ...(!isLeft ? {} : { visibility: 'hidden' }) }}>
                  {!isLeft && <EventCard ev={ev} />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EventCard({ ev }: { ev: typeof events[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      style={{
        background: 'rgba(212,175,55,0.04)',
        border: '1px solid rgba(212,175,55,0.2)',
        borderRadius: '16px',
        padding: '1.5rem',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)')}
    >
      <h3 style={{ color: 'var(--ivory)', fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-english)' }}>
        {ev.title}
      </h3>
      <p style={{ color: 'var(--champagne)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
        {ev.desc}
      </p>
    </motion.div>
  );
}
