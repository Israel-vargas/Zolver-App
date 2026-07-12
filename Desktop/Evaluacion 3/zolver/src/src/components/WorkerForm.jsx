import { useState, useEffect } from 'react';

function WorkerForm({ agregarTrabajador, trabajadorEditando, actualizarTrabajador, cancelarEdicion }) {
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [tarifa, setTarifa] = useState('');

  // Si estamos editando, cargar los datos en el formulario
  useEffect(() => {
    if (trabajadorEditando) {
      setNombre(trabajadorEditando.nombre);
      setEspecialidad(trabajadorEditando.especialidad);
      setTarifa(trabajadorEditando.tarifa);
    }
  }, [trabajadorEditando]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    // Validaciones requeridas por la pauta
    if (!nombre.trim() || !especialidad.trim() || !tarifa.trim()) {
      alert('Error: Todos los campos son obligatorios para guardar el registro.');
      return;
    }

    const nuevoTrabajador = {
      id: trabajadorEditando ? trabajadorEditando.id : Date.now(),
      nombre,
      especialidad,
      tarifa,
      rating: trabajadorEditando ? trabajadorEditando.rating : '⭐ Nuevo'
    };

    if (trabajadorEditando) {
      actualizarTrabajador(nuevoTrabajador);
    } else {
      agregarTrabajador(nuevoTrabajador);
    }

    // Limpiar formulario
    setNombre('');
    setEspecialidad('');
    setTarifa('');
  };

  return (
    <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #334155' }}>
      <h3 style={{ color: '#f8fafc', marginTop: 0 }}>{trabajadorEditando ? 'Editar Especialista' : 'Registrar Nuevo Especialista'}</h3>
      <form onSubmit={manejarEnvio} style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white', flex: '1 1 200px' }} />
        <input type="text" placeholder="Especialidad" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white', flex: '1 1 200px' }} />
        <input type="text" placeholder="Tarifa (ej: $25.000)" value={tarifa} onChange={(e) => setTarifa(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white', flex: '1 1 200px' }} />
        
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          {trabajadorEditando ? 'Guardar Cambios' : 'Registrar'}
        </button>
        {trabajadorEditando && (
          <button type="button" onClick={cancelarEdicion} style={{ padding: '10px 20px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default WorkerForm;