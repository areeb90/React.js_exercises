import React, { useState } from "react";

function App() {
  // initially the state holds the inputs as none, represented by " ".. afterwared there might be changes, that changes will actually change the state
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });


function handleChange(event){
//   _______________________________________________________________________________________________________________________________________
//   APPROACH 1
  
  const newValue = event.target.value;
  const inputName = event.target.name;
  
   setContact(prevValue=>{
    if (inputName=== "fName"){
      return{
        fName : newValue,
        lName : prevValue.lName,
        email : prevValue.email
      }
    }
    else if (inputName=== "lName"){
      return{
        fName : prevValue.fName,
        lName : newValue,
        email : prevValue.email
      }
    }
    else if (inputName=== "email"){
      return{
        fName : prevValue.fName,
        lName : prevValue.lName,
        email : newValue
      }
    }
  })
}
  
  
//   _______________________________________________________________________________________________________________________________________
  
//     APPROACH 2
  
  // when the input enters that will call this func. and that activity would be an event. after that it will reflect the changes in the state.
  const {name, value} = event.target

  // prevValue>>> this stores the previous input records (i-e " " for 1st cycle).. reason for that : when the user fills other input fields, it will only keep the data of that particular field. we don't need this. we want to keep and also change all the fields i-e FNAME, LNAME, EMAIL at the same time.
  setContact(prevValue=>{
    if (name=== "fName"){
      return{
        fName : value,
        lName : prevValue.lName,
        email : prevValue.email
      }
    }
    else if (name=== "lName"){
      return{
        fName : prevValue.fName,
        lName : value,
        email : prevValue.email
      }
    }
    else if (name=== "email"){
      return{
        fName : prevValue.fName,
        lName : prevValue.lName,
        email : value
      }
    }
  })
}

  // sets "isMouseOver" to false initially.. will be changed through "setMouseOver"
  const [isMouseOver , setMouseOver] = useState(false)
  function handleMouseOver(){
    setMouseOver(true)
    
  }
  function handleMouseOut(){
    setMouseOver(false)
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange}  value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email} name="email" placeholder="Email" />

        <button 
        // if isMouseOver is True, then the background colour will be Black, ...else remains White
        style={{backgroundColor: isMouseOver ? "black" : "white"}} 
        onMouseOver={handleMouseOver}
        onMouseOut= {handleMouseOut}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
