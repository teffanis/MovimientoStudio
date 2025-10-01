import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  const welcomeMessage = "¡Te damos la bienvenida a mejorar tu salud!"

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={welcomeMessage} />
    </div>
  )
}

export default App