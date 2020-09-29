import React from 'react';
import './App.scss';
import RouterComponent from './router';
import UserContext from './context'
import userList from './context/user.json'


function App() {
  return (
    <div className="col-12 mb-20">
      <UserContext.Provider value ={userList}>
        <RouterComponent />
      </UserContext.Provider>

    </div>
  );
}

export default App;