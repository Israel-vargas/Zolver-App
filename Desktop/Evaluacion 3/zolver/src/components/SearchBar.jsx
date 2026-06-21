import { useState } from 'react';

function SearchBar() {
  const [oficio, setOficio] = useState('');

  const manejarBusqueda = (e) => {
    e.preventDefault();
    if(oficio.trim() === '') return;
    alert(`Iniciando búsqueda avanzada de especialistas en: ${oficio}`);
  };

  return (
    <div style={{ 
      margin: '0 auto', 
      padding: '40px', 
      backgroundColor: '#1e293b', 
      borderRadius: '16px', 
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      maxWidth: '700px',
      border: '1px solid #334155'
    }}>
      <h2 style={{ marginTop: 0, color: '#f8fafc', fontSize: '1.6rem' }}>¿Qué servicio necesitas hoy?</h2>
      
      <form onSubmit={manejarBusqueda} style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '25px' }}>
        <input 
          type="text" 
          placeholder="Ej: Gasfíter, Electricista, Remodelación..." 
          value={oficio}
          onChange={(e) => setOficio(e.target.value)}
          style={{ 
            padding: '15px 20px', 
            width: '70%', 
            borderRadius: '8px', 
            border: '1px solid #475569',
            backgroundColor: '#0f172a',
            color: '#fff',
            fontSize: '1.05rem',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#475569'}
        />
        <button type="submit" style={{ 
          padding: '15px 30px', 
          backgroundColor: '#10b981', // Verde acción
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1.05rem',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
        >
          Buscar
        </button>
      </form>

      <p style={{ color: '#94a3b8', marginTop: '20px', minHeight: '20px', fontStyle: 'italic' }}>
        {oficio ? `Buscando: ${oficio}...` : 'Comienza a escribir para ver resultados en tiempo real'}
      </p>
    </div>
  );
}

export default SearchBar;