import React from "react";

const ProductList = ({ products, actionProducts }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}{" "}
            <button onClick={() => actionProducts(product.id)}>
              Delete Product
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
