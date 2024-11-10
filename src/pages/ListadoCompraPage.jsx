import { useEffect, useState } from 'react';
import './ListadoPage.css';

const ListadoPage = () => {
  const [products, setProducts] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    // Obtener los productos de la API al cargar la página
    fetch('https://daniel234-001-site1.ltempurl.com/api/ControllerC/allProducts')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  // Filtrar productos según el valor de búsqueda
  const productosFiltrados = products.filter((product) =>
    product.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="listado-container">
      <h2>Listado de Items</h2>
      
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="barra-busqueda"
      />
      
      <div className="product-grid">
        {productosFiltrados.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-stock">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListadoPage;
