import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddKegiatan = () => {
  const [nama, setNama] = useState("");
  const [jam, setJam] = useState("");
  const navigate = useNavigate();

  const saveKegiatan = async (e) => {
    e.preventDefault();
    const kegiatan = { nama, jam };
    await fetch("http://localhost:8080/kegiatan", {
      method: "POST",
      body: JSON.stringify(kegiatan),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/kegiatan");
    console.log(kegiatan);
  };

  return (
    <div>
      <form onSubmit={saveKegiatan}>
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
          <label className="label">Jam</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={jam}
              onChange={(e) => {
                setJam(e.target.value);
              }}
              placeholder="Text input"
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
        {nama} - {jam}
      </p>
    </div>
  );
};

export default AddKegiatan;
