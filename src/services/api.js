const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products?limit=12`);
  return response.json();
};

export const fetchProduct = async id => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return response.json();
};
