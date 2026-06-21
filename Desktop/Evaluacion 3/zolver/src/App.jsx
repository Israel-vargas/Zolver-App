import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Zolver - Marketplace de Oficios</h1>
      <p>Encuentra a los mejores especialistas cerca de ti.</p>
      
      <SearchBar />
      
    </div>
  )
}

export default App