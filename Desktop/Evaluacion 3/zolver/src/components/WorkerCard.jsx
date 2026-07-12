function WorkerCard({ trabajador, eliminarTrabajador, editarTrabajador }) {
  return (
    <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.4rem' }}>{trabajador.nombre}</h3>
          <span style={{ backgroundColor: '#0f172a', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', color: '#fbbf24', fontWeight: 'bold' }}>
            {trabajador.rating}
          </span>
        </div>
        <p style={{ margin: '8px 0', color: '#94a3b8' }}><strong style={{ color: '#cbd5e1' }}>Especialidad:</strong> {trabajador.especialidad}</p>
        <p style={{ margin: '8px 0', color: '#94a3b8' }}><strong style={{ color: '#cbd5e1' }}>Tarifa base:</strong> {trabajador.tarifa}</p>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => editarTrabajador(trabajador)} style={{ flex: 1, padding: '10px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          Editar
        </button>
        <button onClick={() => eliminarTrabajador(trabajador.id)} style={{ flex: 1, padding: '10px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default WorkerCard;