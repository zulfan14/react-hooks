import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    const product = { title, price };
    await fetch("http://localhost:8080/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/product");
    console.log(product);
  };
  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Nama</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={title}
              placeholder="Text input"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Harga</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={price}
              placeholder="Text input"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </form>
      <p>
        {title} - {price}
      </p>
    </div>
  );
};

export default AddProduct;
