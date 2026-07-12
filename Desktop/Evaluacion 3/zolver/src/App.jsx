import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WorkerCard from './components/WorkerCard';
import WorkerForm from './components/WorkerForm';

function App() {
  // 1. Persistencia LocalStorage: Carga inicial
  const [trabajadores, setTrabajadores] = useState(() => {
    const guardados = localStorage.getItem('zolver_trabajadores');
    return guardados ? JSON.parse(guardados) : [];
  });

  const [trabajadorEditando, setTrabajadorEditando] = useState(null);

  // 2. Integración con información externa (API) y Manejo de Errores
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
          console.error("Manejo de error HTTP:", error.message);
          alert("No se pudieron cargar los datos externos. El sistema iniciará vacío.");
        }
      };
      cargarDatosExternos();
    }
  }, []);

  // 3. Persistencia LocalStorage: Guardar cambios
  useEffect(() => {
    localStorage.setItem('zolver_trabajadores', JSON.stringify(trabajadores));
  }, [trabajadores]);

  // Operaciones CRUD
  const agregarTrabajador = (nuevo) => setTrabajadores([...trabajadores, nuevo]);
  
  const eliminarTrabajador = (id) => {
    if(window.confirm('¿Estás seguro de eliminar este registro?')) {
      setTrabajadores(trabajadores.filter(t => t.id !== id));
    }
  };

  const editarTrabajador = (trabajador) => setTrabajadorEditando(trabajador);

  const actualizarTrabajador = (trabajadorActualizado) => {
    setTrabajadores(trabajadores.map(t => t.id === trabajadorActualizado.id ? trabajadorActualizado : t));
    setTrabajadorEditando(null);
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#0b1120', color: '#e2e8f0', minHeight: '100vh', paddingBottom: '60px' }}>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <SearchBar />
        
        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '1.8rem', borderBottom: '1px solid #1e293b', paddingBottom: '15px', marginBottom: '20px', color: '#f8fafc' }}>
            Panel de Administración
          </h2>
          
          {/* Formulario Crear/Modificar */}
          <WorkerForm 
            agregarTrabajador={agregarTrabajador} 
            trabajadorEditando={trabajadorEditando}
            actualizarTrabajador={actualizarTrabajador}
            cancelarEdicion={() => setTrabajadorEditando(null)}
          />

          {/* Lista Consultar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
            {trabajadores.map(trabajador => (
              <WorkerCard 
                key={trabajador.id} 
                trabajador={trabajador} 
                eliminarTrabajador={eliminarTrabajador}
                editarTrabajador={editarTrabajador}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;