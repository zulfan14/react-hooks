import React from "react";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setProducts(data);
    // console.log(data);
  };

  console.log(fecthData());

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price} <button>Delete Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
