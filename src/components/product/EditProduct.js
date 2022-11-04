import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();
    setTitle(data.title);
    setPrice(data.price);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const product = { title, price };
    await fetch(`http://localhost:8080/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/product");
  };
  return (
    <div>
      <form onSubmit={updateProduct}>
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

export default EditProduct;
