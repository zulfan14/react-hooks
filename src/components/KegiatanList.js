import React, { useState, useEffect } from "react";

const KegiatanList = () => {
  const [kegiatanList, setKegiatan] = useState([]);

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    const response = await fetch("http://localhost:8080/kegiatan");
    const data = await response.json();
    setKegiatan(data);
  };

  return (
    <div>
      <h1>Ini adalah Daftar Kegiatan</h1>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <th>No</th>
          <th>NAMA</th>
          <th>HARGA</th>
          <th>AKSI</th>
        </thead>
        <tbody>
          {kegiatanList.map((kegiatan, index) => (
            <tr key={kegiatan.id}>
              <td>{index + 1}</td>
              <td>{kegiatan.nama}</td>
              <td>{kegiatan.price}</td>
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

export default KegiatanList;
