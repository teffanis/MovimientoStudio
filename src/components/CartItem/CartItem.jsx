import { useCart } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({ item }) => {
  const { removeItem } = useCart()

  let imgSrc = item?.image
  if (imgSrc && (imgSrc.startsWith('src/assets/img/') || imgSrc.startsWith('/src/assets/img/')))
    imgSrc = new URL(imgSrc.replace(/^\//, ''), import.meta.url).href

  return (
    <div className="cart-item">
      <img src={imgSrc} alt={item.title || item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h4>{item.title || item.name}</h4>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: ${item.quantity * (item.price || 0)}</p>
        <button onClick={() => removeItem(item.id)} className="remove-btn">Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem
