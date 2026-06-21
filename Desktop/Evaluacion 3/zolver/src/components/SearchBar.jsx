import { useState } from 'react';

function SearchBar() {
  const [oficio, setOficio] = useState('');

  const manejarBusqueda = (e) => {
    e.preventDefault();
    alert(`Buscando especialistas en: ${oficio}`);
  };

  return (
    <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #444', borderRadius: '8px' }}>
      <h3>¿Qué servicio necesitas hoy?</h3>
      <form onSubmit={manejarBusqueda}>
        <input 
          type="text" 
          placeholder="Ej: Gasfíter, Electricista..." 
          value={oficio}
          onChange={(e) => setOficio(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', width: '250px', borderRadius: '4px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Buscar
        </button>
      </form>
      <p style={{ color: '#888', marginTop: '10px' }}>
        <em>Buscando: {oficio}</em>
      </p>
    </div>
  );
}

export default SearchBar;