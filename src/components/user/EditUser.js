import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [nama, setNama] = useState("");
  const [jk, setJk] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById();
  }, []);
  const getUserById = async () => {
    const response = await fetch(`http://localhost:8080/users/${id}`);
    const data = await response.json();
    setNama(data.nama);
    setJk(data.jk);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    const user = { nama, jk };
    await fetch(`http://localhost:8080/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    navigate("/user");
  };
  return (
    <div>
      <form onSubmit={updateUser}>
        <div className="field">
          <label className="label">Nama</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={nama}
              placeholder="Text input"
              onChange={(e) => {
                setNama(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">JK</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={jk}
              onChange={(e) => setJk(e.target.value)}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
