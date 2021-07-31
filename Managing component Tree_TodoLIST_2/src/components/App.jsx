import React, { useState } from "react";
import TodoItem from "./TodoItem"
import InputText from "./inputText"

// ___________________________________________________________

// function App() {
//   // initially set the input field as " ".. afterwards any changes occurs to input field will change the state to that particular input
//   const [inputText , setInputText]= useState("");


//   // this state initializes the empty array where the input items are added. 
//   const [item, addItem] = useState([]);

//   function handleChange(event){
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }
//   // when add button is clicked, the input (item) will push into the array after that it will be displayed  
//   function addClicked(){
//     addItem(prevValue => {
//       return [...prevValue, inputText]
//     })
//     setInputText(" ")
//   };
//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input onChange={handleChange}  type="text" value={inputText} />

//         <button onClick={addClicked}>
          
//           <span >Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {/* map function will loop through the whole items array....where todoItem" is the loop variable*/}
//           {item.map(todoItem => 

//           <TodoItem
//           text = {todoItem}          
//           />)}

//         </ul>
//       </div>
//     </div>
//   );
// }


// ________________________________________________________-




function App() {

  // this state initializes the empty array where the input items are added. 
  const [item, addItem] = useState([]);

  
// here inputText is send as props..from the inputText component
  function addItemsOnClick(inputText){
    addItem(prevValue => {
      return [...prevValue, inputText]
    })
    
  };
  function deleteItem(id){
    // console.log(id);
    addItem(prevValue =>{
      // applied filter to return those values having id's !== to the item id(item selected)
      return prevValue.filter((item,index)=>{
        return index !== id
      })
    })
    
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      {/* NEW COMPONENT INPUTTEXXT */}
      <InputText 
      // addItemsOnClick:: this function is passed as props to the InputText component
      onAdd = {addItemsOnClick}
      />
      <div>
        <ul>
          {/* map function will loop through the whole items array....where todoItem" is the loop variable*/}
          {item.map((todoItem, index) => 

          <TodoItem
          key = {index}
          text = {todoItem}
          id = {index}
          onCheaked={deleteItem}
          />)}

        </ul>
      </div>
    </div>
  );
}

export default App;
