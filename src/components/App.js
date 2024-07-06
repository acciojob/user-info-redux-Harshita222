import React from 'react';
import UserForm from '../components/UserForm';
import UserInfo from '../components/UserInfo';

const App = () => {
  return (
    <div>
      <h1>Redux Application Demo</h1>
      <UserForm />
      <UserInfo />
    </div>
  );
};

export default App;
