import './ItemListContainer.css'
import sedeImage from '../../assets/img/sede.jpg'
import cursosImage from '../../assets/img/cursos.jpg'
import ebookImage from '../../assets/img/ebook.jpg'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      
      {/* Hero Section con imagen de fondo */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="greeting-title">{greeting}</h1>
          <p className="greeting-subtitle">
            Descubre nuestras categorías y encuentra el movimiento perfecto para ti
          </p>
        </div>
      </section>

      {/* Categoría 1: Clases en Sede */}
      <section className="category-full-width" id="clases">
        <div className="category-image-full">
          <img 
            src={sedeImage} 
            alt="Clases en nuestra sede" 
            className="full-width-image"
          />
          <div className="category-overlay">
            <div className="category-info">
              <h2>Clases en Sede</h2>
              <p>Experiencias presenciales con instructores certificados en nuestro estudio</p>
              <ul className="category-features">
                <li>Yoga</li>
                <li>Danza Contemporánea</li>
                <li>Danza Clasica</li>
                <li>Expresión Corporal</li>
              </ul>
              <div className="category-actions">
                <span className="category-price">Desde $25 por clase</span>
                <button className="category-btn-large">Ver Clases Disponibles</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categoría 2: Cursos Online  */}
      <section className="category-full-width" id="cursos">
        <div className="category-image-full">
          <img 
            src={cursosImage} 
            alt="Cursos online de movimiento" 
            className="full-width-image"
          />
          <div className="category-overlay">
            <div className="category-info">
              <h2>Cursos Online</h2>
              <p>Aprende a tu ritmo con programas estructurados y seguimiento personalizado</p>
              <ul className="category-features">
                <li>Curso Completo de Danza</li>
                <li>Formación en Yoga</li>
                <li>Masterclass Avanzada</li>
                <li>Técnicas de Movimiento</li>
              </ul>
              <div className="category-actions">
                <span className="category-price">Desde $149 por curso</span>
                <button className="category-btn-large">Explorar Todos los Cursos</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categoría 3: Ebooks Digitales */}
      <section className="category-full-width" id="ebooks">
        <div className="category-image-full">
          <img 
            src={ebookImage} 
            alt="Ebooks digitales de movimiento" 
            className="full-width-image"
          />
          <div className="category-overlay">
            <div className="category-info">
              <h2>Ebooks Digitales</h2>
              <p>Recursos educativos para profundizar tu práctica y conocimiento teórico</p>
              <ul className="category-features">
                <li>Anatomía del Movimiento</li>
                <li>Rutinas en Casa</li>
                <li>Guía de Meditación</li>
                <li>Nutrición para Bailarines</li>
              </ul>
              <div className="category-actions">
                <span className="category-price">Desde $19 por ebook</span>
                <button className="category-btn-large">Descubrir Ebooks</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ItemListContainer