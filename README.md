# MovimientoStudio - Frontend E-commerce (React + Firestore)

Este proyecto es una Single Page Application de tipo e-commerce desarrollada con React. Implementa listado y detalle de productos, carrito con Context, y conexión a Firebase Firestore para persistencia de productos y órdenes.

Características implementadas

- Listado dinámico de productos desde Firestore
- Detalle de producto con selección de cantidad (ItemCount)
- Carrito global usando Context (add, remove, clear)
- Visualización del total de unidades en `CartWidget`
- Checkout que crea una orden en Firestore y devuelve el id
- Rutas SPA con `react-router-dom`
- Manejo básico de loaders y mensajes condicionales

Estructura recomendada de componentes

- App
	- NavBar
		- CartWidget
	- ItemListContainer
		- ItemList
			- Item
	- ItemDetailContainer
		- ItemDetail
			- ItemCount
	- Cart
		- CartItem
	- CheckoutForm

Instalación

1. Instalar dependencias:

```bash
# en la raíz del proyecto
npm install
# instalar las dependencias necesarias si no están
npm install react-router-dom firebase
```

2. Configurar variables de entorno (Vite): crear un archivo `.env` en la raíz con las claves de Firebase:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

3. Ejecutar la app en modo desarrollo:

```bash
npm run dev
```

Notas y siguientes pasos

- Por simplicidad el proyecto usa imágenes de los productos desde la propiedad `image` en Firestore. Asegúrate de que tus documentos de la colección `products` tengan campos: `title`, `price`, `stock`, `category`, `image`, `description`.
- Se agregó `services/firebase.js` con funciones `getProducts`, `getProductById` y `createOrder`.
- Quedan mejoras opcionales: validaciones en el formulario de checkout, estilos y tests unitarios.

Buenas prácticas

- Respetar nombres de componentes y hooks: `useCart`, `CartProvider`, `ItemListContainer`, `ItemDetailContainer`.

Licencia

Proyecto educativo.


