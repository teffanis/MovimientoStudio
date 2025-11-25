import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  const { addItem, isInCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (quantity) => {
    addItem(product, quantity)
    setAdded(true)
  }

  const imgSrc = product?.image && product.image.startsWith('src/')
    ? new URL(`/${product.image}`, import.meta.url).href
    : product?.image

  return (
    <div className="item-detail">
      <img src={imgSrc} alt={product.title} className="detail-image" />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>

        {!added && product.stock > 0 && (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        )}

        {product.stock === 0 && <p className="out-of-stock">Producto sin stock</p>}
        {added && <p className="added-msg">Producto agregado al carrito</p>}
      </div>
    </div>
  )
}

export default ItemDetail
