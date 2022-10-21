import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

function App() {

  const [message, setMessage] = useState("");


  useEffect(()=>{
    fetchMessage()
  },[])



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
      </header>
    </div>
  );
}

export default App;
