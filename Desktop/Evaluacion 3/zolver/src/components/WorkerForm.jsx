import { useState } from 'react';

function WorkerForm({ agregarTrabajador, trabajadorEditando, actualizarTrabajador, cancelarEdicion }) {
  const [nombre, setNombre] = useState(trabajadorEditando?.nombre || '');
  const [especialidad, setEspecialidad] = useState(trabajadorEditando?.especialidad || '');
  const [tarifa, setTarifa] = useState(trabajadorEditando?.tarifa || '');

  const manejarEnvio = (e) => {
    e.preventDefault();

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

    setNombre('');
    setEspecialidad('');
    setTarifa('');
  };

  return (
    <div className="form-panel">
      <div className="form-head">
        <p className="eyebrow">Registro</p>
        <h3>{trabajadorEditando ? 'Editar Especialista' : 'Registrar Nuevo Especialista'}</h3>
      </div>
      <form onSubmit={manejarEnvio} className="worker-form">
        <div className="field-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input id="nombre" type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="field-group">
          <label htmlFor="especialidad">Especialidad</label>
          <input id="especialidad" type="text" placeholder="Especialidad" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} />
        </div>
        <div className="field-group">
          <label htmlFor="tarifa">Tarifa</label>
          <input id="tarifa" type="text" placeholder="Tarifa (ej: $25.000)" value={tarifa} onChange={(e) => setTarifa(e.target.value)} />
        </div>

        <div className="form-actions">
          <button type="submit" className="primary-button">
            {trabajadorEditando ? 'Guardar Cambios' : 'Registrar'}
          </button>
          {trabajadorEditando && (
            <button type="button" className="danger-button" onClick={cancelarEdicion}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default WorkerForm;