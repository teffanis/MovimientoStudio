import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
  const imgSrc = product?.image && product.image.startsWith('src/')
    ? new URL(`/${product.image}`, import.meta.url).href
    : product?.image

  return (
    <div className="item-card">
      <img src={imgSrc} alt={product.title} className="item-image" />
      <div className="item-body">
        <h3 className="item-title">{product.title}</h3>
        <p className="item-price">${product.price}</p>
        <Link to={`/item/${product.id}`} className="item-link">Ver detalle</Link>
      </div>
    </div>
  )
}

export default Item
