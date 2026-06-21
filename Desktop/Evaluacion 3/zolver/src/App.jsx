import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WorkerCard from './components/WorkerCard'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Componente de Encabezado */}
      <Header />
      
      {/* Componente de Búsqueda con Estado */}
      <SearchBar />
      
      {/* Lista de Trabajadores de Ejemplo */}
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ textAlign: 'left', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Especialistas Destacados</h2>
        
        <WorkerCard 
          nombre="Juan Pérez" 
          especialidad="Gasfíter Certificado" 
          tarifa="$25.000 / visita" 
        />
        <WorkerCard 
          nombre="María González" 
          especialidad="Electricista Autorizada SEC" 
          tarifa="$30.000 / visita" 
        />
      </div>

    </div>
  )
}

export default App