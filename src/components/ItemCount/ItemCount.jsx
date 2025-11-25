import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increase = () => setCount(c => Math.min(c + 1, stock))
  const decrease = () => setCount(c => Math.max(c - 1, 1))

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={decrease} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increase} disabled={count >= stock}>+</button>
      </div>
      <button className="add-btn" onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
