import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <Link to={"/addproduct"} className="button is-primary is-hovered m-4">
        Tambah Product
      </Link>

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
                <Link
                  to={`/editproduct/${product.id}`}
                  className="button is-small is-info mr-2"
                >
                  Edit
                </Link>
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
