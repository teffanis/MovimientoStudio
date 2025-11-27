// Script para agregar productos de products.json a Firestore solo si no existen (por name y category)
// Ejecutar con: node ./src/utils/mergeProducts.js

import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import fs from 'fs'
import path from 'path'

// Inicializa Firebase Admin
initializeApp({
  credential: applicationDefault(),
})
const db = getFirestore()

// Lee productos desde products.json
const productsPath = path.resolve('./src/data/products.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))

async function mergeProducts() {
  for (const prod of products) {
    // Busca si ya existe un producto con el mismo name y category
    const q = await db.collection('products')
      .where('name', '==', prod.name)
      .where('category', '==', prod.category)
      .get()
    if (!q.empty) {
      console.log(`Ya existe: ${prod.name} (${prod.category})`)
      continue
    }
    // Si no existe, lo agrega
    await db.collection('products').add(prod)
    console.log(`Agregado: ${prod.name} (${prod.category})`)
  }
  console.log('Merge finalizado.')
  process.exit(0)
}

mergeProducts().catch(e => { console.error(e); process.exit(1) })
