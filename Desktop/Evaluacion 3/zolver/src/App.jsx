import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WorkerCard from './components/WorkerCard';
import WorkerForm from './components/WorkerForm';

function App() {
  const [trabajadores, setTrabajadores] = useState(() => {
    const guardados = localStorage.getItem('zolver_trabajadores');
    return guardados ? JSON.parse(guardados) : [];
  });

  const [trabajadorEditando, setTrabajadorEditando] = useState(null);

  useEffect(() => {
    if (trabajadores.length === 0) {
      const cargarDatosExternos = async () => {
        try {
          const respuesta = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
          if (!respuesta.ok) throw new Error('Error al conectar con la API');
          const datos = await respuesta.json();

          const trabajadoresExternos = datos.map(usuario => ({
            id: usuario.id,
            nombre: usuario.name,
            especialidad: 'Especialista General',
            tarifa: '$30.000 / visita',
            rating: '⭐ 4.8'
          }));

          setTrabajadores(trabajadoresExternos);
        } catch (error) {
          console.error('Manejo de error HTTP:', error.message);
          alert('No se pudieron cargar los datos externos. El sistema iniciará vacío.');
        }
      };
      cargarDatosExternos();
    }
  }, [trabajadores.length]);

  useEffect(() => {
    localStorage.setItem('zolver_trabajadores', JSON.stringify(trabajadores));
  }, [trabajadores]);

  const agregarTrabajador = (nuevo) => setTrabajadores(prev => [...prev, nuevo]);

  const eliminarTrabajador = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este registro?')) {
      setTrabajadores(prev => prev.filter(t => t.id !== id));
    }
  };

  const editarTrabajador = (trabajador) => {
    setTrabajadorEditando(trabajador);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actualizarTrabajador = (trabajadorActualizado) => {
    setTrabajadores(prev => prev.map(t => t.id === trabajadorActualizado.id ? trabajadorActualizado : t));
    setTrabajadorEditando(null);
  };

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <section className="hero-panel">
          <div className="hero-content">
            <p className="eyebrow">Marketplace de confianza</p>
            <h2>Gestiona especialistas con una experiencia más clara</h2>
            <p>Convierte tu directorio en una herramienta profesional, ordenada y fácil de usar.</p>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">{trabajadores.length}</span>
              <span className="stat-label">Especialistas</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Gestión local</span>
            </div>
          </div>
        </section>

        <SearchBar />

        <section className="panel-section">
          <div className="panel-title">
            <div>
              <p className="eyebrow">Administración</p>
              <h2>Panel de administración</h2>
            </div>
            <span className="pill">{trabajadores.length} registros</span>
          </div>

          <WorkerForm
            key={trabajadorEditando ? `editar-${trabajadorEditando.id}` : 'nuevo'}
            agregarTrabajador={agregarTrabajador}
            trabajadorEditando={trabajadorEditando}
            actualizarTrabajador={actualizarTrabajador}
            cancelarEdicion={() => setTrabajadorEditando(null)}
          />

          {trabajadores.length === 0 ? (
            <div className="empty-state">
              <h3>No hay especialistas registrados</h3>
              <p>Completa el formulario para comenzar a construir tu directorio.</p>
            </div>
          ) : (
            <div className="cards-grid">
              {trabajadores.map(trabajador => (
                <WorkerCard
                  key={trabajador.id}
                  trabajador={trabajador}
                  eliminarTrabajador={eliminarTrabajador}
                  editarTrabajador={editarTrabajador}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;