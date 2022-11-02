import React, { useState, useEffect } from "react";

const UserLIst = () => {
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
      <h3>Ini Adalah Nama UserLIst</h3>
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>
            {user.nama} - {user.jk}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserLIst;
