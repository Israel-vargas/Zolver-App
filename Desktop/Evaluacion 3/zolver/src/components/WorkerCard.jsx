function WorkerCard({ trabajador, eliminarTrabajador, editarTrabajador }) {
  return (
    <article className="worker-card">
      <div>
        <div className="worker-card__header">
          <h3>{trabajador.nombre}</h3>
          <span className="rating-badge">{trabajador.rating}</span>
        </div>
        <div className="worker-card__meta">
          <p><strong>Especialidad:</strong> {trabajador.especialidad}</p>
          <p><strong>Tarifa base:</strong> {trabajador.tarifa}</p>
        </div>
      </div>

      <div className="worker-card__actions">
        <button className="edit-btn" onClick={() => editarTrabajador(trabajador)}>
          Editar
        </button>
        <button className="delete-btn" onClick={() => eliminarTrabajador(trabajador.id)}>
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default WorkerCard;