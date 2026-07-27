export default function AdminDashboard() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 300 }}>Overview</h1>
        <button style={{ 
          padding: '0.8rem 1.5rem', 
          backgroundColor: 'var(--primary-gold)', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Export to Excel
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <StatCard title="Total Invited" value="150" />
        <StatCard title="Confirmed" value="85" color="#4caf50" />
        <StatCard title="Declined" value="12" color="#f44336" />
        <StatCard title="Pending" value="53" color="#ff9800" />
      </div>

      <div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '2rem' }}>Recent RSVPs</h2>
        <div style={{ backgroundColor: '#111', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #333' }}>
                <th style={{ padding: '1.5rem', color: '#888', fontWeight: 500 }}>Name</th>
                <th style={{ padding: '1.5rem', color: '#888', fontWeight: 500 }}>Phone</th>
                <th style={{ padding: '1.5rem', color: '#888', fontWeight: 500 }}>Guests</th>
                <th style={{ padding: '1.5rem', color: '#888', fontWeight: 500 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <TableRow name="John Doe" phone="+1 234 567 890" guests="2" status="Confirmed" statusColor="#4caf50" />
              <TableRow name="Jane Smith" phone="+1 987 654 321" guests="1" status="Declined" statusColor="#f44336" />
              <TableRow name="Michael Scott" phone="+1 555 123 456" guests="4" status="Pending" statusColor="#ff9800" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color = 'var(--primary-gold)' }: { title: string, value: string, color?: string }) {
  return (
    <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #333' }}>
      <h3 style={{ color: '#888', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>{title}</h3>
      <div style={{ fontSize: '3rem', color, fontWeight: 300 }}>{value}</div>
    </div>
  );
}

function TableRow({ name, phone, guests, status, statusColor }: { name: string, phone: string, guests: string, status: string, statusColor: string }) {
  return (
    <tr style={{ borderBottom: '1px solid #222' }}>
      <td style={{ padding: '1.5rem' }}>{name}</td>
      <td style={{ padding: '1.5rem', color: '#888' }}>{phone}</td>
      <td style={{ padding: '1.5rem' }}>{guests}</td>
      <td style={{ padding: '1.5rem' }}>
        <span style={{ backgroundColor: `${statusColor}22`, color: statusColor, padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem' }}>
          {status}
        </span>
      </td>
    </tr>
  );
}
