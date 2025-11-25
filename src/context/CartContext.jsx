import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const isInCart = (id) => cartItems.some(item => item.id === id)

  const addItem = (product, quantity) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p)
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(p => p.id !== id))
  }

  const clearCart = () => setCartItems([])

  const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const getTotalPrice = () => cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, getTotalItems, getTotalPrice, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

export default CartContext
