import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WorkerCard from './components/WorkerCard'

function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#0b1120', color: '#e2e8f0', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* Encabezado expandido */}
      <Header />
      
      {/* Contenedor central más ancho */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <SearchBar />
        
        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '1.8rem', borderBottom: '1px solid #1e293b', paddingBottom: '15px', margin: '0 0 30px 0', color: '#f8fafc' }}>
            Especialistas Destacados
          </h2>
          
          {/* Sistema de Cuadrícula (Grid) para modo escritorio */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
            <WorkerCard 
              nombre="Juan Pérez" 
              especialidad="Gasfíter Certificado" 
              tarifa="$25.000 / visita" 
              rating="⭐ 4.8"
            />
            <WorkerCard 
              nombre="María González" 
              especialidad="Electricista Autorizada SEC" 
              tarifa="$30.000 / visita" 
              rating="⭐ 4.9"
            />
            <WorkerCard 
              nombre="Carlos Soto" 
              especialidad="Especialista en Remodelación" 
              tarifa="$40.000 / visita" 
              rating="⭐ 5.0"
            />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App