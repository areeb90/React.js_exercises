import React , {useState} from "react";


function App() {


  // when my APP component loads up it uses useState. useState has 2 argument. 1st the initial value which is given as argument. 2nd is the function which updates the state to some extent.

  const  [count, setCount]= useState(0)

  // console.log(useState);
  function increase (){
    // (count ++)
    setCount(count +1)
  }

  function decrease (){
    // (count --)
    setCount(count -1)
  }

  return(
    <div className="container">
      <h2>Arbii_xD Counter</h2>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick = {decrease}>-</button>
    </div>
  );

}


export default App;
