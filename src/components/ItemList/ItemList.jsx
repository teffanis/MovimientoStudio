import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(p => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  )
}

export default ItemList
