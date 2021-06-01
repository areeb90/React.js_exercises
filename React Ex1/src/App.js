import React from "react";
import './App.css';
import Person from './Person';
import Gender from "./Gender"

const App= () => {
  return (
    <div className="App">
      <h1>HELLO, WELCOME HOMMEEEE!! </h1>
      <Person name=" Areeb Bin Azim"/>
      <Gender genderType="Male" />
    </div>
  );
}

export default App;
