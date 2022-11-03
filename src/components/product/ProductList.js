import React from "react";
import { useState, useEffect } from "react";

const ProductList = () => {
  <h1>Ini adalah Daftar Produk</h1>;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  return (
    <div>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>NO</th>
            <th>NAMA</th>
            <th>HARGA</th>
            <th>AKSI</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button className="button is-small is-info mr-2">Edit</button>
                <button className="button is-small is-danger">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
