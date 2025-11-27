import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  let imgSrc = product?.image
  if (imgSrc && (imgSrc.startsWith('src/assets/img/') || imgSrc.startsWith('/src/assets/img/')))
    imgSrc = new URL(imgSrc.replace(/^\//, ''), import.meta.url).href

  return (
    <article className="pc-card">
      <Link to={`/item/${product.id}`} className="pc-link">
        <div className="pc-media">
          <img src={imgSrc} alt={product.title || product.name} />
        </div>
        <div className="pc-body">
          <h3 className="pc-title">{product.title || product.name}</h3>
          <p className="pc-price">${product.price}</p>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
