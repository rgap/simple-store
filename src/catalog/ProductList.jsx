import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/api.js";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="catalog-header">
          <h1 className="catalog-title">Catálogo de Productos</h1>
          <p className="catalog-subtitle">Cargando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="catalog-header">
        <h1 className="catalog-title">Catálogo de Productos</h1>
        <p className="catalog-subtitle">Descubre nuestra increíble colección de productos</p>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <Link key={product.id} to={`${product.id}`} className="no-underline">
            <div className="card">
              <img src={product.image} alt={product.title} className="card-image" />
              <h3 className="product-card-title">{product.title}</h3>
              <p className="product-card-category">{product.category}</p>
              <p className="product-card-price">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
