import React from "react";

const KegiatanList = ({ kegiatanList }) => {
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
