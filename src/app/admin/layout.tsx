import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#111', borderRight: '1px solid #333', padding: '2rem' }}>
        <h2 style={{ color: 'var(--primary-gold)', marginBottom: '3rem', fontSize: '1.5rem' }}>Admin Dashboard</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="/admin" style={{ color: 'var(--white)', padding: '0.8rem', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)' }}>Overview</a>
          <a href="#" style={{ color: 'var(--text-secondary)', padding: '0.8rem', borderRadius: '8px' }}>Guests (RSVPs)</a>
          <a href="#" style={{ color: 'var(--text-secondary)', padding: '0.8rem', borderRadius: '8px' }}>Wishes Wall</a>
          <a href="#" style={{ color: 'var(--text-secondary)', padding: '0.8rem', borderRadius: '8px' }}>Gallery Manager</a>
          <a href="#" style={{ color: 'var(--text-secondary)', padding: '0.8rem', borderRadius: '8px' }}>Settings</a>
        </nav>
        <button style={{ 
          marginTop: 'auto', 
          position: 'absolute', 
          bottom: '2rem',
          padding: '0.8rem', 
          width: 'calc(250px - 4rem)', 
          border: '1px solid #333', 
          backgroundColor: 'transparent',
          color: '#fff',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
