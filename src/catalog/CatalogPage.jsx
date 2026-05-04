import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails.jsx";
import ProductList from "./ProductList.jsx";

const CatalogPage = () => {
  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path=":productId" element={<ProductDetails />} />
    </Routes>
  );
};

export default CatalogPage;
