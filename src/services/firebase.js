// Firebase v9 modular setup
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, Timestamp, query, where } from 'firebase/firestore'

const firebaseConfig = {
 apiKey: "AIzaSyAIqxufjXVmsPeWFygowpty__5LMpFbQCw",
  authDomain: "movstudio-eb656.firebaseapp.com",
  projectId: "movstudio-eb656",
  storageBucket: "movstudio-eb656.firebasestorage.app",
  messagingSenderId: "582757870278",
  appId: "1:582757870278:web:e22b94ad648e970a7ec5c7"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getProducts = async (category) => {
  try {
    const col = collection(db, 'products')
    let q = col
    if (category) {
      q = query(col, where('category', '==', category))
    }
    const snapshot = await getDocs(q)
    const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    // If Firestore returned documents, use them
    if (results.length > 0) return results
    // else fallthrough to local
  } catch (err) {
    console.warn('Firestore getProducts failed, falling back to local productos.json', err)
  }

  // Fallback: load productos.json from project root
  try {
    const res = await fetch('/productos.json')
    const data = await res.json()
    const mapped = data
      .map((p, i) => ({ id: p.id ?? String(i), ...p }))
      .filter(p => (category ? p.category === category : true))
    return mapped
  } catch (err) {
    console.error('Error loading local productos.json', err)
    return []
  }
}

export const getProductById = async (id) => {
  try {
    const ref = doc(db, 'products', id)
    const snap = await getDoc(ref)
    if (snap.exists()) return { id: snap.id, ...snap.data() }
  } catch (err) {
    console.warn('Firestore getProductById failed, falling back to local productos.json', err)
  }

  // Fallback: try to read local productos.json and find by id or index
  try {
    const res = await fetch('/productos.json')
    const data = await res.json()
    // try to find by id field
    let found = data.find(p => p.id === id)
    if (!found) {
      // if id is numeric index
      const idx = Number(id)
      if (!Number.isNaN(idx) && data[idx]) found = data[idx]
    }
    if (found) return { id: found.id ?? id, ...found }
  } catch (err) {
    console.error('Error loading local productos.json', err)
  }

  return null
}

export const createOrder = async (order) => {
  const col = collection(db, 'orders')
  const orderWithDate = { ...order, createdAt: Timestamp.now() }
  const docRef = await addDoc(col, orderWithDate)
  return docRef.id
}

export default db
