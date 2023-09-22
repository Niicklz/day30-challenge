import React, { useEffect, useState } from "react";
import "./reset.min.css"
import "./style.css"

export const App = () => {
  const [index, setIndex] = useState(1);
  const finalText = "We Love Programming!";
  const [text, setText] = useState("W");
  const [value, setvalue] = useState(1)
  const [intervalSpeed, setIntervalSpeed] = useState(300)
  const handleChange = (e)=> {
    setvalue(e.target.value)
    setIntervalSpeed( 300 / e.target.value)
    console.log(value);

}


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < finalText.length) {
        setText((prevText) => prevText + finalText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setText("")
        setIndex(0)
      }
    }, intervalSpeed);



    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <div className="container">
      <h1 style={{transition: "1s ease"}} className="notranslate"> {text}</h1>
      <label htmlFor="" className="counter">
        <span>Speed:</span>
      <input type="number" min={1} max={10}  value={value}  onChange={handleChange} />
      </label>
      
    </div>
  );
};