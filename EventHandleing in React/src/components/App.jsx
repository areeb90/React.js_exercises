import React, { useState } from "react";

// SETTING AND USING THE STATE

function App() {
  // initially set the text as Hello, but when butoon is clicked.. will changes the state the state (changeText) that is submitted...
  const [headingText, changeText] = useState("Hello");

  // initially set the state ---mouse is not hoverng the button (false)..
  const [isMouseHovered, setMouseOver] = useState(false);

  function submitted() {
    changeText("Submitted");
  }

  // when mouse is hovered, it will change the state(true).. which changes the background of the button...
  function hovered() {
    setMouseOver(true);
  }

  // when mouse is out, it will change the state(false).. which changes the background of the button...
  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        // CONDITIONAL RENDERING
        // (isMouseHovered ?)  means if mouse is hovered then changes the background to black... else remains (white)
        style={{ background: isMouseHovered ? "black" : "white" }}
        onMouseOut={mouseOut}
        onMouseOver={hovered}
        onClick={submitted}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
