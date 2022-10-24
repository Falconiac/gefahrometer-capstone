import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./model/User";
import useUsers from "./hooks/useUsers";

function App() {

  const {users} = useUsers();


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {users.map((user : User)=>{
          return <p>{user.companyName}</p>
        })}
      </header>
    </div>
  );
}

export default App;


