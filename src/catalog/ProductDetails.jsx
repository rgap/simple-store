import Button from "../components/Button.jsx";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../providers/CartProvider.jsx";
import { fetchProduct } from "../services/api.js";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProduct(productId);
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      });
    }
  };

  if (loading) {
    return (
      <div className="container">
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product-detail-grid">
        <div>
          <img src={product.image} alt={product.title} className="product-detail-image" />
        </div>

        <div className="product-detail-content">
          <h1 className="product-detail-title">{product.title}</h1>
          <p className="product-detail-price">${product.price}</p>
          <p className="product-detail-description">{product.description}</p>

          <div className="product-detail-actions">
            <Button variant="success" size="medium" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
