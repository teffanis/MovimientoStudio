import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
  let imgSrc = product?.image
  if (imgSrc && (imgSrc.startsWith('src/assets/img/') || imgSrc.startsWith('/src/assets/img/')))
    imgSrc = new URL(imgSrc.replace(/^\//, ''), import.meta.url).href

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
