import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <img
          src="../assets/404.png" // Reemplaza esta URL con la imagen de tu elección
          alt="Page Not Found"
          className="notfound-image"
        />
        <h1 className="notfound-heading">404</h1>
        <p className="notfound-message">Oops! La página que buscas no existe.</p>
        <button className="back-home-btn" onClick={() => window.location.href = '/'}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
