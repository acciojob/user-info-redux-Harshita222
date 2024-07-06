import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>Current values in store:</h2>
      <p>Name - {user.name}</p>
      <p>Email - {user.email}</p>
    </div>
  );
};

export default UserInfo;
