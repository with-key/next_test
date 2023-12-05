"use client";

import { useState } from "react";

function Component() {
  const [color, setColor] = useState("red");

  const handleButtonClick = () => {
    return color === "red" ? setColor("blue") : setColor("red");
  };

  return (
    <button onClick={handleButtonClick} style={{ backgroundColor: color }}>
      {color === "red" ? "Change to Blue" : "Change to Red"}
    </button>
  );
}

export default Component;
