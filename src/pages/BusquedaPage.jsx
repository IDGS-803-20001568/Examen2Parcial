import { useEffect, useState } from 'react';
import './BusquedaPage.css';

const BusquedaPage = () => {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]); // Estado para almacenar los productos

  useEffect(() => {
    // Obtener todos los productos al cargar el componente
    fetch('https://daniel234-001-site1.ltempurl.com/api/ControllerC/allProducts')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Guardamos los productos
        console.log('Datos de productos:', data); // Para verificar los productos en la consola
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  useEffect(() => {
    // Obtener todas las ventas al cargar el componente
    fetch('https://daniel234-001-site1.ltempurl.com/api/ControllerC/sales')
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
        console.log('Datos de ventas:', data); // Para verificar los datos en la consola
      })
      .catch((error) => {
        console.error('Error al obtener las ventas:', error);
      });
  }, []);

  // Función para obtener el nombre del producto por su id
  const getProductName = (productId) => {
    const product = products.find((product) => product.id === productId);
    return product ? product.title : 'Producto no encontrado';
  };

  // Función para formatear la fecha de la compra
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className="container">
      <h2>Compras Realizadas</h2>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            <div><strong>Producto:</strong> {getProductName(sale.productId)}</div>
            <div><strong>Cantidad:</strong> {sale.amount}</div>
            <div><strong>Fecha de Compra:</strong> {formatDate(sale.purchaseDate)}</div>
            <div><strong>Precio Unitario:</strong> ${sale.unitPrice.toFixed(2)}</div>
            <div><strong>Precio Total:</strong> ${sale.total.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusquedaPage;
