const products = [
  {
    id: 1,
    name: "Clase en sede",
    description: "Clase presencial de Danzas, yoga , gym localizada para todos los niveles.",
    stock: 15,  
    image:"src/assets/img/sede.jpg",
    price: 525,
    category: "clases"
  },
  
  {
     id: 2,
     name: "Curso Online de Danza",
     description: "Curso completo de danza contemporánea, danza clasica , flexiilidad online.",
     stock: 20,
     image: "src/assets/img/cursos.jpg",
     price: 149,
     category: "cursos",
  },
  {
      id: 3,
    name: "Ebook Anatomía del Movimiento",
    description:  "Guía digital sobre anatomía aplicada al movimiento.",
    stock: 150,         
    image:"src/assets/img/ebook.jpg",
    price: 525,
    category: "ebooks"
  }            

  ]

const getProducts = () => {
  return new Promise( (resolve) => {

    setTimeout(()=> {
      resolve(products)
    }, 3000)

  })
}

export default getProducts;