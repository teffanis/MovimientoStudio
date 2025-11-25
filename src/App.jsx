import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  const welcomeMessage = "¡Te damos la bienvenida a mejorar tu salud!"

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={welcomeMessage} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={welcomeMessage} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App