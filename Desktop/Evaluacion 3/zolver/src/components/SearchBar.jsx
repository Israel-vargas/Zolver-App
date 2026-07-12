import { useState } from 'react';

function SearchBar() {
  const [oficio, setOficio] = useState('');

  const manejarBusqueda = (e) => {
    e.preventDefault();
    if (oficio.trim() === '') {
      alert('Escribe una especialidad para iniciar la búsqueda.');
      return;
    }
    alert(`Iniciando búsqueda avanzada de especialistas en: ${oficio}`);
  };

  return (
    <section className="search-panel">
      <p className="eyebrow">Búsqueda rápida</p>
      <h2>¿Qué servicio necesitas hoy?</h2>

      <form onSubmit={manejarBusqueda} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Ej: Gasfíter, Electricista, Remodelación..."
          value={oficio}
          onChange={(e) => setOficio(e.target.value)}
        />
        <button type="submit" className="primary-button">
          Buscar
        </button>
      </form>

      <p className="helper-text">
        {oficio ? `Buscando: ${oficio}...` : 'Comienza a escribir para ver resultados en tiempo real'}
      </p>
    </section>
  );
}

export default SearchBar;