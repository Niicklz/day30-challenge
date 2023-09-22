import React, { useEffect, useState } from "react";
import "./reset.min.css";
import "./style.css";

export const App = () => {
  const [index, setIndex] = useState(1);
  const finalText = "We Love Programming!";
  const [text, setText] = useState("W");
  const [value, setvalue] = useState(1);
  const [intervalSpeed, setIntervalSpeed] = useState(300);
  const handleChange = (e) => {
    if (e.target.value >= 1 && e.target.value <= 10) {
      setvalue(e.target.value);
      setIntervalSpeed(300 / e.target.value);
      
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < finalText.length) {
        setText((prevText) => prevText + finalText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setText("");
        setIndex(0);
      }
    }, intervalSpeed);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <div className="container">
      <h1 style={{ transition: "1s ease" }} className="notranslate">
        {" "}
        {text}
      </h1>
      <label htmlFor="" className="counter">
        <span>Speed:</span>
        <select name="" id="" onChange={handleChange} onSelect={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </label>
    </div>
  );
};
