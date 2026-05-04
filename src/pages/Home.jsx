import Button from "../components/Button.jsx";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a Nuestra Tienda</h1>
      <p className="home-description">¡Descubre nuestros increíbles productos y las mejores ofertas!</p>

      <div className="home-actions">
        <Link to="/catalog" className="no-underline">
          <Button variant="primary">Ver Catálogo</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
