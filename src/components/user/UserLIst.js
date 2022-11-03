import React, { useState, useEffect } from "react";

const UserLIst = () => {
  <h1>Ini Adalah Daftar User</h1>;
  const [usersList, setUsers] = useState([]);

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>NO</th>
            <th>NAMA</th>
            <th>JENIS KELAMIN</th>
            <th>AKSI</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.nama}</td>
              <td>{user.jk}</td>
              <td>
                <button className="button is-small is-info">Edit</button>
                <button className="button is-small is-danger ml-2">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLIst;
