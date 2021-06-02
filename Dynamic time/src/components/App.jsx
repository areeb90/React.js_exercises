import React, {useState} from "react";

function App() {

  // here set interval function calls updateTime func to update the state(time) at each second
  setInterval(() => {
    updateTime()
  }, 1000);



  const [timer, update] = useState(new Date().toLocaleTimeString())

  function updateTime(){
    const setTime = new Date().toLocaleTimeString()
    update(setTime)
  }

  return (
    <div className="container">
      <h1>{timer}</h1>
      <button onClick={updateTime}>Arbii_XD Zone</button>
    </div>
  );
}
export default App;
