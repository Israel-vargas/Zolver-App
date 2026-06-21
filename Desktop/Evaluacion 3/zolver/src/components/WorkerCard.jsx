function WorkerCard({ nombre, especialidad, tarifa }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'left', backgroundColor: '#f9f9f9' }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>👷‍♂️ {nombre}</h3>
      <p style={{ margin: '5px 0' }}><strong>Especialidad:</strong> {especialidad}</p>
      <p style={{ margin: '5px 0' }}><strong>Tarifa base:</strong> {tarifa}</p>
      <button style={{ marginTop: '10px', padding: '8px 15px', cursor: 'pointer', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px' }}>
        Ver Perfil
      </button>
    </div>
  );
}

export default WorkerCard;