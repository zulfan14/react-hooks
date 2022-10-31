import React from "react";

const UserLIst = ({ usersList, deleteUsers }) => {
  return (
    <div>
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>
            {user.name} - {user.jk}
            <button onClick={() => deleteUsers(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserLIst;
