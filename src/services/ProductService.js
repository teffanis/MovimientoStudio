import { getProducts as fbGetProducts, getProductById as fbGetProductById, createOrder as fbCreateOrder } from './firebase'

export const getProducts = (category) => fbGetProducts(category)
export const getProductById = (id) => fbGetProductById(id)
export const createOrder = (order) => fbCreateOrder(order)

export default { getProducts, getProductById, createOrder }
