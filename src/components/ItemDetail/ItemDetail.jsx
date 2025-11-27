import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [qty, setQty] = useState(1)

  // Lógica robusta para imágenes locales/remotas
  let imgSrc = product?.image
  if (imgSrc && (imgSrc.startsWith('src/assets/img/') || imgSrc.startsWith('/src/assets/img/')))
    imgSrc = new URL(imgSrc.replace(/^\//, ''), import.meta.url).href

  const handleAdd = (quantity) => {
    addItem(product, quantity)
    setQty(quantity)
    setAdded(true)
  }

  return (
    <div className="item-detail-modern">
      <div className="idm-imgbox">
  <img src={imgSrc} alt={product.title || product.name} className="idm-img" />
      </div>
      <div className="idm-info">
  <h1 className="idm-title">{product.title || product.name}</h1>
  <p className="idm-desc">{product.description}</p>
        <div className="idm-price-row">
          <span className="idm-price">${product.price}</span>
          <span className={product.stock > 0 ? 'idm-stock' : 'idm-stock out'}>
            {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
          </span>
        </div>

        {!added && product.stock > 0 && (
          <div className="idm-actions">
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          </div>
        )}

        {added && (
          <div className="idm-success">
            <div className="idm-check">✔</div>
            <div>
              <p className="idm-msg">¡{qty} producto{qty > 1 ? 's' : ''} agregado{qty > 1 ? 's' : ''} al carrito!</p>
              <a href="/cart" className="idm-gocart">Ir al carrito</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemDetail
