import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [nama, setNama] = useState("");
  const [jk, setJK] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    const user = { nama, jk };
    await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/user");
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={saveUser}>
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
              onChange={(e) => setJK(e.target.value)}
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
        {nama} - {jk}
      </p>
    </div>
  );
};

export default AddUser;
