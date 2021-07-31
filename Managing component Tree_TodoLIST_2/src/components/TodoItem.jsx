import React from "react";

// _____________________________________________________________________
// It changes the decoration of the text in the input array
// function TodoItem(props){
//     const [isClicked, setCrossed] = useState(false)
//     function handleClicked(){
//       setCrossed(prevValue =>
//         {return !prevValue}
//         )
//     }
//   return <li 
//   style={{textDecoration: isClicked ? "line-through" :  "none"}} 
//   onClick={handleClicked}>{props.text}</li>
// }
// ________________________________________________________
function TodoItem(props){

  // when add button is clicked, it will rendered the TodoItem and will trigger props.onCHeaked method immediately 
//   return <li 
//     onClick={props.onCheaked(props.id)}>{props.text}</li>
// }

// ________________________________________________________

// props.onCheaked will only be called when the item got actually clicked. and pass the <<id prop>> to the onCheaked function.. which will become the index of the item in ItemArray.
  return (<div 
    onClick={()=>{
      props.onCheaked(props.id)
      }}
      >
      <li>{props.text}</li>
    </div>)
};
export default TodoItem