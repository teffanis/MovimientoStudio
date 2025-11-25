import { useCart } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({ item }) => {
  const { removeItem } = useCart()

  const imgSrc = item?.image && item.image.startsWith('src/')
    ? new URL(`/${item.image}`, import.meta.url).href
    : item?.image

  return (
    <div className="cart-item">
      <img src={imgSrc} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: ${item.quantity * (item.price || 0)}</p>
        <button onClick={() => removeItem(item.id)} className="remove-btn">Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem
