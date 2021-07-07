import React, { useState } from "react";


function App() {
  // this initializes the state of the heading element.. this (name) is actually maintaining the changes in the input element.. and (setName) printed the name along with heading after button is clicked.
  const [name , setName] = useState(" ")

  // (headingText) == (name) ..after button is clicked
  const [headingText , setHeadingText ] = useState(" ")

  function handleChange(event){
    // console.log(event.target.value);


    // (event.target.value) is the (name) value with latest changes.. 
    setName(event.target.value)
  }
  

  // when button is clicked, this will set (headingText) == (name)
  function clicked(event){
    setHeadingText(name)
    
    //  As this is the form element's response.. which automatically refreshes after the form submission.. To avoid refresh this page.. use this method {preventDefault()}
    event.preventDefault()
  }


  return (
    <div className="container">
      <h1  >Hello {headingText}</h1>
    {/* the response of this form is to be noted in [clicked] method.. */}
      <form onSubmit={clicked}>
      <input
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?" />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
