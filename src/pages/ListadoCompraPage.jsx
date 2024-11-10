import { useEffect, useState } from 'react';
import './ListadoPage.css';

const ListadoPage = () => {
  const [products, setProducts] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado para mostrar en modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto
  const [message, setMessage] = useState(''); // Mensaje de éxito o error para el carrito

  useEffect(() => {
    fetch('https://daniel234-001-site1.ltempurl.com/api/ControllerC/allProducts')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  const handleImageClick = (productId) => {
    fetch(`https://daniel234-001-site1.ltempurl.com/api/ControllerC/items/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedProduct(data);
        setIsModalOpen(true);
      })
      .catch((error) => console.error('Error al obtener detalles del producto:', error));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setMessage('');
  };

  const handleAddToCart = () => {
    fetch('https://daniel234-001-site1.ltempurl.com/api/ControllerC/addSale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: selectedProduct.id,
        amount: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage('Producto agregado correctamente al carrito.');
        } else {
          setMessage(data.message);
        }
      })
      .catch((error) => console.error('Error al agregar al carrito:', error));
  };

  const productosFiltrados = products.filter((product) =>
    product.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="listado-container">
      <h2>Listado de Items</h2>
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
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
              onClick={() => handleImageClick(product.id)}
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-stock">Stock: {product.stock}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <p><strong>Precio:</strong> ${selectedProduct.price.toFixed(2)}</p>
            <p><strong>Stock:</strong> {selectedProduct.stock}</p>
            <div className="thumbnail-images">
              {selectedProduct.images.map((image, index) => (
                <img key={index} src={image} alt={`Imagen ${index + 1}`} className="thumbnail-image" />
              ))}
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Agregar al carrito</button>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListadoPage;
