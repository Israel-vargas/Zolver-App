function WorkerCard({ nombre, especialidad, tarifa, rating }) {
  // Aquí controlamos la interactividad del botón
  const manejarClic = () => {
    alert(`Abriendo el perfil completo de ${nombre}...\nEspecialidad: ${especialidad}\n\n¡Próximamente podrás ver su portafolio y agendar aquí!`);
  };

  return (
    <div 
      style={{ 
        backgroundColor: '#1e293b', 
        border: '1px solid #334155', 
        borderRadius: '12px', 
        padding: '25px', 
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      // Efectos visuales tipo "hover"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.4rem' }}>{nombre}</h3>
          <span style={{ backgroundColor: '#0f172a', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', color: '#fbbf24', fontWeight: 'bold' }}>
            {rating}
          </span>
        </div>
        <p style={{ margin: '8px 0', color: '#94a3b8' }}><strong style={{ color: '#cbd5e1' }}>Especialidad:</strong> {especialidad}</p>
        <p style={{ margin: '8px 0', color: '#94a3b8' }}><strong style={{ color: '#cbd5e1' }}>Tarifa base:</strong> {tarifa}</p>
      </div>
      
      <button 
        onClick={manejarClic}
        style={{ 
          marginTop: '25px', 
          padding: '12px', 
          backgroundColor: '#3b82f6', // Azul profesional
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '1rem',
          width: '100%',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
      >
        Ver Perfil
      </button>
    </div>
  );
}

export default WorkerCard;