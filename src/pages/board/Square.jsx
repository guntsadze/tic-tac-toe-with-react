import React from "react";
import { img } from "../../assets";
import { useState } from "react";

export default function Square({ val, chooseSquare }) {
  const [isHover, setIsHover] = useState(false);
  const [className, setClassName] = useState("play-btn");

  const handleMouseEnter = () => {
    setClassName("play-btn x");
    setIsHover(true);
    if (val == "O") {
      setClassName("play-btn o");
    }
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    setClassName("play-btn");
  };
  return (
    <button
      // className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      onClick={chooseSquare}
    >
      {val == "X" ? <img style={{ width: "40px" }} src={img.x} /> : null}
      {val == "O" ? <img style={{ width: "40px" }} src={img.o} /> : null}
      {/* {isHover ? <img style={{ width: "40px" }} src={img.xOutline} /> : null} */}
    </button>
  );
}
