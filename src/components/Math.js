import React, { useState } from "react";
import images from "../images";
import Image from "./Image";
import randomNumber from "../function";
function Math({ teacher, subject }) {
  const [start, setStart] = useState("let's start");
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [result, setResult] = useState("?");

  const handleStart = () => {
    if (start === "let's start") {
      setNumOne(randomNumber());
      setNumTwo(randomNumber());
      setStart("Play again???");
    } else {
      setNumOne(randomNumber());
      setNumTwo(randomNumber());
      document
        .getElementsByClassName("math__result")[0]
        .classList.add("math__resultAni");
      setResult("?");
    }
  };

  const handleResult = () => {
    if (numOne && numTwo) {
      setResult(numOne + numTwo);
      document
        .getElementsByClassName("math__result")[0]
        .classList.remove("math__resultAni");
    }
  };

  return (
    <>
      <div className="contain d-flex">
        <div className="math__teacher">
          <Image src={images[teacher]} />
        </div>
        <div className="math__talk">
          <div>
            Hi, I'm your tutor{" "}
            <span className="math__teacherName">{teacher}</span>
          </div>
          <div>Let's learn {subject}</div>
        </div>
      </div>
      <div className="lesson">
        <p onClick={handleStart} className="math__start text-uppercase">
          {start}
        </p>
        <div className="math__study d-flex align-items-center">
          <div className="math__num math__num1">{numOne}</div>
          <div>+</div>
          <div className="math__num math__num2">{numTwo}</div>
          <div>=</div>
          <div onClick={handleResult} className="math__result math__resultAni">
            {result}
          </div>
        </div>
      </div>
    </>
  );
}

export default Math;
