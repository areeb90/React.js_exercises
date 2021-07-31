import React, {useState} from "react";


function InputText(props){
    // initially set the input field as " ".. afterwards any changes occurs to input field will change the state to that particular input
  const [inputText , setInputText]= useState("");

  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
    
  }
  return (
    <div className="form">
        <input onChange={handleChange}  type="text" value={inputText} />


      {/*When button is clicked, onClick will come into an action and props.onAdd method will call with the inputText as argument  */}
        <button onClick={()=>
          {props.onAdd(inputText);
          setInputText(" ");
        }}        
          >
          
          <span >Add</span>
        </button>
      </div>
  )
}

export default InputText