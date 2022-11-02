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
      <ul>
        {kegiatanList.map((kegiatan) => (
          <li key={kegiatan.id}>
            {kegiatan.nama} - {kegiatan.jam}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KegiatanList;
