import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/firebase'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductById(id)
      .then(p => setProduct(p))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando detalle...</p>
  if (!product) return <p>Producto no encontrado</p>

  return <ItemDetail product={product} />
}

export default ItemDetailContainer
