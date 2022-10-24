import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import user from "./model/User";
import User from "./model/User";

function App() {

  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);


  useEffect(()=>{
    fetchMessage()
  },[])

  useEffect(()=>{
    fetchUser()
  },[])

  function fetchUser(){
    axios.get("/api/user")
        .then(response => response.data)
        .then(users => setUsers(users))
        .catch((error) => console.log(error))

  }


  function fetchMessage(){
    axios.get("/api/hello")
          .then(response => response.data)
        .then(data => setMessage(data))
        .catch((error) => console.log(error))

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <p>hallo ?!?</p>

        {users.map((user : User)=>{
          return <p>{user.companyName}</p>
        })}
      </header>
    </div>
  );
}

export default App;


