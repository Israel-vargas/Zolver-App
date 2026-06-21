function Header() {
  return (
    <header style={{ 
      backgroundColor: '#0f172a', 
      borderBottom: '1px solid #1e293b', 
      color: 'white', 
      padding: '20px 5%', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginBottom: '40px'
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '2.2rem', color: '#3b82f6', letterSpacing: '-1px' }}>
          Zolver<span style={{color: '#f8fafc'}}>.</span>
        </h1>
        <p style={{ margin: '5px 0 0 0', color: '#94a3b8', fontSize: '0.95rem' }}>
          El marketplace de oficios de confianza
        </p>
      </div>
      <nav>
        <button style={{ 
          backgroundColor: 'transparent', 
          color: '#e2e8f0', 
          border: '1px solid #3b82f6', 
          padding: '10px 20px', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: '600',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => { e.target.style.backgroundColor = '#3b82f6'; e.target.style.color = '#fff'; }}
        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#e2e8f0'; }}
        >
          Iniciar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Header;