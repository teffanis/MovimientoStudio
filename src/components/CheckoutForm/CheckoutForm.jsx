import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { createOrder } from '../../services/firebase'
import './CheckoutForm.css'

const CheckoutForm = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const order = {
      buyer: { name, email, phone },
      items: cartItems,
      total: getTotalPrice(),
    }
    setLoading(true)
    try {
      const id = await createOrder(order)
      setOrderId(id)
      clearCart()
    } catch (err) {
      console.error('Error creando orden', err)
    } finally {
      setLoading(false)
    }
  }

  const [showComment, setShowComment] = useState(false)
  const [comment, setComment] = useState("")
  const [commentSent, setCommentSent] = useState(false)

  if (orderId) return (
    <div className="cf-successbox">
      <div className="cf-check">✔</div>
      <h2 className="cf-thanks">¡Gracias por tu compra!</h2>
      <p className="cf-orderid">Tu orden: <strong>{orderId}</strong></p>
      <div className="cf-userdata">
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Teléfono:</strong> {phone}</p>
      </div>
      {!showComment && !commentSent && (
        <button className="cf-btn" onClick={() => setShowComment(true)} style={{marginTop:'1rem'}}>Dejar comentario sobre la experiencia</button>
      )}
      {showComment && !commentSent && (
        <form className="cf-commentform" onSubmit={e => {e.preventDefault(); setCommentSent(true)}}>
          <textarea className="cf-commentarea" placeholder="Escribe tu comentario..." value={comment} onChange={e => setComment(e.target.value)} required />
          <button className="cf-btn" type="submit">Enviar comentario</button>
        </form>
      )}
      {commentSent && (
        <div className="cf-commentok">¡Gracias por tu comentario!</div>
      )}
      <a href="/" className="cf-gohome">Volver al inicio</a>
    </div>
  )

  return (
    <div className="cf-mainbox">
      <h2 className="cf-title">Finalizar compra</h2>
      <div className="cf-summary">
        <h3>Resumen de tu pedido</h3>
        <ul className="cf-list">
          {cartItems.map(item => (
            <li key={item.id} className="cf-item">
              <span>{item.title} x{item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="cf-total">Total: <strong>${getTotalPrice()}</strong></div>
      </div>
      <form className="cf-form" onSubmit={handleSubmit}>
        <input className="cf-input" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} required />
        <input className="cf-input" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="cf-input" placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)} required />
        <button className="cf-btn" type="submit" disabled={loading}>{loading ? 'Procesando...' : 'Confirmar compra'}</button>
      </form>
    </div>
  )
}

export default CheckoutForm
